import React from 'react'

const reasons = [
    { label: "Customer Satisfaction", percentage: 85 },
    { label: "Active Clients", percentage: 95 },
    { label: "Projects Done", percentage: 90 },
]

export default function ReasonForChoosing() {
    return (
        <section className="py-8 lg:py-20">
            <div className="container">
                {/* Reason For Choosing Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    {/* Left side - Content */}
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-8">Reason For Choosing Our Digital Agency</h2>

                        <p className="text-gray-600 mb-8 leading-relaxed">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised words.
                        </p>

                        <div className="space-y-6">
                            {reasons.map((reason, index) => (
                                <div key={index}>
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-medium">{reason.label}</span>
                                        <span className="font-bold text-orange-500">{reason.percentage}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div
                                            className="bg-gradient-to-r from-[#9f0101] to-[#fa0101] h-2 rounded-full transition-all duration-1000"
                                            style={{ width: `${reason.percentage}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right side - Image */}
                    <div className="relative w-full h-full bg-[url(/images/about_section_shape.png)] bg-cover bg-center bg-no-repeat">
                        <div className="rounded-3xl px-8 py-2 bg-white flex justify-center items-center gap-2 text-center  absolute bottom-5 left-1/2 -translate-x-1/2">
                            <div className="text-4xl font-bold text-orange-500 mb-2">25+</div>
                            <div className="text-lg font-medium">Years Experience</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
