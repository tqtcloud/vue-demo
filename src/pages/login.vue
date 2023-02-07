<template>
    <el-row class="login-container">
        <el-col :lg="16" :md="12" class="left">
            <div>
                <div>欢迎光临</div>
                <div>演示项目地址</div>
            </div>
        </el-col>
        <el-col :lg="8" :md="12" class=" reght  ">
            <h2 class="title">欢迎回来</h2>
            <div>
                <span class="line"></span>
                <span>账号密码登录</span>
                <span class="line"></span>
            </div>

            <el-form :model="form" class="w-[250px]">
                <el-form-item  >
                    <el-input placeholder="请输入用户名" v-model="form.username">
                        <template #prefix>
                            <el-icon><User /></el-icon>
                        </template>
                    </el-input>

                </el-form-item>
                <el-form-item  >
                    <el-input placeholder="请输入密码" v-model="form.password">
                        <template #prefix>
                            <el-icon><Lock /></el-icon>
                        </template>
                    </el-input>
                </el-form-item>

                <el-form-item>
                    <el-button round color="#626aef"  class="w-[250px]" type="primary" @click="submitForm()">登 录</el-button>
                </el-form-item>

            </el-form>

        </el-col>
    </el-row>
</template>


<script  setup>
import { reactive } from 'vue'


const form = reactive({
    username:"",
    password:""
})

function submitForm() {
    console.log(111)
}

</script>


<style scoped>
.login-container{
    @apply min-h-screen bg-indigo-500;
}
.login-container .left, .login-container .reght{
    @apply flex items-center justify-center;
}
.login-container .reght{
    @apply flex-col bg-light-50;
}

.left>div>div:first-child{
    @apply font-bold text-5xl text-light-50 mb-4;
}
.left>div>div:last-child{
    @apply text-gray-200  text-sm ;
}

.reght .title{
    @apply font-bold text-3xl text-gray-800;
}
.reght>div{
    @apply flex items-center justify-center my-5 text-gray-300 space-x-2;
}
.reght .line{
    @apply h-[1px] w-16 bg-gray-200;
}
</style>