import React,{type FC} from 'react'
import { SurveyInputDefaultProps, type SurveyInputPropsType } from './interface'
import { Input, Typography } from 'antd'

const {Paragraph} = Typography
const SurveyInput:FC<SurveyInputPropsType> = (props:SurveyInputPropsType) => {
  const {title,placeholder} = {...SurveyInputDefaultProps,...props}
  return (<div>
    <Paragraph strong>{title}</Paragraph>
    <Input placeholder={placeholder}/>
  </div>)
}

export default SurveyInput