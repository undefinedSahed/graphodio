import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Download, CheckCircle } from "lucide-react"

export default function ServiceDetails() {
    const services = [
        { name: "Search Engine Optimization", active: true },
        { name: "Web Design & Development", active: false },
        { name: "Email and Content Marketing", active: false },
        { name: "Social Media Network Marting", active: false },
    ]

    const processSteps = [
        {
            icon: "🎯",
            title: "Creative Analysis",
            description: "Creative analysis is important. It is common for marketers",
        },
        {
            icon: "✏️",
            title: "Design & Scratches",
            description: "Creative analysis is important. It is common for marketers",
        },
        {
            icon: "🚀",
            title: "Development & Delivery",
            description: "Creative analysis is important. It is common for marketers",
        },
    ]

    const features = [
        "Research beyond the business plan",
        "Customer Oriented Program Daily",
        "The ability to turnaround consulting",
        "Customer engagement matters",
    ]

    return (
        <section className="py-8 lg:py-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Service Image */}
                        <div className="mb-8">
                            <Image
                                src="/images/about_section_shape.png"
                                alt="Search Engine Optimization"
                                width={800}
                                height={400}
                                className="w-full h-64 lg:h-80 object-cover rounded-lg"
                            />
                        </div>

                        {/* Service Title */}
                        <h1 className="text-3xl lg:text-4xl font-bold mb-6">Search Engine Optimization</h1>

                        {/* Service Description */}
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. If you
                            are going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t anything embarrassing hidden in
                            the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
                            necessary, making this the first true generator on the Internet.
                        </p>

                        {/* Service Process */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold mb-8">Our Service Process</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {processSteps.map((step, index) => (
                                    <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                                        <div className="text-4xl mb-4">{step.icon}</div>
                                        <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                                        <p className="text-gray-600 text-sm">{step.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Additional Content */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-center">
                            <div>
                                <Image
                                    src="/images/about_section_shape.png"
                                    alt="Service process"
                                    width={400}
                                    height={250}
                                    className="w-full h-full object-cover rounded-lg mb-4"
                                />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-4">We Hope You Find What You are Looking for</h3>
                                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                    alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly
                                    believable.
                                </p>

                                <div className="space-y-3">
                                    {features.map((feature, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                                            <span className="text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        {/* Services List */}
                        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
                            <h3 className="text-xl font-bold mb-6">Our All Service</h3>
                            <div className="space-y-3">
                                {services.map((service, index) => (
                                    <div
                                        key={index}
                                        className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${service.active
                                                ? "bg-gradient-to-r from-[#9f0101] to-[#fa0101] text-white"
                                                : "bg-gray-50 hover:bg-gray-100"
                                            }`}
                                    >
                                        <span className="text-sm font-medium">{service.name}</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-gray-800 p-6 rounded-lg text-white mb-8">
                            <h3 className="text-xl font-bold mb-6">Get a free quote</h3>
                            <form className="space-y-4">
                                <Input placeholder="Your Name" className="bg-white text-gray-900" />
                                <Input type="email" placeholder="Your Email Address" className="bg-white text-gray-900" />
                                <Textarea placeholder="Your Message" rows={4} className="bg-white text-gray-900" />
                                <Button className="w-full bg-gradient-to-r from-[#9f0101] to-[#fa0101] hover:from-[#8a0101] hover:to-[#e10101]">
                                    Send Message
                                </Button>
                            </form>
                        </div>

                        {/* Download Section */}
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold mb-6">Download</h3>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
                                    <span className="text-sm font-medium">Our Brochures 2023</span>
                                    <Download className="w-4 h-4 text-gray-600" />
                                </div>
                                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
                                    <span className="text-sm font-medium">About Our Company</span>
                                    <Download className="w-4 h-4 text-gray-600" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
