import { Pagination } from "antd";
import React,{useEffect, useState, type FC} from "react";
import { LIST_PAGE_PARAM_KEY, LIST_PAGE_SIZE_DEFAULT, LIST_PAGE_SIZE_PARAM_KEY } from "../constant";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

type PropType = {
  total:number
}

const ListPagination:FC<PropType> = (props : PropType) => {
  
  const { total } = props
  const [currentPage,setCurrentPage] = useState(1)
  const [pageSize,setPageSize] = useState(LIST_PAGE_SIZE_DEFAULT)
  const [searchParams] = useSearchParams()
  const nav = useNavigate()
  const {pathname} = useLocation()

  useEffect(()=>{
    // 从 url 参数中得到 分页参数
    const page = parseInt(searchParams.get(LIST_PAGE_PARAM_KEY)||'')||1// 无 page 参数则默认为第一页
    setCurrentPage(page)
    const pageSize = parseInt(searchParams.get(LIST_PAGE_SIZE_PARAM_KEY)||'')||LIST_PAGE_SIZE_DEFAULT// 无则为默认 size 值
    setPageSize(pageSize)
  },[searchParams])

  function handlePageChange(page:number,pageSize:number){
    // Pagination page pageSize变化时的回调。
    // 1.改变 url 参数 2.跳转
    searchParams.set(LIST_PAGE_PARAM_KEY,page.toString())
    searchParams.set(LIST_PAGE_SIZE_PARAM_KEY,pageSize.toString())
    console.log();
    
    nav({
      pathname,
      search:searchParams.toString()
    })
  }
  return (
    <Pagination
      align="center"
      // defaultCurrent={1}
      current={currentPage}
      pageSize={pageSize}
      total={total}
      style={{ background: "#fff", borderRadius: "5px" }}
      onChange={handlePageChange}
    />
  )
}

export default ListPagination