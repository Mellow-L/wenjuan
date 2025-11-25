import React, { useState, type FC } from "react";
import styles from '../../styles/ManageCommon.module.scss'
import { useRequest, useTitle } from "ahooks";

import { Button, Empty, message, Popconfirm, Space, Spin, Table, Tag, Typography, type PopconfirmProps } from "antd";
import useLoadSurveyListData from "../../hooks/useLoadSurveyListData";
import SurveyFinder from "../../components/SurveyFinder";
import { deleteSurveysService, updateSurveyService } from "../../services/survey";
import ListPagination from "../../components/ListPagination";
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
	const {data, loading, refresh} = useLoadSurveyListData({isDeleted:true})
  const {list = [],total = 0} = data || {}
  const [selectedIds,setSelectedIds] = useState<string[]>([])

	const {run:recoverSurveyList} = useRequest(
		async () => {
			for(const id of selectedIds){
				await updateSurveyService(id,{isDeleted: false})
			}
		},
		{
			manual: true,
			debounceWait: 500, // 在这里作防抖处理 或者用 loading 状态限制按钮禁用状态
			onSuccess(){
				message.success('恢复成功')
				refresh()
			}
		}
	)

	const {run: deleteSurveys} = useRequest(async () => await deleteSurveysService(selectedIds),{
		manual:true,
		onSuccess(){
			message.success('抹除成功');
			setSelectedIds([])
		}
	})

	const confirmErase: PopconfirmProps['onConfirm'] = (e) => {
		console.log(e);
		deleteSurveys()
	};

  const confirmRecover: PopconfirmProps['onConfirm'] = (e) => {
		console.log(e);
		recoverSurveyList()
		message.success('恢复成功');
		// alert('yes')
	};
  const TableElem = <>
    <div>
      <Space>
				{/* 恢复按钮 */}
        <Popconfirm
          title="恢复"
          description={<>确认恢复{JSON.stringify(selectedIds)}？</>}
          onConfirm={confirmRecover}
          okText="确认"
          cancelText="取消">
          <Button type="primary" disabled={selectedIds.length === 0}>恢复</Button>
        </Popconfirm>     

				{/* 抹除按钮 */}
        <Popconfirm
          title="抹除"
          description={<>是否彻底删除{JSON.stringify(selectedIds)}？</>}
          onConfirm={confirmErase}
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
				selectedRowKeys:selectedIds,
        onChange:selectedRowKeys => {
          console.log('选中的rowKeys',selectedRowKeys);
          setSelectedIds(selectedRowKeys as string[])
        }
      }} 
			pagination={false} // 关掉以使用自定义分页组件
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

			<div className={styles.footer}>
        <ListPagination total={total}/>
      </div>
		</>
	);
};

export default Trash;
