import React,{type FC} from "react";
import styles from './QuestionCard.module.scss'
import { Button, Space } from "antd";
import { CopyOutlined, DeleteOutlined, FormOutlined, PieChartOutlined, StarOutlined } from "@ant-design/icons";
type PropsType = {
  _id:string
  title: string
  isPublished: boolean
  isStar: boolean
  answerCount: number
  createdAt: string
}
const QuestionCard: FC<PropsType> = (props:PropsType) =>{
  const {_id,title,isPublished,isStar,answerCount,createdAt} = props 
  return (<>
    <div className={styles.container}>
      
      <div className={styles.title}>
        <div className={styles.left}>
          <a href="#">{title}</a>
        </div>
        <div className={styles.right}>
          {isPublished ? <span style={{color:"green"}}>已发布 </span> : <span style={{color:"gray"}}>未发布 </span>}
          <span>答卷数：{answerCount} </span>
          <span>{createdAt}</span>
        </div>
      </div>

      <Space direction="horizontal" className={styles['Button-container']}>
        <Space className={styles.left}>
          <Button icon={<FormOutlined />}>Edit</Button>
          <Button icon={<PieChartOutlined />}>Statistic</Button>
        </Space>
        <Space className={styles.right}>
          <Button icon={<StarOutlined />}></Button>
          <Button icon={<CopyOutlined />}></Button>
          <Button icon={<DeleteOutlined />}></Button>
        </Space>
      </Space>
    </div>
  </>)
}

export default QuestionCard