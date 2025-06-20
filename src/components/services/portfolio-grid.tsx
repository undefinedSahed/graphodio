import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function PortfolioGrid() {
    const portfolioItems = [
        {
            id: 1,
            title: "Monthly Design Magazine",
            category: "Print Media",
            image: "/images/about_section_shape.png",
        },
        {
            id: 2,
            title: "Creative Web Design",
            category: "Web Design",
            image: "/images/about_section_shape.png",
        },
        {
            id: 3,
            title: "Brand Identity Design",
            category: "Branding",
            image: "/images/about_section_shape.png",
        },
        {
            id: 4,
            title: "Mobile App Interface",
            category: "App Design",
            image: "/images/about_section_shape.png",
        },
        {
            id: 5,
            title: "Digital Marketing Campaign",
            category: "Marketing",
            image: "/images/about_section_shape.png",
        },
        {
            id: 6,
            title: "E-commerce Platform",
            category: "Web Development",
            image: "/images/about_section_shape.png",
        },
        {
            id: 7,
            title: "Social Media Graphics",
            category: "Social Media",
            image: "/images/about_section_shape.png",
        },
        {
            id: 8,
            title: "Corporate Website",
            category: "Web Design",
            image: "/images/about_section_shape.png",
        },
        {
            id: 9,
            title: "Logo Design Collection",
            category: "Branding",
            image: "/images/about_section_shape.png",
        },
    ]

    return (
        <section className="py-8 lg:py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="flex justify-center items-center gap-2 mb-4">
                        <span className="text-lg font-semibold text-orange-500">Our Portfolio</span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold">Our Impressive Portfolio</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {portfolioItems.map((item) => (
                        <div
                            key={item.id}
                            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <Image
                                src={item.image || "/placeholder.svg"}
                                alt={item.title}
                                width={400}
                                height={300}
                                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-4 left-4 text-white">
                                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                                    <p className="text-sm opacity-80">{item.category}</p>
                                </div>
                            </div>
                            {item.id === 1 && (
                                <div className="absolute bottom-4 right-4">
                                    <div className="w-8 h-8 bg-gradient-to-r from-[#9f0101] to-[#fa0101] rounded-full flex items-center justify-center">
                                        <span className="text-white text-xs">→</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Button className="bg-gradient-to-r from-[#9f0101] to-[#fa0101] hover:from-[#8a0101] hover:to-[#e10101] text-white px-8 py-3">
                        View More Projects
                    </Button>
                </div>
            </div>
        </section>
    )
}
