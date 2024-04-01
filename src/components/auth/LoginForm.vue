<template>
    <div class="con w-full h-full flex flex-col justify-center items-center">
        <el-image style="width: 120px; height: 120px" :src="img" fit="cover" />
        <div style="width: 348px">
            <el-card style="border-radius: 10px">
                <template #header>
                    <div class="card-header">
                        <span>Sign In</span>
                    </div>
                </template>
                <div class="card-body">
                    <TextField
                        label="Email or mobile phone number"
                        :is-require="true"
                        v-model:value="input"
                        errors=""
                        class="item"
                    >
                    </TextField>
                    <el-button type="primary" round style="width: 100%" class="item"
                        >Continue</el-button
                    >
                    <div class="help-item">
                        <el-button
                            type="warning"
                            link
                            icon="ArrowRightBold"
                            @click="isNeed = !isNeed"
                            >Need help?</el-button
                        >
                        <el-button type="warning" link v-if="isNeed"
                            >Forgot your password?</el-button
                        >
                        <el-button type="warning" link v-if="isNeed"
                            >Other issues with Sign-In</el-button
                        >
                    </div>
                </div>
                <template #footer>
                    <p>
                        By continuing, you agree to BeeHome's <a href="#">Conditions of Use</a> and
                        <a href="#">Privacy Notice</a>.
                    </p>
                </template>
            </el-card>
            <el-divider content-position="center">New to BeeHome?</el-divider>
            <el-button style="width: 100%" round @click="onSignUp"
                >Create your account BeeHome</el-button
            >
        </div>
    </div>
</template>

<script setup lang="ts">
import img from '@/assets/_ec407d01-4ced-456b-a868-65cbb6e8ac8d.jpg'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const input = ref('')

const isNeed = ref(false)

const router = useRouter()

const onSignUp = () => {
    router.replace({ path: '/signup' })
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

.help-item {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: start;
    margin-top: 18px;
    font-size: 13px;
}

.help-item button {
    margin: 4px 0px 0px;
    padding: 0px 0px 0px 11px;
}

:deep(.el-divider__text) {
    background-color: rgb(243, 245, 242);
}
</style>
