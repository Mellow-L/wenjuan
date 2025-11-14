import React, { useState, type FC } from "react";
import QuestionCard from "../../components/QuestionCard";
import styles from './List.module.scss'
import { useSearchParams } from "react-router-dom";
import {useTitle} from 'ahooks'

import {Input} from 'antd'
const {Search} = Input

const rawQuestionList = [
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
  const [searchParams] = useSearchParams()
  console.log('keyword参数',searchParams.get('keyword'));
  
	const [questionList, setQuestionList] = useState(rawQuestionList);
  function onSearch(){
    console.log('搜索问卷');
    
  }
	return (
		<>
      <div className={styles.header}>
        <div className={styles.left}>
          <h3>我的问卷</h3>
        </div>
        <div className={styles.right}>
          <Search placeholder="搜索你的问卷" onSearch={onSearch} enterButton />
        </div>
      </div>

      <div className={styles.content}>
        {questionList.map(question =>{
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

export default List;
