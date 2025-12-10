import React, { type FC } from "react";
import { useTitle } from "ahooks";
import { Spin } from "antd";
import useLoadSurveyData from "../../../hooks/useLoadSurveyData";
import styles from './index.module.scss'
const Edit: FC = () => {
	useTitle("问卷编辑器");
	const {loading,data} = useLoadSurveyData()

	return (<div className={styles.container}>
		<div style={{backgroundColor:'#ffffff', height:'50px'}}>header</div>
		<div className={styles['content-wrapper']}>
			<div className={styles.content}>
				<div className={styles.left}>left</div>
				<div className={styles.main}>
					<div className={styles['canvas-wrapper']}>
						<div style={{height:'900px',  }}>滚动画布（测试）</div>
					</div>  
				</div> 
				<div className={styles.right}>right</div>
			</div>  
		</div> 
	</div>)
	// return (
	// 	<>
	// 		{/* <p>Edit id为：{id} 的问卷</p> */}

	// 		{loading ? (
	// 			<Spin tip="Loading" size="large">
	// 				<div style={{ minHeight: 100 }} />
	// 			</Spin> 
	// 		) : (
	// 			<p>{JSON.stringify(data)}</p>
	// 		)}

	// 	</>
	// );
};

export default Edit;
