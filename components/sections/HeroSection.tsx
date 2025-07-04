'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* 背景动效 */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* 代码雨效果背景 */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={i}
                className="flex flex-col space-y-2 text-white/40 text-xs font-mono"
                initial={{ y: -100 }}
                animate={{ y: typeof window !== 'undefined' ? window.innerHeight : 1000 }}
                transition={{
                  duration: 10 + i * 2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.5,
                }}
              >
                {['import', 'export', 'const', 'function', 'return', 'useState', 'useEffect', 'async', 'await'].map((code, j) => (
                  <span key={j}>{code}</span>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative container-custom">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title text-white mb-6">
              AI-Native Development
              <br />
              <span className="text-gradient bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Framework
              </span>
            </h1>
            
            <p className="content-text text-white/90 mb-8 max-w-2xl">
              从想法到应用，AI让一切皆有可能。让每个人都能构建专业级应用的AI原生开发框架，
              支持Web、移动端、桌面端、SaaS等全栈开发。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/workspace"
                className="bg-white text-primary-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-center"
              >
                开始体验
              </Link>
              <Link
                href="#products"
                className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-colors duration-200 text-center"
              >
                浏览产品
              </Link>
            </div>
            
            {/* 统计数据 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-white mb-2">6+</div>
                <div className="text-white/80 text-sm">产品解决方案</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-white mb-2">10x</div>
                <div className="text-white/80 text-sm">开发效率提升</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-white mb-2">100+</div>
                <div className="text-white/80 text-sm">企业级模板</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-white mb-2">5min</div>
                <div className="text-white/80 text-sm">从想法到原型</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 底部滚动提示 */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}