// 组件的属性 和 默认属性值 (作为其 props)
export type TitleLevel =  1 | 2 | 3 | 4 | 5 | undefined
export type SurveyTitlePropsType = {
  text?:string
  level?:TitleLevel
  isCenter?:boolean
}

export const SurveyTitleDefaultProps:SurveyTitlePropsType = {
  text:'一个标题',
  level:1,
  isCenter:false
}