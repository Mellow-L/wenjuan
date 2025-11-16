import React, { useState, type FC } from "react";
import SurveyCard from "../../components/SurveyCard";
import styles from './Common.module.scss'
import { useSearchParams } from "react-router-dom";
import {useTitle} from 'ahooks'

import {Input, Typography} from 'antd'
const {Search} = Input
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
  
	const [surveyList, setSurveyList] = useState(rawSurveyList);
  function onSearch(){
    console.log('搜索问卷');
    
  }
	return (
		<>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>我的问卷</Title>
        </div>
        <div className={styles.right}>
          <Search placeholder="搜索你的问卷" onSearch={onSearch} enterButton />
        </div>
      </div>

      <div className={styles.content}>
        { surveyList.length > 0 &&
          surveyList.map(survey => {
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
