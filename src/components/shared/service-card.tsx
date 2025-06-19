import React from 'react'


export default function ServiceCard({ title, description, icon, iconBg }: { title: string, description: string, icon: string, iconBg: string }) {

    return (
        <div className='clip-path-service-shape border shadow-xl rounded-5xl lg:px-8 lg:py-16 text-center'>
            <h2 className='lg:text-2xl font-bold lg:pb-5'>{title}</h2>
            <p className='text-[#6B6161] lg:text-base'>{description}</p>
        </div>
    )
}
