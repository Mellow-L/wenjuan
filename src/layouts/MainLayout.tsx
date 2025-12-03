import React,{type FC} from "react";
import {Outlet} from 'react-router-dom'
import styles from './MainLayout.module.scss'
import { Layout, Spin } from "antd";
import Logo from "../components/Logo";
import UserInfo from "../components/UserInfo";
import useLoadUserData from "../hooks/useLoadUserData";
import useAuthGuard from "../hooks/useAuthGuard";
const {Header,Content,Footer} = Layout
const MainLayout: FC = () => {
  const {waitingUserData} = useLoadUserData()
  useAuthGuard(waitingUserData)
  return (<>
    {/* <div className={styles.header}>header</div> */}
    {/* <div>
      <Outlet></Outlet>
    </div>
    <div className={styles.footer}>footer</div> */}
    <Layout> 
      <Header className={styles.header}>
        <div className={styles.left}>
          <Logo/>
        </div>
        <div className={styles.right}>
          <UserInfo/>
        </div>
      </Header>

      <Layout>
        <Content className={styles.main}>
          {waitingUserData ? 
          <Spin tip="Loading" size="large">
            <div style={{ minHeight: 100 }} />
          </Spin> : 
          <Outlet/>}
        </Content>
      </Layout>
      

      <Footer className={styles.footer}>
        问卷调查工具 &copy; 2025 - present. Created by 林怡然
      </Footer>
    </Layout>  
  </>)
}

export default MainLayout