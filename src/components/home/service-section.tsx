import React from 'react'
import ServiceCard from '../shared/service-card'

export default function ServiceSection() {

    const services = [
        {
            title: "Graphics Design",
            description:
                "There are many variations of pass Lorem Ipsum available, but the a have suffered alteration.",
            icon: "GraphicsDesignIcon", // Replace with actual icon component or path
            iconBg: "bg-blue-500",
        },
        {
            title: "Web Developer",
            description:
                "There are many variations of pass Lorem Ipsum available, but the a have suffered alteration.",
            icon: "WebDevIcon", // Replace with actual icon component or path
            iconBg: "bg-orange-500",
            isHighlighted: true, // For the special orange border design
        },
        {
            title: "Digital Marketing",
            description:
                "There are many variations of pass Lorem Ipsum available, but the a have suffered alteration.",
            icon: "DigitalMarketingIcon", // Replace with actual icon component or path
            iconBg: "bg-blue-500",
        },
        {
            title: "App Design",
            description:
                "There are many variations of pass Lorem Ipsum available, but the a have suffered alteration.",
            icon: "AppDesignIcon", // Replace with actual icon component or path
            iconBg: "bg-blue-500",
        },
    ];

    return (
        <section className="py-8 lg:py-20">
            <div className="container">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                            iconBg={service.iconBg}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
