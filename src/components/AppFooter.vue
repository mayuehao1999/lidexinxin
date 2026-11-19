<script setup>
import { company, services } from '../data/site'
import Logo from './Logo.vue'
import Icon from './Icon.vue'

const year = new Date().getFullYear()
const links = [
  { label: '首页', to: '/' },
  { label: '关于我们', to: '/about' },
  { label: '服务领域', to: '/services' },
  { label: '行业洞察', to: '/insights' },
  { label: '联系我们', to: '/contact' },
]
</script>

<template>
  <footer class="footer">
    <div class="container top">
      <div class="brand">
        <Logo />
        <p>{{ company.full }}，立足昆明，为企业提供管理、财税与数字化方面的专业咨询服务。</p>
        <p class="slogan">{{ company.slogan }}</p>
      </div>

      <div>
        <h4>快速导航</h4>
        <ul>
          <li v-for="l in links" :key="l.to"><RouterLink :to="l.to">{{ l.label }}</RouterLink></li>
        </ul>
      </div>

      <div>
        <h4>服务领域</h4>
        <ul>
          <li v-for="s in services" :key="s.id"><RouterLink :to="`/services/${s.id}`">{{ s.title }}</RouterLink></li>
        </ul>
      </div>

      <div>
        <h4>联系方式</h4>
        <ul class="contact">
          <li><Icon name="pin" :size="16" /> {{ company.address }}</li>
          <li><Icon name="phone" :size="16" /> {{ company.phone }}</li>
          <li><Icon name="mail" :size="16" /> {{ company.email }}</li>
          <li><Icon name="clock" :size="16" /> {{ company.hours }}</li>
        </ul>
      </div>
    </div>

    <div class="container bottom">
      <span>© {{ year }} {{ company.full }} 版权所有</span>
      <span v-if="company.icp"><a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener">{{ company.icp }}</a></span>
      <span class="tip">本网站内容仅供参考，不构成法律、税务或投资意见。</span>
    </div>
  </footer>
</template>

<style scoped>
.footer { background: var(--navy-900); color: rgba(255, 255, 255, 0.7); padding-top: 72px; font-size: 14.5px; }
.top { display: grid; grid-template-columns: 1.5fr 0.8fr 1.1fr 1.4fr; gap: 48px; padding-bottom: 56px; }
.brand { color: #fff; }
.brand p { color: rgba(255, 255, 255, 0.6); margin-top: 18px; line-height: 1.8; }
.brand .slogan { color: var(--gold); letter-spacing: 3px; font-weight: 600; }
h4 { color: #fff; font-size: 16px; margin-bottom: 20px; letter-spacing: 2px; }
li { margin-bottom: 11px; }
a:hover { color: var(--gold); }
.contact li { display: flex; gap: 10px; align-items: flex-start; }
.contact svg { color: var(--gold); margin-top: 5px; }
.bottom {
  display: flex; flex-wrap: wrap; justify-content: space-between; gap: 8px 24px;
  padding: 22px 0; border-top: 1px solid rgba(255, 255, 255, 0.1); font-size: 13px;
}
.tip { opacity: 0.6; }
@media (max-width: 960px) { .top { grid-template-columns: 1fr 1fr; } }
@media (max-width: 600px) { .top { grid-template-columns: 1fr; gap: 36px; } }
</style>