import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, User, Search, Play } from "lucide-react"

export default function BlogDetails() {
    const categories = [
        { name: "Business Planning", count: 15 },
        { name: "Financial Management", count: 10 },
        { name: "IT Consultancy", count: 8 },
        { name: "Digital Analysis", count: 12 },
        { name: "Business Development", count: 6 },
    ]

    const recentNews = [
        {
            title: "Successful business partners having discussing new business",
            date: "Dec 15, 2023",
        },
        {
            title: "Creating designer product out service oriented",
            date: "Dec 12, 2023",
        },
        {
            title: "First view of a businessman in a suit and tie",
            date: "Dec 10, 2023",
        },
    ]

    const popularTags = ["Agency", "Business", "Technology", "Development", "Finance", "Banking"]

    return (
        <section className="py-8 lg:py-20">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12 py-16 bg-gray-200 rounded-lg">
                    <div className="flex justify-center items-center gap-2 mb-4">
                        <span className="text-lg font-semibold text-orange-500">Blog Details</span>
                    </div>
                    <h1 className="text-3xl lg:text-4xl font-bold">Our Latest News & Updates</h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Featured Image */}
                        <div className="mb-8">
                            <Image
                                src="/images/about_section_shape.png"
                                alt="Blog post featured image"
                                width={800}
                                height={400}
                                className="w-full h-64 lg:h-80 object-cover rounded-lg"
                            />
                        </div>

                        {/* Post Meta */}
                        <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Business Planning</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>Dec 15, 2023</span>
                            </div>
                            <span>💬 100 views</span>
                        </div>

                        {/* Post Title */}
                        <h1 className="text-3xl lg:text-4xl font-bold mb-6">
                            Staff meeting group a young modern people smart in casual
                        </h1>

                        {/* Post Content */}
                        <div className="prose max-w-none mb-8">
                            <p className="text-gray-600 leading-relaxed mb-6">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly
                                believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t anything
                                embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat
                                predefined chunks as necessary, making this the first true generator on the Internet.
                            </p>

                            <blockquote className="border-l-4 border-orange-500 pl-6 my-8 italic text-lg text-gray-700">
                                &quot;There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly
                                believable.&quot;
                            </blockquote>

                            <p className="text-gray-600 leading-relaxed mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                ex ea commodo consequat.
                            </p>
                        </div>

                        {/* Investment Management Team Section */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold mb-6">Let our investment management team</h2>
                            <p className="text-gray-600 mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                            <span>Business Oriented Program Daily</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                            <span>Customer Oriented Program Daily</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                            <span>The ability to turnaround consulting</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                            <span>Training Service Systems</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <Image
                                        src="/images/about_section_shape.png"
                                        alt="Investment team"
                                        width={300}
                                        height={200}
                                        className="w-full h-40 object-cover rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Video Section */}
                        <div className="mb-8">
                            <div className="relative bg-gray-200 rounded-lg overflow-hidden h-64">
                                <Image
                                    src="/images/about_section_shape.png"
                                    alt="Video thumbnail"
                                    width={800}
                                    height={300}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
                                        <Play className="w-6 h-6 text-gray-800 ml-1" />
                                    </button>
                                </div>
                            </div>
                            <p className="text-gray-600 mt-4 text-sm">
                                You can use our services to lorem ipsum is simply free text used by copytyping refreshing. Neque porro
                                est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt
                                explicabo.
                            </p>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        {/* Search */}
                        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
                            <h3 className="text-xl font-bold mb-4">Search</h3>
                            <div className="relative">
                                <Input placeholder="Search..." className="pr-12" />
                                <Button
                                    size="sm"
                                    className="absolute right-1 top-1 bg-gradient-to-r from-[#9f0101] to-[#fa0101] hover:from-[#8a0101] hover:to-[#e10101]"
                                >
                                    <Search className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>

                        {/* Categories */}
                        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
                            <h3 className="text-xl font-bold mb-4">Categories</h3>
                            <div className="space-y-3">
                                {categories.map((category, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
                                    >
                                        <span className="font-medium">{category.name}</span>
                                        <span className="text-sm text-gray-500">({category.count})</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Recent News */}
                        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
                            <h3 className="text-xl font-bold mb-4">Recent News</h3>
                            <div className="space-y-4">
                                {recentNews.map((news, index) => (
                                    <div key={index} className="flex gap-4">
                                        <Image
                                            src="/images/about_section_shape.png"
                                            alt={news.title}
                                            width={80}
                                            height={60}
                                            className="w-20 h-15 object-cover rounded flex-shrink-0"
                                        />
                                        <div>
                                            <h4 className="font-medium text-sm mb-2 line-clamp-2 hover:text-orange-500 cursor-pointer">
                                                {news.title}
                                            </h4>
                                            <p className="text-xs text-gray-500">{news.date}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Popular Tags */}
                        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
                            <h3 className="text-xl font-bold mb-4">Popular Tags</h3>
                            <div className="flex flex-wrap gap-2">
                                {popularTags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-gray-100 hover:bg-orange-500 hover:text-white rounded-full text-sm cursor-pointer transition-colors"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Need Help */}
                        <div className="bg-gray-800 text-white p-6 rounded-lg">
                            <h3 className="text-xl font-bold mb-4">Need Help</h3>
                            <h4 className="text-lg font-semibold mb-4">Help to Create Great Business Agency Online</h4>
                            <p className="text-sm text-gray-300 mb-6">
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </p>
                            <Button className="bg-gradient-to-r from-[#9f0101] to-[#fa0101] hover:from-[#8a0101] hover:to-[#e10101] text-white">
                                CONTACT US
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
