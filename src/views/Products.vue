<template>
  <div class="products">
    <!-- 页面标题 -->
    <section class="bg-primary-600 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">产品中心</h1>
        <p class="text-xl text-primary-100 max-w-3xl mx-auto">
          为建筑业企业提供全方位的专业服务，满足不同规模和类型建筑企业的需求
        </p>
      </div>
    </section>

    <!-- 产品分类导航 -->
    <section class="bg-white border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap justify-center space-x-1 md:space-x-4 py-4">
          <button
            v-for="category in categories"
            :key="category.id"
            @click="selectedCategory = category.id"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            :class="selectedCategory === category.id 
              ? 'bg-primary-600 text-white' 
              : 'text-gray-600 hover:text-primary-600 hover:bg-primary-50'"
          >
            {{ category.name }}
          </button>
        </div>
      </div>
    </section>

    <!-- 产品展示区域 -->
    <section class="section-padding bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <!-- 一级分类 -->
        <div v-for="category in filteredCategories" :key="category.id" class="mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-8">{{ category.name }}</h2>
          
          <!-- 二级分类 -->
          <div v-for="subCategory in category.subCategories" :key="subCategory.id" class="mb-12">
            <h3 class="text-2xl font-semibold text-gray-800 mb-6">{{ subCategory.name }}</h3>
            
            <!-- 三级分类和产品 -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div 
                v-for="product in subCategory.products" 
                :key="product.id"
                class="card p-6 hover:transform hover:scale-105 transition-all duration-300"
              >
                <div class="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <span class="text-gray-500">{{ product.name }} 图片</span>
                </div>
                <h4 class="text-xl font-semibold text-gray-900 mb-2">{{ product.name }}</h4>
                <p class="text-gray-600 mb-4">{{ product.description }}</p>
                <div class="flex items-center justify-between">
                  <span class="text-primary-600 font-semibold">¥{{ product.price }}</span>
                  <button class="btn-primary text-sm px-4 py-2">
                    了解详情
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 产品特色 -->
    <section class="section-padding bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            产品特色
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            我们的产品具有以下核心优势
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="feature in features" 
            :key="feature.id"
            class="text-center"
          >
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <component :is="feature.icon" class="w-8 h-8 text-primary-600" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ feature.title }}</h3>
            <p class="text-gray-600">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 客户评价 -->
    <section class="section-padding bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            客户评价
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            听听我们的客户怎么说
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="testimonial in testimonials" 
            :key="testimonial.id"
            class="card p-6"
          >
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                <span class="text-gray-600 font-semibold">{{ testimonial.name.charAt(0) }}</span>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900">{{ testimonial.name }}</h4>
                <p class="text-sm text-gray-500">{{ testimonial.position }}</p>
              </div>
            </div>
            <p class="text-gray-600">{{ testimonial.content }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { 
  StarIcon, 
  ShieldCheckIcon, 
  CogIcon, 
  UserGroupIcon 
} from '@heroicons/vue/24/outline'

export default {
  name: 'Products',
  setup() {
    const selectedCategory = ref('all')

    const categories = ref([
      { id: 'all', name: '全部服务' },
      { id: 'qualification', name: '资质办理' },
      { id: 'management', name: '工程管理' },
      { id: 'consulting', name: '管理咨询' }
    ])

    const productData = ref([
      {
        id: 'qualification',
        name: '资质办理',
        subCategories: [
          {
            id: 'new',
            name: '新办资质',
            products: [
              {
                id: 1,
                name: '建筑工程施工总承包资质',
                description: '专业办理建筑工程施工总承包资质，从三级到特级',
                price: '50000'
              },
              {
                id: 2,
                name: '市政公用工程施工总承包资质',
                description: '办理市政公用工程施工总承包资质，服务市政工程企业',
                price: '45000'
              },
              {
                id: 3,
                name: '公路工程施工总承包资质',
                description: '专业办理公路工程施工总承包资质，服务公路建设企业',
                price: '55000'
              }
            ]
          },
          {
            id: 'upgrade',
            name: '资质升级',
            products: [
              {
                id: 4,
                name: '三级升二级资质',
                description: '专业办理三级资质升级到二级资质服务',
                price: '80000'
              },
              {
                id: 5,
                name: '二级升一级资质',
                description: '办理二级资质升级到一级资质，提升企业竞争力',
                price: '120000'
              },
              {
                id: 6,
                name: '一级升特级资质',
                description: '办理一级资质升级到特级资质，行业最高等级',
                price: '200000'
              }
            ]
          }
        ]
      },
      {
        id: 'management',
        name: '工程管理',
        subCategories: [
          {
            id: 'project',
            name: '项目管理',
            products: [
              {
                id: 7,
                name: '工程项目管理',
                description: '专业的工程项目管理服务，确保项目按期完成',
                price: '30000'
              },
              {
                id: 8,
                name: '施工管理',
                description: '专业的施工管理服务，保证施工质量和安全',
                price: '25000'
              }
            ]
          },
          {
            id: 'personnel',
            name: '人员配备',
            products: [
              {
                id: 9,
                name: '建造师配备',
                description: '为企业配备专业的建造师，满足项目需求',
                price: '8000'
              },
              {
                id: 10,
                name: '工程师配备',
                description: '配备各类专业工程师，确保项目技术需求',
                price: '6000'
              }
            ]
          }
        ]
      },
      {
        id: 'consulting',
        name: '管理咨询',
        subCategories: [
          {
            id: 'enterprise',
            name: '企业管理',
            products: [
              {
                id: 11,
                name: '建筑企业管理咨询',
                description: '为建筑企业提供专业的管理咨询服务',
                price: '10000'
              },
              {
                id: 12,
                name: '企业战略规划',
                description: '帮助企业制定发展战略和规划',
                price: '15000'
              }
            ]
          },
          {
            id: 'information',
            name: '信息咨询',
            products: [
              {
                id: 13,
                name: '建筑业信息咨询',
                description: '提供建筑业相关的信息咨询服务',
                price: '5000'
              },
              {
                id: 14,
                name: '政策法规咨询',
                description: '提供建筑业政策法规咨询服务',
                price: '3000'
              }
            ]
          }
        ]
      }
    ])

    const features = ref([
      {
        id: 1,
        title: '专业服务',
        description: '专注于建筑业服务，专业团队保障',
        icon: StarIcon
      },
      {
        id: 2,
        title: '成功案例',
        description: '5000+企业服务经验，成功案例众多',
        icon: ShieldCheckIcon
      },
      {
        id: 3,
        title: '快速办理',
        description: '高效的服务流程，快速完成办理',
        icon: CogIcon
      },
      {
        id: 4,
        title: '全程跟踪',
        description: '全程跟踪服务，确保项目成功',
        icon: UserGroupIcon
      }
    ])

    const testimonials = ref([
      {
        id: 1,
        name: '张经理',
        position: '某建筑公司总经理',
        content: '安徽宏澜帮助我们成功办理了资质升级，服务专业，效率很高。'
      },
      {
        id: 2,
        name: '李总监',
        position: '市政工程公司技术总监',
        content: '工程管理服务很专业，帮助我们提升了项目管理效率。'
      },
      {
        id: 3,
        name: '王总',
        position: '建筑企业CEO',
        content: '技术人员配备服务帮助我们解决了项目人员需求，服务很到位。'
      }
    ])

    const filteredCategories = computed(() => {
      if (selectedCategory.value === 'all') {
        return productData.value
      }
      return productData.value.filter(category => category.id === selectedCategory.value)
    })

    return {
      selectedCategory,
      categories,
      filteredCategories,
      features,
      testimonials
    }
  }
}
</script> 