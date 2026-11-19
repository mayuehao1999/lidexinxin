<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { nav, services } from '../data/site'
import Logo from './Logo.vue'
import Icon from './Icon.vue'

const route = useRoute()
const scrolled = ref(false)
const open = ref(false)

const onScroll = () => (scrolled.value = window.scrollY > 20)
onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))

watch(() => route.fullPath, () => (open.value = false))
watch(open, (v) => (document.body.style.overflow = v ? 'hidden' : ''))
</script>

<template>
  <header class="header" :class="{ scrolled, open }">
    <div class="container bar">
      <RouterLink to="/" class="brand"><Logo /></RouterLink>

      <nav class="nav">
        <template v-for="n in nav" :key="n.to">
          <div v-if="n.children" class="has-sub">
            <RouterLink :to="n.to" class="link">
              {{ n.label }} <Icon name="chevron" :size="14" />
            </RouterLink>
            <div class="sub">
              <RouterLink v-for="s in services" :key="s.id" :to="`/services/${s.id}`">
                <Icon :name="s.icon" :size="18" /> {{ s.title }}
              </RouterLink>
            </div>
          </div>
          <RouterLink v-else :to="n.to" class="link">{{ n.label }}</RouterLink>
        </template>
      </nav>

      <RouterLink to="/contact" class="btn btn-gold cta">预约咨询</RouterLink>
      <button class="burger" aria-label="菜单" @click="open = !open">
        <Icon :name="open ? 'x' : 'menu'" :size="26" />
      </button>
    </div>

    <div class="drawer" :class="{ show: open }">
      <RouterLink v-for="n in nav" :key="n.to" :to="n.to" class="d-link">{{ n.label }}</RouterLink>
      <div class="d-sub">
        <RouterLink v-for="s in services" :key="s.id" :to="`/services/${s.id}`">{{ s.title }}</RouterLink>
      </div>
      <RouterLink to="/contact" class="btn btn-gold">预约咨询</RouterLink>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  height: var(--header-h); color: #fff; transition: all 0.3s;
}
.header.scrolled, .header.open {
  background: rgba(255, 255, 255, 0.96); color: var(--navy-800);
  backdrop-filter: blur(10px); box-shadow: 0 2px 20px rgba(11, 37, 69, 0.08);
}
.header.scrolled :deep(.logo svg rect), .header.open :deep(.logo svg rect) { stroke: none; }
.bar { height: 100%; display: flex; align-items: center; gap: 40px; }
.nav { display: flex; gap: 6px; margin-left: auto; height: 100%; }
.link {
  height: var(--header-h); display: inline-flex; align-items: center; gap: 4px;
  padding: 0 16px; font-size: 15px; font-weight: 500; position: relative; opacity: 0.9;
}
.link::after {
  content: ""; position: absolute; left: 16px; right: 16px; bottom: 18px;
  height: 2px; background: var(--gold); transform: scaleX(0); transition: transform 0.25s;
}
.link:hover, .link.router-link-active { opacity: 1; }
.link:hover::after, .link.router-link-active::after { transform: scaleX(1); }

.has-sub { position: relative; }
.sub {
  position: absolute; top: 100%; left: 0; min-width: 250px; padding: 10px;
  background: #fff; border-radius: 12px; box-shadow: var(--shadow-lg);
  opacity: 0; visibility: hidden; transform: translateY(8px); transition: all 0.25s;
}
.has-sub:hover .sub { opacity: 1; visibility: visible; transform: none; }
.sub a {
  display: flex; align-items: center; gap: 12px; padding: 11px 14px;
  color: var(--navy-800); border-radius: 8px; font-size: 14.5px;
}
.sub a svg { color: var(--gold-dark); }
.sub a:hover { background: var(--gold-soft); }

.cta { padding: 10px 24px; font-size: 14px; }
.burger { display: none; background: none; border: none; color: inherit; cursor: pointer; margin-left: auto; }

.drawer { display: none; }

@media (max-width: 960px) {
  .nav, .cta { display: none; }
  .burger { display: block; }
  .drawer {
    display: flex; flex-direction: column; gap: 4px;
    position: fixed; top: var(--header-h); left: 0; right: 0; bottom: 0;
    background: #fff; padding: 20px 24px 40px; overflow-y: auto;
    transform: translateX(100%); transition: transform 0.3s; color: var(--navy-800);
  }
  .drawer.show { transform: none; }
  .d-link { padding: 14px 0; font-size: 17px; font-weight: 600; border-bottom: 1px solid var(--line); }
  .d-link.router-link-active { color: var(--gold-dark); }
  .d-sub { display: grid; padding: 8px 0 16px; }
  .d-sub a { padding: 8px 12px; color: var(--muted); font-size: 15px; }
  .drawer .btn { margin-top: 12px; }
}
</style>