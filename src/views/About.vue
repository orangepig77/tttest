<template>
  <div class="about">
    <!-- 页面标题 -->
    <section class="bg-primary-600 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">关于我们</h1>
        <p class="text-xl text-primary-100 max-w-3xl mx-auto">
          专业的技术团队，丰富的行业经验，为您提供最优质的服务
        </p>
      </div>
    </section>

    <!-- 公司简介 -->
    <section class="section-padding bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              公司简介
            </h2>
            <p class="text-lg text-gray-600 mb-6">
              我们是一家专注于企业数字化转型的技术服务公司，致力于为客户提供全方位的技术解决方案。
            </p>
            <p class="text-lg text-gray-600 mb-6">
              自成立以来，我们已成功服务超过500家企业客户，涵盖制造业、金融、电商、教育等多个行业。
            </p>
            <p class="text-lg text-gray-600 mb-8">
              我们的使命是通过技术创新，帮助企业提升效率、降低成本、实现可持续发展。
            </p>
            <div class="grid grid-cols-2 gap-6">
              <div class="text-center">
                <div class="text-3xl font-bold text-primary-600 mb-2">10+</div>
                <div class="text-gray-600">年行业经验</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-primary-600 mb-2">50+</div>
                <div class="text-gray-600">技术专家</div>
              </div>
            </div>
          </div>
          <div class="h-96 bg-gray-200 rounded-lg flex items-center justify-center">
            <span class="text-gray-500">公司照片</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 核心价值观 -->
    <section class="section-padding bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            核心价值观
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            我们的价值观指导着我们的每一个决策和行动
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="value in values" 
            :key="value.id"
            class="text-center"
          >
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <component :is="value.icon" class="w-8 h-8 text-primary-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ value.title }}</h3>
            <p class="text-gray-600">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 团队成员 -->
    <section class="section-padding bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            核心团队
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            由资深技术专家组成的专业团队，为您提供最优质的服务
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="member in teamMembers" 
            :key="member.id"
            class="card p-6 text-center hover:transform hover:scale-105 transition-transform duration-300"
          >
            <div class="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span class="text-gray-500 text-2xl font-bold">{{ member.name.charAt(0) }}</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ member.name }}</h3>
            <p class="text-primary-600 font-medium mb-4">{{ member.position }}</p>
            <p class="text-gray-600 mb-4">{{ member.description }}</p>
            <div class="flex justify-center space-x-4">
              <a href="#" class="text-gray-400 hover:text-primary-600 transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-primary-600 transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 证书墙 -->
    <section class="section-padding bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            资质证书
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            我们拥有多项行业认证和资质证书，确保服务的专业性和可靠性
          </p>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div 
            v-for="certificate in certificates" 
            :key="certificate.id"
            class="card p-6 text-center hover:transform hover:scale-105 transition-transform duration-300"
          >
            <div class="w-20 h-20 bg-primary-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <component :is="certificate.icon" class="w-10 h-10 text-primary-600" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ certificate.name }}</h3>
            <p class="text-sm text-gray-600">{{ certificate.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 发展历程 -->
    <section class="section-padding bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            发展历程
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            见证我们的成长历程和重要里程碑
          </p>
        </div>
        
        <div class="relative">
          <div class="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200"></div>
          <div class="space-y-12">
            <div 
              v-for="(milestone, index) in milestones" 
              :key="milestone.id"
              class="relative"
            >
              <div class="flex items-center">
                <div class="w-1/2 pr-8 text-right" :class="{ 'order-2 pl-8 pr-0': index % 2 === 1 }">
                  <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ milestone.year }}</h3>
                  <p class="text-gray-600">{{ milestone.description }}</p>
                </div>
                <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white"></div>
                <div class="w-1/2 pl-8" :class="{ 'order-1 pr-8 pl-0': index % 2 === 1 }">
                  <h4 class="text-lg font-semibold text-gray-900 mb-2">{{ milestone.title }}</h4>
                  <p class="text-gray-600">{{ milestone.detail }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'
import { 
  HeartIcon, 
  LightBulbIcon, 
  ShieldCheckIcon, 
  UserGroupIcon,
  AcademicCapIcon,
  CheckBadgeIcon,
  StarIcon,
  TrophyIcon
} from '@heroicons/vue/24/outline'

export default {
  name: 'About',
  setup() {
    const values = ref([
      {
        id: 1,
        title: '客户至上',
        description: '始终以客户需求为中心，提供最优质的服务体验',
        icon: HeartIcon
      },
      {
        id: 2,
        title: '创新驱动',
        description: '持续技术创新，引领行业发展方向',
        icon: LightBulbIcon
      },
      {
        id: 3,
        title: '质量保证',
        description: '严格的质量控制体系，确保项目交付质量',
        icon: ShieldCheckIcon
      },
      {
        id: 4,
        title: '团队协作',
        description: '高效的团队协作，实现项目目标',
        icon: UserGroupIcon
      }
    ])

    const teamMembers = ref([
      {
        id: 1,
        name: '张总',
        position: '创始人 & CEO',
        description: '拥有15年技术管理经验，曾任职于多家知名互联网公司'
      },
      {
        id: 2,
        name: '李总监',
        position: '技术总监',
        description: '资深架构师，专注于企业级系统设计和开发'
      },
      {
        id: 3,
        name: '王经理',
        position: '产品经理',
        description: '10年产品设计经验，擅长用户需求分析和产品规划'
      },
      {
        id: 4,
        name: '陈工程师',
        position: '高级开发工程师',
        description: '全栈开发专家，精通前后端技术栈'
      },
      {
        id: 5,
        name: '刘设计师',
        position: 'UI/UX设计师',
        description: '专业的设计师，注重用户体验和视觉美感'
      },
      {
        id: 6,
        name: '赵顾问',
        position: '技术顾问',
        description: '行业资深专家，为企业提供技术咨询服务'
      }
    ])

    const certificates = ref([
      {
        id: 1,
        name: 'ISO9001认证',
        description: '质量管理体系认证',
        icon: CheckBadgeIcon
      },
      {
        id: 2,
        name: '高新技术企业',
        description: '国家高新技术企业认定',
        icon: StarIcon
      },
      {
        id: 3,
        name: '软件企业认定',
        description: '软件企业认定证书',
        icon: AcademicCapIcon
      },
      {
        id: 4,
        name: '行业奖项',
        description: '多项行业技术奖项',
        icon: TrophyIcon
      }
    ])

    const milestones = ref([
      {
        id: 1,
        year: '2014年',
        title: '公司成立',
        description: '公司正式成立，开始专注于企业技术服务',
        detail: '在北京成立，组建核心团队，确定发展方向'
      },
      {
        id: 2,
        year: '2016年',
        title: '业务扩展',
        description: '服务客户突破100家，业务范围不断扩大',
        detail: '成功服务多个行业客户，建立稳定的客户关系'
      },
      {
        id: 3,
        year: '2018年',
        title: '技术升级',
        description: '引入新技术栈，提升技术实力',
        detail: '采用微服务架构，提升系统性能和可扩展性'
      },
      {
        id: 4,
        year: '2020年',
        title: '规模扩大',
        description: '团队规模达到50人，服务客户超过500家',
        detail: '获得多项行业认证，成为行业领先企业'
      },
      {
        id: 5,
        year: '2024年',
        title: '持续发展',
        description: '继续深耕技术领域，为客户创造更大价值',
        detail: '推出新一代产品，引领行业技术发展'
      }
    ])

    return {
      values,
      teamMembers,
      certificates,
      milestones
    }
  }
}
</script> 