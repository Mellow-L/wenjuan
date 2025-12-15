export type SurveyInputParaPropsType = {
  title?:string,
  placeholder?:string,
  onChange?:(newProps:SurveyInputParaPropsType)=>void
}

export const SurveyInputParaDefaultProps:SurveyInputParaPropsType = {
  title:'一个问题',
  placeholder:'请输入...'
}