import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export type surveyInfoStateType = {
  title:string
  desc?:string
  js?:string
  css?:string
}

const INIT_STATE:surveyInfoStateType = {
  title:'',
  desc:'',
  js:'',
  css:''
}

export const surveyInfoSlice = createSlice({
  name:'surveyInfo',
  initialState:INIT_STATE,
  reducers: {
    resetSurveyInfo:(state:surveyInfoStateType,action:PayloadAction<surveyInfoStateType>)=>{
      return action.payload
    }
  },
})

export const {resetSurveyInfo} = surveyInfoSlice.actions