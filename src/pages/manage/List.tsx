import React, { useState, type FC } from "react";
import styles from '../../styles/ManageCommon.module.scss'
import {useRequest, useTitle} from 'ahooks'

import { Spin, Typography} from 'antd'
import SurveyFinder from "../../components/SurveyFinder";
import SurveyCard from "../../components/SurveyCard";
import { getSurveyListService } from "../../services/survey";
const {Title} = Typography
const rawSurveyList = [
  {
    _id: "q1",
    title: "问卷1",
    isPublished: true,
    isStar: false,
    answerCount: 3,
    createdAt: "2月27日 11:11",
  },
  {
    _id: "q2",
    title: "问卷2",
    isPublished: false,
    isStar: true,
    answerCount: 2,
    createdAt: "12月27日 15:11",
  },
  {
    _id: "q3",
    title: "问卷3",
    isPublished: true,
    isStar: false,
    answerCount: 9,
    createdAt: "5月6日 10:48",
  },
  {
    _id: "q4",
    title: "问卷4",
    isPublished: false,
    isStar: true,
    answerCount: 3,
    createdAt: "1月1日 5:56",
  },
]
const List: FC = () => {
  useTitle('我的问卷列表')
  
	// const [surveyList, setSurveyList] = useState(rawSurveyList);
  const {loading, data={}, error} = useRequest(getSurveyListService)
  const {list = [],total = 0} = data

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
