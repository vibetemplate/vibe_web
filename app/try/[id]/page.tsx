'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// 产品数据 - 简化版
const productsData = {
  webcraft: {
    id: 'webcraft',
    name: 'WebCraft',
    description: '智能Web应用构建器',
    icon: '🌐',
    gradient: 'from-blue-500 to-cyan-500',
    demoSteps: [
      '选择项目类型',
      '配置基础信息',
      'AI生成代码',
      '预览和调整',
      '导出项目'
    ]
  },
  mobileforge: {
    id: 'mobileforge',
    name: 'MobileForge', 
    description: '跨平台移动应用开发',
    icon: '📱',
    gradient: 'from-purple-500 to-pink-500',
    demoSteps: [
      '选择应用类型',
      '设计UI界面',
      '配置功能模块',
      '生成Flutter代码',
      '真机预览'
    ]
  },
  desktopstudio: {
    id: 'desktopstudio',
    name: 'DesktopStudio',
    description: '桌面应用开发套件',
    icon: '💻',
    gradient: 'from-green-500 to-teal-500',
    demoSteps: [
      '选择应用框架',
      '设计界面布局',
      '配置原生功能',
      '生成Electron代码',
      '打包应用'
    ]
  },
  adminhub: {
    id: 'adminhub',
    name: 'AdminHub',
    description: '企业管理系统生成器',
    icon: '⚡',
    gradient: 'from-orange-500 to-red-500',
    demoSteps: [
      '选择业务模块',
      '配置权限体系',
      '设计数据表',
      '生成管理界面',
      '部署上线'
    ]
  },
  minibuilder: {
    id: 'minibuilder',
    name: 'MiniBuilder',
    description: '小程序快速开发平台',
    icon: '🔧',
    gradient: 'from-indigo-500 to-purple-500',
    demoSteps: [
      '选择小程序类型',
      '配置页面结构',
      '集成云开发',
      '生成uni-app代码',
      '发布小程序'
    ]
  },
  saasfactory: {
    id: 'saasfactory',
    name: 'SaaSFactory',
    description: '企业级SaaS应用构建器',
    icon: '🏭',
    gradient: 'from-rose-500 to-pink-500',
    demoSteps: [
      '设计产品架构',
      '配置多租户',
      '集成支付系统',
      '生成SaaS应用',
      '监控运营'
    ]
  }
}

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export default async function TryProductPage({ params }: PageProps) {
  const resolvedParams = await params
  const product = productsData[resolvedParams.id as keyof typeof productsData]
  const [currentStep, setCurrentStep] = useState(0)
  const [isGenerating, setIsGenerating] = useState(false)
  const [showDemo, setShowDemo] = useState(false)

  useEffect(() => {
    // 模拟加载demo
    const timer = setTimeout(() => {
      setShowDemo(true)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  if (!product) {
    notFound()
  }

  const handleNextStep = () => {
    if (currentStep < product.demoSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // 最后一步开始生成
      setIsGenerating(true)
      setTimeout(() => {
        alert('演示完成！请注册账户以体验完整功能。')
        setIsGenerating(false)
      }, 3000)
    }
  }

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
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
            <div className="flex items-center space-x-4">
              <Link href={`/products/${product.id}`} className="text-gray-600 hover:text-gray-900">
                返回产品页
              </Link>
              <Link href="/signup" className="btn-primary">
                注册体验
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className={`pt-24 pb-12 bg-gradient-to-r ${product.gradient}`}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="text-4xl mb-4">{product.icon}</div>
            <h1 className="text-3xl font-bold text-white mb-4">
              体验 {product.name}
            </h1>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              通过以下演示了解 {product.description} 的强大功能
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 inline-block">
              <span className="text-white/80 text-sm">🚀 这是一个交互式演示，无需注册即可体验</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Demo Interface */}
      <section className="py-12">
        <div className="container-custom">
          {!showDemo ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600">正在加载演示环境...</p>
            </motion.div>
          ) : (
            <div className="max-w-6xl mx-auto">
              {/* Progress Steps */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <div className="flex items-center justify-between mb-8">
                  {product.demoSteps.map((step, index) => (
                    <div key={index} className="flex items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                          index <= currentStep
                            ? `bg-gradient-to-r ${product.gradient} text-white`
                            : 'bg-gray-200 text-gray-500'
                        }`}
                      >
                        {index + 1}
                      </div>
                      <span
                        className={`ml-3 text-sm ${
                          index <= currentStep ? 'text-gray-900' : 'text-gray-500'
                        }`}
                      >
                        {step}
                      </span>
                      {index < product.demoSteps.length - 1 && (
                        <div
                          className={`w-20 h-1 mx-4 ${
                            index < currentStep ? `bg-gradient-to-r ${product.gradient}` : 'bg-gray-200'
                          }`}
                        ></div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Demo Content */}
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-xl p-8 mb-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  步骤 {currentStep + 1}: {product.demoSteps[currentStep]}
                </h3>
                
                {/* Mock Demo Interface */}
                <div className="bg-gray-50 rounded-xl p-8 min-h-96 flex items-center justify-center">
                  {currentStep === 0 && (
                    <div className="text-center">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                        {['电商网站', '企业官网', '博客系统', '管理后台', '作品集', '其他'].map((type) => (
                          <div
                            key={type}
                            className="p-4 bg-white rounded-lg border hover:border-blue-500 cursor-pointer transition-colors"
                          >
                            <div className="text-2xl mb-2">📝</div>
                            <p className="text-sm font-medium">{type}</p>
                          </div>
                        ))}
                      </div>
                      <p className="text-gray-600">选择您要构建的项目类型</p>
                    </div>
                  )}
                  
                  {currentStep === 1 && (
                    <div className="w-full max-w-md">
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">项目名称</label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="我的电商网站"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">项目描述</label>
                          <textarea
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows={3}
                            placeholder="一个现代化的电商平台..."
                          ></textarea>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">技术栈</label>
                          <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>Next.js + TypeScript</option>
                            <option>React + JavaScript</option>
                            <option>Vue.js + TypeScript</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {currentStep === 2 && (
                    <div className="text-center">
                      <div className="w-20 h-20 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
                      <h4 className="text-lg font-medium text-gray-900 mb-2">AI 正在生成代码...</h4>
                      <p className="text-gray-600">基于您的配置，AI正在生成优化的代码结构</p>
                      <div className="mt-6 text-left bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm">
                        <div>✓ 生成项目结构...</div>
                        <div>✓ 创建页面组件...</div>
                        <div>✓ 配置路由...</div>
                        <div>✓ 集成样式...</div>
                        <div className="opacity-50">○ 优化性能...</div>
                      </div>
                    </div>
                  )}
                  
                  {currentStep >= 3 && (
                    <div className="w-full">
                      <div className="bg-white border rounded-lg overflow-hidden">
                        <div className="bg-gray-100 px-4 py-2 border-b flex items-center space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-gray-600 ml-4">预览 - {product.name}</span>
                        </div>
                        <div className="p-8">
                          <h4 className="text-xl font-bold text-gray-900 mb-4">🎉 生成成功！</h4>
                          <p className="text-gray-600 mb-6">
                            您的 {product.description} 已经生成完成，包含完整的源代码和部署配置。
                          </p>
                          <div className="bg-gray-50 rounded-lg p-4">
                            <h5 className="font-medium text-gray-900 mb-2">生成内容包括：</h5>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• 完整的项目源代码</li>
                              <li>• 响应式UI组件</li>
                              <li>• API接口文档</li>
                              <li>• 部署配置文件</li>
                              <li>• 开发说明文档</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Navigation */}
                <div className="flex justify-between mt-8">
                  <button
                    onClick={handlePrevStep}
                    disabled={currentStep === 0}
                    className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    上一步
                  </button>
                  <button
                    onClick={handleNextStep}
                    disabled={isGenerating}
                    className={`px-6 py-2 bg-gradient-to-r ${product.gradient} text-white rounded-lg hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    {isGenerating ? (
                      <div className="flex items-center">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                        生成中...
                      </div>
                    ) : currentStep === product.demoSteps.length - 1 ? (
                      '完成演示'
                    ) : (
                      '下一步'
                    )}
                  </button>
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gray-900 rounded-2xl p-8 text-center"
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  想要体验完整功能？
                </h3>
                <p className="text-gray-300 mb-6">
                  注册账户，获得14天免费试用，解锁 {product.name} 的所有功能
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/signup"
                    className={`bg-gradient-to-r ${product.gradient} text-white font-semibold py-3 px-8 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                  >
                    免费注册
                  </Link>
                  <Link
                    href={`/products/${product.id}`}
                    className="border-2 border-gray-600 text-gray-300 font-semibold py-3 px-8 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                  >
                    了解更多
                  </Link>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}