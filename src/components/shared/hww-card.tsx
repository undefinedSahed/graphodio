import Image from 'next/image';
import React from 'react';

type HWWCardProps = {
    icon: string;
    title: string;
    description: string;
    step: number | string;
    iconBg?: string;
    titleColor?: string;
};

export default function HWWCard({
    icon,
    title,
    description,
    step,
    iconBg = 'bg-gradient-to-r from-[#9f0101] to-[#fa0101]',
    titleColor = 'text-black',
}: HWWCardProps) {
    return (
        <div className='w-full bg-[url(/images/workshape.png)] bg-cover bg-left bg-no-repeat lg:pt-8 pt-5 lg:pb-4 pb-2 lg:pl-16 pl-6 rounded-r-3xl'>
            <div>
                <div className="flex lg:gap-8 gap-3 lg:items-start items-center">
                    <div className={`h-[80px] w-[80px] rounded-full p-5 shrink-0 ${iconBg}`}>
                        <Image
                            src={icon}
                            alt='icon'
                            height={500}
                            width={500}
                            className='w-full aspect-square object-contain'
                        />
                    </div>
                    <div className='pl-3 lg:pl-1'>
                        <h2 className={`lg:text-2xl font-bold ${titleColor}`}>{title}</h2>
                        <p className='pt-4 lg:text-base lg:leading-[26px]'>{description}</p>
                    </div>
                </div>
                <h4 className="lg:text-5xl text-3xl opacity-10 font-bold lg:-mt-6 -mt-3 lg:-ml-5 -ml-1">{step}</h4>
            </div>
        </div>
    );
}
