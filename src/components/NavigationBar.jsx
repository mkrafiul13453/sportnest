"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Trophy } from "lucide-react";
import { Avatar, Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";
export default function Navbar() {
    const {
        data: session,
    } = authClient.useSession()
    console.log("Session Data:", session);
    const user = session?.user;
    console.log("Current User:", user);

    const handleLogout = async () => {
        await authClient.signOut();
        toast.success("Logged out successfully!");
        redirect("/login");
    }


    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "All Facilities", path: "/facilities" },
        { name: "My Bookings", path: "/my-bookings" },
        { name: "Add Facility", path: "/add-facilities" },
        { name: "Manage My Facilities", path: "/manage-facilities" },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 px-3 md:px-6 pt-4">
            <nav className="max-w-7xl mx-auto">
                <div className="backdrop-blur-md bg-white/10 border border-white/20 shadow-lg rounded-2xl px-5 py-4">

                    {/* Main Navbar */}
                    <div className="flex items-center justify-between">

                        {/* Left Side */}
                        <div className="flex items-center gap-10">

                            {/* Logo + Project Name */}
                            <Link
                                href="/"
                                className="flex items-center gap-2 group"
                            >
                                <div className="bg-white/20 p-2 rounded-xl border border-white/20 group-hover:scale-110 transition duration-300">
                                    <Trophy className="w-6 h-6 text-black" />
                                </div>

                                <h1 className="text-2xl font-bold text-black tracking-wide">
                                    SportNest
                                </h1>
                            </Link>

                            {/* Desktop Menu */}
                            <ul className="hidden lg:flex items-center gap-6">
                                {navLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.path}
                                            className="relative text-black font-medium transition duration-300 hover:text-cyan-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-300 after:transition-all after:duration-300 hover:after:w-full"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right Side */}
                        <div className="hidden lg:flex items-center gap-4">

                            {
                                user ? <><Button onClick={handleLogout} className="bg-primary text-white">Logout</Button><Link href="/profile"> <Avatar >
                                    <Avatar.Image referrerPolicy="no-referrer" alt={user.name} src={user.image} />
                                    <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
                                </Avatar></Link></> :
                                    <>
                                        <Link
                                            href="/login"
                                            className="px-5 py-2 rounded-xl border border-white/30 text-black font-medium hover:bg-white hover:text-black transition duration-300"
                                        >
                                            Login
                                        </Link>

                                        <Link
                                            href="/signup"
                                        >
                                            <Button className="bg-primary text-white">Registration</Button>
                                        </Link>
                                    </>
                            }
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden text-black"
                        >
                            {isOpen ? (
                                <X className="w-7 h-7" />
                            ) : (
                                <Menu className="w-7 h-7" />
                            )}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isOpen && (
                        <div className="lg:hidden mt-5 border-t border-white/20 pt-5">

                            <ul className="flex flex-col gap-4">
                                {navLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.path}
                                            className="block text-black font-medium hover:text-cyan-300 transition duration-300"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            {/* Mobile Buttons */}
                            <div className="flex flex-col gap-3 mt-5">

                                {
                                    user ? <><Button onClick={handleLogout} className="bg-primary text-white">Logout</Button>  <Link href="/profile"> <Avatar>
                                        <Avatar.Image referrerPolicy="no-referrer" alt={user.name} src={user.image} />
                                        <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
                                    </Avatar></Link></>
                                        :
                                        <>
                                            <Link
                                                href="/login"
                                            >
                                                <Button className="bg-primary text-white" >Login</Button>
                                            </Link>

                                            <Link
                                                href="/signup"
                                            >
                                                <Button className="bg-primary text-white">Registration</Button>
                                            </Link>
                                        </>
                                }
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
}