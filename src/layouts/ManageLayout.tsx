import React, { type FC } from "react";
import { Outlet } from "react-router-dom";
import styles from "./ManageLayout.module.scss";
import { Link } from "react-router-dom";
const ManageLayout: FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.left}>
        <p>ManageLayout Left</p>
        
        <button>创建问卷</button>
				<br />
				<Link to="/manage/list">我的问卷列表</Link>
        <br />
        <Link to="/manage/star">我收藏的问卷</Link>
        <br />
        <Link to="/manage/trash">问卷回收站</Link>
      </div>

			<div className={styles.right}>
				<Outlet></Outlet>
			</div>
		</div>
	);
};

export default ManageLayout;
