import { SurveyInputConfig } from './SurveyInput/config';
import type { FC } from "react";
import type { SurveyInputPropsType } from "./SurveyInput/interface";
import type { SurveyTitlePropsType } from "./SurveyTitle/interface";
import { SurveyTitleConfig } from './SurveyTitle/config';

// 各个组件的 props type
export type ComponentsPropsType = SurveyInputPropsType & SurveyTitlePropsType// TODO:理解 &替换｜ 

// 各个组件的 config type，对应各个 config.ts
export type ComponentConfigType = {
  title:string
  type:string
  Component: FC<ComponentsPropsType>  // 组件的 画布 JSX
  ComponentProp: FC<ComponentsPropsType> // 组件的 属性面板 JSX
  defaultProps:ComponentsPropsType // 组件 prop type 的联合类型
}

// 组件 config type 合集数组，用于查询
const componentConfigList: ComponentConfigType[] = [SurveyInputConfig,SurveyTitleConfig]

// 单个 config group 类型
export type componentsConfigGroupType = {
  groupId:string // group 唯一标识
  groupName:string // group 名称
  components:Array<ComponentConfigType>
}

// 组件 config 的 group（显示类、输入类、选择类等）
export const componentConfigGroups :componentsConfigGroupType[] = [
  {
    groupId:'textGroup',
    groupName:'文本显示',
    components:[SurveyTitleConfig],
  },
  {
    groupId:'inputGroup',
    groupName:'填空类',
    components:[SurveyInputConfig],
  },
  
]

// 根据 type 获取组件 config
export default function getComponentConfigByType(type: string){
  return componentConfigList.find(c => c.type===type)
}