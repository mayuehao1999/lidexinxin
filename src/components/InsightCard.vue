<script setup>
import Icon from './Icon.vue'
defineProps({ a: Object })
</script>

<template>
  <RouterLink :to="`/insights/${a.id}`" class="card">
    <div class="cover" :class="`t${a.theme}`">
      <Icon :name="a.icon" :size="84" :stroke="1" />
      <span class="tag">{{ a.category }}</span>
    </div>
    <div class="body">
      <p class="meta">{{ a.date }} · 阅读约 {{ a.read }} 分钟</p>
      <h3>{{ a.title }}</h3>
      <p class="sum">{{ a.summary }}</p>
      <span class="more">阅读全文 <Icon name="arrow" :size="16" /></span>
    </div>
  </RouterLink>
</template>

<style scoped>
.card { display: flex; flex-direction: column; height: 100%; background: #fff; border: 1px solid var(--line); border-radius: var(--radius); overflow: hidden; transition: all 0.3s; }
.card:hover { transform: translateY(-6px); box-shadow: var(--shadow-md); }
.cover { height: 170px; position: relative; display: grid; place-items: center; color: rgba(255, 255, 255, 0.28); }
.t1 { background: linear-gradient(135deg, #0b2545, #1d4274); }
.t2 { background: linear-gradient(135deg, #5a4524, #b08d57); }
.t3 { background: linear-gradient(135deg, #13315c, #3b6bb0); }
.t4 { background: linear-gradient(135deg, #1b3a35, #3f7f73); }
.tag { position: absolute; left: 18px; top: 16px; padding: 3px 12px; font-size: 12px; border-radius: 999px; background: rgba(255, 255, 255, 0.92); color: var(--navy-800); font-weight: 600; }
.body { padding: 24px 24px 26px; display: flex; flex-direction: column; flex: 1; }
.meta { font-size: 12.5px; color: #94a3b8; margin-bottom: 8px; }
h3 { font-size: 18px; color: var(--navy-800); line-height: 1.5; margin-bottom: 10px; }
.sum { font-size: 14.5px; color: var(--muted); margin-bottom: 18px; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
.more { margin-top: auto; display: inline-flex; gap: 6px; align-items: center; font-weight: 600; font-size: 14px; color: var(--gold-dark); }
.more svg { transition: transform 0.25s; }
.card:hover .more svg { transform: translateX(5px); }
</style>