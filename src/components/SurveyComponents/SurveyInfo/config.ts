import SurveyInfo from '.'
import type { ComponentConfigType } from '..'
import { SurveyInfoDefaultProps, type SurveyInfoPropsType } from './interface'
import SurveyInfoProp from './prop'

export * from './interface'

export const SurveyInfoConfig:ComponentConfigType<SurveyInfoPropsType> = {
  title:"问卷信息",
  type:"SurveyInfo",
  Component:SurveyInfo,
  ComponentProp:SurveyInfoProp,
  defaultProps:SurveyInfoDefaultProps
}