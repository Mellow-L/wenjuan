import SurveyParagraph from '.'
import type { ComponentConfigType } from '..'
import { SurveyParagraphDefaultProps, type SurveyParagraphPropsType } from './interface'
import SurveyParagraphProp from './prop'
export * from './interface' // 导出类型

export const SurveyParagraphConfig:ComponentConfigType<SurveyParagraphPropsType> = {
  title:'段落',
  type:'SurveyParagraph',
  Component:SurveyParagraph,
  ComponentProp:SurveyParagraphProp,
  defaultProps:SurveyParagraphDefaultProps
}