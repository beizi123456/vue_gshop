/*使用mockjs提供mock数据*/

import Mock from 'mockjs'
import data from './data.json'

//返回goods接口
// Mock.mock('/goods', data.goods)
/*
    因为接口返回的值显示为：
    {code:0,data:[]}
    所以将拦截请求并返回数据的 Mock.mock('/goods', data.goods)
    更改为Mock.mock('/goods', { code: 0, data: data.goods })
*/
Mock.mock('/goods', { code: 0, data: data.goods })
//返回ratings接口
/* 例如data.ratings:中的ratings必须与data.json中的"ratings"一致*/
Mock.mock('/ratings', { code: 0, data: data.ratings })
//返回info接口
Mock.mock('/info', { code: 0, data: data.info })

// export default ?? 不需要向外暴露任何数据，只需要保证能执行即可
