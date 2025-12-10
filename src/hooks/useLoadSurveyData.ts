import { useParams } from "react-router-dom";
import { getSurveyService } from "../services/survey";
import { useRequest } from "ahooks";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetComponents } from "../store/componentsSlice";

// 获取并加载某 id 问卷数据
function useLoadSurveyData(){ 
  const { id = "" } = useParams();
	const dispatch = useDispatch()
	const {data: surveyInfo, loading, run} = useRequest(async(id: string)=>{
		if(!id) throw new Error('没有问卷 id')
		const data = await getSurveyService(id)
		return data
	},{
		manual:true
	})

	useEffect(()=>{
		if(!surveyInfo)return
		const {title = '', componentList = []} = surveyInfo
		dispatch(resetComponents({componentList})) 
	},[surveyInfo,dispatch]) // 监听返回的surveyInfo 

	useEffect(()=>{
		run(id)
	},[id,run]) // 监听问卷id 拿问卷数据

	return {loading}
}

export default useLoadSurveyData