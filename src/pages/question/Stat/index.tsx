import React,{type FC} from "react";
import { useTitle } from "ahooks";
const Stat: FC = () => {
  useTitle('问卷分析器')
  return (<>
    <p>Stat</p>
  </>)
}

export default Stat