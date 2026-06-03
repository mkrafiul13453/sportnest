"use client";

import { motion } from "framer-motion";
import {
    FaSearch,
    FaCalendarAlt,
    FaFutbol,
} from "react-icons/fa";

const steps = [
    {
        id: 1,
        title: "Browse",
        description:
            "Explore premium sports facilities by sport, location, and pricing to find your perfect venue.",
        icon: FaSearch,
    },
    {
        id: 2,
        title: "Pick a Slot",
        description:
            "Choose your preferred time from real-time availability and secure your booking instantly.",
        icon: FaCalendarAlt,
    },
    {
        id: 3,
        title: "Play",
        description:
            "Receive instant confirmation and enjoy a seamless sports experience without any hassle.",
        icon: FaFutbol,
    },
];

export default function BookingSteps() {
    return (
        <section
            className="py-24"
            style={{
                backgroundColor: "oklch(92.9% 0.013 255.508)",
            }}
        >
            <div className="max-w-7xl mx-auto px-6">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2
                        className="text-4xl md:text-5xl font-bold mb-4"
                        style={{
                            color: "oklch(27.8% 0.033 256.848)",
                        }}
                    >
                        Book in Three Simple Steps
                    </h2>

                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Reserve your favorite sports facility in less than a minute.
                        Fast, secure, and hassle-free booking.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.2,
                                }}
                                whileHover={{
                                    y: -10,
                                }}
                                className="group bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300"
                            >
                                {/* Icon */}
                                <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Icon
                                        size={28}
                                        className="text-[oklch(44.6%_0.043_257.281)]"
                                    />
                                </div>

                                {/* Number */}
                                <span className="text-sm font-semibold text-gray-400">
                                    STEP {step.id}
                                </span>

                                {/* Title */}
                                <h3 className="text-3xl font-bold mt-2 mb-4 text-gray-800">
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 leading-8">
                                    {step.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}