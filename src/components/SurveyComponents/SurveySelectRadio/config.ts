import SurveySelectRadio from '.'
import type { ComponentConfigType } from '..'
import { SurveySelectRadioDefaultProps, type SurveySelectRadioPropsType } from '../SurveySelectRadio/interface'
import SurveySelectRadioProp from '../SurveySelectRadio/prop'
import SurveySelectRadioStat from './stat'

export * from '../SurveySelectRadio/interface'

export const SurveySelectRadioConfig:ComponentConfigType<SurveySelectRadioPropsType> = {
  title:'单选标题',
  type:'SurveySelectRadio',
  Component:SurveySelectRadio,
  ComponentProp:SurveySelectRadioProp,
  ComponentStat:SurveySelectRadioStat,
  defaultProps:SurveySelectRadioDefaultProps
}