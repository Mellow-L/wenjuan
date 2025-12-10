import React,{type FC} from 'react'
import { SurveyTitleDefaultProps, type SurveyTitlePropsType, type TitleLevel } from './interface'
import { Typography } from 'antd'


const {Title} = Typography
const SurveyTitle:FC<SurveyTitlePropsType> = (props:SurveyTitlePropsType) => {
  // const {text,level,isCenter} = props
  const {text,level,isCenter} = { ...SurveyTitleDefaultProps, ...props} // 设置传入 props 覆盖默认属性值
  function setFontSize(level:TitleLevel){
    if(level === 1)return '24px'
    if(level === 2)return '20px'
    if(level === 3)return '16px'
    if(level === 4)return '12px'
    if(level === 5)return '8px'
    return '8px'
  }
  return (
		<div>
			<Title
				level={level}
				style={{
					textAlign: isCenter ? "center" : "start",
					fontSize: setFontSize(level),
          marginBottom:'0'
				}}
			>
				{text}
			</Title>
		</div>
	);
}

export default SurveyTitle