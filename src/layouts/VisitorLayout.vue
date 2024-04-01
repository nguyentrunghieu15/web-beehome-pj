<template>
    <el-container class="min-h-fit">
        <el-header class="border-b grid grid-cols-12">
            <el-text class="text-lg font-bold col-span-2" type="primary">BeeHome</el-text>
            <div class="container col-span-10 flex my-auto justify-end">
                <div class="mx-4">
                    <el-button type="primary" @click="onClickJoin" round>Join with us</el-button>
                </div>
                <div class="mx-4">
                    <el-button link class="hover:underline">Explore</el-button>
                </div>
                <div class="mx-4">
                    <RouterLink to="/signup" class="hover:underline text-gray-600">Sign up</RouterLink>
                </div>
                <div class="mx-4">
                    <RouterLink to="/login" class="hover:underline text-gray-600">Login</RouterLink>
                </div>
            </div>
        </el-header>
        <el-main class="m-0 p-0 grid grid-cols-2 grap-4">
            <div class="w-full h-full flex flex-col justify-center items-center">
                <el-image class="w-36 h-36 mb-6" :src="img1" fit="cover" />
                <div>
                    <p class="font-bold font-extrabold text-5xl">
                        Home <span class="text homepage-hero_scroll__mBWrd">{{ text }}</span> <br />
                        made easy.
                    </p>
                </div>
            </div>
            <el-image class="w-full h-full" :src="img" fit="cover" />
        </el-main>
    </el-container>
    <el-divider />
    <div class="mx-64 grid grid-cols-5 gap-4">
        <div class="flex flex-col justify-start">
            <div class="mb-6">
                <el-text tag="b">
                    <p class="font-bold">BeeHome</p>
                    Consider it done.
                </el-text>
            </div>
            <div class="mb-2 hover:underline">
                <el-text class="hover:text-blue-700" size="small" type="info">About</el-text>
            </div>
            <div class="mb-2 hover:underline">
                <el-text class="hover:text-blue-700" size="small" type="info">Careers</el-text>
            </div>
            <div class="mb-2 hover:underline">
                <el-text class="hover:text-blue-700" size="small" type="info">Press</el-text>
            </div>
            <div class="mb-2 hover:underline">
                <el-text size="small" class="hover:text-blue-700" type="info">Blog</el-text>
            </div>
            <div class="mb-2 flex">
                <el-icon class="mr-2">
                    <CameraFilled />
                </el-icon>
                <img src="./../assets/twitter.svg" class="w-4 h-4 mr-2" />
                <img src="./../assets/facebook.svg" class="w-4 h-4 mr-2" />
            </div>
        </div>
        <div class="flex flex-col justify-start">
            <div class="mb-6">
                <el-text tag="b"> Customers</el-text>
            </div>
            <div class="mb-2 hover:underline">
                <el-text class="hover:text-blue-700" type="info" size="small">How to use BeeHome</el-text>
            </div>
            <div class="mb-2 hover:underline">
                <el-text class="hover:text-blue-700" size="small" type="info">Sign up</el-text>
            </div>
            <div class="mb-2 hover:underline">
                <el-text class="hover:text-blue-700" size="small" type="info">Get the app</el-text>
            </div>
            <div class="mb-2 hover:underline">
                <el-text class="hover:text-blue-700" size="small" type="info">Services near me</el-text>
            </div>
            <div class="mb-2 hover:underline">
                <el-text class="hover:text-blue-700" size="small" type="info">Cost estimates</el-text>
            </div>
            <div class="mb-2 hover:underline">
                <el-text size="small" type="info">Home resource center</el-text>
            </div>
            <div class="mb-2 hover:underline">
                <el-text class="hover:text-blue-700" size="small" type="info">Home inspiration pictures</el-text>
            </div>
            <div class="mb-2 hover:underline">
                <el-text class="hover:text-blue-700" size="small" type="info">Small business survey</el-text>
            </div>
            <div class="mb-2 hover:underline">
                <el-text class="hover:text-blue-700" size="small" type="info">Questions and answers</el-text>
            </div>
        </div>
        <div class="flex flex-col justify-start">
            <div class="mb-6">
                <el-text tag="b">Pros</el-text>
            </div>
            <div class="mb-2 hover:underline">
                <el-text class="hover:text-blue-700" type="info" size="small">BeeHome for pros</el-text>
            </div>
            <div class="mb-2 hover:underline">
                <el-text class="hover:text-blue-700" size="small" type="info">Sign up as a pro</el-text>
            </div>
            <div class="mb-2 hover:underline">
                <el-text class="hover:text-blue-700" size="small" type="info">Community</el-text>
            </div>
            <div class="mb-2 hover:underline">
                <el-text class="hover:text-blue-700" size="small" type="info">Pro Resources</el-text>
            </div>
            <div class="mb-2 hover:underline">
                <el-text class="hover:text-blue-700" size="small" type="info">Success stories</el-text>
            </div>
            <div class="mb-2 hover:underline">
                <el-text class="hover:text-blue-700" size="small" type="info">Pro reviews</el-text>
            </div>
            <div class="mb-2 hover:underline">
                <el-text class="hover:text-blue-700" size="small" type="info">iPhone app for pros</el-text>
            </div>
            <div class="mb-2 hover:underline">
                <el-text class="hover:text-blue-700" size="small" type="info">Android app for pros</el-text>
            </div>
        </div>

        <div class="flex flex-col justify-start">
            <div class="mb-6">
                <el-text tag="b">Support</el-text>
            </div>
            <div class="mb-2 hover:underline">
                <el-text class="hover:text-blue-700" type="info" size="small">Help</el-text>
            </div>
            <div class="mb-2 hover:underline">
                <el-text class="hover:text-blue-700" size="small" type="info">Safety</el-text>
            </div>
            <div class="mb-2 hover:underline">
                <el-text class="hover:text-blue-700" size="small" type="info">Terms of Use</el-text>
            </div>
            <div class="mb-2 hover:underline">
                <el-text class="hover:text-blue-700" size="small" type="info">Privacy Policy</el-text>
            </div>
            <div class="mb-2 hover:underline">
                <el-text class="hover:text-blue-700" size="small" type="info">CA Notice at Collection</el-text>
            </div>
            <div class="mb-2 hover:underline">
                <el-text class="hover:text-blue-700" size="small" type="info">Do not Sell or Share My Personal
                    Information</el-text>
            </div>
        </div>
        <div class="flex flex-col justify-start">
            <div class="mb-6">
                <el-text tag="b">Related Links</el-text>
            </div>
            <div class="mb-2 hover:underline">
                <el-text class="hover:text-blue-700" type="info" size="small">Find a tax preparer near New York,
                    NY</el-text>
            </div>
            <div class="mb-2 hover:underline">
                <el-text class="hover:text-blue-700" size="small" type="info">Find a mobile dog groomer near
                    you</el-text>
            </div>
            <div class="mb-2 hover:underline">
                <el-text class="hover:text-blue-700" size="small" type="info">Find a Mobile Notary near Manhattan,
                    NY</el-text>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import img from '@/assets/1024.jpeg'
import img1 from '@/assets/_ec407d01-4ced-456b-a868-65cbb6e8ac8d.jpg'
import { onMounted, ref, toRef } from 'vue'

const router = useRouter()
const route = useRoute()

let text = ref('improvement,')
const chainText = ref(['repair,', 'cleaning,', 'inspection,', 'improvement,'])

onMounted(() => {
    let idx = 0
    setInterval(() => {
        text.value = chainText.value[idx]
        idx = (idx + 1) % 4
    }, 2000)
})

const onClickJoin = () => {
    router.push({ path: '/404' })
}
</script>

<style scoped>
.text {
    width: 3.5rem !important;
    display: inline-block;
}

.homepage-hero_scroll__mBWrd {
    position: relative;
    animation: homepage-hero_scroller__RgPOD 2s ease-in-out infinite;
}

@keyframes homepage-hero_scroller__RgPOD {

    0%,
    90% {
        right: 0;
    }

    90%,
    95% {
        right: -0.5em;
    }

    95%,
    to {
        right: 0;
    }
}
</style>
