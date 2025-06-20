import PortfolioGrid from '@/components/services/portfolio-grid'
import PricingSection from '@/components/services/pricing-section'
import ServiceDetails from '@/components/services/service-details'
import CommonBanner from '@/components/shared/common_banner'
import React from 'react'

export default function ServiceInfo() {
    return (
        <main>
            <CommonBanner title='Service Details'/>
            <PricingSection />
            <ServiceDetails />
            <PortfolioGrid />
        </main>
    )
}
