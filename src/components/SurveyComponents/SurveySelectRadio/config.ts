import SurveySelectRadio from '.'
import type { ComponentConfigType } from '..'
import { SurveySelectRadioDefaultProps, type SurveySelectRadioPropsType } from '../SurveySelectRadio/interface'
import SurveySelectRadioProp from '../SurveySelectRadio/prop'

export * from '../SurveySelectRadio/interface'

export const SurveySelectRadioConfig:ComponentConfigType<SurveySelectRadioPropsType> = {
  title:'单选标题',
  type:'SurveySelectRadio',
  Component:SurveySelectRadio,
  ComponentProp:SurveySelectRadioProp,
  defaultProps:SurveySelectRadioDefaultProps
}