"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const facilities = [
    {
        title: "Football Turf",
        image:
            "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop",
    },
    {
        title: "Basketball Court",
        image:
            "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200&auto=format&fit=crop",
    },
    {
        title: "Badminton Arena",
        image:
            "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=1200&auto=format&fit=crop",
    },
    {
        title: "Tennis Court",
        image:
            "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=1200&auto=format&fit=crop",
    },
];

export default function SportsShowcase() {
    return (
        <section
            className="py-20 max-w-7xl mx-auto"
            style={{
                backgroundColor: "oklch(92.9% 0.013 255.508)",
            }}
        >
            <div className="container mx-auto px-4 lg:px-8">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <span
                        className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
                        style={{
                            backgroundColor: "oklch(44.6% 0.043 257.281)",
                            color: "white",
                        }}
                    >
                        Premium Facilities
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold max-w-3xl leading-tight">
                        Expert Coaching & Facilities Built for Success.
                    </h2>

                    <p className="mt-4 text-gray-600 max-w-2xl">
                        Discover world-class sports facilities designed for athletes of
                        every level. Book courts, turfs, swimming lanes, and training
                        spaces effortlessly with SportNest.
                    </p>
                </motion.div>

                {/* Grid Layout */}
                <div className="grid lg:grid-cols-12 gap-6">
                    {/* Large Card */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="lg:col-span-6 overflow-hidden rounded-3xl relative min-h-[500px]"
                    >
                        <Image
                            src={facilities[0].image}
                            alt={facilities[0].title}
                            fill
                            className="object-cover"
                        />

                        <div className="absolute inset-0 bg-black/20" />

                        <div className="absolute bottom-6 left-6 text-white">
                            <h3 className="text-3xl font-bold">
                                {facilities[0].title}
                            </h3>
                            <p className="mt-2 text-white/90">
                                Professional-grade football turf for competitive matches.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Section */}
                    <div className="lg:col-span-6 grid grid-cols-2 gap-6">
                        {/* Card 2 */}
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="relative rounded-3xl overflow-hidden h-[240px]"
                        >
                            <Image
                                src={facilities[1].image}
                                alt=""
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/30" />
                            <div className="absolute bottom-4 left-4 text-white">
                                <h4 className="font-semibold text-lg">
                                    Basketball Court
                                </h4>
                            </div>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="relative rounded-3xl overflow-hidden h-[240px]"
                        >
                            <Image
                                src={facilities[2].image}
                                alt=""
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/30" />
                            <div className="absolute bottom-4 left-4 text-white">
                                <h4 className="font-semibold text-lg">
                                    Badminton Arena
                                </h4>
                            </div>
                        </motion.div>

                        {/* Featured Info Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="col-span-2 rounded-3xl p-8 flex flex-col justify-between min-h-[240px] relative overflow-hidden"
                            style={{
                                backgroundColor: "oklch(44.6% 0.043 257.281)",
                                color: "white",
                            }}
                        >
                            <div>
                                <h3 className="text-3xl font-bold mb-4">
                                    All-in-One Athletic Excellence
                                </h3>

                                <p className="text-white/90 max-w-xl">
                                    Book premium sports venues, connect with professional
                                    coaches, and enjoy world-class facilities tailored for
                                    athletes and fitness enthusiasts.
                                </p>
                            </div>

                            <button className="w-fit mt-6 px-6 py-3 rounded-full bg-white text-black font-medium flex items-center gap-2 hover:gap-3 transition-all">
                                Explore Facilities
                                <ArrowRight size={18} />
                            </button>

                            <div className="absolute -bottom-8 -right-8 h-40 w-40 border-[20px] border-white/10 rounded-full" />
                        </motion.div>
                    </div>
                </div>

                {/* Fifth Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.4 }}
                    className="mt-6 rounded-3xl overflow-hidden grid md:grid-cols-2"
                    style={{
                        backgroundColor: "white",
                    }}
                >
                    <div className="relative min-h-[320px]">
                        <Image
                            src={facilities[3].image}
                            alt=""
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <span
                            className="w-fit px-4 py-2 rounded-full text-sm mb-4"
                            style={{
                                backgroundColor: "oklch(44.6% 0.043 257.281)",
                                color: "white",
                            }}
                        >
                            Premium Experience
                        </span>

                        <h3 className="text-3xl md:text-4xl font-bold mb-4">
                            Train Better. Play Harder.
                        </h3>

                        <p className="text-gray-600 mb-6">
                            SportNest provides easy booking, flexible scheduling,
                            professional facilities, and a seamless sports experience
                            for everyone.
                        </p>

                        <button
                            className="w-fit px-6 py-3 rounded-full text-white flex items-center gap-2"
                            style={{
                                backgroundColor: "oklch(44.6% 0.043 257.281)",
                            }}
                        >
                            Get Started
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}