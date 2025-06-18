import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { Globe } from '../magicui/globe'
import Image from 'next/image'
import { BoxReveal } from '../magicui/box-reveal'

export default function Banner() {
    return (
        <section className="absolute top-0 w-full flex justify-center items-center bg-[url(/images/banner_bg.png)] bg-center bg-no-repeat bg-cover min-h-screen">
            <div className="container mx-auto lg:mt-10 mt-28">
                <div className="flex flex-col gap-5 lg:flex-row lg:justify-between items-center text-center lg:text-start">
                    <div className="lg:pr-8 lg:w-1/2">
                        <BoxReveal boxColor={"#ca0101"} duration={0.5}>
                            <h1 className='text-2xl lg:text-6xl font-bold lg:leading-[76px] pb-5'>
                                Flexible Workspace to Power Your People and Business.
                            </h1>
                        </BoxReveal>
                        <BoxReveal boxColor={"#ca0101"} duration={0.4}>
                            <p className='text-base lg:text-xl font-medium pb-5'>
                                The 3 golden rules professional Digital Marketing Agency don&apos;t want you to know about.
                            </p>
                        </BoxReveal>

                        <div className="text-center mx-auto w-[150px] lg:w-auto">
                            <BoxReveal boxColor={"#ca0101"} duration={0.2}>
                                <Link href="/contact">
                                    <Button size="lg">
                                        Get Started
                                    </Button>
                                </Link>
                            </BoxReveal>
                        </div>
                    </div>
                    <div className="relative hidden lg:flex size-full max-w-lg lg:h-[500px] items-center justify-center overflow-hidden rounded-lg px-40">
                        <Image
                            src="/images/logo.png"
                            alt='logo'
                            width={1000}
                            height={1000}
                            className='lg:w-64 w-32 h-fit object-cover absolute top-1/2 left-1/2 z-40 -translate-x-1/2 -translate-y-1/2 -mt-5'
                        />
                        <Globe className="lg:-top-5 top-5 z-20 w-full h-full" />
                    </div>
                    <div className="relative  lg:hidden z-30 flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border-none bg-transparent px-40 pb-[350px]">
                        <Image
                            src="/images/logo.png"
                            alt='logo'
                            width={1000}
                            height={1000}
                            className='w-36 object-contain absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30'
                        />
                        <Globe className="-top-7 z-20" />
                    </div>
                </div>
            </div>
        </section>
    )
}