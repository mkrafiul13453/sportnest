"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const reviews = [
    {
        name: "Tanvir Ahmed",
        role: "Cricket Coach",
        venue: "Cricket Hub",
        rating: 4,
        image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
        review:
            "Great practice nets and ample space for team drills. Booking system is very convenient. Highly recommended for serious players.",
    },
    {
        name: "Sadia Rahman",
        role: "Yoga Instructor",
        venue: "Yoga & Wellness Studio",
        rating: 5,
        image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
        review:
            "The studio space is calm, clean and perfectly sized. Natural lighting makes every session feel refreshing.",
    },
    {
        name: "Mehedi Hasan",
        role: "Basketball Player",
        venue: "Indoor Hub",
        rating: 4,
        image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
        review:
            "Solid court with good grip. The locker rooms are clean and the overall vibe is very professional.",
    },
    {
        name: "Asif Zaman",
        role: "Footballer",
        venue: "Arena Complex",
        rating: 5,
        image:
            "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
        review:
            "The turf quality is premium. Played a 5-a-side match under floodlights and it was phenomenal.",
    },
    {
        name: "Nusrat Jahan",
        role: "Badminton Enthusiast",
        venue: "Smash Club",
        rating: 5,
        image:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
        review:
            "Excellent badminton courts with proper wooden flooring. Very well managed staff.",
    },
    {
        name: "Sajid Karim",
        role: "Swimmer",
        venue: "Aqua Splash Center",
        rating: 4,
        image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
        review:
            "Swimming pool water quality is excellent. Trainers are attentive and helpful for beginners.",
    },
    {
        name: "Farhana Islam",
        role: "TT Player",
        venue: "Indoor Sports Arena",
        rating: 5,
        image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80",
        review:
            "Top tier table tennis setup with quality boards and excellent air conditioning.",
    },
];

export default function PlayerReviews() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [cardsPerView, setCardsPerView] = useState(3);

    useEffect(() => {
        const updateCardsPerView = () => {
            if (window.innerWidth < 768) {
                setCardsPerView(1);
            } else if (window.innerWidth < 1024) {
                setCardsPerView(2);
            } else {
                setCardsPerView(3);
            }
        };

        updateCardsPerView();
        window.addEventListener("resize", updateCardsPerView);

        return () => {
            window.removeEventListener("resize", updateCardsPerView);
        };
    }, []);

    const maxIndex = reviews.length - cardsPerView;

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) =>
                prev >= maxIndex ? 0 : prev + 1
            );
        }, 4000);

        return () => clearInterval(interval);
    }, [isPaused, maxIndex]);

    const handleNext = () => {
        setCurrentIndex((prev) =>
            prev >= maxIndex ? 0 : prev + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prev) =>
            prev <= 0 ? maxIndex : prev - 1
        );
    };

    return (
        <section className="py-20 px-4 md:px-8 lg:px-12 bg-[oklch(92.9%_0.013_255.508)]">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
                    <div>
                        <span className="text-xs font-semibold tracking-widest uppercase text-gray-500">
                            WHAT PEOPLE SAY
                        </span>

                        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-[oklch(44.6%_0.043_257.281)]">
                            Player Reviews
                        </h2>

                        <p className="text-gray-600 mt-3">
                            Real experiences from athletes across our facilities.
                        </p>
                    </div>

                    <div className="flex gap-3 mt-6 md:mt-0">
                        <button
                            onClick={handlePrev}
                            className="w-11 h-11 rounded-full bg-white border flex items-center justify-center hover:shadow-md transition"
                        >
                            <ChevronLeft size={18} />
                        </button>

                        <button
                            onClick={handleNext}
                            className="w-11 h-11 rounded-full bg-white border flex items-center justify-center hover:shadow-md transition"
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>

                {/* Slider */}
                <div
                    className="overflow-hidden"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{
                            transform: `translateX(-${currentIndex * (100 / cardsPerView)
                                }%)`,
                        }}
                    >
                        {reviews.map((review, index) => (
                            <div
                                key={index}
                                className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 p-3"
                            >
                                <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 h-full flex flex-col justify-between">
                                    <div>
                                        <div className="flex gap-1 mb-5">
                                            {[...Array(5)].map((_, starIndex) => (
                                                <Star
                                                    key={starIndex}
                                                    size={16}
                                                    className={
                                                        starIndex < review.rating
                                                            ? "fill-amber-400 text-amber-400"
                                                            : "fill-gray-200 text-gray-200"
                                                    }
                                                />
                                            ))}
                                        </div>

                                        <p className="text-gray-600 italic leading-relaxed">
                                            {review.review}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-3 mt-6 pt-5 border-t">
                                        <div className="w-12 h-12 rounded-full overflow-hidden">
                                            <Image
                                                src={review.image}
                                                alt={review.name}
                                                width={48}
                                                height={48}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        <div>
                                            <h4 className="font-semibold text-gray-800">
                                                {review.name}
                                            </h4>

                                            <p className="text-xs text-gray-500">
                                                {review.role} · {review.venue}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-2 mt-10">
                    {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${currentIndex === index
                                    ? "w-6 bg-[oklch(44.6%_0.043_257.281)]"
                                    : "w-2 bg-gray-300"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}