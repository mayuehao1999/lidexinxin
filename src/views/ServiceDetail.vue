<script setup>
import { computed, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { company, services } from '../data/site'
import Icon from '../components/Icon.vue'
import PageBanner from '../components/PageBanner.vue'
import SectionTitle from '../components/SectionTitle.vue'
import ProcessSteps from '../components/ProcessSteps.vue'
import CtaBand from '../components/CtaBand.vue'
import NotFound from './NotFound.vue'

const route = useRoute()
const svc = computed(() => services.find((s) => s.id === route.params.id))

watchEffect(() => {
  if (svc.value) document.title = `${svc.value.title} | ${company.short}`
})
</script>

<template>
  <div v-if="svc">
    <PageBanner
      eyebrow="Service" :title="svc.title" :desc="svc.tagline + ' —— ' + svc.short"
      :crumbs="[{ label: '服务领域', to: '/services' }, { label: svc.title }]"
    />

    <section class="section">
      <div class="container layout">
        <article>
          <div v-reveal>
            <h2 class="h">服务概述</h2>
            <p class="intro">{{ svc.intro }}</p>
          </div>

          <h2 class="h">服务内容</h2>
          <div class="items">
            <div v-for="(it, i) in svc.items" :key="it.title" class="item" v-reveal="i * 80">
              <b>{{ String(i + 1).padStart(2, '0') }}</b>
              <div><h3>{{ it.title }}</h3><p>{{ it.desc }}</p></div>
            </div>
          </div>

          <div class="two">
            <div v-reveal>
              <h2 class="h">交付成果</h2>
              <ul class="list">
                <li v-for="d in svc.deliverables" :key="d"><Icon name="check" :size="16" /> {{ d }}</li>
              </ul>
            </div>
            <div v-reveal="100">
              <h2 class="h">适用对象</h2>
              <ul class="list">
                <li v-for="d in svc.suitable" :key="d"><Icon name="users" :size="16" /> {{ d }}</li>
              </ul>
            </div>
          </div>

          <div v-if="svc.notice" class="notice" v-reveal>
            <Icon name="shield" :size="22" />
            <p><b>重要说明：</b>{{ svc.notice }}</p>
          </div>

          <h2 class="h">常见问题</h2>
          <div class="faq" v-reveal>
            <details v-for="f in svc.faqs" :key="f.q">
              <summary>{{ f.q }}<Icon name="chevron" :size="20" /></summary>
              <p>{{ f.a }}</p>
            </details>
          </div>
        </article>

        <aside>
          <div class="side-box">
            <h4>全部服务</h4>
            <RouterLink v-for="s in services" :key="s.id" :to="`/services/${s.id}`" :class="{ on: s.id === svc.id }">
              <Icon :name="s.icon" :size="18" /> {{ s.title }}
            </RouterLink>
          </div>
          <div class="side-cta">
            <h4>需要这项服务？</h4>
            <p>留下您的需求，我们将尽快与您联系。</p>
            <RouterLink to="/contact" class="btn btn-gold">预约咨询</RouterLink>
            <span><Icon name="phone" :size="15" /> {{ company.phone }}</span>
          </div>
        </aside>
      </div>
    </section>

    <section class="section soft">
      <div class="container">
        <SectionTitle eyebrow="Process" title="服务流程" />
        <ProcessSteps />
      </div>
    </section>

    <CtaBand />
  </div>
  <NotFound v-else />
</template>

<style scoped>
.layout { display: grid; grid-template-columns: 1fr 320px; gap: 56px; align-items: start; }
.h { font-size: 24px; color: var(--navy-800); margin: 48px 0 18px; padding-left: 14px; border-left: 4px solid var(--gold); line-height: 1.4; }
article > div:first-child .h { margin-top: 0; }
.intro { color: #475569; font-size: 17px; }

.items { display: grid; gap: 16px; }
.item { display: flex; gap: 22px; padding: 26px 28px; border: 1px solid var(--line); border-radius: var(--radius); background: #fff; transition: all 0.3s; }
.item:hover { border-color: var(--gold); box-shadow: var(--shadow-md); }
.item b { font-size: 30px; color: var(--gold); line-height: 1.2; }
.item h3 { color: var(--navy-800); font-size: 18px; margin-bottom: 4px; }
.item p { color: var(--muted); font-size: 15px; }

.two { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }
.list { display: grid; gap: 12px; }
.list li { display: flex; gap: 10px; align-items: flex-start; color: #334155; }
.list svg { color: var(--gold-dark); margin-top: 5px; }

.notice { display: flex; gap: 14px; margin-top: 40px; padding: 20px 24px; border-radius: var(--radius); background: var(--gold-soft); border-left: 4px solid var(--gold); color: #5b4a25; font-size: 15px; }
.notice svg { color: var(--gold-dark); margin-top: 3px; }

.faq details { border: 1px solid var(--line); border-radius: 12px; margin-bottom: 12px; background: #fff; }
.faq details[open] { border-color: var(--gold); }
.faq summary { list-style: none; cursor: pointer; padding: 18px 22px; font-weight: 600; color: var(--navy-800); display: flex; justify-content: space-between; gap: 16px; align-items: center; }
.faq summary::-webkit-details-marker { display: none; }
.faq summary svg { color: var(--gold-dark); transition: transform 0.25s; }
.faq details[open] summary svg { transform: rotate(180deg); }
.faq details p { padding: 0 22px 20px; color: var(--muted); }

aside { position: sticky; top: calc(var(--header-h) + 24px); display: grid; gap: 20px; }
.side-box { padding: 24px; border: 1px solid var(--line); border-radius: var(--radius); background: #fff; }
.side-box h4, .side-cta h4 { font-size: 17px; margin-bottom: 12px; }
.side-box h4 { color: var(--navy-800); }
.side-box a { display: flex; gap: 10px; align-items: center; padding: 11px 12px; border-radius: 8px; font-size: 14.5px; color: #475569; }
.side-box a svg { color: var(--gold-dark); }
.side-box a:hover, .side-box a.on { background: var(--gold-soft); color: var(--navy-800); font-weight: 600; }
.side-cta { padding: 28px 24px; border-radius: var(--radius); color: #fff; text-align: center; background: linear-gradient(135deg, #0b2545, #13315c); display: grid; gap: 12px; justify-items: center; }
.side-cta p { color: rgba(255, 255, 255, 0.75); font-size: 14.5px; }
.side-cta span { font-size: 13.5px; color: rgba(255, 255, 255, 0.75); display: inline-flex; gap: 6px; align-items: center; }

@media (max-width: 960px) {
  .layout { grid-template-columns: 1fr; }
  aside { position: static; }
  .two { grid-template-columns: 1fr; gap: 0; }
}
</style>