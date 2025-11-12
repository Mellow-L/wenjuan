import React,{type FC} from "react";
import {Outlet} from 'react-router-dom'
import styles from './MainLayout.module.scss'
const MainLayout: FC = () => {

  return (<>
    <div className={styles.header}>header</div>
    <div>
      <Outlet></Outlet>
    </div>
    <div className={styles.footer}>footer</div>
  </>)
}

export default MainLayout