import type { ComponentConfigType } from '..'
import SurveyInput from './index'
import { SurveyInputDefaultProps, type SurveyInputPropsType } from './interface'
import SurveyInputProp from './prop'

export * from './interface'

export const SurveyInputConfig:ComponentConfigType<SurveyInputPropsType> = {
  title:'输入类 1',
  type:'SurveyInput',
  Component: SurveyInput,
  ComponentProp: SurveyInputProp,
  defaultProps: SurveyInputDefaultProps,
}