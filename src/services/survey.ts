import myAxios,{type ResDataType} from "./ajax";

export async function getSurveyService(id:string):Promise<ResDataType> {
  const url = `/api/survey/${id}`
  const data = (await myAxios.get(url)) as ResDataType
  return data
}