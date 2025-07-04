'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '文档中心 - VibeTemplate AI开发平台使用指南',
  description: 'VibeTemplate完整的使用文档，包含快速开始、产品指南、API参考、部署指南等。从入门到精通，掌握AI开发平台的每一个功能。',
  keywords: ['VibeTemplate文档', 'AI开发指南', 'WebCraft教程', '代码生成教程', 'API文档', '开发指南'],
  openGraph: {
    title: '文档中心 - VibeTemplate',
    description: '完整的AI开发平台使用文档和教程',
    type: 'website',
    images: ['/images/docs-og.jpg'],
  }
}

const docSections = [
  {
    id: 'getting-started',
    title: '快速开始',
    description: '了解如何使用 VibeTemplate 创建您的第一个AI项目',
    icon: '🚀',
    articles: [
      { title: '安装和设置', href: '/docs/installation', time: '5分钟' },
      { title: '创建第一个项目', href: '/docs/first-project', time: '10分钟' },
      { title: '理解AI生成流程', href: '/docs/ai-workflow', time: '8分钟' },
      { title: '项目配置详解', href: '/docs/project-config', time: '15分钟' }
    ]
  },
  {
    id: 'products',
    title: '产品指南',
    description: '深入了解每个AI开发工具的使用方法',
    icon: '🛠️',
    articles: [
      { title: 'WebCraft 完整指南', href: '/docs/webcraft', time: '20分钟' },
      { title: 'MobileForge 开发教程', href: '/docs/mobileforge', time: '25分钟' },
      { title: 'DesktopStudio 应用开发', href: '/docs/desktopstudio', time: '22分钟' },
      { title: 'AdminHub 管理系统', href: '/docs/adminhub', time: '30分钟' },
      { title: 'MiniBuilder 小程序开发', href: '/docs/minibuilder', time: '18分钟' },
      { title: 'SaaSFactory 应用构建', href: '/docs/saasfactory', time: '35分钟' }
    ]
  },
  {
    id: 'advanced',
    title: '高级功能',
    description: '掌握高级技巧，提升开发效率',
    icon: '⚡',
    articles: [
      { title: '自定义AI提示词', href: '/docs/custom-prompts', time: '12分钟' },
      { title: '项目模板创建', href: '/docs/templates', time: '15分钟' },
      { title: '代码生成优化', href: '/docs/optimization', time: '18分钟' },
      { title: '集成第三方服务', href: '/docs/integrations', time: '25分钟' }
    ]
  },
  {
    id: 'deployment',
    title: '部署指南',
    description: '将您的AI生成项目部署到生产环境',
    icon: '🌐',
    articles: [
      { title: 'Vercel 部署指南', href: '/docs/deploy-vercel', time: '10分钟' },
      { title: 'AWS 云部署', href: '/docs/deploy-aws', time: '20分钟' },
      { title: 'Docker 容器化', href: '/docs/docker', time: '15分钟' },
      { title: '域名和SSL配置', href: '/docs/domain-ssl', time: '12分钟' }
    ]
  },
  {
    id: 'api',
    title: 'API 参考',
    description: 'VibeTemplate API 的完整文档',
    icon: '📚',
    articles: [
      { title: 'Authentication API', href: '/docs/api/auth', time: '8分钟' },
      { title: 'Project Generation API', href: '/docs/api/generation', time: '15分钟' },
      { title: 'Template Management API', href: '/docs/api/templates', time: '12分钟' },
      { title: 'Webhook 集成', href: '/docs/api/webhooks', time: '10分钟' }
    ]
  },
  {
    id: 'troubleshooting',
    title: '问题排查',
    description: '常见问题的解决方案',
    icon: '🔧',
    articles: [
      { title: '常见错误和解决方案', href: '/docs/troubleshooting/errors', time: '10分钟' },
      { title: '性能优化建议', href: '/docs/troubleshooting/performance', time: '12分钟' },
      { title: '调试技巧', href: '/docs/troubleshooting/debugging', time: '15分钟' },
      { title: '社区支持', href: '/docs/troubleshooting/community', time: '5分钟' }
    ]
  }
]

const popularDocs = [
  { title: '创建第一个项目', href: '/docs/first-project', category: '快速开始' },
  { title: 'WebCraft 完整指南', href: '/docs/webcraft', category: '产品指南' },
  { title: 'Vercel 部署指南', href: '/docs/deploy-vercel', category: '部署指南' },
  { title: '常见错误和解决方案', href: '/docs/troubleshooting/errors', category: '问题排查' }
]

export default function DocsPage() {
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
              <span className="text-sm text-gray-500 ml-2">文档中心</span>
            </Link>
            <nav className="flex items-center space-x-6">
              <Link href="/" className="text-gray-600 hover:text-gray-900">首页</Link>
              <Link href="/products" className="text-gray-600 hover:text-gray-900">产品</Link>
              <Link href="/workspace" className="text-gray-600 hover:text-gray-900">工作台</Link>
              <Link href="/login" className="text-gray-600 hover:text-gray-900">登录</Link>
              <Link href="/signup" className="btn-primary">免费试用</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              📚 文档中心
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              从入门到精通，掌握 VibeTemplate AI开发平台的每一个功能
            </p>
            <div className="max-w-md mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="搜索文档..."
                  className="w-full px-4 py-3 pr-12 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">热门文档</h3>
              <div className="space-y-3">
                {popularDocs.map((doc) => (
                  <Link
                    key={doc.href}
                    href={doc.href}
                    className="block p-3 bg-white rounded-lg shadow-sm border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
                  >
                    <h4 className="text-sm font-medium text-gray-900 mb-1">{doc.title}</h4>
                    <p className="text-xs text-gray-500">{doc.category}</p>
                  </Link>
                ))}
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="text-sm font-semibold text-blue-900 mb-2">需要帮助？</h4>
                <p className="text-xs text-blue-700 mb-3">
                  如果您在文档中找不到答案，我们的支持团队随时为您服务。
                </p>
                <Link
                  href="/contact"
                  className="text-xs bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition-colors"
                >
                  联系支持
                </Link>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {docSections.map((section, index) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200"
                >
                  <div className="flex items-center mb-4">
                    <div className="text-2xl mr-3">{section.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{section.title}</h3>
                      <p className="text-sm text-gray-600">{section.description}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {section.articles.map((article) => (
                      <Link
                        key={article.href}
                        href={article.href}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                      >
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                            {article.title}
                          </h4>
                          <span className="text-xs text-gray-500">预计阅读时间：{article.time}</span>
                        </div>
                        <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-center"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                准备开始开发了吗？
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                阅读完文档后，立即在AI工作台创建您的第一个项目
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/workspace"
                  className="bg-white text-gray-900 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  前往工作台
                </Link>
                <Link
                  href="/products"
                  className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors"
                >
                  浏览产品
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}