<script setup>
defineProps({ eyebrow: String, title: String, desc: String, left: Boolean, light: Boolean })
</script>

<template>
  <div class="st" :class="{ left, light }">
    <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
    <h2>{{ title }}</h2>
    <p v-if="desc" class="desc">{{ desc }}</p>
  </div>
</template>

<style scoped>
.st { text-align: center; max-width: 720px; margin: 0 auto 56px; }
.st.left { text-align: left; margin-left: 0; }
h2 { font-size: clamp(26px, 3.4vw, 36px); color: var(--navy-800); letter-spacing: 2px; line-height: 1.35; margin-top: 12px; }
.desc { margin-top: 14px; color: var(--muted); font-size: 16.5px; }
.light h2 { color: #fff; }
.light .desc { color: rgba(255, 255, 255, 0.7); }
.light .eyebrow { color: var(--gold); }
</style>