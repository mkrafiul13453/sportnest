"use client";
import { ArrowRight, DollarSign, MapPin, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const FacilityCard = ({ facility }) => {
    const { _id, facilityType, location, capacity, "Enter your description": description, pricePerHour, imageUrl } = facility;
    return (
        <div
            className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/40 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            style={{
                backgroundColor: "oklch(92.9% 0.013 255.508)",
            }}
        >
            {/* Image */}
            <div className="relative h-56 w-full overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={facilityType}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Facility Type Badge */}
                <div
                    className="absolute top-4 left-4 rounded-full px-4 py-2 text-sm font-semibold text-white"
                    style={{
                        backgroundColor: "oklch(44.6% 0.043 257.281)",
                    }}
                >
                    {facilityType}
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-6">
                {/* Title */}
                <h3
                    className="mb-3 text-xl font-bold"
                    style={{
                        color: "oklch(44.6% 0.043 257.281)",
                    }}
                >
                    {facilityType}
                </h3>

                {/* Description */}
                <p className="mb-5 flex-1 text-lg leading-6 text-gray-600">
                    {description}
                </p>

                {/* Info Section */}
                <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-700">
                        <MapPin size={18} />
                        <span>{location}</span>
                    </div>

                    <div className="flex items-center gap-3 text-gray-700">
                        <DollarSign size={18} />
                        <span>${pricePerHour} / Hour</span>
                    </div>

                    <div className="flex items-center gap-3 text-gray-700">
                        <Users size={18} />
                        <span>{capacity} Players</span>
                    </div>
                </div>

                {/* Button */}
            
                    <Link
                        href={`/facilities/${_id}`}
                        className="mt-6 flex items-center justify-center gap-2 rounded-2xl px-5 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
                        style={{
                            backgroundColor: "oklch(44.6% 0.043 257.281)",
                        }}
                    >
                        Book Now
                        <ArrowRight size={18} />
                    </Link>
                
            </div>
        </div>
    );
};

export default FacilityCard;