import type { FC } from "react";
import { SurveyInputConfig, type SurveyInputPropsType } from './SurveyInput/config';
import { SurveyTitleConfig, type SurveyTitlePropsType } from './SurveyTitle/config';
import { SurveyParagraphConfig, type SurveyParagraphPropsType } from './SurveyParagraph/config';
import { SurveyInfoConfig, type SurveyInfoPropsType } from './SurveyInfo/config';
import { SurveyInputParaConfig, type SurveyInputParaPropsType } from './SurveyInputPara/config';
import { SurveySelectCheckboxConfig, type SurveySelectCheckboxPropsType } from "./SurveySelectCheckbox/config";
import { SurveySelectRadioConfig, type SurveySelectRadioPropsType } from "./SurveyRadio/config";

// 各个组件的 props type
export type ComponentsPropsType = 
  SurveyInputPropsType &
  SurveyInputParaPropsType &
	SurveyTitlePropsType &
	SurveyParagraphPropsType &
	SurveyInfoPropsType&
  SurveySelectRadioPropsType&
  SurveySelectCheckboxPropsType// TODO:理解 &替换｜ 

// 各个组件的 config type，对应各个 config.ts
export type ComponentConfigType<T> = {
  title:string
  type:string
  Component: FC<T>  // 组件的 画布 JSX
  ComponentProp: FC<T> // 组件的 属性面板 JSX
  defaultProps:T // 组件 prop type 的联合类型
}

// 组件 config type 合集数组，用于查询
const componentConfigList: ComponentConfigType<any>[] = [
	SurveyInputConfig,
	SurveyTitleConfig,
	SurveyParagraphConfig,
	SurveyInfoConfig,
	SurveyInputParaConfig,
  SurveySelectRadioConfig,
  SurveySelectCheckboxConfig
];

// 单个 config group 类型
export type componentsConfigGroupType = {
  groupId:string // group 唯一标识
  groupName:string // group 名称
  components:Array<ComponentConfigType<any>>
}

// 组件 config 的 group（显示类、输入类、选择类等）
export const componentConfigGroups :componentsConfigGroupType[] = [
  {
    groupId:'textGroup',
    groupName:'文本显示',
    components:[SurveyTitleConfig,SurveyParagraphConfig,SurveyInfoConfig],
  },
  {
    groupId:'inputGroup',
    groupName:'填空类问题',
    components:[SurveyInputConfig,SurveyInputParaConfig],
  },
  {
    groupId:'selectGroup',
    groupName:'选择类问题',
    components:[SurveySelectRadioConfig,SurveySelectCheckboxConfig],
  },
]

// 根据 type 获取组件 config
export default function getComponentConfigByType(type: string){
  return componentConfigList.find(c => c.type===type)
}