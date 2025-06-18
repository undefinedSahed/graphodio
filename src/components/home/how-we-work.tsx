import React from 'react';
import { TbTargetArrow } from "react-icons/tb";
import HWWCard from '../shared/hww-card';


export default function HowWeWork() {
    const cardData = [
        {
            icon: "/images/hww1.svg",
            title: "Business Planning ",
            description: "There are many variations of pass Lorem Ipsum available, but the a have suffered alteration.",
            step: "01"
        },
        {
            icon: "/images/hww2.svg",
            title: "Market research",
            description: "There are many variations of pass Lorem Ipsum available, but the a have suffered alteration.",
            step: "02"
        },
        {
            icon: "/images/hww3.svg",
            title: "Completely Solution",
            description: "There are many variations of pass Lorem Ipsum available, but the a have suffered alteration.",
            step: "03"
        }
    ];
    return (
        <section className="py-8 lg:py-20">
            <div className="container mx-auto">
                <div className="text-center lg:pb-12 pb-6">
                    <div className="text-center flex justify-center items-center gap-2 lg:pb-4 pb-2">
                        <TbTargetArrow className='lg:h-7 h-5 w-5 lg:w-7  text-red-500' />
                        <span className="lg:text-xl text-base font-semibold text-red-500">Work Process</span>
                    </div>
                    <div className="text-center">
                        <h2 className='lg:text-4xl text-2xl font-bold'>How We Work</h2>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {cardData.map((card) => (
                        <HWWCard key={card.step} {...card} icon={card.icon} />
                    ))}
                </div>
            </div>
        </section>
    );
}
