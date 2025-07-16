<template>
  <div class="contact">
    <!-- 页面标题 -->
    <section class="bg-primary-600 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">联系我们</h1>
        <p class="text-xl text-primary-100 max-w-3xl mx-auto">
          我们期待与您合作，为您提供专业的技术解决方案
        </p>
      </div>
    </section>

    <!-- 联系信息和表单 -->
    <section class="section-padding bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- 联系信息 -->
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-8">联系信息</h2>
            
            <div class="space-y-6">
              <div class="flex items-start">
                <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">公司地址</h3>
                  <p class="text-gray-600">北京市朝阳区xxx大厦<br />A座15层1501室</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">联系电话</h3>
                  <p class="text-gray-600">18156018435</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">邮箱地址</h3>
                  <p class="text-gray-600">info@company.com<br />support@company.com</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">工作时间</h3>
                  <p class="text-gray-600">周一至周五：9:00-18:00<br />周六：9:00-12:00</p>
                </div>
              </div>
            </div>

            <!-- 地图占位 -->
            <div class="mt-8">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">公司位置</h3>
              <div class="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <span class="text-gray-500">地图组件</span>
              </div>
            </div>
          </div>

          <!-- 联系表单 -->
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-8">在线咨询</h2>
            
            <form @submit.prevent="submitForm" class="space-y-6">
              <!-- 姓名 -->
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                  姓名 <span class="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  :class="{ 'border-red-500': errors.name }"
                  placeholder="请输入您的姓名"
                />
                <p v-if="errors.name" class="mt-1 text-sm text-red-600">{{ errors.name }}</p>
              </div>

              <!-- 公司名称 -->
              <div>
                <label for="company" class="block text-sm font-medium text-gray-700 mb-2">
                  公司名称 <span class="text-red-500">*</span>
                </label>
                <input
                  id="company"
                  v-model="form.company"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  :class="{ 'border-red-500': errors.company }"
                  placeholder="请输入您的公司名称"
                />
                <p v-if="errors.company" class="mt-1 text-sm text-red-600">{{ errors.company }}</p>
              </div>

              <!-- 联系电话 -->
              <div>
                <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
                  联系电话 <span class="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  v-model="form.phone"
                  type="tel"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  :class="{ 'border-red-500': errors.phone }"
                  placeholder="请输入您的联系电话"
                />
                <p v-if="errors.phone" class="mt-1 text-sm text-red-600">{{ errors.phone }}</p>
              </div>

              <!-- 邮箱 -->
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                  邮箱地址 <span class="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  :class="{ 'border-red-500': errors.email }"
                  placeholder="请输入您的邮箱地址"
                />
                <p v-if="errors.email" class="mt-1 text-sm text-red-600">{{ errors.email }}</p>
              </div>

              <!-- 服务类型 -->
              <div>
                <label for="service" class="block text-sm font-medium text-gray-700 mb-2">
                  服务类型 <span class="text-red-500">*</span>
                </label>
                <select
                  id="service"
                  v-model="form.service"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  :class="{ 'border-red-500': errors.service }"
                >
                  <option value="">请选择服务类型</option>
                  <option value="software">软件开发</option>
                  <option value="cloud">云服务</option>
                  <option value="security">安全防护</option>
                  <option value="consulting">技术咨询</option>
                  <option value="other">其他服务</option>
                </select>
                <p v-if="errors.service" class="mt-1 text-sm text-red-600">{{ errors.service }}</p>
              </div>

              <!-- 项目预算 -->
              <div>
                <label for="budget" class="block text-sm font-medium text-gray-700 mb-2">
                  项目预算
                </label>
                <select
                  id="budget"
                  v-model="form.budget"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                >
                  <option value="">请选择预算范围</option>
                  <option value="10-50">10-50万</option>
                  <option value="50-100">50-100万</option>
                  <option value="100-500">100-500万</option>
                  <option value="500+">500万以上</option>
                </select>
              </div>

              <!-- 项目描述 -->
              <div>
                <label for="description" class="block text-sm font-medium text-gray-700 mb-2">
                  项目描述 <span class="text-red-500">*</span>
                </label>
                <textarea
                  id="description"
                  v-model="form.description"
                  required
                  rows="4"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                  :class="{ 'border-red-500': errors.description }"
                  placeholder="请详细描述您的项目需求..."
                ></textarea>
                <p v-if="errors.description" class="mt-1 text-sm text-red-600">{{ errors.description }}</p>
              </div>

              <!-- 验证码 -->
              <div>
                <label for="captcha" class="block text-sm font-medium text-gray-700 mb-2">
                  验证码 <span class="text-red-500">*</span>
                </label>
                <div class="flex space-x-4">
                  <input
                    id="captcha"
                    v-model="form.captcha"
                    type="text"
                    required
                    class="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    :class="{ 'border-red-500': errors.captcha }"
                    placeholder="请输入验证码"
                    maxlength="4"
                  />
                  <div class="flex-shrink-0">
                    <div 
                      class="w-32 h-12 bg-gray-100 border border-gray-300 rounded-lg flex items-center justify-center cursor-pointer select-none font-mono text-lg font-bold"
                      @click="refreshCaptcha"
                    >
                      {{ captchaText }}
                    </div>
                  </div>
                </div>
                <p v-if="errors.captcha" class="mt-1 text-sm text-red-600">{{ errors.captcha }}</p>
              </div>

              <!-- 提交按钮 -->
              <div>
                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="w-full btn-primary text-lg py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span v-if="isSubmitting">提交中...</span>
                  <span v-else>提交咨询</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- 常见问题 -->
    <section class="section-padding bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            常见问题
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            解答您可能关心的问题
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div 
            v-for="faq in faqs" 
            :key="faq.id"
            class="card p-6"
          >
            <h3 class="text-lg font-semibold text-gray-900 mb-3">{{ faq.question }}</h3>
            <p class="text-gray-600">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from 'vue'

