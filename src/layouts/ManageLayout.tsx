import React, { type FC } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import styles from "./ManageLayout.module.scss";
// import { Link } from "react-router-dom";
import {Button, Space} from 'antd'
import {PlusSquareOutlined,UnorderedListOutlined,StarOutlined,DeleteOutlined} from '@ant-design/icons'

const ManageLayout: FC = () => {
	const nav = useNavigate()
	const {pathname} = useLocation()
	return (
		<div className={styles.container}>
			<div className={styles.left}>
        <Space direction="vertical">
					<Button type='primary' size="large" icon={<PlusSquareOutlined />}>创建问卷</Button>
					<Button type={pathname.startsWith('/manage/list') ? 'default':'text'} icon={<UnorderedListOutlined />} onClick={()=>nav('/manage/list')}>
					我的问卷列表
					</Button>
					<Button type={pathname.startsWith('/manage/star') ? 'default':'text'} icon={<StarOutlined />} onClick={()=>nav('/manage/star')}>
					我收藏的问卷
					</Button>
					<Button type={pathname.startsWith('/manage/trash') ? 'default':'text'} icon={<DeleteOutlined />} onClick={()=>nav('/manage/trash')}>
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
