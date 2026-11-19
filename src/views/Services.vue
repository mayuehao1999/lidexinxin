<script setup>
import { services, modes } from '../data/site'
import Icon from '../components/Icon.vue'
import PageBanner from '../components/PageBanner.vue'
import SectionTitle from '../components/SectionTitle.vue'
import ServiceCard from '../components/ServiceCard.vue'
import ProcessSteps from '../components/ProcessSteps.vue'
import CtaBand from '../components/CtaBand.vue'
</script>

<template>
  <div>
    <PageBanner
      eyebrow="Services" title="服务领域"
      desc="覆盖管理、财务、税务、资产、人工智能与数据六大方向，为企业提供系统化的专业支持。"
      :crumbs="[{ label: '服务领域' }]"
    />

    <section class="section">
      <div class="container">
        <div class="grid grid-3">
          <div v-for="(s, i) in services" :key="s.id" v-reveal="(i % 3) * 100"><ServiceCard :s="s" /></div>
        </div>

        <div class="notice" v-reveal>
          <Icon name="shield" :size="22" />
          <p><b>服务边界说明：</b>我们提供的是咨询类服务。凡涉及法定执业资质的事项（如代理记账、税务代理、正式资产评估报告等），均应由具备相应资质的机构办理，我们将在沟通阶段如实说明。</p>
        </div>
      </div>
    </section>

    <section class="section soft">
      <div class="container">
        <SectionTitle eyebrow="Cooperation" title="灵活的合作模式" desc="根据企业的需求与阶段，选择最合适的合作方式。" />
        <div class="grid grid-3">
          <div v-for="(m, i) in modes" :key="m.title" v-reveal="i * 100">
            <div class="mode">
              <span class="ico"><Icon :name="m.icon" :size="28" /></span>
              <h3>{{ m.title }}</h3>
              <p>{{ m.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <SectionTitle eyebrow="Process" title="服务流程" desc="五个步骤，清晰透明。" />
        <ProcessSteps />
      </div>
    </section>

    <CtaBand />
  </div>
</template>

<style scoped>
.notice {
  display: flex; gap: 16px; align-items: flex-start; margin-top: 48px; padding: 22px 28px;
  border-radius: var(--radius); background: var(--gold-soft); border-left: 4px solid var(--gold); color: #5b4a25;
}
.notice svg { margin-top: 3px; color: var(--gold-dark); }
.mode { height: 100%; padding: 38px 32px; background: #fff; border-radius: var(--radius); border: 1px solid var(--line); transition: all 0.3s; }
.mode:hover { box-shadow: var(--shadow-md); transform: translateY(-6px); }
.ico { width: 60px; height: 60px; border-radius: 14px; display: grid; place-items: center; background: var(--navy-800); color: var(--gold); margin-bottom: 20px; }
.mode h3 { color: var(--navy-800); margin-bottom: 8px; font-size: 20px; }
.mode p { color: var(--muted); }
</style>