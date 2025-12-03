import { configureStore } from "@reduxjs/toolkit";
import { userSlice, type UserStateType } from "./userSlice";

export type StateType = {
  user:UserStateType
}
export default configureStore({
  reducer:{
    user:userSlice.reducer
  }
})