import React, { type FC } from "react";
import SurveyCard from "../../components/SurveyCard";
import styles from "../../styles/ManageCommon.module.scss";
import { useTitle } from "ahooks";

import { Empty, Pagination, Spin, Typography } from "antd";
import SurveyFinder from "../../components/SurveyFinder";
import useLoadSurveyListData from "../../hooks/useLoadSurveyListData";
import ListPagination from "../../components/ListPagination";
const { Title } = Typography;

const Star: FC = () => {
	useTitle("我收藏的问卷");
	const { data, loading } = useLoadSurveyListData({ isStar: true });
	const { list = [], total = 0 } = data || {};

	return (
		<>
			<div className={styles.header}>
				<div className={styles.left}>
					<Title level={3}>我收藏的问卷</Title>
				</div>
				<div className={styles.right}>
					<SurveyFinder />
				</div>
			</div>

			<div className={styles.content}>
				{/* 加载状态 */}
				{loading && (
					<Spin tip="Loading" size="large">
						<div style={{ minHeight: 100 }} />
					</Spin>
				)}

				{/* 非空 问卷数据 : 空数据 */}
				{
         !loading && 
          ( 
            list.length > 0 ? 
            (list.map((survey) => {
                const { _id } = survey;
                return <SurveyCard key={_id} {...survey}></SurveyCard>;
              })) 
              : 
            (<Empty description="暂无数据" />)
          )
        }
			</div>

			<div className={styles.footer}>
        <ListPagination total={total}/>
      </div>
		</>
	);
};

export default Star;
