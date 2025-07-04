'use client'

import { motion } from 'framer-motion'

const cases = [
  {
    title: '电商SaaS平台',
    company: 'TechCorp',
    description: '使用SaaSFactory在2周内构建了完整的多租户电商管理平台，支持多商户、订单管理、数据分析等功能。',
    results: ['开发时间缩短 80%', '上线速度提升 5倍', '维护成本降低 60%'],
    image: '🛒',
    category: 'SaaS',
  },
  {
    title: '企业管理系统',
    company: 'InnovateLab',
    description: '通过AdminHub快速搭建了人力资源管理系统，包含员工管理、考勤统计、薪资计算等核心模块。',
    results: ['部署周期缩短 70%', '开发成本降低 50%', '用户满意度 95%'],
    image: '👥',
    category: '企业应用',
  },
  {
    title: '跨平台移动应用',
    company: 'StartupX',
    description: '使用MobileForge开发了健身追踪应用，同时支持iOS和Android平台，用户体验接近原生应用。',
    results: ['双平台同步发布', '性能提升 40%', '开发人员减少 60%'],
    image: '📱',
    category: '移动应用',
  },
]

const stats = [
  { label: '企业客户', value: '500+', suffix: '' },
  { label: '项目生成', value: '10', suffix: 'K+' },
  { label: '代码行数', value: '1', suffix: 'M+' },
  { label: '满意度', value: '98', suffix: '%' },
]

export default function CaseSection() {
  return (
    <section id="cases" className="py-24 bg-gradient-green">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-gray-900 mb-4">
            成功案例
          </h2>
          <p className="content-text max-w-3xl mx-auto">
            已有数百家企业选择VibeTemplate，从初创公司到大型企业，
            我们帮助他们显著提升开发效率，快速实现数字化转型。
          </p>
        </motion.div>

        {/* 统计数据 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* 案例展示 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <motion.div
              key={caseItem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 hover:bg-white transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">{caseItem.image}</div>
                <div>
                  <div className="font-semibold text-gray-900">{caseItem.company}</div>
                  <div className="text-sm text-gray-600">{caseItem.category}</div>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {caseItem.title}
              </h3>
              
              <p className="card-text mb-6">
                {caseItem.description}
              </p>
              
              <div className="space-y-2">
                <div className="text-sm font-medium text-gray-900 mb-2">关键成果：</div>
                {caseItem.results.map((result, resultIndex) => (
                  <div key={resultIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                    {result}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 客户证言 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="text-2xl text-gray-400 mb-4">"</div>
            <blockquote className="text-lg text-gray-700 mb-6 italic">
              VibeTemplate让我们的开发效率提升了10倍，原本需要3个月的项目，
              现在2周就能完成。AI生成的代码质量非常高，为我们节省了大量的开发和维护成本。
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                Z
              </div>
              <div>
                <div className="font-semibold text-gray-900">张伟</div>
                <div className="text-sm text-gray-600">某科技公司 CTO</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}