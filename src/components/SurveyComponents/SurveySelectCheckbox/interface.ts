export type OptionType = {
  value:string
  label:string
  checked:boolean
}

export type SurveySelectCheckboxPropsType = {
  title?:string
  isVertical?:boolean
  options?:OptionType[]
  onChange?:(newProps:SurveySelectCheckboxPropsType)=>void
}

export const SurveySelectCheckboxDefaultProps:SurveySelectCheckboxPropsType = {
  title:'一个多选问题',
  isVertical:false, 
  options:[
    {value:'default item1',label:'选项 1',checked:false}, 
    {value:'default item2',label:'选项 2',checked:false},
    {value:'default item3',label:'选项 3',checked:false},
  ]
}