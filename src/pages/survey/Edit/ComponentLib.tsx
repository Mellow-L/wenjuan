import React, { type FC } from 'react'
import { componentConfigGroup } from '../../../components/SurveyComponents'
import { Typography } from 'antd'
import styles from './ComponentLib.module.scss'

const {Title} = Typography


// LeftPanel 中的 组件分组显示
const ComponentLib:FC = () => {
  return (
    <>
    {componentConfigGroup.map((g, index) => {
      const { groupId,groupName,components } = g
      return (
				<div key={groupId}>
					<Title level={5} style={{ marginTop: index === 0 ? "0" : "" }}>
						{groupName}
					</Title>
          {components.map(c => {
            const {title,type,Component,defaultProps} = c
            return (
              <div key={type} className={styles['component-wrapper']}>
                {/* <p>{title}</p> */}
                <div className={styles.component}>
                  <Component {...defaultProps}/>
                </div>
              </div>
            )
          })}
				</div>
			);
    })}
    </>
  )
}

export default ComponentLib