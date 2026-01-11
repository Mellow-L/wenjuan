import React, { type FC } from 'react'
import classNames from 'classnames'

import styles from './ComponentList.module.scss'
import useGetComponentsInfo from '../../../hooks/useGetComponentsInfo'
import getComponentConfigByType from '../../../components/SurveyComponents'

type PropsType = {
  selectedId: string
  setSelectedId: (id: string) => void
  setSelectedType: (type: string) => void
}

const ComponentList: FC<PropsType> = (props) => {
  const { selectedId, setSelectedId, setSelectedType } = props
  const { componentsList } = useGetComponentsInfo()

  return (
    <div className={styles.container}>
      {componentsList
        .filter(c => !c.isHidden)
        .map(c => {
          const { fe_id, props, type } = c

          const componentConf = getComponentConfigByType(type)
          if (!componentConf) return null

          const { Component } = componentConf

          const wrapperDefaultClassName = styles['component-wrapper']
          const selectedClassName = styles.selected
          const wrapperClassName = classNames({
            [wrapperDefaultClassName]: true,
            [selectedClassName]: fe_id === selectedId,
          })

          return (
            <div
              className={wrapperClassName}
              key={fe_id}
              onClick={() => {
                setSelectedId(fe_id)
                setSelectedType(type)
              }}
            >
              <div className={styles.component}>
                <Component {...props}/>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default ComponentList
