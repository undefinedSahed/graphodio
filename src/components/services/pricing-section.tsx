import { Button } from "@/components/ui/button"
import { CheckCircle, X } from "lucide-react"

export default function PricingSection() {
    const plans = [
        {
            name: "Basic Plan",
            price: 30,
            period: "Per Month",
            color: "bg-blue-500",
            icon: "🏆",
            features: [
                { name: "Free Consultations", included: true },
                { name: "Business Planning", included: true },
                { name: "Investment Process", included: true },
                { name: "Market Research", included: false },
                { name: "Online Support", included: false },
                { name: "Unlimited Updates", included: false },
            ],
            buttonStyle: "outline",
        },
        {
            name: "Gold Plan",
            price: 60,
            period: "Per Month",
            color: "bg-gradient-to-r from-[#9f0101] to-[#fa0101]",
            icon: "👑",
            features: [
                { name: "Free Consultations", included: true },
                { name: "Business Planning", included: true },
                { name: "Investment Process", included: true },
                { name: "Market Research", included: false },
                { name: "Online Support", included: false },
                { name: "Unlimited Updates", included: true },
            ],
            buttonStyle: "primary",
            popular: true,
        },
        {
            name: "Silver Plan",
            price: 99,
            period: "Per Month",
            color: "bg-blue-500",
            icon: "🥈",
            features: [
                { name: "Free Consultations", included: true },
                { name: "Business Planning", included: true },
                { name: "Investment Process", included: true },
                { name: "Market Research", included: true },
                { name: "Online Support", included: true },
                { name: "Unlimited Updates", included: true },
            ],
            buttonStyle: "outline",
        },
    ]

    return (
        <section className="py-8 lg:py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="flex justify-center items-center gap-2 mb-4">
                        <span className="text-lg font-semibold text-orange-500">Our Pricing</span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold">Choose Your Perfect Plan</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-lg shadow-lg overflow-hidden relative ${plan.popular ? "ring-2 ring-orange-500" : ""}`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            {/* Header */}
                            <div className={`${plan.color} text-white p-6 relative`}>
                                <div className="absolute top-4 right-4 text-3xl">{plan.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                                <div className="flex items-baseline">
                                    <span className="text-3xl font-bold">${plan.price}</span>
                                    <span className="text-sm ml-2 opacity-80">{plan.period}</span>
                                </div>
                            </div>

                            {/* Features */}
                            <div className="p-6">
                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center gap-3">
                                            {feature.included ? (
                                                <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                                            ) : (
                                                <X className="w-5 h-5 text-gray-300 flex-shrink-0" />
                                            )}
                                            <span className={`text-sm ${feature.included ? "text-gray-900" : "text-gray-400"}`}>
                                                {feature.name}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    className={`w-full ${plan.buttonStyle === "primary"
                                            ? "bg-gradient-to-r from-[#9f0101] to-[#fa0101] hover:from-[#8a0101] hover:to-[#e10101] text-white"
                                            : "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50"
                                        }`}
                                    variant={plan.buttonStyle === "primary" ? "default" : "outline"}
                                >
                                    Choose Plan
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
