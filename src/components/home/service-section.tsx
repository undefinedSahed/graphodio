import React from 'react'
import ServiceCard from '../shared/service-card'

const services = [
    {
        title: "Graphics Design",
        description:
            "There are many variations of pass Lorem Ipsum available, but the a have suffered alteration.",
        icon: '/images/graphic.png'
    },
    {
        title: "Custom Website",
        description:
            "There are many variations of pass Lorem Ipsum available, but the a have suffered alteration.",
        icon: '/images/web.png'
    },
    {
        title: "Digital Marketing",
        description:
            "There are many variations of pass Lorem Ipsum available, but the a have suffered alteration.",
        icon: '/images/dm.png'
    },
    {
        title: "App Design",
        description:
            "There are many variations of pass Lorem Ipsum available, but the a have suffered alteration.",
        icon:'/images/app.png',
    },
];
export default function ServiceSection() {


    return (
        <section className="py-8 lg:py-20">
            <div className="container px-5 lg:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
