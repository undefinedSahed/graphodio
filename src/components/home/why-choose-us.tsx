import Image from "next/image"
import { TbTargetArrow } from "react-icons/tb"
import { FaCheckCircle, FaCogs, FaHeadset } from "react-icons/fa"

export default function WhyChooseUs() {
    const features = [
        {
            icon: <FaCheckCircle className="w-8 h-8 text-blue-500" />,
            title: "Quality Services",
            description:
                "At the Lorem Ipsum generation on the Internet tend to repeat predefined chunks as necessary, making this the first true.",
        },
        {
            icon: <FaCogs className="w-8 h-8 text-blue-500" />,
            title: "Best Working Process Follow",
            description:
                "At the Lorem Ipsum generation on the Internet tend to repeat predefined chunks as necessary, making this.",
        },
        {
            icon: <FaHeadset className="w-8 h-8 text-blue-500" />,
            title: "24/7 Support",
            description:
                "At the Lorem Ipsum generation on the Internet tend to repeat predefined chunks as necessary, making this the first true generator.",
        },
    ]

    return (
        <section className="py-8 lg:py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left side - Images */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-4">
                            <Image
                                src="/placeholder.svg?height=200&width=200"
                                alt="Service 1"
                                width={200}
                                height={200}
                                className="w-full h-48 object-cover rounded-lg"
                            />
                            <Image
                                src="/placeholder.svg?height=150&width=200"
                                alt="Service 2"
                                width={200}
                                height={150}
                                className="w-full h-36 object-cover rounded-lg"
                            />
                        </div>
                        <div className="space-y-4 mt-8">
                            <Image
                                src="/placeholder.svg?height=150&width=200"
                                alt="Service 3"
                                width={200}
                                height={150}
                                className="w-full h-36 object-cover rounded-lg"
                            />
                            <Image
                                src="/placeholder.svg?height=200&width=200"
                                alt="Service 4"
                                width={200}
                                height={200}
                                className="w-full h-48 object-cover rounded-lg"
                            />
                        </div>
                    </div>

                    {/* Right side - Content */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <TbTargetArrow className="h-6 w-6 text-orange-500" />
                            <span className="text-lg font-semibold text-orange-500">Why Choose Us ?</span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-8">We Are The Best Digital Marketing Agency</h2>

                        <div className="space-y-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="flex-shrink-0">{feature.icon}</div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                        <p className="text-gray-600">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
