<script setup>
import Icon from './Icon.vue'
defineProps({ s: Object })
</script>

<template>
  <RouterLink :to="`/services/${s.id}`" class="svc">
    <span class="ico"><Icon :name="s.icon" :size="28" /></span>
    <h3>{{ s.title }}</h3>
    <p>{{ s.short }}</p>
    <ul>
      <li v-for="it in s.items.slice(0, 3)" :key="it.title"><Icon name="check" :size="14" /> {{ it.title }}</li>
    </ul>
    <span class="more">了解详情 <Icon name="arrow" :size="16" /></span>
  </RouterLink>
</template>

<style scoped>
.svc {
  display: flex; flex-direction: column; height: 100%; padding: 34px 30px;
  background: #fff; border: 1px solid var(--line); border-radius: var(--radius);
  position: relative; overflow: hidden; transition: all 0.3s;
}
.svc::before {
  content: ""; position: absolute; left: 0; top: 0; right: 0; height: 3px;
  background: linear-gradient(90deg, var(--gold), #e6d3a8); transform: scaleX(0); transform-origin: left; transition: transform 0.35s;
}
.svc:hover { transform: translateY(-6px); box-shadow: var(--shadow-md); border-color: transparent; }
.svc:hover::before { transform: scaleX(1); }
.ico {
  width: 58px; height: 58px; border-radius: 14px; display: grid; place-items: center;
  background: var(--gold-soft); color: var(--gold-dark); margin-bottom: 22px; transition: all 0.3s;
}
.svc:hover .ico { background: var(--navy-800); color: var(--gold); }
h3 { font-size: 20px; color: var(--navy-800); margin-bottom: 10px; }
p { color: var(--muted); font-size: 15px; margin-bottom: 18px; }
ul { margin-bottom: 22px; }
li { display: flex; align-items: center; gap: 8px; font-size: 14px; color: #475569; padding: 3px 0; }
li svg { color: var(--gold-dark); }
.more { margin-top: auto; display: inline-flex; align-items: center; gap: 6px; font-weight: 600; font-size: 14.5px; color: var(--navy-800); }
.svc:hover .more { color: var(--gold-dark); }
.more svg { transition: transform 0.25s; }
.svc:hover .more svg { transform: translateX(5px); }
</style>