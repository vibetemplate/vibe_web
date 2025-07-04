'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const plans = [
  {
    name: '创意者版',
    description: '适合个人开发者和小团队',
    price: '免费',
    period: '',
    features: [
      '3个项目',
      '基础模板',
      '社区支持',
      '公开仓库',
      '基础AI生成',
    ],
    limitations: [
      '无私有项目',
      '无高级模板',
      '无优先支持',
    ],
    cta: '开始使用',
    popular: false,
    gradient: 'from-gray-500 to-gray-600',
  },
  {
    name: '专业版',
    description: '适合专业开发者和成长型团队',
    price: '$19',
    period: '/月',
    features: [
      '无限项目',
      '所有模板',
      '优先支持',
      '私有仓库',
      '高级AI功能',
      '代码定制',
      '团队协作',
    ],
    limitations: [],
    cta: '开始免费试用',
    popular: true,
    gradient: 'from-blue-500 to-purple-500',
  },
  {
    name: '企业版',
    description: '适合大型企业和定制化需求',
    price: '定制',
    period: '',
    features: [
      '所有专业版功能',
      '私有化部署',
      '单点登录(SSO)',
      '定制开发',
      '专属客服',
      'SLA保障',
      '培训服务',
    ],
    limitations: [],
    cta: '联系销售',
    popular: false,
    gradient: 'from-green-500 to-teal-500',
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-white mb-4">
            选择适合的方案
          </h2>
          <p className="content-text text-gray-300 max-w-3xl mx-auto">
            从个人开发者到大型企业，我们提供灵活的定价方案，
            让每个人都能享受AI驱动开发的便利。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-2xl p-8 ${
                plan.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    最受欢迎
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {plan.description}
                </p>
                <div className="flex items-end justify-center">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-gray-600 ml-1">
                      {plan.period}
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">包含功能：</h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {plan.limitations.length > 0 && (
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">限制：</h4>
                    <ul className="space-y-2">
                      {plan.limitations.map((limitation) => (
                        <li key={limitation} className="flex items-center text-gray-500">
                          <svg className="w-4 h-4 text-gray-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                          {limitation}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <Link
                href={plan.name === '企业版' ? '/contact' : '/signup'}
                className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                  plan.popular
                    ? `bg-gradient-to-r ${plan.gradient} text-white hover:shadow-lg`
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-800 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-6">
              常见问题
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-medium text-white mb-2">
                  可以随时升级或降级吗？
                </h4>
                <p className="text-gray-300 text-sm">
                  是的，您可以随时升级或降级您的套餐，费用将按比例调整。
                </p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">
                  企业版包含哪些定制服务？
                </h4>
                <p className="text-gray-300 text-sm">
                  包括私有化部署、定制开发、专属培训和24/7技术支持。
                </p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">
                  有免费试用期吗？
                </h4>
                <p className="text-gray-300 text-sm">
                  专业版提供14天免费试用，无需信用卡，随时可以取消。
                </p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">
                  支持哪些支付方式？
                </h4>
                <p className="text-gray-300 text-sm">
                  支持信用卡、PayPal、支付宝、微信支付等多种支付方式。
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}