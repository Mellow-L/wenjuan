import { get } from './ajax'

export async function getSurveyById(id: string) {
  const url = `/api/survey/${id}` // Mock 或服务端
  const data = await get(url)
  return data
}