import React, { FC, useEffect, useState } from 'react'
import styles from './SurveySelectCheckbox.module.scss'

type PropsType = {
  fe_id: string
  props: {
    title: string
    isVertical?: boolean
    options: Array<{
      value: string
      label: string
      checked: boolean
    }>
  }
}

const SurveySelectCheckbox: FC<PropsType> = ({ fe_id, props }) => {
  const { title, isVertical, options = [] } = props

  const [selectedValues, setSelectedValues] = useState<string[]>([])

  // 初始化时，判断默认选中
  useEffect(() => {
    options.forEach(item => {
      const { value, checked } = item
      if (checked) {
        setSelectedValues(selectedValues => selectedValues.concat(value))
      }
    })
  }, [options])

  // 切换选中
  function toggleChecked(value: string) {
    if (selectedValues.includes(value)) {
      // 已经被选中了，则取消选择
      setSelectedValues(selectedValues => selectedValues.filter(v => v !== value))
    } else {
      // 未被选中，则增加选择
      setSelectedValues(selectedValues.concat(value))
    }
  }

  return <>
    <p>{title}</p>

    <input type="hidden" name={fe_id} value={selectedValues.toString()} />

    <ul className={styles.list}>
      {options.map(item => {
        const { value, label, checked } = item

        let className
        if (isVertical) className = styles.verticalItem
        else className = styles.horizontalItem

        return <li key={value} className={className}>
          <label>
            <input 
              type="checkbox" 
              checked={selectedValues.includes(value)}
              onChange={() => toggleChecked(value)}
            />
            {label}
          </label>
        </li>
      })}
    </ul>
  </>
}

export default SurveySelectCheckbox
