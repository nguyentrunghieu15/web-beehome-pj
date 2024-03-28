<template>
    <div style="width: 100%;">
        <p>
            <span style="font-weight: bold;">
                {{ props.label }}
                <span v-if="props.isRequire" style="color: red;">*</span>
            </span>
        </p>
        <el-input v-model="temp" :placeholder="props.placeholder" style="width: 100%" @input="$emit('input', temp)" />
        <p>
            <span v-if="props.errors" style="color: red;" class="error">! {{ props.errors }}</span>
        </p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
    label?: string
    placeholder?: string
    isRequire?: boolean
    errors?: string
}>()
defineEmits(['input'])

let temp = ref("")

</script>

<style scoped lang="scss">
.error {
    margin-bottom: 0;
    text-align: left;
    font-size: 12px;
    line-height: 15px;
}
</style>