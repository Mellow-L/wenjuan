import SurveySelectRadio from '.'
import type { ComponentConfigType } from '..'
import { SurveySelectRadioDefaultProps, type SurveySelectRadioPropsType } from './interface'
import SurveySelectRadioProp from './prop'

export * from './interface'

export const SurveySelectRadioConfig:ComponentConfigType<SurveySelectRadioPropsType> = {
  title:'单选标题',
  type:'SurveySelectRadio',
  Component:SurveySelectRadio,
  ComponentProp:SurveySelectRadioProp,
  defaultProps:SurveySelectRadioDefaultProps
}