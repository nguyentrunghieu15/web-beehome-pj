<template>
    <div style="width: 100%">
        <p>
            <span style="font-weight: bold">
                {{ props.label }}
                <span v-if="props.isRequire" style="color: red">*</span>
            </span>
        </p>
        <el-input :placeholder="props.placeholder" style="width: 100%" v-model="value" />
        <p>
            <span v-if="props.errors" style="color: red" class="error">! {{ props.errors }}</span>
        </p>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    label?: string
    placeholder?: string
    isRequire?: boolean
    errors?: string
}>()

const value = defineModel('value', { required: true, default: '' })
</script>

<style scoped lang="scss">
.error {
    margin-bottom: 0;
    text-align: left;
    font-size: 12px;
    line-height: 15px;
}
</style>
