import myAxios,{type ResDataType} from "./ajax";

type SearchOption = {
  keyword: string,
  isStar: boolean, // 检索收藏的问卷
  isDeleted: boolean //检索回收站
  page: number,
  pageSize: number,
}
// 获取单个问卷信息
export async function getSurveyService(id:string):Promise<ResDataType> {
  const url = `/api/survey/${id}`
  const data = (await myAxios.get(url)) as ResDataType
  return data
}

// post 创建问卷 
export async function createSurveyService():Promise<ResDataType>{
  const url = `/api/survey`
  const data = (await myAxios.post(url)) as ResDataType
  return data
}

// get 获取或查询问卷列表
export async function getSurveyListService(
  opt: Partial<SearchOption> = {}
):Promise<ResDataType>{
  const url = `/api/survey`
  const data = (await myAxios.get(url,{params:opt})) as ResDataType
  return data
}

// delete 删除或批量删除问卷，根据传入的数组 ids
export async function deleteSurveysService( ids:string[] ):Promise<ResDataType>{
  const url = `/api/survey`
  const data = (await myAxios.delete(url,{data: ids})) as ResDataType
  return data
}

// 更新某份问卷信息，opt 是更新的数据对象
export async function updateSurveyService(id: string,opt:{[key:string]:any}):Promise<ResDataType>{
  const url = `/api/survey/${id}`
  const data = (await myAxios.patch(url, opt)) as ResDataType
  return data
}