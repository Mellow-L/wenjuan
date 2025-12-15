import type { ComponentConfigType } from '..'
import SurveyTitle from './index'
import { SurveyTitleDefaultProps, type SurveyTitlePropsType } from './interface'
import SurveyTitleProp from './prop'

export * from './interface'

export const SurveyTitleConfig:ComponentConfigType<SurveyTitlePropsType> = {
  title:'标题',
  type:'SurveyTitle',
  Component: SurveyTitle,
  ComponentProp:SurveyTitleProp,
  defaultProps: SurveyTitleDefaultProps,
}