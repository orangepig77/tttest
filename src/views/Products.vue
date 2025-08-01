<template>
  <div class="products">
    <!-- 页面标题 -->
    <section class="bg-primary-600 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">产品中心</h1>
        <p class="text-xl text-primary-100 max-w-3xl mx-auto">
          为安徽企业提供全方位的产品解决方案，满足不同行业和规模企业的需求
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
      { id: 'all', name: '全部产品' },
      { id: 'software', name: '软件开发' },
      { id: 'cloud', name: '云服务' },
      { id: 'security', name: '安全防护' },
      { id: 'consulting', name: '技术咨询' }
    ])

    const productData = ref([
      {
        id: 'software',
        name: '软件开发',
        subCategories: [
          {
            id: 'web',
            name: 'Web应用开发',
            products: [
              {
                id: 1,
                name: '企业管理系统',
                description: '全面的企业资源管理解决方案',
                price: '50000'
              },
              {
                id: 2,
                name: '电商平台',
                description: '功能完整的在线商城系统',
                price: '80000'
              },
              {
                id: 3,
                name: '客户关系管理',
                description: '高效的客户管理工具',
                price: '30000'
              }
            ]
          },
          {
            id: 'mobile',
            name: '移动应用开发',
            products: [
              {
                id: 4,
                name: 'iOS应用',
                description: '原生iOS应用开发',
                price: '60000'
              },
              {
                id: 5,
                name: 'Android应用',
                description: '原生Android应用开发',
                price: '55000'
              },
              {
                id: 6,
                name: '跨平台应用',
                description: 'React Native跨平台开发',
                price: '70000'
              }
            ]
          }
        ]
      },
      {
        id: 'cloud',
        name: '云服务',
        subCategories: [
          {
            id: 'hosting',
            name: '云主机服务',
            products: [
              {
                id: 7,
                name: '云服务器',
                description: '高性能云服务器租用',
                price: '2000'
              },
              {
                id: 8,
                name: '负载均衡',
                description: '高可用负载均衡服务',
                price: '1500'
              }
            ]
          }
        ]
      },
      {
        id: 'security',
        name: '安全防护',
        subCategories: [
          {
            id: 'protection',
            name: '安全防护',
            products: [
              {
                id: 9,
                name: 'DDoS防护',
                description: '专业的DDoS攻击防护',
                price: '5000'
              },
              {
                id: 10,
                name: 'SSL证书',
                description: '网站安全证书服务',
                price: '800'
              }
            ]
          }
        ]
      },
      {
        id: 'consulting',
        name: '技术咨询',
        subCategories: [
          {
            id: 'advisory',
            name: '技术咨询',
            products: [
              {
                id: 11,
                name: '技术架构咨询',
                description: '企业技术架构设计',
                price: '10000'
              },
              {
                id: 12,
                name: '数字化转型',
                description: '企业数字化转型指导',
                price: '20000'
              }
            ]
          }
        ]
      }
    ])

    const features = ref([
      {
        id: 1,
        title: '高质量',
        description: '严格的质量控制标准',
        icon: StarIcon
      },
      {
        id: 2,
        title: '安全可靠',
        description: '多重安全防护机制',
        icon: ShieldCheckIcon
      },
      {
        id: 3,
        title: '技术先进',
        description: '采用前沿技术栈',
        icon: CogIcon
      },
      {
        id: 4,
        title: '专业团队',
        description: '资深技术专家团队',
        icon: UserGroupIcon
      }
    ])

    const testimonials = ref([
      {
        id: 1,
        name: '张经理',
        position: '某制造企业CTO',
        content: '他们的产品帮助我们实现了数字化转型，效率提升了30%以上。'
      },
      {
        id: 2,
        name: '李总监',
        position: '电商公司技术总监',
        content: '技术团队专业，服务态度好，是我们值得信赖的合作伙伴。'
      },
      {
        id: 3,
        name: '王总',
        position: '金融公司CEO',
        content: '安全防护产品性能出色，为我们的业务提供了可靠保障。'
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