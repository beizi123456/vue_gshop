/*
    直接更新state的多个方法的对象
*/
import Vue from 'vue'
import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS,
    RECEIVE_USERINFO,
    RECEIVE_LOGINOUT,
    RECEIVE_GOODS,
    RECEIVE_RATINGS,
    RECEIVE_INFO,
    INCREMENT_FOOD_COUNT,
    DECREMENT_FOOD_COUNT,
    CLEAR_CART,
    RECEIVE_SEARCH_SHOPS
} from './mutation-types'
export default {
    [RECEIVE_ADDRESS](state, { address }) {
        state.address = address
    },
    [RECEIVE_CATEGORYS](state, { categorys }) {
        state.categorys = categorys

    },
    [RECEIVE_SHOPS](state, { shops }) {
        state.shops = shops

    },
    [RECEIVE_USERINFO](state, { userInfo }) {
        state.userInfo = userInfo
    },
    [RECEIVE_LOGINOUT](state) {
        state.userInfo = {}
    },
    [RECEIVE_GOODS](state, { goods }) {
        state.goods = goods
    },
    [RECEIVE_INFO](state, { info }) {
        state.info = info
    },
    [RECEIVE_RATINGS](state, { ratings }) {
        state.ratings = ratings
    },
    [INCREMENT_FOOD_COUNT](state, { food }) {
        if (!food.count) {//第一次增加
            /*
                Vue.set()参数
                对象
                属性名
                属性值
            */
            /*
                添加新增的属性有数据但是界面不显示问题
                第一种：Vue.set(food,'count',1)才有数据绑定
                第二种：this.$set(obj,'XXX',value)才有数据绑定
                - vm的实例对象和组件实现这种对象绑定
            */
            Vue.set(food, "count", 1)
            // food.count = 1//新增属性（没有数据绑定效果）
            //第一次才会将food添加到cartFoods
            state.cartFoods.push(food)
        } else {//count有值的++
            food.count++
        }

    },
    [DECREMENT_FOOD_COUNT](state, { food }) {
        if (food.count) {//只有有值才去减
            food.count--
            if (food.count === 0) {
                //将food从cartFoods中移除
                state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
            }
        }

    },
    [CLEAR_CART](state) {
        //重置food中的count
        state.cartFoods.forEach(food => food.count = 0)
        //移除购物车中所有购物项
        state.cartFoods = []
    },
    [RECEIVE_SEARCH_SHOPS](state, { searchShops }) {
        state.searchShops = searchShops
    },
}
