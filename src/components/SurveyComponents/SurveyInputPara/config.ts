import SurveyInputPara from '.'
import type { ComponentConfigType } from '..'
import { SurveyInputParaDefaultProps, type SurveyInputParaPropsType } from './interface'
import SurveyInputParaProp from './prop'

export * from './interface'

export const SurveyInputParaConfig:ComponentConfigType<SurveyInputParaPropsType> = {
  title:"输入类 2",
  type:"SurveyInputPara",
  Component:SurveyInputPara,
  ComponentProp:SurveyInputParaProp,
  defaultProps:SurveyInputParaDefaultProps
}