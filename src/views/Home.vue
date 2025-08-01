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
        description: '为安徽企业提供全方位的建筑服务解决方案，包括工程管理、招投标代理等专业服务',
        image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80'
      },
      {
        title: '合肥天鹅湖与广电中心',
        description: '合肥市标志性建筑群，展现现代化城市建设成就',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80'
      },
      {
        title: '黄山美景',
        description: '安徽黄山，世界文化与自然双重遗产，中华十大名山之一',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80'
      },
      {
        title: '巢湖风光',
        description: '中国五大淡水湖之一，安徽重要的生态资源',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80'
      }
    ])

    const services = ref([
      {
        id: 1,
        title: '工程管理服务',
        description: '专业的工程项目管理，确保项目高效完成',
        icon: ComputerDesktopIcon
      },
      {
        id: 2,
        title: '招投标代理服务',
        description: '专业的招投标代理，为企业提供合规高效的投标服务',
        icon: ChartBarIcon
      },
      {
        id: 3,
        title: '企业管理咨询',
        description: '为企业提供专业的管理咨询服务',
        icon: CogIcon
      },
      {
        id: 4,
        title: '对外承包工程',
        description: '承接各类对外工程承包项目',
        icon: GlobeAltIcon
      },
      {
        id: 5,
        title: '工程造价咨询',
        description: '专业的工程造价咨询服务',
        icon: ShieldCheckIcon
      },
      {
        id: 6,
        title: '知识产权服务',
        description: '商标代理、版权代理等知识产权服务',
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
        title: '合肥市重点工程项目管理',
        description: '为合肥市重点工程项目提供专业的管理服务，确保项目按期完成',
        industry: '工程建设'
      },
      {
        id: 2,
        title: '安徽某大型企业招投标代理',
        description: '为安徽知名企业提供招投标代理服务，成功中标多个重大项目',
        industry: '招投标'
      },
      {
        id: 3,
        title: '工程造价咨询服务',
        description: '为多个工程项目提供专业的造价咨询服务，控制成本效果显著',
        industry: '造价咨询'
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