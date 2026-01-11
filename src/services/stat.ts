import myAxios,{type ResDataType} from "./ajax";

export async function getStatListService(
	surveyId: string,
	opt: { page: number; pageSize: number }
): Promise<ResDataType> {
	const url = `/api/stat/${surveyId}`
	const data = (await myAxios.get(url,{params:opt})) as ResDataType
	return data
}