import SurveyTitle from './index'
import { SurveyTitleDefaultProps } from './interface'

export * from './interface'

export const SurveyTitleConfig = {
  title:'标题',
  type:'SurveyTitle',
  Component: SurveyTitle,
  defaultProps: SurveyTitleDefaultProps,
}