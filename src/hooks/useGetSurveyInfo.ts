import { useSelector } from "react-redux"
import type { StateType } from "../store"
import type { surveyInfoStateType } from "../store/surveyInfoSlice"

function useGetSurveyInfo(){
  const surveyInfo = useSelector<StateType>(state=>state.surveyInfo) as surveyInfoStateType
  return surveyInfo
}

export default useGetSurveyInfo