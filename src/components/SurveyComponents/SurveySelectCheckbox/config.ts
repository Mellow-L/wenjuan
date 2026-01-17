import SurveySelectCheckbox from '.'
import type { ComponentConfigType } from '..'
import { SurveySelectCheckboxDefaultProps, type SurveySelectCheckboxPropsType } from './interface'
import SurveySelectCheckboxProp from './prop'
import SurveySelectCheckboxStat from './stat'

export * from './interface'

export const SurveySelectCheckboxConfig:ComponentConfigType<SurveySelectCheckboxPropsType> = {
  title:'多选标题',
  type:'SurveySelectCheckbox',
  Component:SurveySelectCheckbox,
  ComponentProp:SurveySelectCheckboxProp,
  ComponentStat:SurveySelectCheckboxStat,
  defaultProps:SurveySelectCheckboxDefaultProps
}