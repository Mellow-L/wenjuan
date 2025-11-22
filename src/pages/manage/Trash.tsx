import React, { useState, type FC } from "react";
import styles from '../../styles/ManageCommon.module.scss'
import { useTitle } from "ahooks";

import { Button, Empty, message, Popconfirm, Space, Spin, Table, Tag, Typography, type PopconfirmProps } from "antd";
import useLoadSurveyListData from "../../hooks/useLoadSurveyListData";
import SurveyFinder from "../../components/SurveyFinder";
const { Title } = Typography;

const columns = [
	{
		title: "标题",
		dataIndex: "title",
	},
	{
		title: "是否已发布",
		dataIndex: "isPublished",
		render(isPublished: boolean) {
			return isPublished ? <Tag color="green">已发布</Tag> : <Tag>未发布</Tag>;
		},
	},
	{
		title: "答卷数",
		dataIndex: "answerCount",
	},
	{
		title: "创建时间",
		dataIndex: "createdAt",
	},
];
const Trash: FC = () => {
	useTitle("问卷回收站");
	const {data, loading} = useLoadSurveyListData({isDeleted:true})
  const {list = [],total = 0} = data || {}
  const [selectedIds,setSelectedIds] = useState<string[]>([])

	const confirmErase: PopconfirmProps['onConfirm'] = (e) => {
		console.log(e);
		message.success('抹除成功');
		// alert('yes')
	};

	const cancelErase: PopconfirmProps['onCancel'] = (e) => {
		console.log(e);
		message.error('抹除失败');
		// alert('no')
	};

  const confirmRecover: PopconfirmProps['onConfirm'] = (e) => {
		console.log(e);
		message.success('恢复成功');
		// alert('yes')
	};

	const cancelRecover: PopconfirmProps['onCancel'] = (e) => {
		console.log(e);
		message.error('恢复失败');
		// alert('no')
	};
  const TableElem = <>
    <div>
      <Space>
        <Popconfirm
          title="抹除"
          description={<>确认恢复{selectedIds}？</>}
          onConfirm={confirmRecover}
          onCancel={cancelRecover}
          okText="确认"
          cancelText="取消">
          <Button type="primary" disabled={selectedIds.length === 0}>恢复</Button>
        </Popconfirm>     

        <Popconfirm
          title="抹除"
          description={<>是否彻底删除{selectedIds}？</>}
          onConfirm={confirmErase}
          onCancel={cancelErase}
          okText="确认"
          cancelText="取消">
          <Button danger disabled={selectedIds.length === 0}>彻底移除</Button> 
        </Popconfirm>
      </Space>     
    </div>

    <Table
      dataSource={list}
      columns={columns}
      rowKey={(survey) => survey._id} // 传入 dataSource 的单个元素
      rowSelection={{
        type:'checkbox',
        onChange:selectedRowKeys => {
          console.log('选中的rowKeys',selectedRowKeys);
          setSelectedIds(selectedRowKeys as string[])
        }
      }} 
    />
  </>
	return (
		<>
			<div className={styles.header}>

				<div className={styles.left}>
					<Title level={3}>问卷回收站</Title>
				</div>

				<div className={styles.right}>		
          {JSON.stringify(selectedIds)}
					<SurveyFinder/>
				</div>
			</div>

			<div className={styles.content}>
				{/* 加载状态 */}
				{loading && (
					<Spin tip="Loading" size="large">
						<div style={{ minHeight: 100 }} />
					</Spin>
				)}
				
				{/* 非空 问卷数据 : 空数据 */}
				{
         !loading && 
          ( 
            list.length > 0 ? 
            TableElem : (<Empty description="暂无数据" />)
          )
        }
			</div>

			{/* <div className={styles.footer}>
        footer
      </div> */}
		</>
	);
};

export default Trash;
