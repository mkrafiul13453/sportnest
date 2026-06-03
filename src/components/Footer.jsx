"use client";

import Link from "next/link";
import { Trophy, Mail, Phone, MapPin } from "lucide-react";
import {
    FaFacebookF,
    FaInstagram,
    FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
    return (
        <footer
            className="border-t border-gray-300 mt-12"
            style={{
                backgroundColor: "oklch(92.9% 0.013 255.508)",
            }}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Brand Section */}
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-10 h-10 rounded-lg bg-[oklch(44.6%_0.043_257.281)] flex items-center justify-center">
                                <Trophy className="text-white" size={20} />
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900">
                                SportNest
                            </h2>
                        </div>

                        <p className="text-gray-700 text-sm leading-relaxed max-w-xs">
                            Book premium sports facilities anytime. Discover football turfs,
                            badminton courts, tennis courts, swimming lanes, and more in just
                            a few clicks.
                        </p>
                    </div>

                    {/* Explore */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3 text-gray-900">
                            Explore
                        </h3>

                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    href="/"
                                    className="text-gray-700 hover:text-[oklch(44.6%_0.043_257.281)] transition duration-300"
                                    >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/facilities"
                                    className="text-gray-700 hover:text-[oklch(44.6%_0.043_257.281)] transition duration-300"
                                >
                                    All Facilities
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/my-bookings"
                                    className="text-gray-700 hover:text-[oklch(44.6%_0.043_257.281)] transition duration-300"
                                >
                                    My Bookings
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/add-facility"
                                    className="text-gray-700 hover:text-[oklch(44.6%_0.043_257.281)] transition duration-300"
                                >
                                    Add Facility
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3 text-gray-900">
                            Contact
                        </h3>

                        <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-3 text-gray-700">
                                <Mail size={16} />
                                <span>hello@sportnest.com</span>
                            </div>

                            <div className="flex items-center gap-3 text-gray-700">
                                <Phone size={16} />
                                <span>+880 1234-567890</span>
                            </div>

                            <div className="flex items-center gap-3 text-gray-700">
                                <MapPin size={16} />
                                <span>Dhaka, Bangladesh</span>
                            </div>
                        </div>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-900">
                            Follow Us
                        </h3>

                        <div className="flex gap-3">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[oklch(44.6%_0.043_257.281)] hover:text-white hover:border-[oklch(44.6%_0.043_257.281)] transition-all duration-300"
                            >
                                <FaFacebookF size={16} />
                            </a>

                            <a
                                href="#"
                                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[oklch(44.6%_0.043_257.281)] hover:text-white hover:border-[oklch(44.6%_0.043_257.281)] transition-all duration-300"
                            >
                                <FaInstagram size={16} />
                            </a>

                            <a
                                href="#"
                                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[oklch(44.6%_0.043_257.281)] hover:text-white hover:border-[oklch(44.6%_0.043_257.281)] transition-all duration-300"
                            >
                                <FaXTwitter size={16} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-300 py-4">
                <p className="text-center text-gray-700 text-xs md:text-sm">
                    © {new Date().getFullYear()} SportNest. All rights reserved.
                </p>
            </div>
        </footer>
    );
}