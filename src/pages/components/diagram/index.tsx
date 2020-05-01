import React, { useEffect, useState, Children } from 'react';
import ReactEcharts from 'echarts-for-react';
import { Tabs, Input, Row, Col } from 'antd';
import './index.less';
const Diagram = (props: any) => {
    interface StateType {
        selected: any,
        series:any,
        bottomData:any
      }
    const initState: StateType = { 
        selected:{
            '美国':true,
            '中国':true,
            '英国':true
        },
        series:[
            {
                name: '美国',
                type: 'line',
                data: [110, 2, 15, 7, 12, 13, 10,3,6,18],
                //曲线
                smooth: true,
            },
            {
                name: '中国',
                type: 'line',
                data: [8, 20, 12, 90, 15, 7, 3,2,7,6],
                smooth: true,
            },
            {
                name: '英国',
                type: 'line',
                data: [3, 6, 2, 12, 3, 9, 3, 150, 6 ,3],
                smooth: true,
            }
        ],
        bottomData:['4-20', '4-21', '4-22', '4-23', '4-24', '4-25', '4-26', '4-27', '4-28']
      };
    const [state, setState] = useState(initState);
    // setState方法
    const $set = (curState: any) => {
      if (typeof curState !== 'object') return;
      setState(preState => ({ ...preState, ...curState }))
    };
     
    const onEvent = {
        //监听获取到点击事件
            legendselectchanged: (params:any) => {
                //获取到点击的元素key与对应图表显示的状态
                const { name, selected } = params
                let select_value = Object.values(selected);
                //如果选中的状态为true添加到数组里
                const array = select_value.filter((item,index)=> item===true)
                //如果选中的状态为true的数量小于1
                if(array.length<1){
                    $set({
                        //通过合并对象将large选中项重绘为true
                        selected: Object.assign({},selected,{
                            [name]: true
                        })
                    })
                    
                }
            }

        
    }
    const getOption = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            // data: ['美国', '中国','英国'],
            // selectedMode:"single",
            selected: state.selected
        },
        toolbox: {
            show: true,
            feature: {
                //选择柱形和线型切换
                magicType: { type: ['line', 'bar'] },
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            //底部表格数据
            data: state.bottomData
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} '
            }
        },
        series: state.series
    };
    return (
        <div id="main">
            <ReactEcharts
                option={getOption}
                onEvents={onEvent}
                style={{ height: '350px', width: '100%' }}
                className='react_for_echarts' />
        </div>
    )
}
export default Diagram