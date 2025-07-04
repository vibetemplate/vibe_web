'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI工作台 - 智能代码生成平台 | VibeTemplate',
  description: 'VibeTemplate AI工作台让您通过简单配置即可生成完整的应用代码。支持Web、移动、桌面等全栈开发，从想法到应用只需几分钟。',
  keywords: ['AI工作台', '代码生成器', '智能编程', 'AI开发平台', '自动编程', '快速开发'],
  openGraph: {
    title: 'AI工作台 - VibeTemplate',
    description: '智能代码生成平台，让开发变得简单高效',
    type: 'website',
    images: ['/images/workspace-og.jpg'],
  }
}

interface Project {
  id: string
  name: string
  description: string
  type: string
  framework: string
  createdAt: string
  status: 'generating' | 'completed' | 'error'
}

export default function WorkspacePage() {
  const [activeTab, setActiveTab] = useState<'new' | 'projects'>('new')
  const [selectedProduct, setSelectedProduct] = useState('')
  const [projectConfig, setProjectConfig] = useState({
    name: '',
    description: '',
    framework: '',
    features: [] as string[]
  })
  const [isGenerating, setIsGenerating] = useState(false)
  const [projects, setProjects] = useState<Project[]>([])
  const [generatedCode, setGeneratedCode] = useState('')

  useEffect(() => {
    // 模拟加载用户项目
    const mockProjects: Project[] = [
      {
        id: '1',
        name: '电商平台',
        description: '现代化的在线商城',
        type: 'WebCraft',
        framework: 'Next.js',
        createdAt: '2024-01-15',
        status: 'completed'
      },
      {
        id: '2',
        name: '移动社交APP',
        description: '跨平台社交应用',
        type: 'MobileForge',
        framework: 'Flutter',
        createdAt: '2024-01-10',
        status: 'completed'
      }
    ]
    setProjects(mockProjects)
  }, [])

  const products = [
    { id: 'webcraft', name: 'WebCraft', icon: '🌐', description: 'Web应用生成器' },
    { id: 'mobileforge', name: 'MobileForge', icon: '📱', description: '移动应用开发' },
    { id: 'desktopstudio', name: 'DesktopStudio', icon: '💻', description: '桌面应用开发' },
    { id: 'adminhub', name: 'AdminHub', icon: '⚡', description: '管理系统生成器' },
    { id: 'minibuilder', name: 'MiniBuilder', icon: '🔧', description: '小程序开发' },
    { id: 'saasfactory', name: 'SaaSFactory', icon: '🏭', description: 'SaaS应用构建' }
  ]

  const frameworks = {
    webcraft: ['Next.js + TypeScript', 'React + Vite', 'Vue.js + Nuxt'],
    mobileforge: ['Flutter', 'React Native', 'Ionic'],
    desktopstudio: ['Electron + React', 'Tauri + Vue', 'Flutter Desktop'],
    adminhub: ['React + Ant Design', 'Vue + Element Plus', 'Angular + PrimeNG'],
    minibuilder: ['uni-app', '微信原生', 'Taro'],
    saasfactory: ['Next.js + Prisma', 'Nuxt + Supabase', 'SvelteKit']
  }

  const availableFeatures = {
    webcraft: ['用户认证', '支付集成', 'SEO优化', '响应式设计', '多语言支持', 'PWA'],
    mobileforge: ['推送通知', '离线存储', '摄像头集成', '地图定位', '社交分享', '内购'],
    desktopstudio: ['文件操作', '系统托盘', '自动更新', '原生菜单', '快捷键', '系统通知'],
    adminhub: ['权限管理', '数据导出', '审计日志', '工作流', '报表系统', '多租户'],
    minibuilder: ['云开发', '支付功能', '分享转发', '模板消息', '直播功能', '客服消息'],
    saasfactory: ['多租户', '订阅管理', 'API网关', '监控告警', '数据分析', '邮件服务']
  }

  const handleGenerateProject = async () => {
    if (!selectedProduct || !projectConfig.name || !projectConfig.framework) {
      alert('请填写完整的项目信息')
      return
    }

    setIsGenerating(true)
    setActiveTab('projects')

    // 模拟AI生成过程
    const newProject: Project = {
      id: Date.now().toString(),
      name: projectConfig.name,
      description: projectConfig.description,
      type: products.find(p => p.id === selectedProduct)?.name || '',
      framework: projectConfig.framework,
      createdAt: new Date().toISOString().split('T')[0],
      status: 'generating'
    }

    setProjects(prev => [newProject, ...prev])

    // 模拟生成过程
    setTimeout(() => {
      setProjects(prev => 
        prev.map(p => 
          p.id === newProject.id 
            ? { ...p, status: 'completed' as const }
            : p
        )
      )
      setIsGenerating(false)
      
      // 模拟生成的代码
      setGeneratedCode(`// ${projectConfig.name} - ${projectConfig.framework}
// 由 VibeTemplate AI 自动生成

import React from 'react'
import { NextPage } from 'next'

const HomePage: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-semibold">${projectConfig.name}</h1>
            <nav className="space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">首页</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">功能</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">关于</a>
            </nav>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            欢迎使用 ${projectConfig.name}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            ${projectConfig.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${projectConfig.features.map((feature, index) => `
            <div key={${index}} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium mb-2">${feature}</h3>
              <p className="text-gray-600">功能描述和实现细节...</p>
            </div>`).join('')}
          </div>
        </div>
      </main>
    </div>
  )
}

export default HomePage

// 自动生成的配置文件
export const config = {
  framework: '${projectConfig.framework}',
  features: ${JSON.stringify(projectConfig.features, null, 2)},
  generatedAt: '${new Date().toISOString()}'
}`)
    }, 3000)

    // 重置表单
    setProjectConfig({
      name: '',
      description: '',
      framework: '',
      features: []
    })
    setSelectedProduct('')
  }

  const handleFeatureToggle = (feature: string) => {
    setProjectConfig(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }))
  }

  const handleDownloadProject = (projectId: string) => {
    // 模拟下载项目代码
    const project = projects.find(p => p.id === projectId)
    if (project) {
      const blob = new Blob([generatedCode || `// ${project.name} 项目代码\n// 完整的项目代码将在这里生成...`], 
        { type: 'text/plain' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `${project.name.replace(/\s+/g, '-').toLowerCase()}.zip`
      a.click()
      URL.revokeObjectURL(url)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <span className="text-xl font-bold text-gray-900">VibeTemplate</span>
              <span className="text-sm text-gray-500 ml-2">AI 工作台</span>
            </Link>
            <nav className="flex items-center space-x-6">
              <Link href="/docs" className="text-gray-600 hover:text-gray-900">文档</Link>
              <Link href="/#products" className="text-gray-600 hover:text-gray-900">产品</Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <Link href="/login" className="text-gray-600 hover:text-gray-900">退出</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container-custom pt-12 pb-8">
        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('new')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'new'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                创建新项目
              </button>
              <button
                onClick={() => setActiveTab('projects')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'projects'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                我的项目 ({projects.length})
              </button>
            </nav>
          </div>
        </div>

        {/* New Project Tab */}
        {activeTab === 'new' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                🚀 创建新的AI项目
              </h1>

              {/* Step 1: 选择产品 */}
              <div className="mb-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">选择开发工具</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {products.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => setSelectedProduct(product.id)}
                      className={`p-4 rounded-lg border-2 text-left transition-all ${
                        selectedProduct === product.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="text-2xl mb-2">{product.icon}</div>
                      <h4 className="font-medium text-gray-900">{product.name}</h4>
                      <p className="text-sm text-gray-600">{product.description}</p>
                    </button>
                  ))}
                </div>
              </div>

              {selectedProduct && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Step 2: 项目配置 */}
                  <div className="mb-8">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">项目配置</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          项目名称 *
                        </label>
                        <input
                          type="text"
                          value={projectConfig.name}
                          onChange={(e) => setProjectConfig(prev => ({ ...prev, name: e.target.value }))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="我的AI项目"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          技术框架 *
                        </label>
                        <select
                          value={projectConfig.framework}
                          onChange={(e) => setProjectConfig(prev => ({ ...prev, framework: e.target.value }))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">选择技术框架</option>
                          {frameworks[selectedProduct as keyof typeof frameworks]?.map((framework) => (
                            <option key={framework} value={framework}>{framework}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        项目描述
                      </label>
                      <textarea
                        value={projectConfig.description}
                        onChange={(e) => setProjectConfig(prev => ({ ...prev, description: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={3}
                        placeholder="描述你的项目功能和用途..."
                      ></textarea>
                    </div>
                  </div>

                  {/* Step 3: 功能选择 */}
                  <div className="mb-8">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">选择功能模块</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {availableFeatures[selectedProduct as keyof typeof availableFeatures]?.map((feature) => (
                        <button
                          key={feature}
                          onClick={() => handleFeatureToggle(feature)}
                          className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                            projectConfig.features.includes(feature)
                              ? 'border-blue-500 bg-blue-50 text-blue-700'
                              : 'border-gray-200 text-gray-700 hover:border-gray-300'
                          }`}
                        >
                          {feature}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Generate Button */}
                  <div className="text-center">
                    <button
                      onClick={handleGenerateProject}
                      disabled={isGenerating}
                      className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-4 px-8 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isGenerating ? (
                        <div className="flex items-center">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                          AI 正在生成项目...
                        </div>
                      ) : (
                        '🤖 AI 生成项目'
                      )}
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">我的AI项目</h2>
              <p className="text-gray-600 mt-2">管理您使用AI生成的所有项目</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
                      <p className="text-gray-600 text-sm">{project.description}</p>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.status === 'completed' ? 'bg-green-100 text-green-800' :
                      project.status === 'generating' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {project.status === 'completed' ? '已完成' :
                       project.status === 'generating' ? '生成中' : '错误'}
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <span>🛠️ {project.type}</span>
                    <span>⚡ {project.framework}</span>
                    <span>📅 {project.createdAt}</span>
                  </div>

                  <div className="flex space-x-3">
                    <button
                      onClick={() => handleDownloadProject(project.id)}
                      disabled={project.status !== 'completed'}
                      className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
                    >
                      下载代码
                    </button>
                    <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                      预览项目
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {projects.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">📂</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">还没有项目</h3>
                <p className="text-gray-600 mb-6">开始创建您的第一个AI项目吧！</p>
                <button
                  onClick={() => setActiveTab('new')}
                  className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  创建项目
                </button>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  )
}