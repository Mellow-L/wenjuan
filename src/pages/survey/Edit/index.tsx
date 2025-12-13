import React, { type FC } from "react";
import { useTitle } from "ahooks";
import useLoadSurveyData from "../../../hooks/useLoadSurveyData";
import styles from './index.module.scss'
import Canvas from "./Canvas";
import { useDispatch } from "react-redux";
import { changeSelectedId } from "../../../store/componentsSlice";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import Header from "./Header";
const Edit: FC = () => {
	const dispatch = useDispatch()
	useTitle("问卷编辑器");
	const {loading} = useLoadSurveyData() // 加载当前问卷信息存入 store
	function handleClick(){
		// 点击 main 除画布外区域后取消选中组件（在 Canvas 的点击事件中 阻止冒泡）
		dispatch(changeSelectedId('')) // 清除 selectedId
	}
	return (
		<div className={styles.container}>
			<Header/>
			<div className={styles["content-wrapper"]}>
				<div className={styles.content}>
					<div className={styles.left}>
						<LeftPanel/>
					</div>
					<div className={styles.main} onClick={handleClick}>
						<div className={styles["canvas-wrapper"]}>
							<Canvas loading={loading} />
							{/* <div style={{ height: "900px", backgroundColor: "#fff" }}>
								滚动画布（测试）
							</div> */}
						</div>
					</div>
					<div className={styles.right}>
						<RightPanel/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Edit;
