<script setup>
import { company, principles } from '../data/site'
import Icon from '../components/Icon.vue'
import PageBanner from '../components/PageBanner.vue'
import SectionTitle from '../components/SectionTitle.vue'
import CtaBand from '../components/CtaBand.vue'

const info = [
  ['公司名称', company.full],
  ['法定代表人', company.legalPerson],
  ['注册资本', company.capital],
  ['成立时间', `${company.founded} 年`],
  ['注册地', company.region],
  ['经营范围', '企业管理咨询、财务咨询、税务服务、资产评估咨询，以及人工智能、大数据、互联网数据服务等（具体以营业执照登记为准）'],
]

const plans = [
  { year: '起步阶段', title: '夯实专业基础', desc: '聚焦管理与财税咨询核心服务，规范服务流程，打磨标准化的方法与工具。' },
  { year: '成长阶段', title: '深化数字化能力', desc: '将人工智能与数据分析融入咨询方法，提升诊断效率与方案精度。' },
  { year: '长期愿景', title: '成为值得信赖的长期伙伴', desc: '与客户建立长期、互信的合作关系，伴随企业不同发展阶段持续提供支持。' },
]
</script>

<template>
  <div>
    <PageBanner
      eyebrow="About Us" title="关于励德树信"
      desc="以德立身、以信立业——这是我们的名字，也是我们对每一位客户的承诺。"
      :crumbs="[{ label: '关于我们' }]"
    />

    <!-- 简介 -->
    <section class="section">
      <div class="container intro">
        <div v-reveal>
          <SectionTitle left eyebrow="Company Profile" title="公司简介" />
          <p>
            {{ company.full }}成立于 {{ company.founded }} 年，注册地位于云南省昆明市五华区，
            是一家专注于企业管理咨询及相关专业服务的公司。
          </p>
          <p>
            我们的服务涵盖企业管理咨询、财务咨询、税务咨询、资产评估咨询等传统领域，
            同时顺应时代发展，积极拓展人工智能、大数据与互联网数据服务，
            帮助企业以更清晰的管理、更规范的财税、更智能的工具，实现稳健经营与持续成长。
          </p>
          <p>我们相信，真正的咨询不是给出一份厚厚的报告，而是陪伴企业把问题解决、把方案落地。</p>
        </div>
        <div class="vision" v-reveal="120">
          <div v-for="(v, i) in [
            { t: '使命', d: '用专业与诚信，帮助企业把管理做实、把风险管住、把效率做高。' },
            { t: '愿景', d: '成为企业身边值得长期信赖的专业咨询伙伴。' },
            { t: '价值观', d: '以德立身，以信立业；务实、专业、共赢。' },
          ]" :key="v.t" class="vcard">
            <b>0{{ i + 1 }}</b>
            <div><h3>{{ v.t }}</h3><p>{{ v.d }}</p></div>
          </div>
        </div>
      </div>
    </section>

    <!-- 名称释义 -->
    <section class="section soft">
      <div class="container">
        <SectionTitle eyebrow="Our Name" title="名称寓意" desc="四个字，是我们的价值取向，也是我们的行事准则。" />
        <div class="grid grid-2">
          <div v-reveal><div class="name-card"><span class="big">励德</span><h3>勉力进取，树立德业</h3><p>“励”有勉力、劝勉之意，“德”为品行与德业。励德，意在时时自省、不断精进，以专业能力与职业操守立身。</p></div></div>
          <div v-reveal="120"><div class="name-card gold"><span class="big">树信</span><h3>树立诚信，积累信誉</h3><p>“树”为树立、培育，“信”为诚信、信誉。树信，意在以真诚与专业赢得信任，让信任成为长期合作的基石。</p></div></div>
        </div>
      </div>
    </section>

    <!-- 原则 -->
    <section class="section">
      <div class="container">
        <SectionTitle eyebrow="Our Principles" title="我们的服务原则" />
        <div class="grid grid-4">
          <div v-for="(p, i) in principles" :key="p.title" v-reveal="i * 100">
            <div class="pr-card">
              <span class="pr-ico"><Icon :name="p.icon" :size="26" /></span>
              <h3>{{ p.title }}</h3>
              <p>{{ p.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 工商信息 -->
    <section class="section soft">
      <div class="container reg">
        <div v-reveal>
          <SectionTitle left eyebrow="Registration" title="公司信息" desc="以下信息来源于公司工商登记，具体以营业执照为准。" />
        </div>
        <div class="table" v-reveal="120">
          <div v-for="r in info" :key="r[0]" class="row"><span>{{ r[0] }}</span><p>{{ r[1] }}</p></div>
        </div>
      </div>
    </section>

    <!-- 规划 -->
    <section class="section">
      <div class="container">
        <SectionTitle eyebrow="Roadmap" title="发展规划" desc="稳扎稳打，步步为营。" />
        <div class="grid grid-3">
          <div v-for="(p, i) in plans" :key="p.title" v-reveal="i * 100">
            <div class="plan">
              <em>{{ p.year }}</em>
              <h3>{{ p.title }}</h3>
              <p>{{ p.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CtaBand />
  </div>
</template>

<style scoped>
.intro { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 72px; align-items: center; }
.intro p { color: #475569; margin-bottom: 16px; }
.intro :deep(.st) { margin-bottom: 24px; }
.vision { display: grid; gap: 18px; }
.vcard { display: flex; gap: 20px; padding: 26px; border-radius: var(--radius); background: #fff; border: 1px solid var(--line); box-shadow: var(--shadow-sm); transition: all 0.3s; }
.vcard:hover { transform: translateX(6px); border-color: var(--gold); }
.vcard b { font-size: 34px; color: var(--gold); line-height: 1; }
.vcard h3 { color: var(--navy-800); margin-bottom: 4px; }
.vcard p { margin: 0; font-size: 15px; color: var(--muted); }

.name-card { height: 100%; padding: 48px 40px; border-radius: 20px; background: #fff; border: 1px solid var(--line); position: relative; overflow: hidden; transition: all 0.3s; }
.name-card:hover { box-shadow: var(--shadow-md); transform: translateY(-5px); }
.big { display: block; font-size: 64px; font-weight: 800; letter-spacing: 10px; color: var(--navy-800); line-height: 1.2; margin-bottom: 18px; }
.gold .big { color: var(--gold-dark); }
.name-card h3 { font-size: 20px; color: var(--navy-800); margin-bottom: 10px; }
.name-card p { color: var(--muted); }

.pr-card { height: 100%; text-align: center; padding: 36px 26px; background: #fff; border: 1px solid var(--line); border-radius: var(--radius); transition: all 0.3s; }
.pr-card:hover { box-shadow: var(--shadow-md); transform: translateY(-6px); }
.pr-ico { width: 62px; height: 62px; margin: 0 auto 18px; border-radius: 50%; display: grid; place-items: center; background: var(--gold-soft); color: var(--gold-dark); }
.pr-card h3 { color: var(--navy-800); margin-bottom: 8px; }
.pr-card p { color: var(--muted); font-size: 14.5px; }

.reg { display: grid; grid-template-columns: 0.8fr 1.2fr; gap: 64px; align-items: start; }
.reg :deep(.st) { margin-bottom: 0; }
.table { background: #fff; border-radius: var(--radius); border: 1px solid var(--line); overflow: hidden; }
.row { display: grid; grid-template-columns: 130px 1fr; padding: 18px 26px; border-bottom: 1px solid var(--line); gap: 16px; }
.row:last-child { border-bottom: none; }
.row span { color: var(--gold-dark); font-weight: 600; }
.row p { color: #334155; }

.plan { height: 100%; padding: 34px 30px; border-radius: var(--radius); background: #fff; border: 1px solid var(--line); border-top: 4px solid var(--gold); }
.plan em { font-style: normal; font-size: 13px; letter-spacing: 3px; color: var(--gold-dark); font-weight: 600; }
.plan h3 { margin: 8px 0 10px; color: var(--navy-800); font-size: 20px; }
.plan p { color: var(--muted); font-size: 15px; }

@media (max-width: 960px) {
  .intro, .reg { grid-template-columns: 1fr; gap: 40px; }
  .row { grid-template-columns: 1fr; gap: 2px; }
}
</style>
