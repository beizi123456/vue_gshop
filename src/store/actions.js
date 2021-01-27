/*
    通过mutation间接更新state的多个方法对象
*/
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
import {
    reqAddress,
    reqFoodCategorys,
    reqShops,
    reqUserInfo,
    reqLogOut,
    reqShopInfo,
    reqShopRatings,
    reqShopGoods,
    reqSearchShops
} from '../api'
export default {
    //异步获取地址
    async getAddress({ commit, state }) {
        //发送异步ajax请求
        const geohash = state.latitude + ',' + state.longitude
        const result = await reqAddress(geohash)
        //提交一个mutation
        if (result.code === 0) {
            const address = result.data
            commit(RECEIVE_ADDRESS, { address })
        }
    },
    //异步获取食品分类数组
    async getCategorys({ commit }) {
        //发送异步ajax请求
        const result = await reqFoodCategorys()
        //提交一个mutation
        if (result.code === 0) {
            const categorys = result.data
            commit(RECEIVE_CATEGORYS, { categorys })
        }

    },
    //异步获取商家列表
    async getShops({ commit, state }) {
        //发送异步ajax请求
        const { longitude, latitude } = state
        const result = await reqShops(longitude, latitude)
        //提交一个mutation
        if (result.code === 0) {
            const shops = result.data
            commit(RECEIVE_SHOPS, { shops })
        }

    },
    //同步记录用户显示
    recordUser({ commit }, userInfo) {
        commit(RECEIVE_USERINFO, { userInfo })
    },

    //异步获取用户信息
    async getUserInfo({ commit }) {
        const result = await reqUserInfo()
        if (result.code === 0) {
            const userInfo = result.data
            commit(RECEIVE_USERINFO, { userInfo })
        }
    },
    //异步退出登录
    async logout({ commit }) {
        const result = await reqLogOut()
        if (result.code === 0) {
            commit(RECEIVE_LOGINOUT)
        }
    },
    //异步获取商家商品列表
    async getShopInfo({ commit }) {
        const result = await reqShopInfo()
        if (result.code === 0) {
            const info = result.data
            commit(RECEIVE_INFO, { info })
        }
    },
    //异步获取评论
    async getShopRatings({ commit }, callback) {
        const result = await reqShopRatings()
        if (result.code === 0) {
            const ratings = result.data
            commit(RECEIVE_RATINGS, { ratings })
            callback && callback()
        }
    },
    //异步退出登录
    async getShopGoods({ commit }, callback) {
        const result = await reqShopGoods()
        if (result.code === 0) {
            const goods = result.data
            commit(RECEIVE_GOODS, { goods })
            //数据已经更新了，要通知组件
            callback && callback()

        }
    },
    //同步更新food中的count值
    updateFoodCount({ commit }, { isAdd, food }) {
        if (isAdd) {
            commit(INCREMENT_FOOD_COUNT, { food })
        } else {
            commit(DECREMENT_FOOD_COUNT, { food })
        }

    },
    //同步清除购物车
    clearCart({ commit }) {
        commit(CLEAR_CART)
    },
    //异步显示搜索结果店铺列表
    async getSearchShops({ commit, state }, keyword) {
        const geohash = state.latitude + ',' + state.longitude
        const result = await reqSearchShops(geohash, keyword)
        if (result.code === 0) {
            const searchShops = result.data
            commit(RECEIVE_SEARCH_SHOPS, { searchShops })
        }


    }


}
