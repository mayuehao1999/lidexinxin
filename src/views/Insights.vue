<script setup>
import { ref, computed } from 'vue'
import { articles } from '../data/site'
import PageBanner from '../components/PageBanner.vue'
import InsightCard from '../components/InsightCard.vue'
import CtaBand from '../components/CtaBand.vue'

const cats = ['全部', ...new Set(articles.map((a) => a.category))]
const active = ref('全部')
const list = computed(() => (active.value === '全部' ? articles : articles.filter((a) => a.category === active.value)))
</script>

<template>
  <div>
    <PageBanner
      eyebrow="Insights" title="行业洞察"
      desc="分享企业管理、财务管理、人工智能与数据应用方面的实用观点。"
      :crumbs="[{ label: '行业洞察' }]"
    />
    <section class="section">
      <div class="container">
        <div class="chips">
          <button v-for="c in cats" :key="c" :class="{ on: c === active }" @click="active = c">{{ c }}</button>
        </div>
        <TransitionGroup name="list" tag="div" class="grid grid-3">
          <div v-for="a in list" :key="a.id"><InsightCard :a="a" /></div>
        </TransitionGroup>
      </div>
    </section>
    <CtaBand />
  </div>
</template>

<style scoped>
.chips { display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; margin-bottom: 48px; }
.chips button {
  padding: 9px 24px; border-radius: 999px; border: 1px solid var(--line); background: #fff;
  cursor: pointer; font-size: 14.5px; color: #475569; transition: all 0.25s;
}
.chips button:hover { border-color: var(--gold); color: var(--navy-800); }
.chips button.on { background: var(--navy-800); border-color: var(--navy-800); color: #fff; }
.list-enter-active, .list-leave-active { transition: all 0.3s; }
.list-enter-from, .list-leave-to { opacity: 0; transform: translateY(14px); }
</style>

