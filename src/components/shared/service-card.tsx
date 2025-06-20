import Image, { StaticImageData } from 'next/image'
import React from 'react'


export default function ServiceCard({ title, description, icon }: { title: string, description: string, icon: StaticImageData | string }) {

    return (
        <div className='relative group cursor-default rounded-5xl lg:px-12 px-4 lg:py-16 py-8 text-center lg:bg-[url(/images/front.png)] lg:bg-center lg:bg-no-repeat lg:bg-contain shadow-[0px_0px_15px_-9px_#ff0000] lg:shadow-none rounded-2xl lg:rounded-none'>
            <div className="absolute hidden lg:block w-full scale-50 duration-500 ease-in-out group-hover:scale-105 h-full top-0 left-0 -z-10">
                <Image
                    src='/images/back.png'
                    alt='icon'
                    width={1000}
                    height={1000}
                    className='w-full h-full'
                />
            </div>
            <div className="flex justify-center">
                <div className="lg:w-20 w-16 lg:h-20 h-16 rounded-full flex justify-center items-center lg:mb-6 mb-2 bg-gradient-to-r from-[#9f0101] to-[#fa0101] lg:bg-[#3661FC] lg:group-hover:bg-gradient-to-r lg:group-hover:from-[#9f0101] lg:group-hover:to-[#fa0101] transition-all duration-300">
                    <Image
                        src={icon}
                        alt='icon'
                        width={100}
                        height={100}
                        className={`lg:h-7 h-6 lg:w-7 w-6 object-contain`}
                    />
                </div>
            </div>
            <h2 className='lg:text-2xl text-xl font-bold lg:pb-5 pb-2'>{title}</h2>
            <p className='text-[#6B6161] lg:text-base'>{description}</p>
        </div>
    )
}
