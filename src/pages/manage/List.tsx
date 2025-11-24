import React, { useEffect, useRef, useState, type FC } from "react";
import styles from "../../styles/ManageCommon.module.scss";
import { useDebounceFn, useRequest, useTitle } from "ahooks";
import { Empty, Spin, Typography } from "antd";
import SurveyFinder from "../../components/SurveyFinder";
import SurveyCard from "../../components/SurveyCard";
import { useSearchParams } from "react-router-dom";
import { getSurveyListService } from "../../services/survey";
import { LIST_PAGE_SIZE_DEFAULT, LIST_SEARCH_PARAM_KEY } from "../../constant";
const { Title } = Typography;

const List: FC = () => {
	useTitle("我的问卷列表");
	const [page,setPage] = useState(1) // 虚拟页面数。数据是滚动所拼接的。
	const [list,setList] = useState([]) // 数据。是累计的。
	const [total,setTotal] = useState(0) 
	const haveMoreListData = total > list.length
	const [searchParams] = useSearchParams()
	const keyword = searchParams.get(LIST_SEARCH_PARAM_KEY)??''
	const containerRef = useRef<HTMLDivElement>(null)

	// 数据加载具体
	const{ run:loadListData, loading } = useRequest(
		async ()=>{	
		const data = await getSurveyListService({ // 携带现有 url 参数
			keyword,
			page,
			pageSize:LIST_PAGE_SIZE_DEFAULT // 10 条为单位加载    
		}) 
		return data
	},{
		manual:true,
		onSuccess(result){
			const { list: l = {}, total = 0} = result
			setList(list.concat(l)) // 返回整体+l
			setPage(page+1) // 虚拟页数+1
			setTotal(total) 
		}
	})

	// 滚动触发数据加载
	const { run: tryLoadMore } = useDebounceFn(()=>{
		const elem = containerRef.current // 获取当前的目标 DOM
		if(!elem) return 
		const domRect = elem.getBoundingClientRect()
		if(!domRect) return 
		const {bottom} = domRect

		if(bottom <= window.innerHeight){
			console.log('调用tryLoadMore')
			loadListData() // 触发加载
		}		
	},{
		wait:500
	}
)  

	useEffect(()=>{
		tryLoadMore()		
	},[searchParams,tryLoadMore]) // 也依赖其中搜索 keyword 变化

	useEffect(()=>{  
		if(haveMoreListData){
			window.addEventListener('scroll',tryLoadMore)
		}
		return ()=>{
			window.removeEventListener('scroll',tryLoadMore)
		}
	},[searchParams,haveMoreListData,tryLoadMore]) 

	// 搜索触发重置加载
	useEffect(()=>{ 
		setPage(1)
		setList([])
		setTotal(0) 
	},[keyword])

	return (
		<>
			<div className={styles.header}>
				<div className={styles.left}>
					<Title level={3}>我的问卷</Title>
				</div>
				<div className={styles.right}>
					<SurveyFinder />
				</div>
			</div>

			<div className={styles.content}>
				{/* {loading && (
					<Spin tip="Loading" size="large">
						<div style={{ minHeight: 100 }} />
					</Spin>
				)} */}
				{list.length > 0 ?
					list.map((survey) => {
						const { _id } = survey;
						return <SurveyCard key={_id} {...survey}></SurveyCard>;
					}) : 
					<Empty description="暂无问卷，快去创建吧" />
				}
			</div>

			<div ref={containerRef} className={styles.footer}>
				{(loading || haveMoreListData) && <Spin size="large" />}
			</div>
		</>
	);
};

export default List;
