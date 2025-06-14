<template>
  <a href="#" class="to-top" @click="toTop" :style="style">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style="transform: scale(0.6)"
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="3"
        d="M24,14 V42 M12,26 l12,-12 l12,12 M12,6 h24"
      />
    </svg>
  </a>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
const hide = 'opacity: 0'
const style = ref(hide)
const onScroll = () => {
  if (window.scrollY > 200) {
    style.value = 'opacity: 1'
  } else {
    style.value = hide
  }
}
const toTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
onMounted(() => {
  window.addEventListener('scroll', onScroll)
  onScroll()
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style>
html {
  scroll-behavior: smooth;
}
.to-top {
  position: fixed;
  box-sizing: content-box;
  width: 48px;
  height: 48px;
  right: 24px;
  bottom: 24px;
  border-radius: 50%;
  z-index: 999;
  color: #4cbb88;
  border: 3px solid #4cbb88;
  transition: opacity 0.5s;
}
</style>
