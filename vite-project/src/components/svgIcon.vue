<script lang="ts">
import { defineProps, computed } from 'vue';

const props = defineProps({
  // 图标名称或在线URL
  icon: {
    type: String,
    required: true
  },
  // 图标类名
  className: {
    type: String,
    default: ''
  }
})
const isOnlineSvg = computed(() => /^(https?:)/.test(props.icon))


</script>

<template>
  <div v-if="isOnlineSvg" :style="{}"></div>
</template>

<style>
.svg-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  overflow: hidden;
}
</style>