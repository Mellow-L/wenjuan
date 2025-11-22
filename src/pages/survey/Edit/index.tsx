import React, { type FC } from "react";
import { useTitle } from "ahooks";
import { Spin } from "antd";
import useLoadSurveyData from "../../../hooks/useLoadSurveyData";

const Edit: FC = () => {
	useTitle("问卷编辑器");
	const {loading,data} = useLoadSurveyData()
	return (
		<>
			{/* <p>Edit id为：{id} 的问卷</p> */}

			{loading ? (
				<Spin tip="Loading" size="large">
					<div style={{ minHeight: 100 }} />
				</Spin> 
			) : (
				<p>{JSON.stringify(data)}</p>
			)}

		</>
	);
};

export default Edit;
