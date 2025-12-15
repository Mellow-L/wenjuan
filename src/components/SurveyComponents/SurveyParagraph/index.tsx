import React, { type FC } from 'react'
import { SurveyParagraphDefaultProps, type SurveyParagraphPropsType } from './interface'
import {Typography} from 'antd'
const {Paragraph} = Typography

const SurveyParagraph:FC<SurveyParagraphPropsType> = (props:SurveyParagraphPropsType) => {
  const {text = '',isCenter = false} = {...SurveyParagraphDefaultProps,...props}
  const textList = text.split('\n')
  return (
		<div>
			<Paragraph
				style={{ textAlign: isCenter ? "center" : "start" ,marginBottom:0}}
        
      >
        {textList.map((line,index) => {
          return <span key={index}>
            {index > 0 && <br/>}
            {line} 
          </span>
        })}
        {/* <span dangerouslySetInnerHTML={getHtml()}/> */}
      </Paragraph>
		</div>
	);
}

export default SurveyParagraph