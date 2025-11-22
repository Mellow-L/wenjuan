import React, { useState, type FC } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import styles from "./ManageLayout.module.scss";
// import { Link } from "react-router-dom";
import { Button, message, Space } from "antd";
import {
	PlusSquareOutlined,
	UnorderedListOutlined,
	StarOutlined,
	DeleteOutlined,
} from "@ant-design/icons";
import {
	EDIT_PATHNAME,
	MANAGE_LIST_PATHNAME,
	MANAGE_STAR_PATHNAME,
	MANAGE_TRASH_PATHNAME,
} from "../router";
import { createSurveyService } from "../services/survey";
import { useRequest } from "ahooks";

const ManageLayout: FC = () => {
	const nav = useNavigate();
	const { pathname } = useLocation();
	// const [loading,setLoading] = useState(false)
	// async function handleCreateClick() {
	// 	setLoading(true)
	// 	const data = await createSurveyService();
	// 	const { id } = data || {};
	// 	if (id) {
	// 		nav(`${EDIT_PATHNAME}/${id}`);
	// 		message.success("创建成功");
	// 	}
	// }
	const {loading, error, run:handleCreateClick} = useRequest(createSurveyService,{
		manual: true,
		onSuccess(result){
			nav(`${EDIT_PATHNAME}/${result.id}`)
			message.success('创建成功')
		}
	})
	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<Space direction="vertical">
					<Button
						type="primary"
						size="large"
						icon={<PlusSquareOutlined />}
						onClick={handleCreateClick}
						disabled={loading}
					>
						创建问卷
					</Button>
					<Button
						type={
							pathname.startsWith(MANAGE_LIST_PATHNAME) ? "default" : "text"
						}
						icon={<UnorderedListOutlined />}
						onClick={() => nav(MANAGE_LIST_PATHNAME)}
					>
						我的问卷列表
					</Button>
					<Button
						type={
							pathname.startsWith(MANAGE_STAR_PATHNAME) ? "default" : "text"
						}
						icon={<StarOutlined />}
						onClick={() => nav(MANAGE_STAR_PATHNAME)}
					>
						我收藏的问卷
					</Button>
					<Button
						type={
							pathname.startsWith(MANAGE_TRASH_PATHNAME) ? "default" : "text"
						}
						icon={<DeleteOutlined />}
						onClick={() => nav(MANAGE_TRASH_PATHNAME)}
					>
						问卷回收站
					</Button>
				</Space>
			</div>

			<div className={styles.right}>
				<Outlet></Outlet>
			</div>
		</div>
	);
};

export default ManageLayout;
