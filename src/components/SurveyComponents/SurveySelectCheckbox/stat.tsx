import React, { type FC } from 'react'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import type { SurveySelectCheckboxStatProps } from './interface';

const SurveySelectCheckboxStat:FC<SurveySelectCheckboxStatProps> = ({ stat=[] }) => { 
  return (
		<div style={{ width: "300px", height: "250px"}}>
			<ResponsiveContainer>
				<BarChart
					responsive
					data={stat}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Bar dataKey="count" fill="#8884d8" isAnimationActive={true} />
					{/* <RechartsDevtools /> */}
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}

export default SurveySelectCheckboxStat