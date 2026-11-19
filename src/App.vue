<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import Icon from './components/Icon.vue'

const route = useRoute()
const showTop = ref(false)
const onScroll = () => (showTop.value = window.scrollY > 600)
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
</script>

<template>
  <AppHeader />
  <main>
    <RouterView v-slot="{ Component }">
      <Transition name="page" mode="out-in">
        <component :is="Component" :key="route.path" />
      </Transition>
    </RouterView>
  </main>
  <AppFooter />
  <button class="to-top" :class="{ show: showTop }" aria-label="回到顶部" @click="toTop">
    <Icon name="arrow-up" :size="20" />
  </button>
</template>