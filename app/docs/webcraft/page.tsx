'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function WebCraftPage() {
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
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">产品指南</h3>
                  <Link href="/docs/webcraft" className="block px-3 py-2 text-sm bg-blue-50 text-blue-700 rounded-md">
                    WebCraft 完整指南
                  </Link>
                  <Link href="/docs/mobileforge" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md">
                    MobileForge 开发教程
                  </Link>
                  <Link href="/docs/desktopstudio" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md">
                    DesktopStudio 应用开发
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
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-4xl">🌐</div>
                    <div>
                      <h1 className="text-4xl font-bold text-gray-900">WebCraft 完整指南</h1>
                      <p className="text-xl text-gray-600">
                        掌握AI驱动的Web应用开发神器
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>⏱️ 预计阅读时间：20分钟</span>
                    <span>📅 最后更新：2024年1月</span>
                    <span>🔄 适用版本：WebCraft 2.0</span>
                  </div>
                </header>

                <div className="space-y-8">
                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">什么是 WebCraft？</h2>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                      <p className="text-blue-800 text-lg leading-relaxed">
                        WebCraft 是 VibeTemplate 的旗舰产品，专为现代Web应用开发而设计的AI生成器。
                        它能够根据您的需求，自动生成基于 Next.js、React 的高质量、可扩展的Web应用代码。
                      </p>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">核心优势</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">⚡ 极速开发</h4>
                        <p className="text-gray-600 text-sm">从想法到可运行的Web应用，只需5-10分钟</p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">🎨 现代设计</h4>
                        <p className="text-gray-600 text-sm">自动生成响应式、美观的用户界面</p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">🔧 企业级功能</h4>
                        <p className="text-gray-600 text-sm">内置认证、支付、SEO等关键功能</p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">🚀 高性能</h4>
                        <p className="text-gray-600 text-sm">基于Next.js，支持SSR、SSG等优化</p>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">支持的技术栈</h2>
                    <div className="space-y-4">
                      <div className="bg-white border border-gray-200 rounded-lg p-6">
                        <h4 className="font-semibold text-gray-900 mb-3">🔥 推荐技术栈</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          <span className="bg-blue-100 text-blue-800 px-3 py-2 rounded-full text-sm font-medium">Next.js 14</span>
                          <span className="bg-blue-100 text-blue-800 px-3 py-2 rounded-full text-sm font-medium">TypeScript</span>
                          <span className="bg-blue-100 text-blue-800 px-3 py-2 rounded-full text-sm font-medium">Tailwind CSS</span>
                          <span className="bg-blue-100 text-blue-800 px-3 py-2 rounded-full text-sm font-medium">Prisma ORM</span>
                        </div>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-lg p-6">
                        <h4 className="font-semibold text-gray-900 mb-3">🛠️ 其他选项</h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          <span className="bg-gray-100 text-gray-700 px-3 py-2 rounded-full text-sm">React + Vite</span>
                          <span className="bg-gray-100 text-gray-700 px-3 py-2 rounded-full text-sm">Vue.js + Nuxt</span>
                          <span className="bg-gray-100 text-gray-700 px-3 py-2 rounded-full text-sm">Svelte + SvelteKit</span>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">功能模块详解</h2>
                    <div className="space-y-6">
                      <div className="bg-white border border-gray-200 rounded-lg p-6">
                        <h4 className="font-semibold text-gray-900 mb-3">🔐 用户认证</h4>
                        <p className="text-gray-600 mb-3">
                          完整的用户管理系统，支持注册、登录、密码重置、邮箱验证等功能。
                        </p>
                        <div className="bg-gray-50 rounded-md p-3 text-sm">
                          <strong>包含特性：</strong>
                          <ul className="mt-2 space-y-1 text-gray-600">
                            <li>• JWT身份验证</li>
                            <li>• 社交登录集成（Google、GitHub等）</li>
                            <li>• 用户角色和权限管理</li>
                            <li>• 安全密码策略</li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-lg p-6">
                        <h4 className="font-semibold text-gray-900 mb-3">💳 支付集成</h4>
                        <p className="text-gray-600 mb-3">
                          支持主流支付平台，开箱即用的支付解决方案。
                        </p>
                        <div className="bg-gray-50 rounded-md p-3 text-sm">
                          <strong>支持平台：</strong>
                          <ul className="mt-2 space-y-1 text-gray-600">
                            <li>• Stripe（国际）</li>
                            <li>• 支付宝（国内）</li>
                            <li>• 微信支付（国内）</li>
                            <li>• PayPal（国际）</li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-lg p-6">
                        <h4 className="font-semibold text-gray-900 mb-3">📱 响应式设计</h4>
                        <p className="text-gray-600 mb-3">
                          自适应所有设备尺寸，提供一致的用户体验。
                        </p>
                        <div className="bg-gray-50 rounded-md p-3 text-sm">
                          <strong>适配设备：</strong>
                          <ul className="mt-2 space-y-1 text-gray-600">
                            <li>• 桌面端（1920px+）</li>
                            <li>• 平板端（768px-1024px）</li>
                            <li>• 手机端（320px-768px）</li>
                            <li>• 超宽屏（2560px+）</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">项目类型和模板</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white border border-gray-200 rounded-lg p-6">
                        <h4 className="font-semibold text-gray-900 mb-3">🛒 电商网站</h4>
                        <p className="text-gray-600 mb-3 text-sm">
                          完整的在线商城解决方案，包含商品管理、购物车、订单系统等。
                        </p>
                        <div className="text-xs text-gray-500">
                          <strong>适用场景：</strong>零售商城、B2C平台、品牌官网
                        </div>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-lg p-6">
                        <h4 className="font-semibold text-gray-900 mb-3">🏢 企业官网</h4>
                        <p className="text-gray-600 mb-3 text-sm">
                          专业的企业展示网站，支持多语言、SEO优化、内容管理。
                        </p>
                        <div className="text-xs text-gray-500">
                          <strong>适用场景：</strong>公司官网、产品展示、品牌宣传
                        </div>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-lg p-6">
                        <h4 className="font-semibold text-gray-900 mb-3">📝 博客系统</h4>
                        <p className="text-gray-600 mb-3 text-sm">
                          现代化的内容发布平台，支持Markdown、评论、分类管理。
                        </p>
                        <div className="text-xs text-gray-500">
                          <strong>适用场景：</strong>个人博客、技术文档、内容营销
                        </div>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-lg p-6">
                        <h4 className="font-semibold text-gray-900 mb-3">🎨 作品集</h4>
                        <p className="text-gray-600 mb-3 text-sm">
                          精美的个人作品展示网站，支持图片画廊、项目介绍。
                        </p>
                        <div className="text-xs text-gray-500">
                          <strong>适用场景：</strong>设计师作品集、摄影师网站、艺术家展示
                        </div>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">高级配置</h2>
                    <div className="space-y-6">
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                        <h4 className="font-semibold text-yellow-900 mb-3">⚙️ 自定义配置</h4>
                        <p className="text-yellow-800 mb-3">
                          WebCraft 支持高度自定义，您可以根据具体需求调整生成参数。
                        </p>
                        <details className="mt-4">
                          <summary className="cursor-pointer text-yellow-900 font-medium">展开配置选项</summary>
                          <div className="mt-3 space-y-2 text-sm text-yellow-800">
                            <div>• <strong>数据库选择：</strong>PostgreSQL, MySQL, SQLite, MongoDB</div>
                            <div>• <strong>部署平台：</strong>Vercel, Netlify, AWS, 自部署</div>
                            <div>• <strong>样式方案：</strong>Tailwind CSS, Styled Components, CSS Modules</div>
                            <div>• <strong>状态管理：</strong>Zustand, Redux Toolkit, Context API</div>
                          </div>
                        </details>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-lg p-6">
                        <h4 className="font-semibold text-gray-900 mb-3">🔧 开发工具集成</h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm">ESLint</span>
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm">Prettier</span>
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm">Husky</span>
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm">Jest</span>
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm">Cypress</span>
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm">Storybook</span>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">最佳实践</h2>
                    <div className="space-y-4">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <h4 className="font-semibold text-green-900 mb-2">✅ 推荐做法</h4>
                        <ul className="space-y-1 text-green-800 text-sm">
                          <li>• 详细描述项目需求，获得更精确的AI生成结果</li>
                          <li>• 选择合适的功能模块，避免过度复杂化</li>
                          <li>• 使用TypeScript提高代码质量和可维护性</li>
                          <li>• 遵循Next.js最佳实践，充分利用框架特性</li>
                        </ul>
                      </div>

                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <h4 className="font-semibold text-red-900 mb-2">⚠️ 注意事项</h4>
                        <ul className="space-y-1 text-red-800 text-sm">
                          <li>• 生成后及时备份代码，避免意外丢失</li>
                          <li>• 在修改AI生成代码前，先理解项目结构</li>
                          <li>• 大型项目建议分模块逐步生成和集成</li>
                          <li>• 定期更新依赖包，保持安全性</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  <section className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">准备开始 WebCraft 之旅？</h3>
                    <p className="text-blue-700 mb-4">
                      现在您已经了解了 WebCraft 的强大功能，让我们立即创建您的第一个Web应用！
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href="/try/webcraft"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                      >
                        体验 WebCraft →
                      </Link>
                      <Link
                        href="/workspace"
                        className="inline-flex items-center px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors"
                      >
                        前往工作台
                      </Link>
                      <Link
                        href="/products/webcraft"
                        className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                      >
                        查看详细信息
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