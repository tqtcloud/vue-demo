<template>
    <div>
        后台首页
        <el-button @click="HandleLogout">退出登录</el-button>

        {{ $store.state.user.username }}

    </div>
</template>


<script setup>
import { showModal,toast } from '~/composables/util'
import {logout} from '~/api/manager'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'


const router = useRouter()
const store = useStore()

function HandleLogout() {
    showModal("是否要退出登录状态")
    .then(res=>{
        logout()
        .finally(()=>{
            // 移除 cookie 的token & 清楚当前用户状态 vuex
            store.dispatch("logout") 

            // 跳转到登录页
            router.push("/login")

            //提示退出登录信息
            toast("退出登录成功")

        })
    })
}
</script>