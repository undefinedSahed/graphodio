import React from 'react'
import { TbTargetArrow } from 'react-icons/tb'
import { TiGroup } from "react-icons/ti";
import { FaHandsHoldingCircle } from "react-icons/fa6";
import Image from 'next/image';


export default function AboutSection() {
    return (
        <section className="py-8 lg:py-20">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 items-center">
                    <div className="text-center lg:text-start">
                        <div className="text-center flex justify-center lg:justify-start items-center gap-2 lg:pb-4 pb-2">
                            <TbTargetArrow className='lg:h-7 h-5 w-5 lg:w-7  text-red-500' />
                            <span className="lg:text-xl text-base font-semibold text-red-500">About Graphodio</span>
                        </div>
                        <div className='lg:pb-7 pb-5'>
                            <h2 className='lg:text-4xl text-2xl font-bold lg:pb-7 pb-5'>Your Trusted Partners For Best Business</h2>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form, by injected humour, or randomised word which don&apos;t
                                look even sligh believable. If you are going to use a passage.</p>
                        </div>
                        <div className="grid grid-cols-2 items-center shrink-0 gap-5">
                            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start lg:items-start lg:gap-5 gap-1 lg:pr-12">
                                <TiGroup className='lg:h-14 h-10 lg:w-14 w-10 text-red-500 lg:p-3 p-1 bg-white rounded-full shadow-[0_0_20px_rgba(59,130,246,0.3)] shrink-0' />
                                <div className="">
                                    <h4 className='text-xl font-medium lg:pb-2'>Leadership</h4>
                                    <p className='text-[#6B6161] text-base'>Fully committed to the success company</p>
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start lg:items-start lg:gap-5 gap-1 lg:pr-12">
                                <FaHandsHoldingCircle className='lg:h-14 h-10 lg:w-14 w-10 text-red-500 lg:p-3 p-1 bg-white rounded-full shadow-[0_0_20px_rgba(59,130,246,0.3)] shrink-0' />
                                <div className="">
                                    <h4 className='text-xl font-medium lg:pb-2'>Responsibility</h4>
                                    <p className='text-[#6B6161] text-base'>Employees will always be my top priory</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[url(/images/about_section_shape.png)] bg-cover bg-center bg-no-repeat py-16">
                        <Image
                            src="/images/about_section_image.png"
                            alt='About us image'
                            width={1000}
                            height={700}
                            className='w-full aspect-[5/3] object-contain'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
