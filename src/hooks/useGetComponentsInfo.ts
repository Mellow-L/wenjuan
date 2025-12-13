import { useSelector } from "react-redux"
import type { StateType } from "../store"
import type { ComponentsStateType } from "../store/componentsSlice"

// 从 store 中拿
function useGetComponentsInfo(){
  const componentsInfo = useSelector<StateType>(state => state.components) as ComponentsStateType
  const {componentsList = [],selectedId = ''} = componentsInfo
  const selectedComponentInfo = componentsList.find(c => c.fe_id === selectedId) ?? {}
  return {componentsList,selectedId,selectedComponentInfo}
}

export default useGetComponentsInfo