<script setup>
import { computed, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { articles, company } from '../data/site'
import Icon from '../components/Icon.vue'
import PageBanner from '../components/PageBanner.vue'
import InsightCard from '../components/InsightCard.vue'
import CtaBand from '../components/CtaBand.vue'
import NotFound from './NotFound.vue'

const route = useRoute()
const idx = computed(() => articles.findIndex((a) => a.id === route.params.id))
const art = computed(() => articles[idx.value])
const prev = computed(() => articles[idx.value - 1])
const next = computed(() => articles[idx.value + 1])
const related = computed(() => articles.filter((a) => a.id !== route.params.id).slice(0, 2))

watchEffect(() => {
  if (art.value) document.title = `${art.value.title} | ${company.short}`
})
</script>

<template>
  <div v-if="art">
    <PageBanner
      :eyebrow="art.category" :title="art.title"
      :desc="`${art.date} · 阅读约 ${art.read} 分钟`"
      :crumbs="[{ label: '行业洞察', to: '/insights' }, { label: '文章详情' }]"
    />

    <section class="section">
      <div class="container wrap">
        <article class="prose">
          <p class="lead">{{ art.summary }}</p>
          <template v-for="s in art.sections" :key="s.h">
            <h2>{{ s.h }}</h2>
            <p v-for="p in s.p" :key="p">{{ p }}</p>
          </template>
          <p v-if="art.note" class="note">{{ art.note }}</p>
          <p class="disclaimer">本文仅为一般性经验分享，不构成法律、税务或投资意见。具体事项请结合企业实际情况并咨询具备相应资质的专业人士。</p>

          <div class="pn">
            <RouterLink v-if="prev" :to="`/insights/${prev.id}`"><Icon name="arrow-left" :size="16" /> 上一篇：{{ prev.title }}</RouterLink>
            <span v-else />
            <RouterLink v-if="next" :to="`/insights/${next.id}`">下一篇：{{ next.title }} <Icon name="arrow" :size="16" /></RouterLink>
          </div>
        </article>

        <aside>
          <h4>相关推荐</h4>
          <div class="rel"><InsightCard v-for="a in related" :key="a.id" :a="a" /></div>
        </aside>
      </div>
    </section>

    <CtaBand />
  </div>
  <NotFound v-else />
</template>

<style scoped>
.wrap { display: grid; grid-template-columns: 1fr 340px; gap: 64px; align-items: start; }
.lead { font-size: 18px !important; color: var(--navy-800) !important; padding: 20px 24px; background: var(--gold-soft); border-radius: 12px; border-left: 4px solid var(--gold); }
.note { color: var(--gold-dark) !important; font-weight: 600; }
.disclaimer { margin-top: 36px; padding-top: 20px; border-top: 1px dashed var(--line); font-size: 13.5px !important; color: #94a3b8 !important; }
.pn { display: flex; justify-content: space-between; gap: 20px; margin-top: 30px; }
.pn a { display: inline-flex; gap: 8px; align-items: center; font-size: 14.5px; color: var(--navy-800); font-weight: 600; max-width: 48%; }
.pn a:hover { color: var(--gold-dark); }
aside { position: sticky; top: calc(var(--header-h) + 24px); }
aside h4 { font-size: 17px; color: var(--navy-800); margin-bottom: 18px; }
.rel { display: grid; gap: 20px; }
@media (max-width: 960px) {
  .wrap { grid-template-columns: 1fr; gap: 48px; }
  aside { position: static; }
  .pn { flex-direction: column; }
  .pn a { max-width: 100%; }
}
</style>