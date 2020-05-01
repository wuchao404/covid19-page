import React, { useEffect, useState, Children } from 'react';
import { Tabs, Input, Row, Col } from 'antd';
import moment from 'moment';
import ReactEcharts from 'echarts-for-react';
import Card from '../components/card/index'
import Diagram from '../components/diagram/index'
import SortTable from '../components/sortTable/index'
import './index.less';
const Domestic = (props: any) => {
    useEffect(()=>{
        
    },[])
    const data = [
        {
            "top": "较上日",
            "content": "84223",
            "bottom": "累计确诊",
            "add": "+43",
            "bgColor": "#fdf1f1",
            "color": "#cc1e1e"
        },
        {
            "top": "较上日",
            "content": "84223",
            "bottom": "累计确诊",
            "add": "+43",
            "bgColor": "#f1f8f4",
            "color": "#178b50"
        },
        {
            "top": "较上日",
            "content": "84223",
            "bottom": "累计确诊",
            "add": "+43",
            "bgColor": "#f3f6f8",
            "color": "#4e5a65"
        },
        {
            "top": "较上日",
            "content": "84223",
            "bottom": "累计确诊",
            "add": "+43",
            "bgColor": "#fdf1f1",
            "color": "#f23a3b"
        },
        {
            "top": "较上日",
            "content": "84223",
            "bottom": "累计确诊",
            "add": "+43",
            "bgColor": "#faf2f6",
            "color": "#ca3f81"
        },
        {
            "top": "较上日",
            "content": "84223",
            "bottom": "累计确诊",
            "add": "+43",
            "bgColor": "#fcf4f0",
            "color": "#f05926"
        }
    ]
    return (
        <div className="domestic_div">
            <div className="time">截止统计 {moment().format('YYYY-MM-DD HH:mm:ss ')}</div>
            <Card datas={data}></Card>
            <Diagram></Diagram>
            <SortTable></SortTable>
        </div>
    )
}
export default Domestic
