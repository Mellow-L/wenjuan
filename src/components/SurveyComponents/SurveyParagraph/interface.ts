export type SurveyParagraphPropsType = {
  text?:string
  isCenter?:boolean
  onChange?:(newProps:SurveyParagraphPropsType)=>void
}
export const SurveyParagraphDefaultProps:SurveyParagraphPropsType = {
  text:'一个段落',
  isCenter:false
}