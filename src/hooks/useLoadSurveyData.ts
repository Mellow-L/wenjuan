import { useParams } from "react-router-dom";
import { getSurveyService } from "../services/survey";
import { useRequest } from "ahooks";

// 获取并加载某 id 问卷数据
function useLoadSurveyData(){ 
  const { id = "" } = useParams();

	async function getSurvey() {
		const data = await getSurveyService(id);
		return data
	}

	const { loading,data,error } = useRequest(getSurvey)
	return { loading,data, error}
}

export default useLoadSurveyData