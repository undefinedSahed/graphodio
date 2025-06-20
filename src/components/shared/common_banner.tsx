import Link from 'next/link'
import React from 'react'

export default function CommonBanner({ title }: { title: string }) {
    return (
        <section className="w-full flex justify-center items-center bg-no-repeat bg-cover h-[50vh] bg-[url(/images/common_banner.png)]">
            <div className="container text-center space-y-3">
                <h2 className='lg:text-5xl text-2xl font-bold pb-2'>{title}</h2>
                <p className='text-lg font-medium'><Link href={`/`}>Home</Link> - <span className='text-red-500'>{title}</span></p>
            </div>
        </section>
    )
}
