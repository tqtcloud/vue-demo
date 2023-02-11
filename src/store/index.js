import { get } from '@vueuse/shared'
import { createStore } from 'vuex'
import {getinfo,login} from '~/api/manager'
import {  setToken,removeToken } from '~/composables/auth'

const store = createStore({
    state() {
        return {
            // 用户信息
            user: {}
        }
    },
    mutations: {
        // 记录用户信息
        SET_USERINFO(state,user){
            state.user  = user
        }
    },
    actions: {
        // 登录页面
        login({ commit },{username,password}) {
            return new Promise((resolve,reject)=>{
                login(username,password).then(res=>{
                    setToken(res.token) 
                    resolve()
                }).catch(err=>reject(err))
            })
        },

        // 获取当前登录用户的信息
        getinfo({ commit }){
            return new Promise((resolve,reject)=>{
                getinfo().then(res=>{
                    commit("SET_USERINFO",res)
                    resolve()
                }).catch(err=>reject(err))
            })
        },

        logout({ commit }){
            // 移除 cookie 的token
            removeToken()
            // 清楚当前用户状态 vuex
            commit("SET_USERINFO",{})
        }
    }
})


export default store