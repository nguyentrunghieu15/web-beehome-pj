<template>
    <div class="con w-full h-full flex flex-col justify-center items-center">
        <el-image style="width: 120px; height: 120px" :src="img" fit="cover" />
        <div style="width: 348px">
            <el-card style="border-radius: 10px">
                <template #header>
                    <div class="card-header">
                        <span>Create account</span>
                    </div>
                </template>
                <div class="card-body">
                    <TextField
                        label="Your name"
                        :is-require="true"
                        v-model:value="input"
                        errors=""
                        class="item"
                    >
                    </TextField>
                    <TextField
                        label="Mobile number or email"
                        :is-require="true"
                        v-model:value="input"
                        errors=""
                        class="item"
                    >
                    </TextField>
                    <TextField
                        label="Password"
                        :is-require="true"
                        v-model:value="input"
                        errors=""
                        class="item"
                    >
                    </TextField>
                    <TextField
                        label="Re-enter password"
                        :is-require="true"
                        v-model:value="input"
                        errors=""
                        class="item"
                    >
                    </TextField>
                    <el-button type="primary" round style="width: 100%" class="item"
                        >Continue</el-button
                    >
                </div>
                <template #footer>
                    <p>
                        By continuing, you agree to BeeHome's
                        <a href="#" style="color: #409eff">Conditions of Use</a> and
                        <a href="#" style="color: #409eff">Privacy Notice</a>.
                    </p>
                </template>
            </el-card>
            <el-divider content-position="center">Have account BeeHome?</el-divider>
            <el-button style="width: 100%" round @click="onSignIn">Sign in BeeHome</el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import img from '@/assets/_ec407d01-4ced-456b-a868-65cbb6e8ac8d.jpg'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const input = ref('')

const router = useRouter()
const onSignIn = () => {
    router.replace({ path: '/login' })
}
</script>

<style scoped lang="scss">
.card-header {
    font-weight: 400;
    font-size: 28px;
    line-height: 1.2;
}

.con {
    background-color: rgb(243, 245, 242);
}

.card-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.item {
    margin-bottom: 14px;
}

:deep(.el-divider__text) {
    background-color: rgb(243, 245, 242);
    padding: 0px;
}
</style>
