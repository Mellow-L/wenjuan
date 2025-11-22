import React, { useState, type FC } from "react";
import styles from '../../styles/ManageCommon.module.scss'
import {useRequest, useTitle} from 'ahooks'

import { Spin, Typography} from 'antd'
import SurveyFinder from "../../components/SurveyFinder";
import SurveyCard from "../../components/SurveyCard";
import { getSurveyListService } from "../../services/survey";
import useLoadSurveyListData from "../../hooks/useLoadSurveyListData";
const {Title} = Typography

const List: FC = () => {
  useTitle('我的问卷列表')

  const {data, loading} = useLoadSurveyListData()
  const {list = [],total = 0} = data || {}
  // const {list = [],total = 0} = data 

	return (
		<>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>我的问卷</Title>
        </div>
        <div className={styles.right}>
          <SurveyFinder/>
        </div>
      </div>

      <div className={styles.content}>
        {loading && (<Spin tip="Loading" size="large">
          <div style={{ minHeight: 100 }} />
        </Spin>) }
        { list.length > 0 &&
          list.map(survey => { 
          const {_id} = survey
          return <SurveyCard key={_id} {...survey}></SurveyCard>
        })}
      </div>

      {/* <div className={styles.footer}>
        footer
      </div> */}
		</>
	);
};

export default List;
