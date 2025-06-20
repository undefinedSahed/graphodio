import React from 'react'
import { CheckCircle } from "lucide-react"
import Image from 'next/image'
import { Button } from '../ui/button'

export default function AboutService() {
    return (
        <section className="py-8 lg:py-20">
            <div className="container">
                {/* Quality & Experience Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    {/* Left side - Images */}
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/images/about_section_shape.png"
                            alt="Quality service 1"
                            width={250}
                            height={300}
                            className="w-full h-64 object-cover rounded-lg"
                        />
                        <Image
                            src="/images/about_section_shape.png"
                            alt="Quality service 2"
                            width={250}
                            height={300}
                            className="w-full h-64 object-cover rounded-lg mt-8"
                        />
                    </div>

                    {/* Right side - Content */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-lg font-semibold text-orange-500">About Our Service</span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6">Quality & Experience Best Digital Agency</h2>

                        <div className="flex gap-4 mb-6">
                            <Button className="bg-gradient-to-r from-[#9f0101] to-[#fa0101] text-white">Our History</Button>
                            <Button variant="outline">Our Mission</Button>
                            <Button variant="outline">Our Vision</Button>
                        </div>

                        <p className="text-gray-600 mb-8 leading-relaxed">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-orange-500" />
                                <span>Digital Creative Agency</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-orange-500" />
                                <span>Professional Expert Team</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-orange-500" />
                                <span>Experience Team Member</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
