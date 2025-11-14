import { Button } from "antd";
import React,{type FC} from "react";
import { useNavigate } from "react-router-dom";
import {Typography} from 'antd'
import { MANAGE_LIST_PATHNAME } from "../router";
const {Title ,Paragraph} = Typography
import styles from './Home.module.scss'

const Home: FC = () => {
  const nav = useNavigate()
  return (<>
    <div className={styles.container}>
      <Title>问卷调查｜制作、发布你的问卷，与大模型一同分析答卷</Title>
      <Paragraph>本站已累计创建问卷 x 份，发布问卷 y 份，收到答卷 z 份</Paragraph>
      
      <Button className={styles.button} size="large" onClick={()=>nav(MANAGE_LIST_PATHNAME)}>
        Click here to Start ! 
      </Button>
    </div>  
  </>)
}

export default Home