import { Input } from "antd";
import React, { useEffect, useState, type ChangeEvent, type FC } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { LIST_SEARCH_PARAM_KEY } from "../constant";

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
