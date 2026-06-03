"use client";

import { motion } from "framer-motion";
import { Star, Trophy, Dumbbell, Volleyball, Goal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-14">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=2070&auto=format&fit=crop"
                    alt="Badminton Players"
                    fill
                    priority
                    className="object-cover"
                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Floating Sports Icons */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 8, 0],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                }}
                className="absolute top-24 left-10 hidden lg:flex"
            >
                <Trophy className="w-12 h-12 text-white/40" />
            </motion.div>

            <motion.div
                animate={{
                    y: [0, 20, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                }}
                className="absolute top-40 right-12 hidden lg:flex"
            >
                <Volleyball className="w-12 h-12 text-white/40" />
            </motion.div>

            <motion.div
                animate={{
                    y: [0, -15, 0],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                }}
                className="absolute bottom-32 left-20 hidden lg:flex"
            >
                <Goal className="w-12 h-12 text-white/40" />
            </motion.div>

            <motion.div
                animate={{
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                }}
                className="absolute bottom-20 right-20 hidden lg:flex"
            >
                <Dumbbell className="w-12 h-12 text-white/40" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 flex flex-col items-center justify-center text-center">
                <div className="max-w-4xl mx-auto">

                    {/* Rating Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6"
                    >
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <span className="text-white font-medium">
                            Rated 4.9 by 10,000+ Sports Enthusiasts
                        </span>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2,
                        }}
                        className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight"
                    >
                        Book Premium{" "}
                        <span className="block text-[oklch(75%_0.08_257)]">
                            Facilities Anytime
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.4,
                        }}
                        className="mt-6 text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl mx-auto"
                    >
                        Discover and reserve premium sports facilities with ease.
                        From football turfs and badminton courts to tennis courts
                        and swimming lanes.
                    </motion.p>

                    {/* Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.6,
                        }}
                        className="mt-8"
                    >
                        <Link href="/facilities">
                            <button
                                className="
                                px-8 py-4
                                rounded-xl
                                text-white
                                font-semibold
                                text-lg
                                bg-[oklch(44.6%_0.043_257.281)]
                                hover:scale-105
                                hover:shadow-2xl
                                transition-all
                                duration-300
                              "
                            >
                                Explore Facilities
                            </button>
                        </Link>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            delay: 1,
                        }}
                        className="mt-12 grid grid-cols-3 gap-4 max-w-xl mx-auto"
                    >
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                            <h3 className="text-2xl font-bold text-white">500+</h3>
                            <p className="text-slate-300 text-sm">Sports Venues</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                            <h3 className="text-2xl font-bold text-white">10K+</h3>
                            <p className="text-slate-300 text-sm">Bookings</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                            <h3 className="text-2xl font-bold text-white">4.9★</h3>
                            <p className="text-slate-300 text-sm">User Rating</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}