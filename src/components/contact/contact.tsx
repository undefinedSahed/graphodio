import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactPage() {
    return (
        <section className="py-8 lg:py-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left side - Contact Form */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl lg:text-3xl font-bold mb-2">Contact With Us</h2>
                        <p className="text-gray-600 mb-8">Send us a message and we&apos;ll respond as soon as possible</p>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Input placeholder="First Name" />
                                <Input placeholder="Last Name" />
                            </div>
                            <Input type="email" placeholder="Email" />
                            <Input placeholder="Subject" />
                            <Textarea placeholder="Your Message" rows={6} />
                            <Button className="w-full bg-gradient-to-r from-[#9f0101] to-[#fa0101] hover:from-[#8a0101] hover:to-[#e10101] text-white py-3">
                                Send Message
                            </Button>
                        </form>
                    </div>

                    {/* Right side - Contact Info */}
                    <div className="bg-blue-500 text-white p-8 rounded-lg relative overflow-hidden">
                        <h2 className="text-2xl lg:text-3xl font-bold mb-8">Need Any Help?</h2>

                        <div className="space-y-6 mb-8">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Phone</h3>
                                    <p className="text-blue-100">+880 321 655 9985</p>
                                    <p className="text-blue-100">+880 321 655 9985</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Email</h3>
                                    <p className="text-blue-100">needhelp@company.com</p>
                                    <p className="text-blue-100">info@company.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Location</h3>
                                    <p className="text-blue-100">4517 Washington Ave. Manchester,</p>
                                    <p className="text-blue-100">Kentucky 39495</p>
                                </div>
                            </div>
                        </div>

                        {/* Team Image */}
                        <div className="relative">
                            <Image
                                src="/images/support.svg"
                                alt="Our team"
                                width={400}
                                height={200}
                                className="w-full h-40 object-cover rounded-lg"
                            />
                        </div>

                        {/* Background decorative elements */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-500 opacity-20 rounded-full translate-y-12 -translate-x-12"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
