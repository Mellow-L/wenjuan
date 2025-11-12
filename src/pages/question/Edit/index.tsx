import React,{type FC} from "react";
import { useParams } from "react-router-dom";
import { useTitle } from "ahooks";
const Edit: FC = () => {
  useTitle('问卷编辑器')
  const { id = '' } = useParams()
  return (<>
    <p>Edit id为：{id} 的问卷</p>
  </>)
}

export default Edit