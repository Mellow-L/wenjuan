import React, { type FC } from 'react'
import {
  closestCenter,
  DndContext,
  MouseSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';


type PropsType = {
	children: JSX.Element | JSX.Element[]; // 负责视觉渲染 SortableItem 组件
	items: Array<{ id: string; [key: string]: any }>; // 合法成员 id 列表
	onDragEnd: (oldIndex: number, newIndex: number) => void;
};

const SortableContainer:FC<PropsType> = (props:PropsType) => {
  const {children,items,onDragEnd} = props

  const sensors = useSensors(
    useSensor(MouseSensor,{
      activationConstraint:{
        distance:8, // 点击后移动 8px
      },
    })
  )
  function handleDragEnd(e:DragEndEvent){
    const {active,over} = e
    if(over===null)return 
    if(active.id !== over.id){
      const oldIndex = items.findIndex(c => c.fe_id === active.id)
      const newIndex = items.findIndex(c => c.fe_id === over.id)
      onDragEnd(oldIndex,newIndex)
    }
  }
  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        {children}
      </SortableContext>
    </DndContext>
  ) 
}

export default SortableContainer