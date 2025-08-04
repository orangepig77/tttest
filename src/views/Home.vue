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
            为安徽企业提供全方位的专业服务，助力企业数字化转型
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
            我们已为众多安徽企业提供优质服务，助力他们实现业务增长
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
        title: '安徽宏澜 - 专业建筑服务',
        description: '为建筑业企业提供资质办理、工程管理等全方位专业服务',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80'
      },
      {
        title: '建筑资质办理专家',
        description: '专业办理新办资质、升级资质，服务安徽省5000+企业，成功案例众多',
        image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80'
      },
      {
        title: '工程管理服务',
        description: '专业的工程管理服务，确保项目高效完成，质量可靠',
        image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80'
      },
      {
        title: '技术人员配备',
        description: '为企业配备工程必要的建造师、工程师等专业技术人员',
        image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80'
      }
    ])

    const services = ref([
      {
        id: 1,
        title: '建筑资质办理',
        description: '专业办理新办资质、升级资质，服务安徽省5000+企业，成功案例众多',
        icon: ComputerDesktopIcon
      },
      {
        id: 2,
        title: '工程管理服务',
        description: '专业的工程项目管理，确保项目按期完成，质量可靠',
        icon: CogIcon
      },
      {
        id: 3,
        title: '企业管理咨询',
        description: '为建筑业企业提供专业的管理咨询服务，提升企业竞争力',
        icon: GlobeAltIcon
      },
      {
        id: 4,
        title: '技术人员配备',
        description: '为企业配备工程必要的建造师、工程师等专业技术人员',
        icon: ShieldCheckIcon
      },
      {
        id: 5,
        title: '信息咨询服务',
        description: '提供建筑业相关的信息咨询服务，助力企业决策',
        icon: UserGroupIcon
      }
    ])

    const stats = ref([
      { id: 1, value: '5000+', label: '服务企业' },
      { id: 2, value: '1000+', label: '成功案例' },
      { id: 3, value: '50+', label: '专业团队' },
      { id: 4, value: '99%', label: '客户满意度' }
    ])

    const cases = ref([
      {
        id: 1,
        title: '某大型建筑企业资质升级',
        description: '成功帮助某大型建筑企业完成资质升级，从三级资质升级到二级资质',
        industry: '资质办理'
      },
      {
        id: 2,
        title: '建筑企业工程管理服务',
        description: '为多家建筑企业提供工程管理服务，确保项目按期完成',
        industry: '工程管理'
      },
      {
        id: 3,
        title: '技术人员配备服务',
        description: '为建筑企业配备专业的建造师、工程师，满足项目需求',
        industry: '人员配备'
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