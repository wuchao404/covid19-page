import React, { useEffect } from 'react';
import {Tabs,Input} from 'antd';
import './index.less';
import Domestic from '../domestic/index'
import Overseas from '../overseas/index'
const { TabPane } = Tabs;
const epidemic = (props: any) => {
    //formAPI 声明
    const onFinish = (values :any)=> {
      console.log('Received values of form: ', values);
      //接口
    };
    const callback=(key:any) =>{
        console.log(key);
    }
  
    return (
      <div className="epidemic_div">
       <Tabs type="card" size="large" defaultActiveKey="1" onChange={callback}>
            <TabPane tab="国内疫情" key="1">
            <Domestic></Domestic>
            </TabPane>
            <TabPane tab="国外疫情" key="s2">
              <Overseas></Overseas>
            </TabPane>
        </Tabs>
      </div>
    )
}
export default epidemic