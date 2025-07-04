'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const navigation = [
  { name: '首页', href: '#home' },
  { name: '产品', href: '#products' },
  { name: '功能', href: '#features' },
  { name: '案例', href: '#cases' },
  { name: '定价', href: '#pricing' },
  { name: '文档', href: '/docs' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <span className="text-xl font-bold text-gray-900">VibeTemplate</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-primary-500 transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="text-gray-600 hover:text-primary-500 transition-colors duration-200 font-medium"
            >
              登录
            </Link>
            <Link
              href="/workspace"
              className="text-gray-600 hover:text-primary-500 transition-colors duration-200 font-medium"
            >
              工作台
            </Link>
            <Link
              href="/signup"
              className="btn-primary"
            >
              开始使用
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-600 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">打开菜单</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 border-t border-gray-200 bg-white"
          >
            <div className="space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-600 hover:text-primary-500 transition-colors duration-200 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <Link
                  href="/login"
                  className="text-gray-600 hover:text-primary-500 transition-colors duration-200 font-medium"
                >
                  登录
                </Link>
                <Link
                  href="/workspace"
                  className="text-gray-600 hover:text-primary-500 transition-colors duration-200 font-medium"
                >
                  工作台
                </Link>
                <Link
                  href="/signup"
                  className="btn-primary text-center"
                >
                  开始使用
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  )
}