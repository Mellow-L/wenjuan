import { useParams } from "react-router-dom";
import { getSurveyService } from "../services/survey";
// import { useEffect, useState } from "react";
import { useRequest } from "ahooks";

// 获取并加载问卷数据
function useLoadSurveyData(){ 
  const { id = "" } = useParams();
	// const [loading, setLoading] = useState(true);
	// const [surveyData, setSurveyData] = useState({});

	async function getSurvey() {
		const data = await getSurveyService(id);
		// setSurveyData(data); //将 data 转为当前页 state
    // setLoading(false)
		// console.log("data", data);
		return data
	}

	const { loading,data,error } = useRequest(getSurvey)
	return { loading,data, error}
	// useEffect(() => {
	// 	getSurvey();
	// },[]);

  // return {id,loading,surveyData}
}

export default useLoadSurveyData