export default {
  name: 'Contact',
  setup() {
    const isSubmitting = ref(false)
    const captchaText = ref('')
    
    const form = reactive({
      name: '',
      company: '',
      phone: '',
      email: '',
      service: '',
      budget: '',
      description: '',
      captcha: ''
    })

    const errors = reactive({
      name: '',
      company: '',
      phone: '',
      email: '',
      service: '',
      description: '',
      captcha: ''
    })

    const faqs = ref([
      {
        id: 1,
        question: '项目开发周期一般是多久？',
        answer: '项目周期根据具体需求而定，一般小型项目1-3个月，中型项目3-6个月，大型项目6-12个月。'
      },
      {
        id: 2,
        question: '是否提供售后服务？',
        answer: '是的，我们提供1年的免费售后服务，包括系统维护、bug修复、技术支持等。'
      },
      {
        id: 3,
        question: '如何保证项目质量？',
        answer: '我们采用严格的质量控制流程，包括需求评审、代码审查、测试验证等环节。'
      },
      {
        id: 4,
        question: '是否支持定制化开发？',
        answer: '完全支持，我们根据客户的具体需求进行定制化开发，确保满足业务需求。'
      }
    ])

    // 生成验证码
    const generateCaptcha = () => {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
      let result = ''
      for (let i = 0; i < 4; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length))
      }
      captchaText.value = result
    }

    // 刷新验证码
    const refreshCaptcha = () => {
      generateCaptcha()
    }

    // 表单验证
    const validateForm = () => {
      let isValid = true
      
      // 重置错误信息
      Object.keys(errors).forEach(key => {
        errors[key] = ''
      })

      // 验证姓名
      if (!form.name.trim()) {
        errors.name = '请输入姓名'
        isValid = false
      }

      // 验证公司名称
      if (!form.company.trim()) {
        errors.company = '请输入公司名称'
        isValid = false
      }

      // 验证电话
      if (!form.phone.trim()) {
        errors.phone = '请输入联系电话'
        isValid = false
      } else if (!/^1[3-9]\d{9}$/.test(form.phone)) {
        errors.phone = '请输入正确的手机号码'
        isValid = false
      }

      // 验证邮箱
      if (!form.email.trim()) {
        errors.email = '请输入邮箱地址'
        isValid = false
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        errors.email = '请输入正确的邮箱地址'
        isValid = false
      }

      // 验证服务类型
      if (!form.service) {
        errors.service = '请选择服务类型'
        isValid = false
      }

      // 验证项目描述
      if (!form.description.trim()) {
        errors.description = '请输入项目描述'
        isValid = false
      } else if (form.description.length < 10) {
        errors.description = '项目描述至少10个字符'
        isValid = false
      }

      // 验证验证码
      if (!form.captcha.trim()) {
        errors.captcha = '请输入验证码'
        isValid = false
      } else if (form.captcha.toUpperCase() !== captchaText.value) {
        errors.captcha = '验证码错误'
        isValid = false
      }

      return isValid
    }

    // 提交表单
    const submitForm = async () => {
      if (!validateForm()) {
        return
      }

      isSubmitting.value = true

      try {
        // 模拟API调用
        await new Promise(resolve => setTimeout(resolve, 2000))
        
        // 显示成功消息
        alert('提交成功！我们会尽快与您联系。')
        
        // 重置表单
        Object.keys(form).forEach(key => {
          form[key] = ''
        })
        
        // 刷新验证码
        generateCaptcha()
        
      } catch (error) {
        alert('提交失败，请稍后重试。')
      } finally {
        isSubmitting.value = false
      }
    }

    onMounted(() => {
      generateCaptcha()
    })

    return {
      form,
      errors,
      isSubmitting,
      captchaText,
      faqs,
      refreshCaptcha,
      submitForm
    }
  }
}
</script> 