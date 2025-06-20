"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

export default function ClientTestimonial() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0)

    const stats = [
        { number: "150+", label: "Happy Clients", color: "bg-blue-500" },
        { number: "1500+", label: "Project Complete", color: "bg-orange-500" },
        { number: "95+", label: "Percentage Rate", color: "bg-blue-500" },
        { number: "120+", label: "Awards", color: "bg-blue-500" },
    ]

    const testimonials = [
        {
            id: 1,
            name: "Kristin Wilson",
            text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
            rating: 5,
            avatar: "/placeholder.svg?height=60&width=60",
        },
        {
            id: 2,
            name: "John Smith",
            text: "Excellent service and professional team. They delivered exactly what we needed and exceeded our expectations. Highly recommended for any digital marketing needs.",
            rating: 5,
            avatar: "/placeholder.svg?height=60&width=60",
        },
    ]

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    return (
        <section className="py-8 lg:py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left side - Stats */}
                    <div className="relative">
                        <div className="grid grid-cols-2 gap-4 max-w-md">
                            {stats.map((stat, index) => (
                                <div key={index} className={`${stat.color} text-white p-6 rounded-lg text-center`}>
                                    <div className="text-2xl lg:text-3xl font-bold">{stat.number}</div>
                                    <div className="text-sm mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-4 -left-4 w-8 h-8 bg-orange-500 rounded-full"></div>
                        <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-blue-500 rounded-full"></div>
                        <div className="absolute top-1/2 -right-8 w-4 h-4 bg-blue-300 rounded-full"></div>
                    </div>

                    {/* Right side - Testimonial */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-lg font-semibold text-orange-500">Testimonial</span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-8">What Our Client Say</h2>

                        <div className="bg-white p-6 rounded-lg shadow-lg relative">
                            <div className="flex mb-4">
                                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            <p className="text-gray-600 mb-6 leading-relaxed">{testimonials[currentTestimonial].text}</p>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Image
                                        src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                                        alt={testimonials[currentTestimonial].name}
                                        width={50}
                                        height={50}
                                        className="rounded-full"
                                    />
                                    <div>
                                        <h4 className="font-semibold">{testimonials[currentTestimonial].name}</h4>
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    <button
                                        onClick={prevTestimonial}
                                        className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
                                    >
                                        <ChevronLeft className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={nextTestimonial}
                                        className="w-8 h-8 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center transition-colors"
                                    >
                                        <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
