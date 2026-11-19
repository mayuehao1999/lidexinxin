<script setup>
import { company, services, stats, whyUs, faqs, articles } from '../data/site'
import Icon from '../components/Icon.vue'
import SectionTitle from '../components/SectionTitle.vue'
import ServiceCard from '../components/ServiceCard.vue'
import InsightCard from '../components/InsightCard.vue'
import ProcessSteps from '../components/ProcessSteps.vue'
import CtaBand from '../components/CtaBand.vue'
</script>

<template>
  <div>
    <!-- 首屏 -->
    <section class="hero">
      <div class="container hero-grid">
        <div class="hero-text">
          <p class="eyebrow">管理咨询 · 财税咨询 · 数字化服务</p>
          <h1>以德立身<br /><span class="gold">以信立业</span></h1>
          <p class="lead">
            {{ company.short }}专注为企业提供管理规范、财税梳理与 AI、大数据应用方面的专业咨询服务，
            以务实的方案与可信赖的陪伴，助力企业稳健成长。
          </p>
          <div class="btns">
            <RouterLink to="/contact" class="btn btn-gold">预约咨询 <Icon name="arrow" :size="16" /></RouterLink>
            <RouterLink to="/services" class="btn btn-ghost">了解服务</RouterLink>
          </div>
        </div>

        <div class="hero-card">
          <div class="hc-head">
            <span>核心服务矩阵</span>
            <em>CORE SERVICES</em>
          </div>
          <div class="tiles">
            <RouterLink v-for="s in services" :key="s.id" :to="`/services/${s.id}`" class="tile">
              <Icon :name="s.icon" :size="24" />
              <span>{{ s.title }}</span>
            </RouterLink>
          </div>
          <div class="badge"><Icon name="pin" :size="14" /> 立足昆明 · 服务企业</div>
        </div>
      </div>
    </section>

    <!-- 数据条 -->
    <section class="stats-wrap">
      <div class="container">
        <div class="stats" v-reveal>
          <div v-for="s in stats" :key="s.label" class="stat">
            <b>{{ s.num }}</b>
            <span>{{ s.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 关于简介 -->
    <section class="section">
      <div class="container about">
        <div class="about-visual" v-reveal>
          <div class="av-main">
            <div class="chars"><span>励德</span><span>树信</span></div>
            <p>{{ company.en }}</p>
          </div>
          <div class="av-float"><b>{{ company.founded }}</b><span>成立于昆明</span></div>
        </div>

        <div v-reveal="120">
          <p class="eyebrow">关于我们</p>
          <h2>以德立身，以信立业</h2>
          <p class="p">
            “励德”取勉力进取、树立德业之意；“树信”取树立诚信、积累信誉之意。
            两者合在一起，是我们对自身的要求，也是对客户的承诺。
          </p>
          <p class="p">
            {{ company.full }}立足昆明，业务涵盖企业管理咨询、财务咨询、税务咨询、资产评估咨询，
            并积极融合人工智能与大数据技术，为企业提供更高效、更透明的咨询服务。
          </p>
          <ul class="checks">
            <li><Icon name="check" :size="18" /> 以客户需求为出发点，方案务实可落地</li>
            <li><Icon name="check" :size="18" /> 咨询边界清晰，不夸大、不越界</li>
            <li><Icon name="check" :size="18" /> 保密优先，尊重并保护客户信息</li>
          </ul>
          <RouterLink to="/about" class="btn btn-navy">了解更多 <Icon name="arrow" :size="16" /></RouterLink>
        </div>
      </div>
    </section>

    <!-- 服务 -->
    <section class="section soft">
      <div class="container">
        <SectionTitle eyebrow="Our Services" title="专业服务，覆盖企业经营关键环节" desc="从管理到财税，从资产到数据与 AI，为企业提供系统化的咨询支持。" />
        <div class="grid grid-3">
          <div v-for="(s, i) in services" :key="s.id" v-reveal="(i % 3) * 100">
            <ServiceCard :s="s" />
          </div>
        </div>
      </div>
    </section>

    <!-- 优势 -->
    <section class="section why">
      <div class="container">
        <SectionTitle light eyebrow="Why Choose Us" title="为什么选择励德树信" desc="我们希望成为您身边可靠、专业、值得长期信赖的咨询伙伴。" />
        <div class="grid grid-4">
          <div v-for="(w, i) in whyUs" :key="w.title" v-reveal="i * 100">
            <div class="why-card">
              <span class="why-ico"><Icon :name="w.icon" :size="28" /></span>
              <h3>{{ w.title }}</h3>
              <p>{{ w.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 流程 -->
    <section class="section">
      <div class="container">
        <SectionTitle eyebrow="Our Process" title="清晰透明的服务流程" desc="五个步骤，让每一次合作都有章可循、有据可查。" />
        <ProcessSteps />
      </div>
    </section>

    <!-- 洞察 -->
    <section class="section soft">
      <div class="container">
        <SectionTitle eyebrow="Insights" title="行业洞察" desc="分享管理、财务、AI 与数据领域的实用观点。" />
        <div class="grid grid-3">
          <div v-for="(a, i) in articles.slice(0, 3)" :key="a.id" v-reveal="i * 100">
            <InsightCard :a="a" />
          </div>
        </div>
        <div class="more-wrap">
          <RouterLink to="/insights" class="btn btn-line">查看全部文章 <Icon name="arrow" :size="16" /></RouterLink>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section">
      <div class="container faq-wrap">
        <SectionTitle left eyebrow="FAQ" title="常见问题" desc="如果这里没有您想了解的内容，欢迎直接联系我们。" />
        <div class="faq" v-reveal>
          <details v-for="f in faqs" :key="f.q">
            <summary>{{ f.q }}<Icon name="chevron" :size="20" /></summary>
            <p>{{ f.a }}</p>
          </details>
        </div>
      </div>
    </section>

    <CtaBand />
  </div>
</template>

<style scoped>
/* hero */
.hero {
  position: relative; overflow: hidden; color: #fff;
  padding: calc(var(--header-h) + 90px) 0 160px;
  background:
    radial-gradient(900px 480px at 88% 0%, rgba(201, 169, 106, 0.25), transparent 60%),
    radial-gradient(700px 500px at 0% 100%, rgba(59, 107, 176, 0.35), transparent 60%),
    linear-gradient(135deg, #071a33, #0b2545 55%, #13315c);
}
.hero::before {
  content: ""; position: absolute; inset: 0;
  background-image: linear-gradient(rgba(255, 255, 255, 0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.045) 1px, transparent 1px);
  background-size: 56px 56px;
  -webkit-mask-image: radial-gradient(ellipse at 50% 30%, #000 30%, transparent 75%);
  mask-image: radial-gradient(ellipse at 50% 30%, #000 30%, transparent 75%);
}
.hero-grid { position: relative; display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 64px; align-items: center; }
.hero .eyebrow { color: var(--gold); margin-bottom: 22px; }
h1 { font-size: clamp(42px, 6.4vw, 72px); line-height: 1.2; letter-spacing: 8px; margin-bottom: 26px; }
.lead { font-size: 18px; color: rgba(255, 255, 255, 0.78); max-width: 580px; margin-bottom: 40px; }
.btns { display: flex; gap: 16px; flex-wrap: wrap; }

.hero-card {
  position: relative; padding: 30px; border-radius: 22px;
  background: rgba(255, 255, 255, 0.07); border: 1px solid rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(14px); box-shadow: var(--shadow-lg);
}
.hc-head { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 20px; padding-bottom: 16px; border-bottom: 1px solid rgba(255, 255, 255, 0.14); }
.hc-head span { font-size: 18px; font-weight: 600; letter-spacing: 2px; }
.hc-head em { font-style: normal; font-size: 11px; letter-spacing: 2px; color: var(--gold); }
.tiles { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
.tile {
  display: flex; align-items: center; gap: 12px; padding: 16px 14px; font-size: 14.5px;
  border-radius: 12px; background: rgba(255, 255, 255, 0.06); transition: all 0.25s;
}
.tile svg { color: var(--gold); }
.tile:hover { background: rgba(201, 169, 106, 0.2); transform: translateY(-3px); }
.badge {
  position: absolute; left: 24px; bottom: -18px; padding: 8px 18px; border-radius: 999px;
  display: inline-flex; gap: 6px; align-items: center; font-size: 13px; font-weight: 600;
  background: linear-gradient(135deg, #dcc088, #b8964f); color: #fff; box-shadow: 0 8px 20px rgba(184, 150, 79, 0.45);
}

/* stats */
.stats-wrap { position: relative; z-index: 2; margin-top: -84px; }
.stats { display: grid; grid-template-columns: repeat(4, 1fr); background: #fff; border-radius: 20px; box-shadow: var(--shadow-lg); padding: 34px 0; }
.stat { text-align: center; padding: 6px 12px; border-right: 1px solid var(--line); }
.stat:last-child { border-right: none; }
.stat b { display: block; font-size: 36px; color: var(--navy-800); letter-spacing: 1px; line-height: 1.3; }
.stat span { font-size: 14px; color: var(--muted); }

/* about */
.about { display: grid; grid-template-columns: 0.9fr 1.1fr; gap: 72px; align-items: center; }
.about-visual { position: relative; padding: 0 30px 30px 0; }
.av-main {
  aspect-ratio: 5 / 4; border-radius: 22px; color: #fff; display: grid; place-content: center; text-align: center;
  background:
    radial-gradient(300px 200px at 100% 0, rgba(201, 169, 106, 0.4), transparent 60%),
    linear-gradient(135deg, #0b2545, #1d4274);
  box-shadow: var(--shadow-lg);
}
.chars { display: flex; gap: 26px; font-size: clamp(36px, 5vw, 56px); font-weight: 700; letter-spacing: 6px; }
.chars span:last-child { color: var(--gold); }
.av-main p { margin-top: 18px; font-size: 11px; letter-spacing: 5px; opacity: 0.6; }
.av-float {
  position: absolute; right: 0; bottom: 0; padding: 22px 30px; background: #fff; border-radius: 16px;
  box-shadow: var(--shadow-md); text-align: center; border-bottom: 4px solid var(--gold);
}
.av-float b { display: block; font-size: 34px; color: var(--navy-800); line-height: 1.2; }
.av-float span { font-size: 13px; color: var(--muted); }
.about h2 { font-size: clamp(26px, 3.4vw, 36px); color: var(--navy-800); letter-spacing: 2px; margin: 12px 0 20px; }
.p { color: #475569; margin-bottom: 14px; }
.checks { margin: 22px 0 30px; display: grid; gap: 10px; }
.checks li { display: flex; gap: 10px; align-items: center; color: var(--navy-800); font-weight: 500; }
.checks svg { color: var(--gold-dark); }

/* why */
.why { background: linear-gradient(135deg, #071a33, #0b2545); }
.why-card {
  height: 100%; padding: 34px 28px; border-radius: var(--radius);
  background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); transition: all 0.3s; color: #fff;
}
.why-card:hover { background: rgba(255, 255, 255, 0.09); border-color: rgba(201, 169, 106, 0.6); transform: translateY(-6px); }
.why-ico { width: 56px; height: 56px; border-radius: 14px; display: grid; place-items: center; background: rgba(201, 169, 106, 0.16); color: var(--gold); margin-bottom: 20px; }
.why-card h3 { font-size: 19px; margin-bottom: 10px; }
.why-card p { font-size: 14.5px; color: rgba(255, 255, 255, 0.68); }

.more-wrap { text-align: center; margin-top: 48px; }

/* faq */
.faq-wrap { display: grid; grid-template-columns: 0.8fr 1.2fr; gap: 64px; align-items: start; }
.faq-wrap :deep(.st) { margin-bottom: 0; }
.faq details { border: 1px solid var(--line); border-radius: 12px; margin-bottom: 14px; background: #fff; transition: all 0.25s; }
.faq details[open] { border-color: var(--gold); box-shadow: var(--shadow-sm); }
.faq summary {
  list-style: none; cursor: pointer; padding: 20px 24px; font-weight: 600; color: var(--navy-800);
  display: flex; justify-content: space-between; align-items: center; gap: 16px;
}
.faq summary::-webkit-details-marker { display: none; }
.faq summary svg { color: var(--gold-dark); transition: transform 0.25s; }
.faq details[open] summary svg { transform: rotate(180deg); }
.faq details p { padding: 0 24px 22px; color: var(--muted); }

@media (max-width: 960px) {
  .hero-grid, .about, .faq-wrap { grid-template-columns: 1fr; gap: 48px; }
  .hero { padding-bottom: 140px; }
  h1 { letter-spacing: 5px; }
  .stats { grid-template-columns: repeat(2, 1fr); row-gap: 24px; }
  .stat:nth-child(2) { border-right: none; }
}
@media (max-width: 520px) {
  .tiles { grid-template-columns: 1fr; }
  .stat b { font-size: 28px; }
}
</style>