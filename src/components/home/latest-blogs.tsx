import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"

export default function LatestBlogs() {
    const blogs = [
        {
            id: 1,
            title: "Successful business partners having discussing new business",
            excerpt: "There are many variations of passages of Lorem Ipsum available...",
            author: "By Admin",
            date: "Dec 15, 2023",
            image: "/images/about_section_shape.png",
            readTime: "5 min read",
        },
        {
            id: 2,
            title: "Female logo designer working on a her latest connected",
            excerpt: "There are many variations of passages of Lorem Ipsum available...",
            author: "By Admin",
            date: "Dec 12, 2023",
            image: "/images/about_section_shape.png",
            readTime: "3 min read",
        },
        {
            id: 3,
            title: "Staff meeting group a young modern people smart in casual",
            excerpt: "There are many variations of passages of Lorem Ipsum available...",
            author: "By Admin",
            date: "Dec 10, 2023",
            image: "/images/about_section_shape.png",
            readTime: "4 min read",
        },
        {
            id: 4,
            title: "Group of people working business plan in an office",
            excerpt: "There are many variations of passages of Lorem Ipsum available...",
            author: "By Admin",
            date: "Dec 08, 2023",
            image: "/images/about_section_shape.png",
            readTime: "6 min read",
        },
    ]

    return (
        <section className="py-8 lg:py-20">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <div className="flex justify-center items-center gap-2 mb-4">
                        <span className="text-lg font-semibold text-orange-500">Our Blog</span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold">Latest Blogs & Articles</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {blogs.map((blog) => (
                        <div
                            key={blog.id}
                            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="relative">
                                <Image
                                    src={blog.image || "/placeholder.svg"}
                                    alt={blog.title}
                                    width={300}
                                    height={200}
                                    className="w-full h-48 object-cover"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                    <div className="flex items-center gap-1">
                                        <User className="w-4 h-4" />
                                        <span>{blog.author}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        <span>{blog.date}</span>
                                    </div>
                                </div>

                                <h3 className="text-lg font-semibold mb-3 line-clamp-2 hover:text-orange-500 transition-colors">
                                    <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
                                </h3>

                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{blog.excerpt}</p>

                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500">{blog.readTime}</span>
                                    <Link
                                        href={`/blog/${blog.id}`}
                                        className="text-orange-500 hover:text-orange-600 flex items-center gap-1 text-sm font-medium"
                                    >
                                        Read More <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
