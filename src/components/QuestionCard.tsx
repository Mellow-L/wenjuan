import React, { type FC } from "react";
import styles from "./QuestionCard.module.scss";
import { Button, Divider, message, Popconfirm, Space, Tag, type PopconfirmProps } from "antd";
import {
	CopyOutlined,
	DeleteOutlined,
	FormOutlined,
	PieChartOutlined,
	StarFilled,
	StarOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";


type PropsType = {
	_id: string;
	title: string;
	isPublished: boolean;
	isStar: boolean;
	answerCount: number;
	createdAt: string;
};
const QuestionCard: FC<PropsType> = (props: PropsType) => {
	const nav = useNavigate();
	const { _id, title, isPublished, isStar, answerCount, createdAt } = props;
	
	const confirm: PopconfirmProps['onConfirm'] = (e) => {
		console.log(e);
		message.success('Click on Yes');
		// alert('yes')
	};

	const cancel: PopconfirmProps['onCancel'] = (e) => {
		console.log(e);
		message.error('Click on No');
		// alert('no')
	};

	return (
		<>
			<div className={styles.container}>
				<div className={styles.title}>
					<div className={styles.left}>
						<Link to={isPublished? `/question/stat/${_id}`:`/question/edit/${_id}` }>{title}</Link>
					</div>
					<div className={styles.right}>
						{isPublished ? (
              <Tag color="green">已发布</Tag>
						) : (
							<Tag>未发布</Tag>
						)}
						<span>答卷数：{answerCount} </span>
						<span>{createdAt}</span>
					</div>
				</div>
        <Divider size="small"></Divider>
				<Space direction="horizontal" className={styles["button-container"]}>
					<Space className={styles.left}>
						<Button
							icon={<FormOutlined />}
							onClick={() => nav(`/question/edit/${_id}`)}
						>
							Edit
						</Button>

						<Button
							icon={<PieChartOutlined />}
							onClick={() => nav(`/question/stat/${_id}`)}
							disabled={!isPublished}
						>
							Statistic
						</Button>
					</Space>
					<Space className={styles.right}>
						
						<Button icon={isStar ? <StarFilled /> : <StarOutlined />}></Button>	

						<Button icon={<CopyOutlined />} ></Button>						

						<Popconfirm
							title="删除"
							description="确认删除该问卷？"
							onConfirm={confirm}
							onCancel={cancel}
							okText="确认"
							cancelText="取消"
						>	
							<Button icon={<DeleteOutlined />}></Button>
						</Popconfirm>
					</Space>
				</Space>
			</div>
		</>
	);
};

export default QuestionCard;
