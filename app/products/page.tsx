'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI开发工具生态 - 全栈开发解决方案 | VibeTemplate',
  description: '从Web应用到移动端，从桌面软件到SaaS平台，VibeTemplate为每个开发场景都提供了专业的AI驱动解决方案。包含WebCraft、MobileForge、DesktopStudio等6大开发工具。',
  keywords: ['AI开发工具', 'WebCraft', 'MobileForge', 'DesktopStudio', '代码生成', '全栈开发', 'AI编程'],
  openGraph: {
    title: 'AI开发工具生态 - VibeTemplate',
    description: '专业的AI驱动开发工具生态，支持Web、移动、桌面、SaaS等全栈开发场景',
    type: 'website',
    images: ['/images/products-og.jpg'],
  }
}

const products = [
  {
    id: 'webcraft',
    name: 'WebCraft',
    description: '智能Web应用构建器',
    fullDescription: 'WebCraft 是一款基于Next.js + React的现代Web应用快速生成工具，专为前端开发者和全栈工程师设计。通过AI驱动的代码生成技术，您可以在几分钟内创建出具有企业级功能的Web应用。',
    icon: '🌐',
    features: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'API集成'],
    gradient: 'from-blue-500 to-cyan-500',
    category: 'Web开发',
    difficulty: '简单',
    buildTime: '5-10分钟'
  },
  {
    id: 'mobileforge',
    name: 'MobileForge',
    description: '跨平台移动应用开发',
    fullDescription: 'MobileForge 基于Flutter框架，提供强大的跨平台移动应用开发能力。一套代码，同时支持iOS和Android平台，大幅提升开发效率，降低维护成本。',
    icon: '📱',
    features: ['Flutter', 'Dart', '原生性能', '热重载'],
    gradient: 'from-purple-500 to-pink-500',
    category: '移动开发',
    difficulty: '中等',
    buildTime: '10-15分钟'
  },
  {
    id: 'desktopstudio',
    name: 'DesktopStudio',
    description: '桌面应用开发套件',
    fullDescription: 'DesktopStudio 基于Electron框架，让Web开发者能够轻松创建跨平台的桌面应用。支持Windows、macOS、Linux多平台部署，具备原生应用的体验。',
    icon: '💻',
    features: ['Electron', 'Node.js', '跨平台', '原生集成'],
    gradient: 'from-green-500 to-teal-500',
    category: '桌面开发',
    difficulty: '中等',
    buildTime: '8-12分钟'
  },
  {
    id: 'adminhub',
    name: 'AdminHub',
    description: '企业管理系统生成器',
    fullDescription: 'AdminHub 是专业的企业级管理后台生成工具，内置完整的权限管理、数据统计、工作流等功能。为企业提供快速、安全、可扩展的管理系统解决方案。',
    icon: '⚡',
    features: ['React', 'Ant Design', '权限管理', '数据可视化'],
    gradient: 'from-orange-500 to-red-500',
    category: '企业应用',
    difficulty: '复杂',
    buildTime: '15-20分钟'
  },
  {
    id: 'minibuilder',
    name: 'MiniBuilder',
    description: '小程序快速开发平台',
    fullDescription: 'MiniBuilder 基于uni-app框架，提供高效的小程序开发解决方案。支持微信、支付宝、百度等多端小程序，一套代码多端运行，大幅提升开发效率。',
    icon: '🔧',
    features: ['uni-app', 'Vue.js', '多端发布', '云开发'],
    gradient: 'from-indigo-500 to-purple-500',
    category: '小程序',
    difficulty: '简单',
    buildTime: '5-8分钟'
  },
  {
    id: 'saasfactory',
    name: 'SaaSFactory',
    description: '企业级SaaS应用构建器',
    fullDescription: 'SaaSFactory 是完整的多租户SaaS应用生成工具，内置订阅计费、用户管理、数据分析等企业级功能。帮助创业者和企业快速构建可扩展的SaaS产品。',
    icon: '🏭',
    features: ['多租户', '订阅计费', 'API管理', '数据分析'],
    gradient: 'from-rose-500 to-pink-500',
    category: 'SaaS应用',
    difficulty: '复杂',
    buildTime: '20-30分钟'
  }
]

const categories = ['全部', 'Web开发', '移动开发', '桌面开发', '企业应用', '小程序', 'SaaS应用']

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('全部')
  const [filteredProducts, setFilteredProducts] = useState(products)

  useEffect(() => {
    if (selectedCategory === '全部') {
      setFilteredProducts(products)
    } else {
      setFilteredProducts(products.filter(product => product.category === selectedCategory))
    }
  }, [selectedCategory])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <span className="text-xl font-bold text-gray-900">VibeTemplate</span>
            </Link>
            <nav className="flex items-center space-x-6">
              <Link href="/" className="text-gray-600 hover:text-gray-900">首页</Link>
              <Link href="/workspace" className="text-gray-600 hover:text-gray-900">工作台</Link>
              <Link href="/docs" className="text-gray-600 hover:text-gray-900">文档</Link>
              <Link href="/login" className="text-gray-600 hover:text-gray-900">登录</Link>
              <Link href="/signup" className="btn-primary">免费试用</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI开发工具生态
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              从Web应用到移动端，从桌面软件到SaaS平台，我们为每个开发场景都提供了专业的AI驱动解决方案
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/workspace"
                className="bg-white text-gray-900 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                立即开始
              </Link>
              <Link
                href="#products"
                className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-colors duration-200"
              >
                浏览产品
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12" id="products">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-300 hover:text-blue-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                {/* 背景渐变 */}
                <div className={`absolute inset-0 bg-gradient-to-r ${product.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                
                <div className="relative">
                  {/* 图标和类别 */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{product.icon}</div>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      {product.category}
                    </span>
                  </div>
                  
                  {/* 标题和描述 */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-base">
                    {product.description}
                  </p>
                  <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                    {product.fullDescription.substring(0, 120)}...
                  </p>
                  
                  {/* 技术标签 */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* 项目信息 */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                      {product.difficulty}
                    </span>
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                      {product.buildTime}
                    </span>
                  </div>
                  
                  {/* 行动按钮 */}
                  <div className="flex gap-3">
                    <Link
                      href={`/products/${product.id}`}
                      className="flex-1 text-center py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition-colors duration-200 text-sm font-medium"
                    >
                      了解更多
                    </Link>
                    <Link
                      href={`/try/${product.id}`}
                      className={`flex-1 text-center py-2 px-4 bg-gradient-to-r ${product.gradient} text-white rounded-lg hover:shadow-lg transition-all duration-200 text-sm font-medium`}
                    >
                      立即体验
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              准备开始您的AI开发之旅了吗？
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              选择最适合您的开发工具，立即开始创建令人惊叹的应用程序
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/workspace"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-4 px-8 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                开始创建项目
              </Link>
              <Link
                href="/signup"
                className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-colors duration-200"
              >
                注册免费账户
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}