import { useRequest } from 'ahooks'
import React, { useState, type FC } from 'react'
import { getStatListService } from '../../../services/stat'
import { useParams } from 'react-router-dom'
import Title from 'antd/es/typography/Title'
import { Pagination, Spin, Table } from 'antd'
import { STAT_PAGE_SIZE_DEFAULT } from '../../../constant'
import useGetComponentsInfo from '../../../hooks/useGetComponentsInfo'

type PropsType = {
  selectedId: string
  setSelectedId: (id: string) => void
  setSelectedType: (type: string) => void
}
const StatForm:FC<PropsType> = (props:PropsType) => {
  const {selectedId,setSelectedId,setSelectedType} = props
  const {id = ''} = useParams()
  const [total,setTotal] = useState(0)
  const [list,setList] = useState([])
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(STAT_PAGE_SIZE_DEFAULT)
  const {loading} = useRequest(
    async ()=>{
      const res = await getStatListService(id,{page,pageSize})
      return res
    },
    {
      refreshDeps: [id, page, pageSize], // 刷新依赖项
      onSuccess(res){
        const {total,list = []} = res
        setTotal(total)
        setList(list)
        // console.log('统计的 list',list)
        // console.log('page,pageSize,total',page,pageSize,total);
      },
    }
  )
  const {componentsList} = useGetComponentsInfo()
  const columns = componentsList.filter(c=>(
    c.type === 'SurveyInput'||
    c.type === 'SurveyInputPara'||
    c.type === 'SurveySelectRadio'||
    c.type === 'SurveySelectCheckbox'
  )).map(c => {
    const { fe_id, title, props = {}, type } = c
    
    const colTitle = props!.title || title
    // const colTitle = title
    return {
      title: (
        <div
          style={{ cursor: 'pointer' }}
          onClick={() => {
            setSelectedId(fe_id)
            setSelectedType(type)
          }}
        >
          <span style={{ color: fe_id === selectedId ? '#f26ca1ff' : 'inherit' }}>
            {colTitle}
          </span>
        </div>
      ),
      dataIndex: fe_id,
    }
  })

  const dataSource = list.map((answer: any) => ({ ...answer, key: answer._id }))
  const TableElem = (
    <>
      <Table columns={columns} dataSource={dataSource} pagination={false}></Table>
      <div style={{ textAlign: 'center',marginTop:'10px' }}>
        <Pagination
          total={total}
          pageSize={pageSize}
          current={page}
          onChange={page => setPage(page)}
          onShowSizeChange={(page, pageSize) => {
            setPage(page)
            setPageSize(pageSize)
          }}
        />
      </div>
    </>
  )
  return (
		<div>
			<Title level={4} style={{ textAlign: "center", margin: "10px" }}>
				答卷数量: {!loading && total}
			</Title>
			{loading && (
				<div style={{ textAlign: "center" }}>
					<Spin />
				</div>
			)}
			{!loading && TableElem}
		</div>
	);
}

export default StatForm 