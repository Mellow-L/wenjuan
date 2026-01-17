import React, { type FC } from 'react'
import type { SurveySelectRadioStatProps } from './interface'
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import { STAT_COLOR } from '../../../constant'

const SurveySelectRadioStat:FC<SurveySelectRadioStatProps> = ({stat = []}) => {

  return (
    <div style={{width:'300px', height:'300px'}}>
      <ResponsiveContainer>
        <PieChart
          responsive
        >
          <Pie
            data={stat}
            dataKey="count"
            cx="50%"
            cy="50%"
            outerRadius="40%"
            fill="#8884d8"
            isAnimationActive={true}
            label={i=>`${i.name}：${i.value}`}
          >
            {stat.map((i,index)=>{
              return <Cell key={index} fill={STAT_COLOR[index]}/>
            })}
          </Pie>
          <Tooltip/>
          {/* <RechartsDevtools /> */}
        </PieChart>
      </ResponsiveContainer>
    </div> 
  )
}

export default SurveySelectRadioStat