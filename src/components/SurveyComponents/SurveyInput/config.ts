import SurveyInput from './index'
import { SurveyInputDefaultProps } from './interface'

export * from './interface'

export const SurveyInputConfig = {
  title:'输入框',
  type:'SurveyInput',
  Component: SurveyInput,
  defaultProps: SurveyInputDefaultProps,
}