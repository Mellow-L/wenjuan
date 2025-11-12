import React,{type FC} from "react";
import { useParams } from "react-router-dom";

const Edit: FC = () => {
  const { id = '' } = useParams()
  return (<>
    <p>Edit id为：{id} 的问卷</p>
  </>)
}

export default Edit