"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function CreativePortfolio() {
    const [activeFilter, setActiveFilter] = useState("All")
    const [currentSlide, setCurrentSlide] = useState(0)

    const filters = ["All", "Website Design", "Branding Design", "App Design"]

    const portfolioItems = [
        {
            id: 1,
            title: "Smiley Colleagues Working Together",
            subtitle: "Working successfully",
            image: "/images/banner_bg.png",
            category: "Website Design",
        },
        {
            id: 2,
            title: "Creative Design Project",
            subtitle: "Brand Identity",
            image: "/images/banner_bg.png",
            category: "Branding Design",
        },
        {
            id: 3,
            title: "Mobile App Interface",
            subtitle: "User Experience",
            image: "/images/banner_bg.png",
            category: "App Design",
        },
    ]

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % portfolioItems.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length)
    }

    return (
        <section className="py-8 lg:py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="flex justify-center items-center gap-2 mb-4">
                        <span className="text-lg font-semibold text-orange-500">Our Project</span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold mb-8">Our Creative Portfolio</h2>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        {filters.map((filter) => (
                            <Button
                                key={filter}
                                variant={activeFilter === filter ? "default" : "outline"}
                                onClick={() => setActiveFilter(filter)}
                                className={activeFilter === filter ? "bg-gradient-to-r from-[#9f0101] to-[#fa0101] text-white" : ""}
                            >
                                {filter}
                            </Button>
                        ))}
                    </div>
                </div>

                {/* Portfolio Slider */}
                <div className="relative">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Left Image */}
                        <div className="lg:col-span-1">
                            <Image
                                src="/images/banner_bg.png"
                                alt="Portfolio item"
                                width={400}
                                height={400}
                                className="w-full h-64 lg:h-80 object-cover rounded-lg"
                            />
                        </div>

                        {/* Center Main Image */}
                        <div className="lg:col-span-1 relative">
                            <div className="relative bg-gray-800 rounded-lg overflow-hidden h-64 lg:h-80">
                                <Image
                                    src={portfolioItems[currentSlide].image || "/placeholder.svg"}
                                    alt={portfolioItems[currentSlide].title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute bottom-4 left-4 text-white">
                                    <div className="border-l-4 border-orange-500 pl-4">
                                        <h3 className="text-lg font-semibold">{portfolioItems[currentSlide].title}</h3>
                                        <p className="text-sm opacity-80">{portfolioItems[currentSlide].subtitle}</p>
                                    </div>
                                </div>

                                {/* Navigation Buttons */}
                                <button
                                    onClick={prevSlide}
                                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-gray-600 hover:bg-gray-700 rounded-full flex items-center justify-center text-white transition-colors"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center text-gray-800 transition-colors"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="lg:col-span-1">
                            <Image
                                src="/images/banner_bg.png"
                                alt="Portfolio item"
                                width={400}
                                height={400}
                                className="w-full h-64 lg:h-80 object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
