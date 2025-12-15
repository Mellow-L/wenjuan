export type SurveyInputPropsType = {
  title?:string,
  placeholder?:string,
  onChange?:(newProps:SurveyInputPropsType)=>void
}

export const SurveyInputDefaultProps:SurveyInputPropsType = {
  title:'一个问题',
  placeholder:'请输入...'
}