"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ChevronDown, ChevronUp } from "lucide-react"
import CommonBanner from "@/components/shared/common_banner"

export default function FAQSection() {
    const [activeCategory, setActiveCategory] = useState("General Questions")
    const [openFAQ, setOpenFAQ] = useState<number | null>(1)

    const categories = [
        { name: "General Questions", count: 15 },
        { name: "Community", count: 8 },
        { name: "Support", count: 12 },
    ]

    const faqs = [
        {
            id: 1,
            question: "Is it Full Digital Marketing Agency?",
            answer:
                "Yes, we are a full-service digital marketing agency offering comprehensive solutions including SEO, social media marketing, content marketing, PPC advertising, web design, and more.",
        },
        {
            id: 2,
            question: "How to Create my Project in Agency?",
            answer:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more or less normal distribution of letters, which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure.",
        },
        {
            id: 3,
            question: "How to Work in Process of Digital Agency?",
            answer:
                "Our digital agency follows a structured process that includes discovery, strategy development, implementation, monitoring, and optimization to ensure the best results for your business.",
        },
        {
            id: 4,
            question: "How to join your referral program?",
            answer:
                "You can join our referral program by contacting our team. We offer attractive commissions for successful referrals and provide all the necessary marketing materials.",
        },
        {
            id: 5,
            question: "Human centered design to challenges?",
            answer:
                "We believe in human-centered design that focuses on understanding user needs, behaviors, and motivations to create solutions that truly resonate with your target audience.",
        },
        {
            id: 6,
            question: "Bring their individual experience and creative?",
            answer:
                "Our team brings diverse individual experiences and creative perspectives to every project, ensuring unique and innovative solutions tailored to your specific needs.",
        },
    ]

    const toggleFAQ = (id: number) => {
        setOpenFAQ(openFAQ === id ? null : id)
    }

    return (
        <main>
            <CommonBanner title='Frequently Asked Questions'/>
            <section className="py-8 lg:py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <div className="flex justify-center items-center gap-2 mb-4">
                            <span className="text-lg font-semibold text-orange-500">Common Questions</span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold">Frequently Asked Questions</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                        {/* Left Sidebar */}
                        <div className="lg:col-span-1">
                            {/* Categories */}
                            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                                <div className="space-y-2">
                                    {categories.map((category) => (
                                        <button
                                            key={category.name}
                                            onClick={() => setActiveCategory(category.name)}
                                            className={`w-full text-left p-3 rounded-lg transition-colors flex items-center justify-between ${activeCategory === category.name ? "bg-blue-500 text-white" : "bg-gray-50 hover:bg-gray-100"
                                                }`}
                                        >
                                            <span className="font-medium">{category.name}</span>
                                            <span
                                                className={`text-sm px-2 py-1 rounded ${activeCategory === category.name ? "bg-white text-blue-500" : "bg-gray-200 text-gray-600"
                                                    }`}
                                            >
                                                {category.count}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Illustration */}
                            <div className="text-center">
                                <Image
                                    src="/placeholder.svg?height=300&width=300"
                                    alt="FAQ Illustration"
                                    width={300}
                                    height={300}
                                    className="w-full max-w-sm mx-auto"
                                />
                            </div>
                        </div>

                        {/* FAQ Content */}
                        <div className="lg:col-span-2">
                            <div className="space-y-4">
                                {faqs.map((faq) => (
                                    <div key={faq.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                                        <button
                                            onClick={() => toggleFAQ(faq.id)}
                                            className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                                        >
                                            <span className="font-semibold text-lg">{faq.question}</span>
                                            {openFAQ === faq.id ? (
                                                <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                                            ) : (
                                                <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                                            )}
                                        </button>
                                        {openFAQ === faq.id && (
                                            <div className="px-6 pb-6">
                                                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Ask Question Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        {/* Left side - Image */}
                        <div>
                            <Image
                                src="/images/about_section_shape.png"
                                alt="Ask any question"
                                width={500}
                                height={400}
                                className="w-full h-full lg:h-80 object-cover rounded-lg"
                            />
                        </div>

                        {/* Right side - Contact Form */}
                        <div>
                            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Ask any Question</h3>
                            <p className="text-gray-600 mb-8">
                                Sed primis eu conubia eget ut nam risus ut habitasse dui adipiscing ut dignissim eu ut sed semper.
                            </p>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <Input placeholder="Your Name" />
                                    <Input type="email" placeholder="Email Address" />
                                </div>
                                <Textarea placeholder="Your Message" rows={5} />
                                <Button className="bg-gradient-to-r from-[#9f0101] to-[#fa0101] hover:from-[#8a0101] hover:to-[#e10101] text-white px-8 py-3">
                                    Send Message
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
