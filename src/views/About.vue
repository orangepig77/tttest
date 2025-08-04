<template>
  <div class="about">
    <!-- 页面标题 -->
    <section class="bg-primary-600 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">关于我们</h1>
        <p class="text-xl text-primary-100 max-w-3xl mx-auto">
          专业的技术团队，丰富的行业经验，为安徽企业提供最优质的服务
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
              安徽宏澜是一家专为建筑业公司服务的企业，经营范围包括企业管理、企业管理咨询、工程管理服务、信息咨询服务等。
            </p>
            <p class="text-lg text-gray-600 mb-6">
              主要营业项目是为建筑业企业办理建筑资质，以及为企业配备工程必要的建造师工程师专业技术人员等。服务安徽省5000+企业，有众多新办资质、升级资质成功案例。
            </p>
            <p class="text-lg text-gray-600 mb-8">
              我们的使命是通过专业的服务，帮助建筑业企业提升竞争力，实现可持续发展。
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
            安徽宏澜的价值观指导着我们的每一个决策和行动
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
            由资深技术专家组成的专业团队，为安徽企业提供最优质的服务
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
            安徽宏澜拥有多项行业认证和资质证书，确保服务的专业性和可靠性
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
            见证安徽宏澜的成长历程和重要里程碑
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
        title: '专业服务',
        description: '专注于建筑业服务，提供专业的资质办理、招投标代理等服务',
        icon: HeartIcon
      },
      {
        id: 2,
        title: '诚信经营',
        description: '以诚信为本，为客户提供可靠的服务保障',
        icon: LightBulbIcon
      },
      {
        id: 3,
        title: '质量保证',
        description: '严格的质量控制体系，确保服务质量和项目交付',
        icon: ShieldCheckIcon
      },
      {
        id: 4,
        title: '客户至上',
        description: '始终以客户需求为中心，提供最优质的服务体验',
        icon: UserGroupIcon
      }
    ])

    const teamMembers = ref([
      {
        id: 1,
        name: '张总',
        position: '创始人 & CEO',
        description: '拥有15年建筑业服务经验，专注于建筑资质办理和工程管理服务'
      },
      {
        id: 2,
        name: '李总监',
        position: '业务总监',
        description: '资深建筑行业专家，专注于建筑资质办理和升级服务'
      },
      {
        id: 3,
        name: '王经理',
        position: '工程管理经理',
        description: '10年工程管理经验，擅长为企业提供专业的工程管理服务'
      },
      {
        id: 4,
        name: '陈工程师',
        position: '工程管理专家',
        description: '资深工程师，专注于工程管理服务和技术人员配备'
      },
      {
        id: 5,
        name: '刘顾问',
        position: '企业管理顾问',
        description: '专业的企业管理咨询师，为建筑业企业提供管理咨询服务'
      },
      {
        id: 6,
        name: '赵专员',
        position: '客户服务专员',
        description: '专业的客户服务，确保客户获得最佳的服务体验'
      }
    ])

    const certificates = ref([
      {
        id: 1,
        name: '建筑资质代理证书',
        description: '专业建筑资质办理代理资质',
        icon: CheckBadgeIcon
      },
      {
        id: 2,
        name: '工程管理资质',
        description: '工程管理服务专业资质',
        icon: StarIcon
      },
      {
        id: 3,
        name: '企业管理咨询资质',
        description: '企业管理咨询服务专业资质',
        icon: AcademicCapIcon
      },
      {
        id: 4,
        name: '行业认证',
        description: '建筑业服务行业认证',
        icon: TrophyIcon
      }
    ])

    const milestones = ref([
      {
        id: 1,
        year: '2014年',
        title: '公司成立',
        description: '安徽宏澜正式成立，开始专注于建筑业服务',
        detail: '在安徽成立，组建专业团队，确定建筑业服务发展方向'
      },
      {
        id: 2,
        year: '2016年',
        title: '业务扩展',
        description: '服务安徽建筑企业突破1000家，业务范围不断扩大',
        detail: '成功为多家建筑企业办理资质，建立稳定的客户关系'
      },
      {
        id: 3,
        year: '2018年',
        title: '服务升级',
        description: '引入新的服务模式，提升服务质量',
        detail: '推出全方位的建筑业服务，包括资质办理、工程管理等'
      },
      {
        id: 4,
        year: '2020年',
        title: '规模扩大',
        description: '服务安徽建筑企业超过3000家，成功案例众多',
        detail: '获得多项行业认证，成为安徽地区领先的建筑业服务企业'
      },
      {
        id: 5,
        year: '2024年',
        title: '持续发展',
        description: '继续深耕建筑业服务领域，为安徽建筑企业创造更大价值',
        detail: '服务企业超过5000家，成为安徽建筑业服务标杆企业'
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