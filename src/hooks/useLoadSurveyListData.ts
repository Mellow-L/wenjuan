import { useSearchParams } from "react-router-dom";
import { LIST_SEARCH_PARAM_KEY } from "../constant";
import { getSurveyListService } from "../services/survey";
import { useRequest } from "ahooks";

// 加载或查询问卷列表
function useLoadSurveyListData() {
  const [searchParams] = useSearchParams()

  const getSurveyList = async ()=>{
    const keyword = searchParams.get(LIST_SEARCH_PARAM_KEY)??undefined
    console.log('search keyword:',keyword);
    
    const data = await getSurveyListService({keyword})
    return data
  }
   
  const {data,loading,error} = useRequest(getSurveyList,{
    refreshDeps:[ searchParams ]
  })

  return {data,loading,error}
}

export default useLoadSurveyListData