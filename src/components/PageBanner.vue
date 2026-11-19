<script setup>
defineProps({
  eyebrow: String,
  title: String,
  desc: String,
  crumbs: { type: Array, default: () => [] },
})
</script>

<template>
  <section class="banner">
    <div class="container">
      <nav class="crumbs">
        <RouterLink to="/">首页</RouterLink>
        <template v-for="c in crumbs" :key="c.label">
          <span>/</span>
          <RouterLink v-if="c.to" :to="c.to">{{ c.label }}</RouterLink>
          <em v-else>{{ c.label }}</em>
        </template>
      </nav>
      <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
      <h1>{{ title }}</h1>
      <p v-if="desc" class="desc">{{ desc }}</p>
    </div>
  </section>
</template>

<style scoped>
.banner {
  position: relative; overflow: hidden; color: #fff;
  padding: calc(var(--header-h) + 56px) 0 72px;
  background:
    radial-gradient(700px 320px at 90% 0%, rgba(201, 169, 106, 0.25), transparent 60%),
    linear-gradient(135deg, #071a33, #0b2545 60%, #13315c);
}
.banner::before {
  content: ""; position: absolute; inset: 0;
  background-image: linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
  background-size: 52px 52px;
  -webkit-mask-image: linear-gradient(180deg, #000, transparent);
  mask-image: linear-gradient(180deg, #000, transparent);
}
.container { position: relative; }
.crumbs { display: flex; gap: 10px; font-size: 13.5px; color: rgba(255, 255, 255, 0.6); margin-bottom: 26px; flex-wrap: wrap; }
.crumbs a:hover { color: var(--gold); }
.crumbs em { font-style: normal; color: var(--gold); }
.eyebrow { color: var(--gold); margin-bottom: 14px; }
h1 { font-size: clamp(30px, 4.5vw, 46px); letter-spacing: 3px; line-height: 1.3; }
.desc { margin-top: 16px; max-width: 720px; color: rgba(255, 255, 255, 0.75); font-size: 17px; }
</style>