<script setup>
import { process } from '../data/site'
import Icon from './Icon.vue'
</script>

<template>
  <div class="steps">
    <div v-for="(p, i) in process" :key="p.title" class="step" v-reveal="i * 90">
      <div class="dot">
        <Icon :name="p.icon" :size="26" />
        <em>{{ String(i + 1).padStart(2, '0') }}</em>
      </div>
      <h3>{{ p.title }}</h3>
      <p>{{ p.desc }}</p>
    </div>
  </div>
</template>

<style scoped>
.steps { display: grid; grid-template-columns: repeat(5, 1fr); gap: 20px; position: relative; }
.steps::before { content: ""; position: absolute; top: 37px; left: 10%; right: 10%; border-top: 2px dashed #d5dbe6; }
.step { text-align: center; position: relative; }
.dot {
  width: 76px; height: 76px; margin: 0 auto 20px; border-radius: 50%; background: #fff;
  border: 2px solid var(--gold); color: var(--navy-800); display: grid; place-items: center; position: relative;
  box-shadow: 0 6px 18px rgba(201, 169, 106, 0.25);
}
.dot em {
  position: absolute; top: -6px; right: -6px; width: 28px; height: 28px; border-radius: 50%;
  background: var(--navy-800); color: var(--gold); font-style: normal; font-size: 11px; font-weight: 700; display: grid; place-items: center;
}
h3 { font-size: 18px; color: var(--navy-800); margin-bottom: 8px; }
p { font-size: 14px; color: var(--muted); padding: 0 6px; }
@media (max-width: 900px) {
  .steps { grid-template-columns: 1fr; gap: 30px; }
  .steps::before { display: none; }
  .step { display: grid; grid-template-columns: 76px 1fr; column-gap: 20px; text-align: left; align-items: center; }
  .dot { margin: 0; grid-row: span 2; }
  p { padding: 0; }
}
</style>