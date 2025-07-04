'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// 产品数据 - 与 ProductSection 保持一致
const productsData = {
  webcraft: {
    id: 'webcraft',
    name: 'WebCraft',
    description: '智能Web应用构建器',
    fullDescription: 'WebCraft 是一款基于Next.js + React的现代Web应用快速生成工具，专为前端开发者和全栈工程师设计。通过AI驱动的代码生成技术，您可以在几分钟内创建出具有企业级功能的Web应用。',
    icon: '🌐',
    features: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'API集成'],
    gradient: 'from-blue-500 to-cyan-500',
    pricing: {
      free: '免费版',
      pro: '专业版 ¥299/月',
      enterprise: '企业版 联系销售'
    },
    capabilities: [
      '智能页面生成',
      'API接口自动生成',
      '响应式设计',
      'SEO优化',
      '性能监控',
      '部署自动化'
    ],
    useCases: [
      '企业官网',
      '电商平台',
      '管理后台',
      '博客系统',
      '作品集网站',
      'SaaS应用'
    ],
    techStack: [
      'Next.js 14',
      'React 18',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Prisma ORM',
      'PostgreSQL',
      'Vercel部署'
    ]
  },
  mobileforge: {
    id: 'mobileforge',
    name: 'MobileForge',
    description: '跨平台移动应用开发',
    fullDescription: 'MobileForge 基于Flutter框架，提供强大的跨平台移动应用开发能力。一套代码，同时支持iOS和Android平台，大幅提升开发效率，降低维护成本。',
    icon: '📱',
    features: ['Flutter', 'Dart', '原生性能', '热重载'],
    gradient: 'from-purple-500 to-pink-500',
    pricing: {
      free: '免费版',
      pro: '专业版 ¥399/月',
      enterprise: '企业版 联系销售'
    },
    capabilities: [
      '跨平台开发',
      '原生性能',
      '热重载调试',
      'UI组件库',
      '状态管理',
      '本地存储'
    ],
    useCases: [
      '电商APP',
      '社交应用',
      '工具应用',
      '游戏APP',
      '企业应用',
      '教育APP'
    ],
    techStack: [
      'Flutter 3.x',
      'Dart语言',
      'Provider/Riverpod',
      'Firebase',
      'SQLite',
      'REST API',
      '推送通知',
      'App Store部署'
    ]
  },
  desktopstudio: {
    id: 'desktopstudio',
    name: 'DesktopStudio',
    description: '桌面应用开发套件',
    fullDescription: 'DesktopStudio 基于Electron框架，让Web开发者能够轻松创建跨平台的桌面应用。支持Windows、macOS、Linux多平台部署，具备原生应用的体验。',
    icon: '💻',
    features: ['Electron', 'Node.js', '跨平台', '原生集成'],
    gradient: 'from-green-500 to-teal-500',
    pricing: {
      free: '免费版',
      pro: '专业版 ¥349/月',
      enterprise: '企业版 联系销售'
    },
    capabilities: [
      '跨平台支持',
      '原生API访问',
      '文件系统操作',
      '系统托盘',
      '自动更新',
      '打包分发'
    ],
    useCases: [
      '代码编辑器',
      '设计工具',
      '办公软件',
      '媒体播放器',
      '开发工具',
      '系统工具'
    ],
    techStack: [
      'Electron',
      'Node.js',
      'React/Vue',
      'TypeScript',
      'SQLite',
      'Native Module',
      '自动更新',
      '代码签名'
    ]
  },
  adminhub: {
    id: 'adminhub',
    name: 'AdminHub',
    description: '企业管理系统生成器',
    fullDescription: 'AdminHub 是专业的企业级管理后台生成工具，内置完整的权限管理、数据统计、工作流等功能。为企业提供快速、安全、可扩展的管理系统解决方案。',
    icon: '⚡',
    features: ['React', 'Ant Design', '权限管理', '数据可视化'],
    gradient: 'from-orange-500 to-red-500',
    pricing: {
      free: '免费版',
      pro: '专业版 ¥499/月',
      enterprise: '企业版 联系销售'
    },
    capabilities: [
      'RBAC权限管理',
      '数据可视化',
      '工作流引擎',
      '表单设计器',
      '报表系统',
      '审计日志'
    ],
    useCases: [
      'ERP系统',
      'CRM系统',
      'OA办公',
      '财务管理',
      '人事系统',
      '项目管理'
    ],
    techStack: [
      'React 18',
      'Ant Design',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'Redis',
      'Docker',
      'Kubernetes'
    ]
  },
  minibuilder: {
    id: 'minibuilder',
    name: 'MiniBuilder',
    description: '小程序快速开发平台',
    fullDescription: 'MiniBuilder 基于uni-app框架，提供高效的小程序开发解决方案。支持微信、支付宝、百度等多端小程序，一套代码多端运行，大幅提升开发效率。',
    icon: '🔧',
    features: ['uni-app', 'Vue.js', '多端发布', '云开发'],
    gradient: 'from-indigo-500 to-purple-500',
    pricing: {
      free: '免费版',
      pro: '专业版 ¥299/月',
      enterprise: '企业版 联系销售'
    },
    capabilities: [
      '多端发布',
      '云开发集成',
      '组件库',
      '状态管理',
      '支付集成',
      '分享功能'
    ],
    useCases: [
      '电商小程序',
      '餐饮外卖',
      '在线教育',
      '医疗健康',
      '生活服务',
      '企业工具'
    ],
    techStack: [
      'uni-app',
      'Vue.js 3',
      'TypeScript',
      '微信云开发',
      'uView UI',
      '微信支付',
      '小程序CI',
      '性能监控'
    ]
  },
  saasfactory: {
    id: 'saasfactory',
    name: 'SaaSFactory',
    description: '企业级SaaS应用构建器',
    fullDescription: 'SaaSFactory 是完整的多租户SaaS应用生成工具，内置订阅计费、用户管理、数据分析等企业级功能。帮助创业者和企业快速构建可扩展的SaaS产品。',
    icon: '🏭',
    features: ['多租户', '订阅计费', 'API管理', '数据分析'],
    gradient: 'from-rose-500 to-pink-500',
    pricing: {
      free: '免费版',
      pro: '专业版 ¥599/月',
      enterprise: '企业版 联系销售'
    },
    capabilities: [
      '多租户架构',
      '订阅计费系统',
      'API网关',
      '数据分析',
      '用户管理',
      '监控告警'
    ],
    useCases: [
      'CRM软件',
      '项目管理',
      '在线教育',
      '电商平台',
      '营销工具',
      '数据分析'
    ],
    techStack: [
      'Next.js',
      'PostgreSQL',
      'Stripe支付',
      'Redis',
      'Docker',
      'AWS/阿里云',
      'Elasticsearch',
      'Grafana'
    ]
  }
}

