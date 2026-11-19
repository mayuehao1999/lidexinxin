<script setup>
import { reactive, ref } from 'vue'
import { company, services } from '../data/site'
import Icon from '../components/Icon.vue'
import PageBanner from '../components/PageBanner.vue'

// 如需把表单发送到邮箱：到 https://web3forms.com 免费申请 Access Key 并填在这里
const WEB3FORMS_KEY = ''

const form = reactive({ name: '', company: '', phone: '', email: '', service: '', message: '', botcheck: '' })
const status = ref('idle') // idle | sending | success | error

const cards = [
  { icon: 'pin', t: '公司地址', v: company.address },
  { icon: 'phone', t: '联系电话', v: company.phone },
  { icon: 'mail', t: '电子邮箱', v: company.email },
  { icon: 'clock', t: '工作时间', v: company.hours },
]

async function submit() {
  if (form.botcheck) return
  const content = `姓名：${form.name}\n公司：${form.company}\n电话：${form.phone}\n邮箱：${form.email}\n咨询服务：${form.service}\n\n需求描述：\n${form.message}`

  if (!WEB3FORMS_KEY) {
    // 未配置表单服务时，调起邮件客户端
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent('官网咨询 - ' + form.name)}&body=${encodeURIComponent(content)}`
    return
  }

  status.value = 'sending'
  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ access_key: WEB3FORMS_KEY, subject: `官网咨询 - ${form.name}`, from_name: '励德树信官网', message: content, ...form }),
    })
    const data = await res.json()
    if (!data.success) throw new Error('fail')
    status.value = 'success'
    Object.assign(form, { name: '', company: '', phone: '', email: '', service: '', message: '' })
  } catch {
    status.value = 'error'
  }
}
</script>

<template>
  <div>
    <PageBanner
      eyebrow="Contact" title="联系我们"
      desc="告诉我们您的需求，我们将认真倾听、尽快回复。"
      :crumbs="[{ label: '联系我们' }]"
    />

    <section class="section">
      <div class="container">
        <div class="info grid grid-4">
          <div v-for="(c, i) in cards" :key="c.t" v-reveal="i * 80">
            <div class="ic">
              <span><Icon :name="c.icon" :size="24" /></span>
              <h3>{{ c.t }}</h3>
              <p>{{ c.v }}</p>
            </div>
          </div>
        </div>

        <div class="form-wrap" v-reveal>
          <div class="left">
            <p class="eyebrow">Get In Touch</p>
            <h2>预约咨询</h2>
            <p class="desc">请简要描述您的需求，我们会在工作日尽快与您联系。您提供的信息仅用于沟通服务事宜，我们将严格保密。</p>
            <ul>
              <li><Icon name="check" :size="16" /> 首次沟通，坦诚交流</li>
              <li><Icon name="check" :size="16" /> 明确服务边界与费用</li>
              <li><Icon name="check" :size="16" /> 签署保密协议后再接收资料</li>
            </ul>
          </div>

          <form class="form" @submit.prevent="submit">
            <input v-model="form.botcheck" type="checkbox" class="hp" tabindex="-1" autocomplete="off" />
            <div class="row">
              <label>姓名 *<input v-model="form.name" required placeholder="您的称呼" /></label>
              <label>公司名称<input v-model="form.company" placeholder="所在公司" /></label>
            </div>
            <div class="row">
              <label>联系电话 *<input v-model="form.phone" required type="tel" placeholder="方便联系的手机号" /></label>
              <label>电子邮箱<input v-model="form.email" type="email" placeholder="name@example.com" /></label>
            </div>
            <label>感兴趣的服务
              <select v-model="form.service">
                <option value="">请选择</option>
                <option v-for="s in services" :key="s.id" :value="s.title">{{ s.title }}</option>
                <option value="其他">其他</option>
              </select>
            </label>
            <label>需求描述 *<textarea v-model="form.message" required rows="5" placeholder="请简要描述您的需求或遇到的问题"></textarea></label>
            <button class="btn btn-gold" type="submit" :disabled="status === 'sending'">
              {{ status === 'sending' ? '提交中…' : '提交咨询' }} <Icon name="send" :size="16" />
            </button>
            <p v-if="status === 'success'" class="ok">提交成功，我们会尽快与您联系。</p>
            <p v-if="status === 'error'" class="err">提交失败，请稍后重试，或直接通过电话、邮箱联系我们。</p>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.ic { height: 100%; padding: 32px 26px; text-align: center; border: 1px solid var(--line); border-radius: var(--radius); background: #fff; transition: all 0.3s; }
.ic:hover { box-shadow: var(--shadow-md); transform: translateY(-5px); border-color: var(--gold); }
.ic span { width: 58px; height: 58px; margin: 0 auto 16px; border-radius: 50%; display: grid; place-items: center; background: var(--gold-soft); color: var(--gold-dark); }
.ic h3 { color: var(--navy-800); font-size: 17px; margin-bottom: 6px; }
.ic p { color: var(--muted); font-size: 14.5px; word-break: break-all; }

.form-wrap { display: grid; grid-template-columns: 0.8fr 1.2fr; margin-top: 64px; border-radius: 22px; overflow: hidden; box-shadow: var(--shadow-lg); border: 1px solid var(--line); }
.left { padding: 54px 44px; color: #fff; background: radial-gradient(400px 240px at 100% 0, rgba(201, 169, 106, 0.35), transparent 60%), linear-gradient(135deg, #0b2545, #13315c); }
.left .eyebrow { color: var(--gold); }
.left h2 { font-size: 32px; margin: 14px 0 16px; letter-spacing: 3px; }
.left .desc { color: rgba(255, 255, 255, 0.75); margin-bottom: 28px; }
.left li { display: flex; gap: 10px; align-items: center; margin-bottom: 12px; color: rgba(255, 255, 255, 0.9); }
.left li svg { color: var(--gold); }

.form { padding: 48px 44px; background: #fff; display: grid; gap: 18px; }
.row { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
label { display: grid; gap: 8px; font-size: 14px; font-weight: 600; color: var(--navy-800); }
input, select, textarea { padding: 12px 14px; border: 1px solid #d5dbe6; border-radius: 10px; background: #fafbfd; font-weight: 400; outline: none; transition: all 0.2s; resize: vertical; }
input:focus, select:focus, textarea:focus { border-color: var(--gold); background: #fff; box-shadow: 0 0 0 3px rgba(201, 169, 106, 0.2); }
.hp { position: absolute; left: -9999px; }
.form .btn { justify-self: start; border: none; }
.form .btn:disabled { opacity: 0.6; cursor: not-allowed; }
.ok { color: #15803d; font-size: 14.5px; }
.err { color: #b91c1c; font-size: 14.5px; }

@media (max-width: 960px) {
  .form-wrap { grid-template-columns: 1fr; }
  .left, .form { padding: 36px 26px; }
}
@media (max-width: 560px) { .row { grid-template-columns: 1fr; } }
</style>