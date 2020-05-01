import React, { useEffect, useState, Children } from 'react';
import { Table } from 'antd';
import './index.less';
import { Link } from 'react-router-dom';
const SortTable = (props: any) => {
    interface StateType {
        filteredInfo: any,
        sortedInfo: any
    }
    const initState: StateType = {
        filteredInfo: null,
        sortedInfo: null,
    }
    const data = [
        {
            key: '1',
            region: 'china',
            now: 32,
            detail:"详情",
            add: 52,
        },
        {
            key: '2',
            region: 'USA',
            now: 42,
            detail:"详情",
            add: 22,
        },
        {
            key: '3',
            region: 'Japan',
            now: 32,
            detail:"详情",
            add: 41,
        },
        {
            key: '4',
            region: 'US',
            now: 44,
            detail:"详情",
            add: 12,
        },

    ];

    const columns: any = [
        {
            title: '地区',
            dataIndex: 'region',
            key: 'region',
            ellipsis: true,
        },
        {
            title: '现有',
            dataIndex: 'now',
            key: 'now',
            defaultSortOrder: 'descend',
            sorter: (a: any, b: any) => a.now - b.now,
            ellipsis: true,
        },
        {
            key: 'add',
            title: '新增',
            dataIndex: 'add',
            defaultSortOrder: 'descend',
            sorter: (a: any, b: any) => a.now - b.now,
            ellipsis: true,
        },
        {
            key: 'detail',
            title: '疫情',
            dataIndex: 'detail',
            /** 帮忙配个动态路由  `<Link to={
             * { 
             *  pathname:`/detail/${key}`
             * }
             * }> </Link>`  */
             /***
              * 路由结构
              * <Router>
              *     <Route path="/detail/:id" compontent={Detail}></Route>
              * </Router>
              */
             /**配蒙了  目前路由没整明白 您给配个我学习一下*/
            render: (detail:any) => <a 
            >{detail}</a>,
            ellipsis: true,
        }
    ];
    const [state, setState] = useState(initState);
    // setState方法
    const $set = (curState: any) => {
        if (typeof curState !== 'object') return;
        setState(preState => ({ ...preState, ...curState }))
    };

    const setAgeSort = () => {
        $set({
            sortedInfo: {
                order: 'descend',
                columnKey: 'age',
            },
        });
    };


    return (
        <div className="sortTable">
            <Table columns={columns} dataSource={data} />
        </div>
    )
}
export default SortTable