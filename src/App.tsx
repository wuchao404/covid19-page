import React, { useEffect } from 'react';
import {Button} from 'antd';
import './App.css';
import _axios from './utils/axios';

const App = () => {
  useEffect(() => {
    
  }, []);
  const getList = () => {
    _axios({
      url:'/app/mock/7/api/commission/activityRule/factor/get',
      method: 'get'
    }).then(res => {
      console.log('res.data1:', res.data)
    })
  }
  const doLogin = () => {
    _axios({
      url:'/jwt/token',
      method: 'post',
      data:{
        "username":"LMDJFL-ADMIN",
        "password":"bGYyPhUBEdBKD/lab5JwlRHWwwm7OF+UueIoWyffH7Q7Nh6o0EN2TNNsw16sIxcLCOh3eHYOG/n+CfuePM2A33Db+k44Mr5UaqFWTGCq9bDi/uJf1rlcl4ky/b8JMFWxb5eis/Qod6NFaZFWAG5FWT8lWJqk+IU44ffrYMZOv7A=",
        "tenantCode":"LMDJFL",
        "systemNo":"02"
      }
    }).then(res => {
      console.log('res.data2:', res.data)
    })
  }
  return (
    <div className="App">
      <Button type='primary' onClick={getList}>按钮</Button>
      <div>
        <Button type='primary' onClick={doLogin}>登陆</Button>
      </div>
    </div>
  );
}

export default App;
