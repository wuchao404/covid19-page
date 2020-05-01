import React, { useEffect, useState, Children } from 'react';
import { Tabs, Input, Row, Col } from 'antd';
import './index.less';
const Card = (props: any) => {
    
    return (
        <div className="statistics">
            <Row gutter={[5, 5]}>
                {
                    props.datas.map((item: any, index: any) => {
                        return (
                            <Col xs={12} md={8} key={index}>
                                <div className="statisticsCard" style={{ background: item.bgColor }}>
                                    <div className="cardTitle">
                                        {item.top}<span style={{ color: item.color }}>{item.add}</span>
                                    </div>
                                    <div className="cardContent" style={{ color: item.color }}>{item.content}</div>
                                    <div className="cardbottom">{item.bottom}</div>
                                </div>
                            </Col>
                        )
                    })
                }
            </Row>
        </div>
    )
}
export default Card