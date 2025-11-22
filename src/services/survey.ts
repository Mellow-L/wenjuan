import myAxios,{type ResDataType} from "./ajax";

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

// get 获取问卷列表
export async function getSurveyListService():Promise<ResDataType>{
  const url = `/api/survey`
  const data = (await myAxios.get(url)) as ResDataType
  return data
}