import { configureStore } from "@reduxjs/toolkit";
import { userSlice, type UserStateType } from "./userSlice";
import { componentsSlice, type ComponentsStateType } from "./componentsSlice";
import { surveyInfoSlice, type surveyInfoStateType } from "./surveyInfoSlice";
import undoable, { excludeAction,type StateWithHistory } from "redux-undo";

export type StateType = {
  user:UserStateType
  surveyInfo:surveyInfoStateType
  components:StateWithHistory<ComponentsStateType>
}
export default configureStore({
  reducer:{
    // 用户信息
    user:userSlice.reducer ,
    // 问卷信息
    surveyInfo:surveyInfoSlice.reducer,
    // 组件列表
    components:undoable(componentsSlice.reducer, {
      limit:20, // 限制步骤
      filter:excludeAction([ // 限制屏蔽行为
        'components/resetComponents',
        'components/changeSelectedId',
        'components/selectPrevComponent',
        'components/selectNextComponent',
      ])
    })
  }
})