import React,{type FC} from "react";
import { useTitle } from "ahooks";
const Trash: FC = () => {
  useTitle('问卷回收站')
  return (<>
    <p>Trash</p>
  </>)
}

export default Trash