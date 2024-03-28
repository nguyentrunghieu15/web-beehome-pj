<template>
    <div class="container-logo item">
        <el-button class="tag" icon="Expand" circle />
        <el-text class="tag" type="primary" tag="b" size="large">Bee Home</el-text>
    </div>

    <div class="action-item item">
        <el-input class="tag" style="width: 240px" placeholder="Type your demand" suffix-icon="Search" />
        <el-avatar class="tag" :size="50" src="">
            <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
        </el-avatar>
    </div>

</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.item {
    display: flex;
    align-items: center;
}

.tag {
    margin: 10px 10px;
}

.container-logo,
.action-item {
    flex: 1;
}

.action-item {
    justify-content: flex-end;
}
</style>