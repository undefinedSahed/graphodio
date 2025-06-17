import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { Globe } from '../magicui/globe'
import Image from 'next/image'

export default function Banner() {
    return (
        <section className="absolute top-0 w-full flex justify-center items-center bg-[url(/images/banner_bg.png)] bg-center bg-no-repeat bg-cover min-h-screen">
            <div className="container mx-auto lg:mt-10 mt-10">
                <div className="flex flex-col gap-5 lg:flex-row lg:justify-between items-center text-center lg:text-start">
                    <div className="lg:pr-8 lg:w-1/2">
                        <h1 className='text-2xl lg:text-6xl font-bold lg:leading-[76px] pb-5'>
                            Flexible Workspace to Power Your People and Business.
                        </h1>
                        <p className='text-base lg:text-xl font-medium pb-5'>
                            The 3 golden rules professional Digital Marketing Agency don&apos;t want you to know about.
                        </p>
                        <Link href="/contact">
                            <Button size="lg">
                                Get Started
                            </Button>
                        </Link>
                    </div>
                    <div className="relative z-30 flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background px-40 pb-44 md:pb-60">
                        <Image
                            src="/images/logo.png"
                            alt='logo'
                            width={1000}
                            height={1000}
                            className='w-36 object-contain'
                        />
                        <Globe className="lg:top-20 top-5 z-20" />
                        <div className="pointer-events-none absolute -z-20 inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,red,rgba(255,255,255,0))]" />
                    </div>
                </div>
            </div>
        </section>
    )
}
