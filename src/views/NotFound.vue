<script setup>
import Icon from '../components/Icon.vue'
</script>

<template>
  <section class="nf">
    <div class="container">
      <b>404</b>
      <h1>页面未找到</h1>
      <p>您访问的页面不存在或已被移动，请返回首页继续浏览。</p>
      <RouterLink to="/" class="btn btn-gold"><Icon name="arrow-left" :size="16" /> 返回首页</RouterLink>
    </div>
  </section>
</template>

<style scoped>
.nf {
  min-height: 100vh; display: grid; place-items: center; text-align: center; color: #fff;
  padding: var(--header-h) 0 0;
  background: radial-gradient(600px 300px at 80% 10%, rgba(201, 169, 106, 0.25), transparent 60%), linear-gradient(135deg, #071a33, #0b2545 60%, #13315c);
}
b { display: block; font-size: clamp(90px, 18vw, 180px); line-height: 1; color: var(--gold); letter-spacing: 8px; }
h1 { margin: 10px 0 12px; letter-spacing: 4px; }
p { color: rgba(255, 255, 255, 0.7); margin-bottom: 32px; }
</style>