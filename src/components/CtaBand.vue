<script setup>
import { company } from '../data/site'
import Icon from './Icon.vue'
</script>

<template>
  <section class="cta">
    <div class="container">
      <div class="panel" v-reveal>
        <div>
          <h2>让专业的人，帮您把事情理顺</h2>
          <p>无论是管理规范、财税梳理，还是 AI 与数据应用，欢迎与我们聊聊您的需求。首次沟通，我们将认真倾听、坦诚建议。</p>
        </div>
        <div class="actions">
          <RouterLink to="/contact" class="btn btn-gold">立即预约咨询 <Icon name="arrow" :size="16" /></RouterLink>
          <span class="tel"><Icon name="phone" :size="16" /> {{ company.phone }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta { padding: 0 0 96px; }
.panel {
  display: flex; align-items: center; justify-content: space-between; gap: 40px;
  padding: 56px 60px; border-radius: 22px; color: #fff; position: relative; overflow: hidden;
  background:
    radial-gradient(500px 260px at 100% 0%, rgba(201, 169, 106, 0.35), transparent 60%),
    linear-gradient(135deg, #0b2545, #13315c);
  box-shadow: var(--shadow-lg);
}
h2 { font-size: clamp(24px, 3vw, 32px); letter-spacing: 2px; margin-bottom: 12px; }
p { color: rgba(255, 255, 255, 0.75); max-width: 620px; }
.actions { display: flex; flex-direction: column; align-items: center; gap: 14px; flex-shrink: 0; }
.tel { display: inline-flex; gap: 8px; align-items: center; color: rgba(255, 255, 255, 0.8); font-size: 14.5px; }
@media (max-width: 820px) {
  .panel { flex-direction: column; text-align: center; padding: 44px 26px; }
}
</style>