<template>
  <n-button type="primary" @click="increment">
    <template #icon>
      <n-icon><CalculatorOutlined /></n-icon>
    </template>
    {{ count }}
  </n-button>
</template>

<script setup lang="ts">
import { useMainStore } from '@/stores/main'
import { CalculatorOutlined } from '@vicons/antd'
const { count, updateCount } = useMainStore()

const increment = () => {
  updateCount(count.value + 1)
}
</script>

<style scoped lang="less"></style>
