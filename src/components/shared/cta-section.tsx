import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CTASection() {
    return (
        <section className="py-16 lg:py-24 bg-gray-900 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full opacity-10 -translate-x-32 -translate-y-32"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full opacity-10 translate-x-48 translate-y-48"></div>
            <div className="absolute top-1/2 right-0 w-32 h-32 bg-blue-400 rounded-full opacity-20 translate-x-16"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center">
                    <div className="flex justify-center items-center gap-2 mb-6">
                        <span className="text-lg font-semibold text-orange-500">Let&apos;s Support</span>
                    </div>

                    <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 max-w-4xl mx-auto leading-tight">
                        You need our support to have any projects?
                    </h2>

                    <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
                        Enthusiastically architect corporate metrics via enterprise methodologies. Progressively extend distinctive
                        process improvements rather than parallel channels.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button className="bg-gradient-to-r from-[#9f0101] to-[#fa0101] hover:from-[#8a0101] hover:to-[#e10101] text-white px-8 py-3 text-lg">
                            Get Free Quotation
                        </Button>
                        <Link href='/contact'>
                            <Button
                                variant="outline"
                                className="border-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg"
                            >
                                Contact For Us
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
