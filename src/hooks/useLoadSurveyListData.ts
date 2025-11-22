import { useSearchParams } from "react-router-dom";
import { LIST_SEARCH_PARAM_KEY } from "../constant";
import { getSurveyListService } from "../services/survey";
import { useRequest } from "ahooks";

type OptionType = {
  isStar: boolean,
  isDeleted: boolean
}
// 加载或查询问卷列表。
// opt 决定查询的是 收藏的问卷 还是 回收站（假删除的问卷）
function useLoadSurveyListData (opt: Partial<OptionType> = {}) {
  const [searchParams] = useSearchParams()
  const {isStar, isDeleted} = opt
  const getSurveyList = async ()=>{
    const keyword = searchParams.get(LIST_SEARCH_PARAM_KEY)??undefined
    console.log('search keyword:',keyword);
    
    const data = await getSurveyListService({keyword,isStar,isDeleted})
    return data
  }
   
  const {data,loading,error} = useRequest(getSurveyList,{
    refreshDeps:[ searchParams ]
  })

  return {data,loading,error}
}

export default useLoadSurveyListData