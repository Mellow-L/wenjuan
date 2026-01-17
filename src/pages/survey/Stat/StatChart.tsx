import Title from 'antd/es/typography/Title'
import React, { useEffect, useState, type FC } from 'react'
import { getComponentStaticDataService } from '../../../services/survey'
import { useParams } from 'react-router-dom'
import { useRequest } from 'ahooks'
import { Spin } from 'antd'
import getComponentConfigByType from '../../../components/SurveyComponents'

type PropsType = {
  selectedId: string
  selectedType:string
  setSelectedId: (id: string) => void
  setSelectedType: (type: string) => void
}

const StatChart:FC<PropsType> = (props:PropsType)=> {
  const {id = ''} = useParams()
  const {selectedId,selectedType} = props
  const [stat,setStat] = useState([])
  const {loading,run} = useRequest(async ()=>{
    const res = await getComponentStaticDataService(id,selectedId)
    return res
  },{
    manual:true,
    onSuccess(res){
      console.log('stat',stat);
      
      setStat(res.stat || [])
    }
  })
  useEffect(()=>{
    if(selectedId){
      run()
    }
  },[run,id,selectedId])

  function genStatItem(){
    if(!selectedId){ 
      return <div>未选中组件</div>
    }
    const {ComponentStat} = getComponentConfigByType(selectedType) || {}
    if(!ComponentStat){
      return <div>此组件无统计图标</div>
    }
    return (
      <ComponentStat stat={stat}/>
    )
  }
  return (<>
    <Title level={4} style={{ textAlign: "center", margin: "10px" }}>
      图表统计
    </Title>
    {loading && (
      <div style={{ textAlign: "center" }}>
        <Spin />
      </div>
    )}
    {genStatItem()}
  </>)
}

export default StatChart