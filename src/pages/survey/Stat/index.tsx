import React,{useState, type FC} from "react";
import { useTitle } from "ahooks";
import useLoadSurveyData from "../../../hooks/useLoadSurveyData";
import { Button, Result, Space, Spin } from "antd";
import useGetSurveyInfo from "../../../hooks/useGetSurveyInfo";
import { MANAGE_LIST_PATHNAME } from "../../../router";
import { useNavigate } from "react-router-dom";
import styles from './index.module.scss'
import Header from "./Header";
import ComponentList from "./ComponentList";
import StatForm from "./StatForm";
import StatChart from "./StatChart";
const Stat: FC = () => {
  const {loading} = useLoadSurveyData()
  const  {title,isPublished} = useGetSurveyInfo()
  const nav = useNavigate()
  
  const [selectedId, setSelectedId] = useState('')
  const [selectedType, setSelectedType] = useState('')

  useTitle(`答卷统计-${title}`)
  const LoadingElem = (
    <Spin tip="Loading" size="large">
      <div style={{ minHeight: 100 }} />
    </Spin>
  )
  function genContentElem(){
    if(typeof isPublished === 'boolean' && !isPublished){
      return(<Result
        status="warning"
        title="404"
        subTitle="该问卷尚未发布"
        extra={
          <Space>
            <Button type="primary" onClick={()=>nav(-1)}>返回</Button>
            <Button type="primary" onClick={()=>nav(MANAGE_LIST_PATHNAME)}>去问卷列表</Button>
          </Space>      
        }
      />)
    }else{
      return (
				<div className={styles.content}>
					<div className={styles.left}>
						<ComponentList
							selectedId={selectedId}
							setSelectedId={setSelectedId}
							setSelectedType={setSelectedType}
						/>
					</div>
					<div className={styles.main}>
            <StatForm 
              selectedId={selectedId}
							setSelectedId={setSelectedId}
							setSelectedType={setSelectedType}
            />
          </div>
					<div className={styles.right}>
            <StatChart
              selectedId={selectedId}
              selectedType={selectedType}
							setSelectedId={setSelectedId}
							setSelectedType={setSelectedType}
            />
          </div>
				</div>
			);
    }
  }
  
  return (<div className={styles.container}>
    <Header/>
    <div className={styles['content-wrapper']}>
      {loading && LoadingElem}
      {!loading && genContentElem()}
    </div>
  </div>)
}

export default Stat