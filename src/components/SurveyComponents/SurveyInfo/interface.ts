export type SurveyInfoPropsType = {
  title:string
  description:string
  onChange?:(newProps:SurveyInfoPropsType)=>void
}

export const SurveyInfoDefaultProps:SurveyInfoPropsType = {
  title:'一个居中一级标题',
  description:'一段居中描述'
}