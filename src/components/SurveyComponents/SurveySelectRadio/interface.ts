export type OptionType = {
  value:string
  label:string
}

export type SurveySelectRadioPropsType = {
  title?:string
  isVertical?:boolean
  options?:OptionType[]
  value?:string
  onChange?:(newProps:SurveySelectRadioPropsType)=>void
}

export const SurveySelectRadioDefaultProps:SurveySelectRadioPropsType = {
  title:'一个单选问题',
  isVertical:false,
  options:[
    {value:'default item1',label:'选项 1'},
    {value:'default item2',label:'选项 2'},
    {value:'default item3',label:'选项 3'},
  ],
  value:''
}