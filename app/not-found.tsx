'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function NotFound() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 flex items-center justify-center p-4">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        
        {/* 星空效果 - 只在客户端渲染 */}
        {isClient && (
          <div className="absolute inset-0">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-center max-w-2xl mx-auto"
      >
        {/* 404 动画 */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="text-8xl md:text-9xl font-bold text-white/10 mb-4">404</div>
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-6xl mb-4"
          >
            🤖
          </motion.div>
        </motion.div>

        {/* 标题和描述 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI找不到这个页面
          </h1>
          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            看起来这个页面已经被传送到了另一个维度，
            <br />
            或者可能还没有被AI创造出来。
          </p>
        </motion.div>

        {/* 搜索建议 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8"
        >
          <h3 className="text-lg font-semibold text-white mb-4">你可能在寻找：</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Link
              href="/workspace"
              className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors group"
            >
              <span className="text-2xl">🔧</span>
              <div className="text-left">
                <div className="text-white font-medium group-hover:text-blue-200">AI工作台</div>
                <div className="text-white/60 text-sm">创建AI项目</div>
              </div>
            </Link>
            
            <Link
              href="/products"
              className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors group"
            >
              <span className="text-2xl">🛠️</span>
              <div className="text-left">
                <div className="text-white font-medium group-hover:text-blue-200">产品中心</div>
                <div className="text-white/60 text-sm">浏览所有产品</div>
              </div>
            </Link>
            
            <Link
              href="/docs"
              className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors group"
            >
              <span className="text-2xl">📚</span>
              <div className="text-left">
                <div className="text-white font-medium group-hover:text-blue-200">文档中心</div>
                <div className="text-white/60 text-sm">学习使用指南</div>
              </div>
            </Link>
            
            <Link
              href="/signup"
              className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors group"
            >
              <span className="text-2xl">🚀</span>
              <div className="text-left">
                <div className="text-white font-medium group-hover:text-blue-200">免费注册</div>
                <div className="text-white/60 text-sm">开始AI开发</div>
              </div>
            </Link>
          </div>
        </motion.div>

        {/* 行动按钮 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/"
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-4 px-8 rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            返回首页
          </Link>
          <button
            onClick={() => window.history.back()}
            className="border-2 border-white/30 text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-colors duration-200"
          >
            返回上页
          </button>
        </motion.div>

        {/* 底部提示 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 text-white/60 text-sm"
        >
          <p>如果您认为这是一个错误，请 <Link href="/contact" className="text-blue-300 hover:text-blue-200 underline">联系我们</Link></p>
        </motion.div>
      </motion.div>
    </div>
  )
}