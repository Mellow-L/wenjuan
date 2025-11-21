import React,{useEffect, type FC} from "react";
import { useParams } from "react-router-dom";
import { useTitle } from "ahooks";
import { getSurveyService } from "../../../services/survey";
const Edit: FC = () => {
  useTitle('问卷编辑器')
  const { id = '' } = useParams()
  async function getSurvey() {
    const data = await getSurveyService(id)
    console.log('data',data);     
  }
  useEffect(()=>{
    getSurvey()
  })
  return (<>
    <p>Edit id为：{id} 的问卷</p>

  </>)
}

export default Edit