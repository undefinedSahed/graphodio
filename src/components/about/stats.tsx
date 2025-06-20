import React from 'react'
import { CheckCircle, Users, Award, Clock } from "lucide-react"


export default function Stats() {
    const stats = [
        { icon: <Users className="w-8 h-8" />, number: "1500+", label: "Happy Clients" },
        { icon: <Award className="w-8 h-8" />, number: "150+", label: "Awards" },
        { icon: <CheckCircle className="w-8 h-8" />, number: "95+", label: "Success Rate" },
        { icon: <Clock className="w-8 h-8" />, number: "120+", label: "Years Experience" },
    ]
    return (
        <section className="pb-6">
            <div className="container">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center bg-gray-300 rounded-xl flex justify-center items-center gap-4 py-5">
                            <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center">
                                {stat.icon}
                            </div>
                            <div className="">
                                <div className="text-2xl lg:text-3xl font-bold mb-1">{stat.number}</div>
                                <div className="text-gray-600">{stat.label}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
