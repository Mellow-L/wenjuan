import { useParams } from "react-router-dom";
import { getSurveyService } from "../services/survey";
import { useRequest } from "ahooks";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetComponents } from "../store/componentsSlice";

// 获取并加载某 id 问卷数据 存入 store（包含 survey 的 id，title，componentsList
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
		if(!surveyInfo) return
		const {componentsList = []} = surveyInfo
		let selectedId = '' 
		if(componentsList.length > 0){
			selectedId =  componentsList[0].fe_id
		}
		dispatch(resetComponents({componentsList,selectedId})) // 带着selectedId 存入 store
	},[surveyInfo,dispatch]) // 监听surveyInfo新的返回 存入 store

	useEffect(()=>{
		run(id)
	},[id,run]) // 监听url参数 拿问卷数据

	return {loading}
}

export default useLoadSurveyData