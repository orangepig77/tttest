<template>
  <div class="home">
    <!-- 轮播图部分 -->
    <section class="relative">
      <div class="relative h-96 md:h-[600px] overflow-hidden">
        <div 
          v-for="(slide, index) in slides" 
          :key="index"
          v-show="currentSlide === index"
          class="absolute inset-0 transition-opacity duration-1000"
        >
          <div class="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10"></div>
          <div 
            class="w-full h-full bg-cover bg-center"
            :style="{ backgroundImage: `url(${slide.image})` }"
          ></div>
          <div class="absolute inset-0 flex items-center z-20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="max-w-2xl">
                <h1 class="text-4xl md:text-6xl font-bold text-white mb-4">
                  {{ slide.title }}
                </h1>
                <p class="text-xl md:text-2xl text-white/90 mb-8">
                  {{ slide.description }}
                </p>
                <button class="btn-primary text-lg px-8 py-3">
                  了解更多
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 轮播图指示器 -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
          <div class="flex space-x-2">
            <button
              v-for="(slide, index) in slides"
              :key="index"
              @click="currentSlide = index"
              class="w-3 h-3 rounded-full transition-colors"
              :class="currentSlide === index ? 'bg-white' : 'bg-white/50'"
            ></button>
          </div>
        </div>
        
        <!-- 轮播图控制按钮 -->
        <button 
          @click="prevSlide"
          class="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 text-white hover:text-gray-300 transition-colors"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          @click="nextSlide"
          class="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 text-white hover:text-gray-300 transition-colors"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>

    <!-- 服务卡片部分 -->
    <section class="section-padding bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            我们的服务
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            为您提供全方位的专业服务，助力企业数字化转型
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="service in services" 
            :key="service.id"
            class="card p-8 text-center hover:transform hover:scale-105 transition-transform duration-300"
          >
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <component :is="service.icon" class="w-8 h-8 text-primary-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">
              {{ service.title }}
            </h3>
            <p class="text-gray-600 mb-6">
              {{ service.description }}
            </p>
            <button class="text-primary-600 hover:text-primary-700 font-medium transition-colors">
              了解更多 →
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- 数据统计部分 -->
    <section class="section-padding bg-primary-600 text-white">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div v-for="stat in stats" :key="stat.id">
            <div class="text-3xl md:text-4xl font-bold mb-2">{{ stat.value }}</div>
            <div class="text-primary-100">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 客户案例部分 -->
    <section class="section-padding bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            成功案例
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            我们已为众多企业提供优质服务，助力他们实现业务增长
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="caseItem in cases" 
            :key="caseItem.id"
            class="card overflow-hidden"
          >
            <div class="h-48 bg-gray-200 flex items-center justify-center">
              <span class="text-gray-500">案例图片</span>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">
                {{ caseItem.title }}
              </h3>
              <p class="text-gray-600 mb-4">
                {{ caseItem.description }}
              </p>
              <div class="flex items-center justify-between">
                <span class="text-sm text-gray-500">{{ caseItem.industry }}</span>
                <button class="text-primary-600 hover:text-primary-700 font-medium text-sm">
                  查看详情
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 联系我们部分 -->
    <section class="section-padding bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            准备开始您的项目？
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            联系我们，获取专业的解决方案和报价
          </p>
        </div>
        
        <div class="text-center">
          <router-link to="/contact" class="btn-primary text-lg px-8 py-3 inline-block">
            立即咨询
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import ChartBarIcon from '@heroicons/vue/24/outline/ChartBarIcon'
import ComputerDesktopIcon from '@heroicons/vue/24/outline/ComputerDesktopIcon'
import CogIcon from '@heroicons/vue/24/outline/CogIcon'
import GlobeAltIcon from '@heroicons/vue/24/outline/GlobeAltIcon'
import ShieldCheckIcon from '@heroicons/vue/24/outline/ShieldCheckIcon'
import UserGroupIcon from '@heroicons/vue/24/outline/UserGroupIcon'

export default {
  name: 'Home',
  setup() {
    const currentSlide = ref(0)
    let slideInterval = null

    const slides = ref([
      {
        title: '专业的企业服务',
        description: '为企业提供全方位的数字化解决方案，助力企业转型升级',
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80'
      },
      {
        title: '技术创新驱动',
        description: '运用前沿技术，为企业打造高效、智能的业务系统',
        image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80'
      },
      {
        title: '客户至上理念',
        description: '以客户需求为中心，提供个性化、专业化的服务体验',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80'
      }
    ])

    const services = ref([
      {
        id: 1,
        title: '软件开发',
        description: '定制化软件开发，满足企业特定需求',
        icon: ComputerDesktopIcon
      },
      {
        id: 2,
        title: '数据分析',
        description: '深度数据分析，助力企业决策优化',
        icon: ChartBarIcon
      },
      {
        id: 3,
        title: '系统集成',
        description: '多系统整合，提升业务效率',
        icon: CogIcon
      },
      {
        id: 4,
        title: '云服务',
        description: '云端部署方案，安全可靠',
        icon: GlobeAltIcon
      },
      {
        id: 5,
        title: '安全防护',
        description: '全方位安全防护，保障数据安全',
        icon: ShieldCheckIcon
      },
      {
        id: 6,
        title: '技术咨询',
        description: '专业技术咨询，指导企业数字化转型',
        icon: UserGroupIcon
      }
    ])

    const stats = ref([
      { id: 1, value: '500+', label: '服务客户' },
      { id: 2, value: '1000+', label: '完成项目' },
      { id: 3, value: '50+', label: '技术专家' },
      { id: 4, value: '99%', label: '客户满意度' }
    ])

    const cases = ref([
      {
        id: 1,
        title: '某大型制造企业数字化转型',
        description: '帮助客户实现生产流程数字化，提升效率30%',
        industry: '制造业'
      },
      {
        id: 2,
        title: '电商平台系统开发',
        description: '为知名电商企业开发全渠道销售系统',
        industry: '电商'
      },
      {
        id: 3,
        title: '金融风控系统',
        description: '构建智能风控系统，降低风险率50%',
        industry: '金融'
      }
    ])

    const nextSlide = () => {
      currentSlide.value = (currentSlide.value + 1) % slides.value.length
    }

    const prevSlide = () => {
      currentSlide.value = currentSlide.value === 0 
        ? slides.value.length - 1 
        : currentSlide.value - 1
    }

    onMounted(() => {
      slideInterval = setInterval(nextSlide, 5000)
    })

    onUnmounted(() => {
      if (slideInterval) {
        clearInterval(slideInterval)
      }
    })

    return {
      currentSlide,
      slides,
      services,
      stats,
      cases,
      nextSlide,
      prevSlide
    }
  }
}
</script> 