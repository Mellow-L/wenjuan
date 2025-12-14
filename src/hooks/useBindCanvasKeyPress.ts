import {useKeyPress} from 'ahooks'
import { useDispatch } from 'react-redux'
import { copyComponentInfo, deleteSelectedComponent, pasteComponentInfo, selectFollowingComponent, selectPrevComponent } from '../store/componentsSlice'

function isActiveElementValid(){
  const activeElem = document.activeElement
  if(activeElem === document.body)return true 
}
function useBindCanvasKeyPress() {
  const dispatch = useDispatch()
  // delete
  useKeyPress(['backspace','delete'],()=>{
    if(isActiveElementValid()){
      dispatch(deleteSelectedComponent())
    }
  })
  // copy
  useKeyPress(['ctrl.c','meta.c'],()=>{
    if(isActiveElementValid()){
      dispatch(copyComponentInfo())
    } 
  })
  // paste
  useKeyPress(['ctrl.v','meta.v'],()=>{
    if(isActiveElementValid()){
      dispatch(pasteComponentInfo())
    } 
  })
  // 选中上一个
  useKeyPress(['uparrow'],()=>{
    dispatch(selectPrevComponent()) 
  })
  // 选中下一个
  useKeyPress(['downarrow'],()=>{
    if(isActiveElementValid()){
      dispatch(selectFollowingComponent())
    } 
  })
}

export default useBindCanvasKeyPress