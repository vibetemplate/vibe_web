'use client'

import { motion } from 'framer-motion'

const features = [
  {
    title: 'AI智能生成',
    description: '基于先进的AI技术，智能分析需求并生成高质量的代码结构',
    icon: '🧠',
  },
  {
    title: '企业级架构',
    description: '遵循最佳实践，生成符合企业级标准的应用架构',
    icon: '🏗️',
  },
  {
    title: '多平台支持',
    description: '一套框架支持Web、移动端、桌面端、小程序等多个平台',
    icon: '🌐',
  },
  {
    title: '类型安全',
    description: '全面的TypeScript支持，确保代码的类型安全和可维护性',
    icon: '🛡️',
  },
  {
    title: '模块化设计',
    description: '高度模块化的设计，支持按需加载和自定义扩展',
    icon: '🔧',
  },
  {
    title: '持续集成',
    description: '内置CI/CD配置，支持自动化测试和部署',
    icon: '🚀',
  },
]

export default function FeatureSection() {
  return (
    <section className="py-24 bg-gradient-pink">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-gray-900 mb-4">
            为什么选择VibeTemplate
          </h2>
          <p className="content-text max-w-3xl mx-auto">
            我们不仅提供代码生成工具，更是一个完整的AI原生开发生态系统，
            让开发变得更智能、更高效、更专业。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/90 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="card-text">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}