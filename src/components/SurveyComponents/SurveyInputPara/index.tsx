import React, { type FC } from 'react'
import { SurveyInputParaDefaultProps, type SurveyInputParaPropsType } from './interface'
import { Typography } from 'antd'
import TextArea from 'antd/es/input/TextArea'
const {Paragraph} = Typography
const SurveyInputPara:FC<SurveyInputParaPropsType> = (props:SurveyInputParaPropsType) => {
  const {title,placeholder} = {...SurveyInputParaDefaultProps,...props}
  return (
    <div>
      <Paragraph strong>{title}</Paragraph>
      <TextArea placeholder={placeholder}/>
    </div>
  )
}

export default SurveyInputPara