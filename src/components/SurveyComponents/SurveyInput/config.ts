import SurveyInput from './index'
import { SurveyInputDefaultProps } from './interface'
import SurveyInputProp from './prop'

export * from './interface'

export const SurveyInputConfig = {
  title:'输入框',
  type:'SurveyInput',
  Component: SurveyInput,
  ComponentProp: SurveyInputProp,
  defaultProps: SurveyInputDefaultProps,
}