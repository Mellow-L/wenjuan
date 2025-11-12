import React,{type FC} from "react";
import { useTitle } from "ahooks";
const Star: FC = () => {
  useTitle('我收藏的问卷')
  return (<>
    <p>Star</p>
  </>)
}

export default Star