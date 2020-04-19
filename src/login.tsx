import React, { useEffect } from 'react';
import {Form,Button,Input} from 'antd';
import './login.less';
import _axios from './utils/axios';
import Router from './routers';
import { userName,passWord } from "./utils/pattern";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
// import {Link} from 'react-router-dom';

const formLogin = (props: any) => {
  //formAPI 声明
  const [form] = Form.useForm();
  const onFinish = (values :any)=> {
    console.log('Received values of form: ', values);
    console.log(form.isFieldsTouched(true) )
     console.log(form.getFieldsError().filter(({ errors }) => errors.length).length)
    //接口
  };
 

  return (
    <div className="login_div">
      <Form
      className="login-form"
      onFinish={onFinish}
      form={form}
    >
      <img src="" />
      <Form.Item
        name="username"
        validateTrigger="onBlur"
        rules={[{ required: false, message: '用户名不能为空' },
          ({ getFieldValue }) => ({
            validator(rule, val){
              if (val&&!userName(val)) { // 正则验证
                  return Promise.reject('请输入正确的用户名');
              } 
              return Promise.resolve();
            }
          })
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} allowClear  placeholder="allowClear" />
      </Form.Item>
      <Form.Item
        name="password"
        validateTrigger="onBlur"
        rules={[{ required: false, message: '密码不能为空'}]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="请输入密码"
        />
      </Form.Item> 
      <Form.Item shouldUpdate={true}>
        <Button type="primary" htmlType="submit"  className="login-form-button"
         disabled={
          !form.isFieldsTouched(true) ||
          Boolean(form.getFieldsError().filter(({ errors }) => errors.length).length)
        }
        >
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
    </div>
  )
}
export default formLogin