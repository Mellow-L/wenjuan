import { Input } from "antd";
import React, { useEffect, useState, type ChangeEvent, type FC } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { LIST_SEARCH_PARAM_KEY } from "../constant";

// 问卷检索器。
// 起到的作用是改变 url 的 searchParams
// 实际的数据获取由自定义 hook useLoadSurveyData来做
const SurveyFinder: FC = () => {
	const { Search } = Input;
	const [surveyInfo, setSurveyInfo] = useState<string>("");
  const nav = useNavigate()
  const {pathname} = useLocation()
  const [searchParams] = useSearchParams()
  useEffect(()=>{
    const curParam = searchParams.get(LIST_SEARCH_PARAM_KEY) || ''
    setSurveyInfo(curParam)
  },[searchParams])

	function onChange(e: ChangeEvent<HTMLInputElement>) {
		setSurveyInfo(e.target.value);
	}

	function onSearch(value: string) {
		console.log("搜索", value);
    // nav('/manage/list?keyword=')
    nav({
      pathname:pathname,
      search:`${LIST_SEARCH_PARAM_KEY}=${value}`
    })
	}
	return (
		<> 
			<Search
        value={surveyInfo}
				size="large"
				allowClear
				placeholder="在此输入目标问卷信息"
				onChange={onChange}
				onSearch={onSearch}
				enterButton
			/>
			{surveyInfo}
		</>
	);
};

export default SurveyFinder;
