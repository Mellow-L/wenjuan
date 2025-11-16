import React, { useState, type FC } from "react";
import QuestionCard from "../../components/QuestionCard";
import styles from './Common.module.scss'
import { useSearchParams } from "react-router-dom";
import {useTitle} from 'ahooks'

import {Empty, Input, Typography} from 'antd'
const {Search} = Input
const {Title} = Typography
const rawQuestionList = [
  {
    _id: "q1",
    title: "问卷1",
    isPublished: true,
    isStar: true,
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
    isStar: true,
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
const Star: FC = () => {
  useTitle('我收藏的问卷') 
	const [questionList, setQuestionList] = useState(rawQuestionList);
  function onSearch(){
    console.log('搜索问卷');
    
  }
	return (
		<>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>我收藏的问卷</Title>  
        </div>
        <div className={styles.right}>
          <Search placeholder="搜索你的问卷" onSearch={onSearch} enterButton />
        </div>
      </div>

      <div className={styles.content}>
        { questionList.length === 0 && <Empty description="暂无数据"/>}
        { questionList.length > 0 &&
          questionList.map(question => {
          const {_id} = question
          return <QuestionCard key={_id} {...question}></QuestionCard>
        })}
      </div>

      {/* <div className={styles.footer}>
        footer
      </div> */}
		</>
	);
};

export default Star;
