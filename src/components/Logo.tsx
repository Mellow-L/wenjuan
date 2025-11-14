import React,{type FC} from "react";
import {Typography,Space } from 'antd'
import { FormOutlined} from "@ant-design/icons";
import styles from './Logo.module.scss'
import { Link } from "react-router-dom";
import { HOME_PATHNAME } from "../router";

const {Title} = Typography
const Logo : FC = () => {

  return (<>
    <Link to={HOME_PATHNAME} >
      <Space className={styles.container}>
        <Title>
          <FormOutlined />
        </Title>
        <Title>
          问卷调查工具
        </Title>
      </Space>
    </Link>
    
  </>)
}

export default Logo