import React,{type FC} from "react";
import { Outlet } from "react-router-dom";
const SurveyLayout: FC = () => {

  return (<>
    <div>SurveyLayout</div>
    <div>
       <Outlet></Outlet>
    </div>
  </>)
}

export default SurveyLayout