interface PageProps {
  params: Promise<{
    id: string
  }>
}


export default async function ProductDetailPage({ params }: PageProps) {
  const resolvedParams = await params
  const product = productsData[resolvedParams.id as keyof typeof productsData]

  if (!product) {
    notFound()
  }

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
              <Link href="/#products" className="text-gray-600 hover:text-gray-900">产品</Link>
              <Link href="/login" className="text-gray-600 hover:text-gray-900">登录</Link>
              <Link href="/signup" className="btn-primary">免费试用</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`pt-32 pb-20 bg-gradient-to-r ${product.gradient}`}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="text-6xl mb-6">{product.icon}</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{product.name}</h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              {product.fullDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/try/${product.id}`}
                className="bg-white text-gray-900 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                免费试用
              </Link>
              <Link
                href="#pricing"
                className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-colors duration-200"
              >
                查看定价
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* 核心功能 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">核心功能</h3>
              <ul className="space-y-4">
                {product.capabilities.map((capability, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">{capability}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* 应用场景 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">应用场景</h3>
              <ul className="space-y-4">
                {product.useCases.map((useCase, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">{useCase}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* 技术栈 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">技术栈</h3>
              <div className="space-y-3">
                {product.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">定价方案</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              选择最适合您需求的方案，所有方案都包含14天免费试用
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {Object.entries(product.pricing).map(([plan, price], index) => (
              <motion.div
                key={plan}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-8 rounded-2xl border ${
                  plan === 'pro' 
                    ? 'border-blue-500 bg-blue-50 relative' 
                    : 'border-gray-200 bg-white'
                }`}
              >
                {plan === 'pro' && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      推荐
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-2 capitalize">{plan}</h3>
                <p className="text-3xl font-bold text-gray-900 mb-6">{price}</p>
                <Link
                  href={`/try/${product.id}?plan=${plan}`}
                  className={`block w-full text-center py-3 px-4 rounded-lg font-medium transition-colors ${
                    plan === 'pro'
                      ? 'bg-blue-500 text-white hover:bg-blue-600'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan === 'enterprise' ? '联系销售' : '开始试用'}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
              准备开始使用 {product.name} 了吗？
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              立即注册，体验AI驱动的{product.description}，14天免费试用，无需信用卡
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/try/${product.id}`}
                className={`bg-gradient-to-r ${product.gradient} text-white font-semibold py-4 px-8 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
              >
                免费试用
              </Link>
              <Link
                href="/#contact"
                className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-colors duration-200"
              >
                联系我们
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}