import React, { useRef, type FC } from 'react'
import styles from './Header.module.scss'
import { Button, Input, type InputRef, message, Popover, Space,Tooltip,Typography } from 'antd'
import { CopyOutlined, LeftOutlined, QrcodeOutlined } from '@ant-design/icons'
import { useNavigate, useParams } from 'react-router-dom'
import useGetSurveyInfo from '../../../hooks/useGetSurveyInfo'
import { EDIT_PATHNAME } from '../../../router'
import { QRCodeSVG } from 'qrcode.react'
const {Title} = Typography
const Header:FC = () => {
  const nav = useNavigate()
  const {title,isPublished} = useGetSurveyInfo()
  const {id} = useParams()
  const urlInputRef = useRef<InputRef>(null)
  function copySurveyURL(){
    const elem = urlInputRef.current  
    if(elem === null)return
    elem.select()
    document.execCommand('copy') // 删除线方法：将要废除
    message.success('拷贝成功')
  }
  function getShareElem(){
    if(!isPublished)return null
    // const url = `http://localhost:3000/survey/${id}`
    const url = `http://172.20.10.3:3000/survey/${id}`

    const QRCodeElem = <div style={{textAlign:'center'}}>
      <QRCodeSVG value={url} size={150}/>
    </div>

    return <Space>
      <Input value={url} style={{width:'400px'}} ref={urlInputRef}/>
      <Tooltip title="拷贝链接">
        <Button shape="circle" icon={<CopyOutlined />} onClick={copySurveyURL}/>
      </Tooltip>
      <Popover content={QRCodeElem}>
        <Button shape="circle" type="primary" icon={<QrcodeOutlined />}></Button>
      </Popover>
    </Space>
  }
  return (
		<div className={styles["header-wrapper"]}>
			<div className={styles.header}>
				<div className={styles.left}>
					<Space>
						<Button
							type="link"
							icon={<LeftOutlined />}
							onClick={() => nav(-1)}
							style={{ padding: "0 12px" }}
						>
							返回
						</Button>
						<Title level={5}>{title}</Title>
					</Space>
				</div>
				<div className={styles.main}>
          {getShareElem()}
        </div>
				<div className={styles.right} style={{ padding: "0 12px" }}>
					<Button type="primary" onClick={() => nav(`${EDIT_PATHNAME}/${id}`)}>
						编辑问卷
					</Button>
				</div>
			</div>
		</div>
	);
}

export default Header