'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function FirstProjectPage() {
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
                  <Link href="/docs/installation" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md">
                    安装和设置
                  </Link>
                  <Link href="/docs/first-project" className="block px-3 py-2 text-sm bg-blue-50 text-blue-700 rounded-md">
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
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">创建第一个项目</h1>
                  <p className="text-xl text-gray-600">
                    通过这个详细指南，您将学会如何使用 VibeTemplate 创建您的第一个AI项目
                  </p>
                  <div className="flex items-center space-x-4 mt-4 text-sm text-gray-500">
                    <span>⏱️ 预计阅读时间：10分钟</span>
                    <span>📅 最后更新：2024年1月</span>
                  </div>
                </header>

                <div className="space-y-8">
                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">开始之前</h2>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                      <p className="text-yellow-800">
                        <strong>前提条件：</strong>确保您已经完成了 <Link href="/docs/installation" className="text-yellow-900 underline">安装和设置</Link> 步骤。
                      </p>
                    </div>
                    
                    <p className="text-gray-600">
                      在本教程中，我们将创建一个简单的电商网站项目，涵盖从项目配置到代码生成的完整流程。
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">步骤 1：访问AI工作台</h2>
                    <div className="space-y-4">
                      <p className="text-gray-600">
                        登录后，点击导航栏的"工作台"按钮，或直接访问 <Link href="/workspace" className="text-blue-600 hover:text-blue-700">AI工作台</Link>。
                      </p>
                      
                      <div className="bg-gray-50 rounded-lg p-4">
                        <img src="/images/workspace-screenshot.png" alt="工作台界面" className="w-full rounded-md border border-gray-200" />
                        <p className="text-sm text-gray-500 mt-2 text-center">AI工作台主界面</p>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">步骤 2：选择开发工具</h2>
                    <p className="text-gray-600 mb-4">
                      在"创建新项目"标签页中，首先选择适合的开发工具。对于我们的电商网站示例，选择 <strong>WebCraft</strong>。
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h4 className="font-semibold text-blue-900 mb-2">🌐 WebCraft</h4>
                        <p className="text-blue-700 text-sm">适合：网站、Web应用、电商平台</p>
                      </div>
                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-700 mb-2">📱 MobileForge</h4>
                        <p className="text-gray-600 text-sm">适合：移动APP、跨平台应用</p>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">步骤 3：项目配置</h2>
                    <p className="text-gray-600 mb-4">
                      选择WebCraft后，需要填写项目的基本信息：
                    </p>

                    <div className="space-y-4">
                      <div className="bg-white border border-gray-200 rounded-lg p-6">
                        <h4 className="font-semibold text-gray-900 mb-3">项目信息</h4>
                        <div className="space-y-3">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">项目名称</label>
                            <div className="bg-gray-50 rounded-md p-3">
                              <code className="text-sm">我的电商网站</code>
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">技术框架</label>
                            <div className="bg-gray-50 rounded-md p-3">
                              <code className="text-sm">Next.js + TypeScript</code>
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">项目描述</label>
                            <div className="bg-gray-50 rounded-md p-3">
                              <code className="text-sm">一个现代化的在线商城，支持商品展示、购物车、用户认证等功能</code>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">步骤 4：选择功能模块</h2>
                    <p className="text-gray-600 mb-4">
                      根据项目需求，选择需要的功能模块。对于电商网站，推荐选择以下功能：
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
                        <span className="text-sm font-medium text-blue-700">✓ 用户认证</span>
                      </div>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
                        <span className="text-sm font-medium text-blue-700">✓ 支付集成</span>
                      </div>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
                        <span className="text-sm font-medium text-blue-700">✓ 响应式设计</span>
                      </div>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
                        <span className="text-sm font-medium text-blue-700">✓ SEO优化</span>
                      </div>
                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center">
                        <span className="text-sm text-gray-500">多语言支持</span>
                      </div>
                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center">
                        <span className="text-sm text-gray-500">PWA</span>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">步骤 5：AI生成项目</h2>
                    <p className="text-gray-600 mb-4">
                      配置完成后，点击"🤖 AI 生成项目"按钮。AI将根据您的配置生成完整的项目代码。
                    </p>

                    <div className="bg-gray-900 rounded-lg p-4 mb-4">
                      <div className="text-green-400 font-mono text-sm space-y-1">
                        <div>✓ 生成项目结构...</div>
                        <div>✓ 创建页面组件...</div>
                        <div>✓ 配置路由...</div>
                        <div>✓ 集成样式...</div>
                        <div>✓ 优化性能...</div>
                        <div className="text-yellow-400">🎉 项目生成完成！</div>
                      </div>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <p className="text-green-800">
                        <strong>生成时间：</strong>通常需要 30-60 秒，复杂项目可能需要更长时间。
                      </p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">步骤 6：查看和下载代码</h2>
                    <p className="text-gray-600 mb-4">
                      生成完成后，切换到"我的项目"标签页，可以看到刚创建的项目。
                    </p>

                    <div className="space-y-4">
                      <div className="bg-white border border-gray-200 rounded-lg p-6">
                        <h4 className="font-semibold text-gray-900 mb-3">生成内容包括：</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• <strong>完整的项目源代码</strong> - 包含所有页面和组件</li>
                          <li>• <strong>响应式UI组件</strong> - 适配所有设备尺寸</li>
                          <li>• <strong>API接口文档</strong> - 详细的接口说明</li>
                          <li>• <strong>部署配置文件</strong> - Vercel、Netlify等平台配置</li>
                          <li>• <strong>开发说明文档</strong> - 项目结构和使用指南</li>
                        </ul>
                      </div>

                      <div className="flex space-x-3">
                        <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors">
                          下载代码
                        </button>
                        <button className="border border-gray-300 text-gray-700 py-2 px-6 rounded-lg hover:bg-gray-50 transition-colors">
                          预览项目
                        </button>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">步骤 7：本地开发</h2>
                    <p className="text-gray-600 mb-4">
                      下载项目代码后，在本地环境中运行：
                    </p>

                    <div className="bg-gray-900 rounded-lg p-4 mb-4">
                      <code className="text-green-400 font-mono text-sm">
                        # 解压下载的代码包<br/>
                        unzip my-ecommerce-site.zip<br/>
                        cd my-ecommerce-site<br/>
                        <br/>
                        # 安装依赖<br/>
                        npm install<br/>
                        <br/>
                        # 启动开发服务器<br/>
                        npm run dev
                      </code>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="text-blue-800">
                        <strong>提示：</strong>项目将在 http://localhost:3000 启动，您可以立即查看和修改代码。
                      </p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">常见问题</h2>
                    <div className="space-y-4">
                      <details className="bg-white border border-gray-200 rounded-lg">
                        <summary className="p-4 cursor-pointer font-medium text-gray-900 hover:bg-gray-50">
                          Q: 生成的代码可以修改吗？
                        </summary>
                        <div className="px-4 pb-4 text-gray-600">
                          当然可以！生成的代码完全归您所有，可以自由修改、扩展和商业化使用。
                        </div>
                      </details>

                      <details className="bg-white border border-gray-200 rounded-lg">
                        <summary className="p-4 cursor-pointer font-medium text-gray-900 hover:bg-gray-50">
                          Q: 如果对生成结果不满意怎么办？
                        </summary>
                        <div className="px-4 pb-4 text-gray-600">
                          您可以调整配置重新生成，或者在生成的基础上进行修改。我们也在不断优化AI生成质量。
                        </div>
                      </details>

                      <details className="bg-white border border-gray-200 rounded-lg">
                        <summary className="p-4 cursor-pointer font-medium text-gray-900 hover:bg-gray-50">
                          Q: 是否支持团队协作？
                        </summary>
                        <div className="px-4 pb-4 text-gray-600">
                          专业版支持团队协作功能，可以共享项目和模板，多人协同开发。
                        </div>
                      </details>
                    </div>
                  </section>

                  <section className="bg-green-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-green-900 mb-4">🎉 恭喜！</h3>
                    <p className="text-green-700 mb-4">
                      您已经成功创建了第一个AI项目！接下来可以探索更多高级功能。
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href="/docs/webcraft"
                        className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                      >
                        深入学习 WebCraft →
                      </Link>
                      <Link
                        href="/workspace"
                        className="inline-flex items-center px-4 py-2 border border-green-600 text-green-600 rounded-md hover:bg-green-50 transition-colors"
                      >
                        立即创建项目
                      </Link>
                    </div>
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