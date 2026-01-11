const Mock = require('mockjs')
const Random = Mock.Random
function getComponents(){
  return [
    {
      fe_id:Random.id(), // 组件唯一标识 用作前端的列表渲染
      type:'SurveyTitle', // 组件类型，前后端约定 type
      title:'标题', // 组件名称用于左右侧栏显示
      props:{ // 组件具体属性
        text:'个人信息收集',
        level:1,
        isCenter:true
      },
      isHidden:false,
      isLocked:false,
    },
    {
      fe_id:Random.id(),
      type:'SurveyParagraph', 
      title:'段落 n', 
      props:{ 
        text:'一个后端返回的段落',
        isCenter:false
      },
      isHidden:false,
      isLocked:false,
    },
    {
      fe_id:Random.id(),
      type:'SurveyInfo', 
      title:'问卷信息1', 
      props:{ 
        title:'问卷信息 1 的标题',
        description:'这里描述了问卷信息 1'
      },
      isHidden:false,
      isLocked:false,
    },
    {
      fe_id:Random.id(),
      type:'SurveySelectRadio', 
      title:'单选 1', 
      props:{ 
        title:'单选 1的题干',
        isVertical:true,
        options:[
          {value:'default item1',label:'选项  m1'},
          {value:'default item2',label:'选项s 2'},
          {value:'default item3',label:'选项 3s'},
        ],
        value:'default item1'
      },
      isHidden:false,
      isLocked:false,
    },
    {
      fe_id:Random.id(),
      type:'SurveySelectCheckbox', 
      title:'多选 1', 
      props:{ 
        title:'多选 1 的题干',
        isVertical:true, 
        options:[
          {value:'default item1',label:'选项 a1',checked:true}, 
          {value:'default item2',label:'选项 s2',checked:false},
          {value:'default item3',label:'选项 v3',checked:true},
        ]
      },
      isHidden:false,
      isLocked:false,
    },
    {
      fe_id:Random.id(),
      type:'SurveyInput',
      title:'输入框0',
      props:{
        title:'姓名',
        placeholder:'请输入你的姓名' 
      },
      isHidden:false,
      isLocked:false,
    },
    {
      fe_id:Random.id(),
      type:'SurveyInput',
      title:'输入框1',
      props:{
        title:'姓名nnn',
        placeholder:'请输入你的姓名nnn' 
      },
      isHidden:false,
      isLocked:true,
    },
    {
      fe_id:Random.id(),
      type:'SurveyInput',
      title:'输入框2',
      props:{
        title:'手机号',
        placeholder:'请输入你的手机号' 
      },
      isHidden:false,
      isLocked:false,
    },
  ]
}
module.exports = getComponents