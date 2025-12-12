import SurveyTitle from './index'
import { SurveyTitleDefaultProps } from './interface'
import SurveyTitleProp from './prop'

export * from './interface'

export const SurveyTitleConfig = {
  title:'标题',
  type:'SurveyTitle',
  Component: SurveyTitle,
  ComponentProp:SurveyTitleProp,
  defaultProps: SurveyTitleDefaultProps,
}