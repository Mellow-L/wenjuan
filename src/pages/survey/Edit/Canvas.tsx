import React, { type FC } from 'react'

import styles from './Canvas.module.scss'
import SurveyTitle from '../../../components/SurveyComponents/SurveyTitle'
import SurveyInput from '../../../components/SurveyComponents/SurveyInput'
import { Spin } from 'antd'

type PropsType = {
  loading:boolean
}
const Canvas:FC<PropsType> = (props:PropsType) => {
  const { loading } = props
  if(loading)return (<div>
    <Spin tip="Loading" size="large">
      <div style={{ minHeight: 100 }} />
    </Spin>
  </div>)
  return (<div className={styles.canvas}>
    <div className={styles['component-wrapper']}>
      <div className={styles.component}>
        <SurveyTitle/>
      </div>
    </div>
    <div className={styles['component-wrapper']}>
      <div className={styles.component}>
        <SurveyInput/>
      </div>
    </div>
  </div>)
}

export default Canvas