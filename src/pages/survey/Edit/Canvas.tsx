import React, { type FC } from 'react'

import styles from './Canvas.module.scss'
import SurveyTitle from '../../../components/SurveyComponents/SurveyTitle'
import SurveyInput from '../../../components/SurveyComponents/SurveyInput'
const Canvas:FC = () => {
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