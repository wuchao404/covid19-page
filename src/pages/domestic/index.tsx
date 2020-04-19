import React, { useEffect } from 'react';
import {Tabs,Input,Row, Col} from 'antd';
import moment from 'moment';
import './index.less';
const { TabPane } = Tabs;
const domestic = (props: any) => {
   const data=[
        {
           "top":"较上日",
           "content":"84223",
           "bottom":"累计确诊",
           "add":"+43",
           "bgColor":"#fdf1f1",
           "color":"#cc1e1e"
        },
        {
            "top":"较上日",
            "content":"84223",
            "bottom":"累计确诊",
            "add":"+43",
            "bgColor":"#f1f8f4",
            "color":"#178b50"
        },
        {
            "top":"较上日",
            "content":"84223",
            "bottom":"累计确诊",
            "add":"+43",
            "bgColor":"#f3f6f8",
            "color":"#4e5a65"
        },
        {
            "top":"较上日",
            "content":"84223",
            "bottom":"累计确诊",
            "add":"+43",
            "bgColor":"#fdf1f1",
            "color":"#f23a3b"
        },
        {
            "top":"较上日",
            "content":"84223",
            "bottom":"累计确诊",
            "add":"+43",
            "bgColor":"#faf2f6",
            "color":"#ca3f81"
        },
        {
            "top":"较上日",
            "content":"84223",
            "bottom":"累计确诊",
            "add":"+43",
            "bgColor":"#fcf4f0",
            "color":"#f05926"
        }
    ]
    return (
       <div className="domestic_div">
            
            <div className="time">截止统计 {moment().format('YYYY-MM-DD HH:mm:ss ')}</div>
                <div className="statistics">
                    
                    <Row gutter={[5, 5]}>
                        {
                            data.map((item:any,index:any)=>{
                                return(
                                <Col xs={12} md={8}  >
                                    <div className="statisticsCard" style={{background:item.bgColor}}>
                                        <div className="cardTitle">
                                            {item.top}<span style={{color:item.color}}>{item.add}</span>
                                        </div>
                                        <div className="cardContent" style={{color:item.color}}>{item.content}</div>
                                        <div className="cardbottom">{item.bottom}</div>
                                    </div>
                                </Col>
                                )
                            })
                        }
                        
                        
                    </Row>
            </div>
            
       </div>
    )
}
export default domestic