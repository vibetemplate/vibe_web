'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'

// 预定义的星星位置，避免 Math.random() 导致的水合错误
const STAR_POSITIONS = [
  { left: 10, top: 20, delay: 0.5, duration: 3 },
  { left: 25, top: 45, delay: 1.2, duration: 2.5 },
  { left: 40, top: 15, delay: 0.8, duration: 4 },
  { left: 55, top: 70, delay: 1.8, duration: 3.5 },
  { left: 70, top: 30, delay: 0.3, duration: 2.8 },
  { left: 85, top: 60, delay: 1.5, duration: 3.2 },
  { left: 15, top: 80, delay: 0.9, duration: 2.7 },
  { left: 90, top: 10, delay: 1.1, duration: 3.8 },
  { left: 5, top: 50, delay: 0.6, duration: 2.9 },
  { left: 95, top: 85, delay: 1.7, duration: 3.1 },
  { left: 30, top: 65, delay: 0.4, duration: 2.6 },
  { left: 60, top: 25, delay: 1.3, duration: 3.4 },
  { left: 75, top: 90, delay: 0.7, duration: 2.4 },
  { left: 20, top: 35, delay: 1.6, duration: 3.7 },
  { left: 45, top: 75, delay: 1.0, duration: 2.8 },
  { left: 80, top: 5, delay: 0.2, duration: 3.3 },
  { left: 35, top: 55, delay: 1.4, duration: 2.5 },
  { left: 65, top: 40, delay: 0.8, duration: 3.6 },
  { left: 12, top: 12, delay: 1.9, duration: 2.7 },
  { left: 88, top: 75, delay: 0.5, duration: 3.0 },
]

export default function CTASection() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])
  return (
    <section className="pt-24 pb-32 bg-gray-900 relative overflow-hidden">
      {/* 背景效果 */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        
        {/* 星空效果 */}
        {isClient && (
          <div className="absolute inset-0">
            {STAR_POSITIONS.map((star, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${star.left}%`,
                  top: `${star.top}%`,
                }}
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: star.duration,
                  repeat: Infinity,
                  delay: star.delay,
                }}
              />
            ))}
          </div>
        )}
      </div>

      <div className="relative container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="section-title text-white mb-6">
            准备好开始您的
            <span className="text-gradient bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              AI开发之旅
            </span>
            了吗？
          </h2>
          
          <p className="content-text text-gray-300 mb-12 max-w-2xl mx-auto">
            加入数千名开发者的行列，体验AI驱动开发的强大威力。
            从想法到应用，只需要几分钟时间。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/workspace"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-4 px-8 rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              立即体验
            </Link>
            <Link
              href="/products"
              className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-colors duration-200"
            >
              浏览产品
            </Link>
          </div>
          
          {/* 信任标识 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-400 text-sm"
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>14天免费试用</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>无需信用卡</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>随时取消</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}