import type { ComponentInfoType } from ".";

/**
 * 获取下一个 selectedId （用途：执行删除、隐藏组件后）
 * @param fe_id 
 * @param componentsList 
 */
export function getNextSelectedId(fe_id: string,componentsList:Array<ComponentInfoType>){
  const visibleComponentsList = componentsList.filter(c => c.isHidden === false)
  // 找到行为目标 index
  const index = visibleComponentsList.findIndex(c=>c.fe_id === fe_id)
  if(index < 0)return ''
  let newSelectedId = ''
  const length = visibleComponentsList.length
  if(length <= 1){
    // 此问卷只有一个组件
    newSelectedId = ''
  }else{
    // 多于一个组件
    if(index === length - 1){
      // 目标是最后一个组件，若执行删除 则选中上一个
      newSelectedId = visibleComponentsList[index - 1].fe_id
    }else{
      // 目标不在末尾，则往后选择
      newSelectedId = visibleComponentsList[index + 1].fe_id
    }
  }
  return newSelectedId
}