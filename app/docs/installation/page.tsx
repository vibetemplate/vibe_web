'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function InstallationPage() {
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
              <span className="text-sm text-gray-500 ml-2">文档</span>
            </Link>
            <nav className="flex items-center space-x-6">
              <Link href="/docs" className="text-gray-600 hover:text-gray-900">文档首页</Link>
              <Link href="/workspace" className="text-gray-600 hover:text-gray-900">工作台</Link>
              <Link href="/products" className="text-gray-600 hover:text-gray-900">产品</Link>
              <Link href="/signup" className="btn-primary">免费试用</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container-custom pt-12 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <nav className="space-y-2">
                <div className="mb-6">
                  <Link href="/docs" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    ← 返回文档首页
                  </Link>
                </div>
                
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">快速开始</h3>
                  <Link href="/docs/installation" className="block px-3 py-2 text-sm bg-blue-50 text-blue-700 rounded-md">
                    安装和设置
                  </Link>
                  <Link href="/docs/first-project" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md">
                    创建第一个项目
                  </Link>
                  <Link href="/docs/ai-workflow" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md">
                    理解AI生成流程
                  </Link>
                </div>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg max-w-none"
            >
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <header className="mb-8">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">安装和设置</h1>
                  <p className="text-xl text-gray-600">
                    开始使用 VibeTemplate AI开发平台的第一步
                  </p>
                  <div className="flex items-center space-x-4 mt-4 text-sm text-gray-500">
                    <span>⏱️ 预计阅读时间：5分钟</span>
                    <span>📅 最后更新：2024年1月</span>
                  </div>
                </header>

                <div className="space-y-8">
                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">系统要求</h2>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                      <p className="text-blue-800">
                        VibeTemplate 是基于云端的AI开发平台，您只需要一个现代浏览器即可开始使用。
                      </p>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">推荐环境</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>浏览器：</strong>Chrome 90+, Firefox 88+, Safari 14+, Edge 90+</li>
                      <li>• <strong>网络：</strong>稳定的互联网连接</li>
                      <li>• <strong>屏幕分辨率：</strong>1280x720 或更高</li>
                      <li>• <strong>内存：</strong>建议 4GB RAM 或更高</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">创建账户</h2>
                    <div className="space-y-4">
                      <div className="bg-white border border-gray-200 rounded-lg p-6">
                        <h4 className="font-semibold text-gray-900 mb-2">步骤 1：注册账户</h4>
                        <p className="text-gray-600 mb-3">
                          访问 <Link href="/signup" className="text-blue-600 hover:text-blue-700">注册页面</Link> 创建您的免费账户。
                        </p>
                        <div className="bg-gray-50 rounded-md p-3">
                          <code className="text-sm text-gray-800">
                            https://vibetemplate.com/signup
                          </code>
                        </div>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-lg p-6">
                        <h4 className="font-semibold text-gray-900 mb-2">步骤 2：验证邮箱</h4>
                        <p className="text-gray-600">
                          注册后，请检查您的邮箱并点击验证链接激活账户。
                        </p>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-lg p-6">
                        <h4 className="font-semibold text-gray-900 mb-2">步骤 3：登录工作台</h4>
                        <p className="text-gray-600">
                          验证完成后，即可登录 <Link href="/workspace" className="text-blue-600 hover:text-blue-700">AI工作台</Link> 开始创建项目。
                        </p>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">免费额度说明</h2>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-green-800 mb-2">🎉 免费版本包含</h3>
                      <ul className="space-y-1 text-green-700">
                        <li>• 每月 5 个AI项目生成</li>
                        <li>• 所有基础功能模块</li>
                        <li>• 标准代码导出</li>
                        <li>• 社区支持</li>
                        <li>• 基础项目模板</li>
                      </ul>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">开发环境配置</h2>
                    <p className="text-gray-600 mb-4">
                      为了更好地使用AI生成的代码，建议在本地配置以下开发环境：
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white border border-gray-200 rounded-lg p-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Node.js 环境</h4>
                        <div className="space-y-2 text-sm">
                          <p className="text-gray-600">用于 Web 和桌面应用开发</p>
                          <div className="bg-gray-50 rounded-md p-3">
                            <code>
                              # 安装 Node.js 18+<br/>
                              npm install -g npm@latest
                            </code>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-lg p-6">
                        <h4 className="font-semibold text-gray-900 mb-3">移动开发环境</h4>
                        <div className="space-y-2 text-sm">
                          <p className="text-gray-600">用于移动应用开发</p>
                          <div className="bg-gray-50 rounded-md p-3">
                            <code>
                              # 安装 Flutter<br/>
                              flutter doctor
                            </code>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">常见问题</h2>
                    <div className="space-y-4">
                      <details className="bg-white border border-gray-200 rounded-lg">
                        <summary className="p-4 cursor-pointer font-medium text-gray-900 hover:bg-gray-50">
                          Q: 是否支持离线使用？
                        </summary>
                        <div className="px-4 pb-4 text-gray-600">
                          VibeTemplate 是云端AI平台，需要网络连接。但生成的代码可以离线开发和运行。
                        </div>
                      </details>

                      <details className="bg-white border border-gray-200 rounded-lg">
                        <summary className="p-4 cursor-pointer font-medium text-gray-900 hover:bg-gray-50">
                          Q: 如何升级到专业版？
                        </summary>
                        <div className="px-4 pb-4 text-gray-600">
                          在工作台的设置页面可以选择升级方案，支持月付和年付模式。
                        </div>
                      </details>

                      <details className="bg-white border border-gray-200 rounded-lg">
                        <summary className="p-4 cursor-pointer font-medium text-gray-900 hover:bg-gray-50">
                          Q: 生成的代码有版权问题吗？
                        </summary>
                        <div className="px-4 pb-4 text-gray-600">
                          AI生成的代码归您所有，可以自由使用和商业化，无版权限制。
                        </div>
                      </details>
                    </div>
                  </section>

                  <section className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">下一步</h3>
                    <p className="text-blue-700 mb-4">
                      安装完成后，让我们创建您的第一个AI项目！
                    </p>
                    <Link
                      href="/docs/first-project"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                      创建第一个项目 →
                    </Link>
                  </section>
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </div>
  )
}