import React,{type FC} from "react";
import {Outlet} from 'react-router-dom'
import styles from './MainLayout.module.scss'
import { Layout } from "antd";
const {Header,Content,Footer} = Layout
const MainLayout: FC = () => {

  return (<>
    {/* <div className={styles.header}>header</div> */}
    {/* <div>
      <Outlet></Outlet>
    </div>
    <div className={styles.footer}>footer</div> */}
    <Layout> 
      <Header className={styles.header}>
        <div className={styles.left}>

        </div>
        <div className={styles.right}>

        </div>
      </Header>

      <Content className={styles.main}>
        <Outlet></Outlet>
      </Content>

      <Footer className={styles.footer}>
        问卷调查工具 &copy; 2025 created by 林怡然
      </Footer>
    </Layout>  
  </>)
}

export default MainLayout