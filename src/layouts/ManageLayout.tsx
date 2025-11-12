import React, { type FC } from "react";
import { Outlet } from "react-router-dom";
import styles from "./ManageLayout.module.scss";
const ManageLayout: FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.left}>
        <p>ManageLayout Left</p>
        
        <button>创建问卷</button>
				<p>问卷列表</p>
        
        <a>收藏问卷</a>
        <br />
        <a>回收站</a>
      </div>

			<div className={styles.right}>
				<Outlet></Outlet>
			</div>
		</div>
	);
};

export default ManageLayout;
