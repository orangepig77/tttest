<template>
  <div id="app" class="min-h-screen bg-gray-50">
    <!-- 导航栏 -->
    <nav class="bg-white shadow-lg sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <router-link to="/" class="flex items-center">
              <div class="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold text-lg">企</span>
              </div>
              <span class="ml-2 text-xl font-bold text-gray-900">企业官网</span>
            </router-link>
          </div>

          <!-- 桌面端导航菜单 -->
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <router-link 
                to="/" 
                class="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                active-class="text-primary-600"
              >
                首页
              </router-link>
              <router-link 
                to="/products" 
                class="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                active-class="text-primary-600"
              >
                产品中心
              </router-link>
              <router-link 
                to="/about" 
                class="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                active-class="text-primary-600"
              >
                关于我们
              </router-link>
              <router-link 
                to="/contact" 
                class="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                active-class="text-primary-600"
              >
                联系我们
              </router-link>
            </div>
          </div>

          <!-- 右侧区域：联系方式和移动端菜单 -->
          <div class="flex items-center space-x-4">
            <!-- 桌面端联系方式 -->
            <div class="hidden md:flex items-center text-sm text-gray-700">
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>18156018435</span>
            </div>

            <!-- 移动端菜单按钮 -->
            <div class="md:hidden">
              <button 
                @click="mobileMenuOpen = !mobileMenuOpen"
                class="text-gray-700 hover:text-primary-600 focus:outline-none focus:text-primary-600"
              >
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- 移动端导航菜单 -->
      <div v-show="mobileMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
          <router-link 
            to="/" 
            class="text-gray-700 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            active-class="text-primary-600"
            @click="mobileMenuOpen = false"
          >
            首页
          </router-link>
          <router-link 
            to="/products" 
            class="text-gray-700 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            active-class="text-primary-600"
            @click="mobileMenuOpen = false"
          >
            产品中心
          </router-link>
          <router-link 
            to="/about" 
            class="text-gray-700 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            active-class="text-primary-600"
            @click="mobileMenuOpen = false"
          >
            关于我们
          </router-link>
          <router-link 
            to="/contact" 
            class="text-gray-700 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            active-class="text-primary-600"
            @click="mobileMenuOpen = false"
          >
            联系我们
          </router-link>
        </div>
      </div>
    </nav>

    <!-- 主要内容区域 -->
    <main>
      <router-view />
    </main>

    <!-- 页脚 -->
    <footer class="bg-gray-900 text-white">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-lg font-semibold mb-4">企业官网</h3>
            <p class="text-gray-400">专业的企业服务提供商，为您提供全方位的解决方案</p>
          </div>
          <div>
            <h4 class="text-md font-semibold mb-4">快速链接</h4>
            <ul class="space-y-2">
              <li><router-link to="/" class="text-gray-400 hover:text-white transition-colors">首页</router-link></li>
              <li><router-link to="/products" class="text-gray-400 hover:text-white transition-colors">产品中心</router-link></li>
              <li><router-link to="/about" class="text-gray-400 hover:text-white transition-colors">关于我们</router-link></li>
              <li><router-link to="/contact" class="text-gray-400 hover:text-white transition-colors">联系我们</router-link></li>
            </ul>
          </div>
          <div>
            <h4 class="text-md font-semibold mb-4">联系方式</h4>
            <ul class="space-y-2 text-gray-400">
              <li>电话：18156018435</li>
              <li>邮箱：info@company.com</li>
              <li>地址：北京市朝阳区xxx大厦</li>
            </ul>
          </div>
          <div>
            <h4 class="text-md font-semibold mb-4">关注我们</h4>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <span class="sr-only">微信</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <span class="sr-only">微博</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 企业官网. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'App',
  setup() {
    const mobileMenuOpen = ref(false)
    
    return {
      mobileMenuOpen
    }
  }
}
</script> 