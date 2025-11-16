import React, { useState, type FC } from "react";
import styles from "./Common.module.scss";
import { useSearchParams } from "react-router-dom";
import { useTitle } from "ahooks";

import { Button, Input, message, Popconfirm, Space, Table, Tag, Typography, type PopconfirmProps } from "antd";
const { Title } = Typography;
const rawQuestionList = [
	{
		_id: "q1",
		title: "问卷1",
		isPublished: true,
		isStar: true,
		answerCount: 3,
		createdAt: "2月27日 11:11",
	},
	{
		_id: "q2",
		title: "问卷2",
		isPublished: false,
		isStar: true,
		answerCount: 2,
		createdAt: "12月27日 15:11",
	},
	{
		_id: "q3",
		title: "问卷3",
		isPublished: true,
		isStar: true,
		answerCount: 9,
		createdAt: "5月6日 10:48",
	},
	{
		_id: "q4",
		title: "问卷4",
		isPublished: false,
		isStar: true,
		answerCount: 3,
		createdAt: "1月1日 5:56",
	},
];
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
	const [questionList, setQuestionList] = useState(rawQuestionList);
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
  const TableElem = <>
    <div>
      <Space>
        <Button type="primary" disabled={selectedIds.length === 0}>恢复</Button>

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
      dataSource={questionList}
      columns={columns}
      rowKey={(question) => question._id}
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
				</div>
			</div>

			<div className={styles.content}>
				{TableElem}
			</div>

			{/* <div className={styles.footer}>
        footer
      </div> */}
		</>
	);
};

export default Trash;
