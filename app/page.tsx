'use client'

import HeroSection from '@/components/sections/HeroSection'
import ProductSection from '@/components/sections/ProductSection'
import FeatureSection from '@/components/sections/FeatureSection'
import TechSection from '@/components/sections/TechSection'
import CaseSection from '@/components/sections/CaseSection'
import PricingSection from '@/components/sections/PricingSection'
import CTASection from '@/components/sections/CTASection'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProductSection />
        <FeatureSection />
        <TechSection />
        <CaseSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}