import React, { type FC } from 'react'
import { SurveyInfoDefaultProps, type SurveyInfoPropsType } from './interface'
import { Typography } from 'antd'
const {Title,Paragraph} = Typography
const SurveyInfo:FC<SurveyInfoPropsType> = (props:SurveyInfoPropsType) => {
  const {title,description} = {...SurveyInfoDefaultProps,...props}
  const textList = description.split('\n')
  return (
		<div>
			<Title
				level={5}
				style={{
					textAlign: "center",
					fontSize: "24px",
          marginTop:'12px'
				}}
			>
				{title}
			</Title>
			<Paragraph
        style={{ textAlign: "center"}}
      >
				{textList.map((line, index) => {
					return (
						<span key={index}>
							{index > 0 && <br />}
							{line}
						</span>
					);
				})}
			</Paragraph>
		</div>
	);
}

export default SurveyInfo