export type SurveyInputPropsType = {
  title?:string,
  placeholder?:string,
  onChange?:(newProps:SurveyInputPropsType)=>void
}

export const SurveyInputDefaultProps:SurveyInputPropsType = {
  title:'输入框标题',
  placeholder:'请输入...'
}