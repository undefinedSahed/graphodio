import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function AboutCompany() {
    const features = ["Experience", "Best Reputation", "Best Services"]

    return (
        <section className="py-8 lg:py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* About Company Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    {/* Left side - Image */}
                    <div className="relative">
                        <Image
                            src="/images/about_section_shape.png"
                            alt="About our company"
                            width={600}
                            height={500}
                            className="w-full h-96 lg:h-[500px] object-cover rounded-lg"
                        />
                    </div>

                    {/* Right side - Content */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-lg font-semibold text-orange-500">About Our Company</span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6">Best Digital Marketing Agency For People</h2>

                        <p className="text-gray-600 mb-6 leading-relaxed">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-orange-500" />
                                    <span className="font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <Button className="bg-gradient-to-r from-[#9f0101] to-[#fa0101] hover:from-[#8a0101] hover:to-[#e10101] text-white px-8 py-3">
                            Read More
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
