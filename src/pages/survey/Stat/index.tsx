import React,{type FC} from "react";
import { useTitle } from "ahooks";
import useLoadSurveyData from "../../../hooks/useLoadSurveyData";
import { Spin } from "antd";
const Stat: FC = () => {
  useTitle('问卷分析器')
  const {loading,data} = useLoadSurveyData()
  return (<>
    {/* <p>Stat id为：{id} 的问卷</p>统计 */}
    {loading ? (
				<Spin tip="Loading" size="large">
          <div style={{ minHeight: 100 }} />
        </Spin> 
			) : (
				<p>{JSON.stringify(data)}</p>
			)}
  </>)
}

export default Stat