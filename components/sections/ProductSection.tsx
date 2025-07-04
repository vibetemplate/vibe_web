'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const products = [
  {
    id: 'webcraft',
    name: 'WebCraft',
    description: '智能Web应用构建器',
    details: '基于Next.js + React的现代Web应用快速生成工具，支持SSR、SSG、API路由等企业级功能。',
    icon: '🌐',
    features: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'API集成'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'mobileforge',
    name: 'MobileForge',
    description: '跨平台移动应用开发',
    details: '基于Flutter的跨平台移动应用生成器，一套代码同时支持iOS和Android平台。',
    icon: '📱',
    features: ['Flutter', 'Dart', '原生性能', '热重载'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 'desktopstudio',
    name: 'DesktopStudio',
    description: '桌面应用开发套件',
    details: '基于Electron的桌面应用开发工具，支持Windows、macOS、Linux多平台部署。',
    icon: '💻',
    features: ['Electron', 'Node.js', '跨平台', '原生集成'],
    gradient: 'from-green-500 to-teal-500',
  },
  {
    id: 'adminhub',
    name: 'AdminHub',
    description: '企业管理系统生成器',
    details: '专业的企业级管理后台生成工具，内置权限管理、数据统计、工作流等功能。',
    icon: '⚡',
    features: ['React', 'Ant Design', '权限管理', '数据可视化'],
    gradient: 'from-orange-500 to-red-500',
  },
  {
    id: 'minibuilder',
    name: 'MiniBuilder',
    description: '小程序快速开发平台',
    details: '基于uni-app的小程序开发工具，支持微信、支付宝、百度等多端小程序。',
    icon: '🔧',
    features: ['uni-app', 'Vue.js', '多端发布', '云开发'],
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    id: 'saasfactory',
    name: 'SaaSFactory',
    description: '企业级SaaS应用构建器',
    details: '完整的多租户SaaS应用生成工具，内置订阅计费、用户管理、数据分析等功能。',
    icon: '🏭',
    features: ['多租户', '订阅计费', 'API管理', '数据分析'],
    gradient: 'from-rose-500 to-pink-500',
  },
]

export default function ProductSection() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-gray-900 mb-4">
            六大AI开发解决方案
          </h2>
          <p className="content-text max-w-3xl mx-auto">
            从Web应用到移动端，从桌面软件到SaaS平台，
            我们为每个开发场景都提供了专业的AI驱动解决方案。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300"
            >
              {/* 背景渐变 */}
              <div className={`absolute inset-0 bg-gradient-to-r ${product.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              
              <div className="relative">
                {/* 图标 */}
                <div className="text-4xl mb-4">{product.icon}</div>
                
                {/* 标题和描述 */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 text-base">
                  {product.description}
                </p>
                <p className="card-text mb-6">
                  {product.details}
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

        {/* 底部CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            href="/products"
            className="btn-primary text-lg"
          >
            查看所有产品
          </Link>
        </motion.div>
      </div>
    </section>
  )
}