import BlogDetails from '@/components/blog/blog-details'
import CommonBanner from '@/components/shared/common_banner'
import React from 'react'

export default function BlogInfo() {
  return (
    <main>
        <CommonBanner title='Blog Details'/>
        <BlogDetails />
    </main>
  )
}
