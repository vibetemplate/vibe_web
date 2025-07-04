'use client'

import { motion } from 'framer-motion'

const techStack = [
  {
    category: '前端技术',
    technologies: [
      { name: 'Next.js 14', desc: 'React全栈框架' },
      { name: 'TypeScript', desc: '类型安全' },
      { name: 'Tailwind CSS', desc: '原子化CSS' },
      { name: 'Framer Motion', desc: '动画库' },
    ],
  },
  {
    category: '移动开发',
    technologies: [
      { name: 'Flutter', desc: '跨平台框架' },
      { name: 'React Native', desc: '原生应用' },
      { name: 'uni-app', desc: '小程序框架' },
      { name: 'PWA', desc: '渐进式应用' },
    ],
  },
  {
    category: '后端服务',
    technologies: [
      { name: 'Node.js', desc: '服务端运行时' },
      { name: 'Supabase', desc: '数据库服务' },
      { name: 'Prisma', desc: 'ORM工具' },
      { name: 'Serverless', desc: '无服务器' },
    ],
  },
  {
    category: '开发工具',
    technologies: [
      { name: 'AI Code Gen', desc: '智能代码生成' },
      { name: 'ESLint', desc: '代码检查' },
      { name: 'Prettier', desc: '代码格式化' },
      { name: 'Jest', desc: '单元测试' },
    ],
  },
]

export default function TechSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-gray-900 mb-4">
            现代化技术栈
          </h2>
          <p className="content-text max-w-3xl mx-auto">
            我们采用业界最先进的技术栈，确保生成的应用具有最佳的性能、
            可维护性和扩展性。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techStack.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: categoryIndex * 0.1 + techIndex * 0.05 
                    }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                    <div>
                      <div className="font-medium text-gray-900 text-sm">
                        {tech.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {tech.desc}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 技术优势 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">⚡</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">极速开发</h4>
            <p className="card-text">
              AI驱动的代码生成，5分钟内从想法到可运行的原型
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🔒</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">企业级安全</h4>
            <p className="card-text">
              内置安全最佳实践，符合SOC2、GDPR等合规标准
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">📈</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">可扩展架构</h4>
            <p className="card-text">
              模块化设计，支持从MVP到企业级应用的平滑升级
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}