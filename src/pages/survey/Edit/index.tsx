import React, { type FC } from "react";
import { useTitle } from "ahooks";
import { Spin } from "antd";
import useLoadSurveyData from "../../../hooks/useLoadSurveyData";
import styles from './index.module.scss'
import Canvas from "./Canvas";
const Edit: FC = () => {
	useTitle("问卷编辑器");
	const {loading} = useLoadSurveyData() // 加载当前问卷信息

	return (
		<div className={styles.container}>
			<div style={{ backgroundColor: "#ffffff", height: "50px" }}>header</div>
			<div className={styles["content-wrapper"]}>
				<div className={styles.content}>
					<div className={styles.left}>left</div>
					<div className={styles.main}>
						<div className={styles["canvas-wrapper"]}>
							<Canvas loading={loading} />
							<div style={{ height: "900px", backgroundColor: "#fff" }}>
								滚动画布（测试）
							</div>
						</div>
					</div>
					<div className={styles.right}>right</div>
				</div>
			</div>
		</div>
	);
};

export default Edit;
