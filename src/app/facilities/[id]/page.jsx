
import BookingCard from "@/components/BooingCard";
import DeleteModal from "@/components/DeleteModal";
import { EditModal } from "@/components/EditModal";
import { TrashBin } from "@gravity-ui/icons";
import { Button, DateField, Label } from "@heroui/react";
import { ArrowRight, DollarSign, Droplets, HeartPulse, Lock, MapPin, ShowerHead, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaV } from "react-icons/fa6";

const FacilityDetailsPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch(`http://localhost:5000/facility/${id}`);
    const facility = await res.json();
    const amenities = [
        {
            icon: Lock,
            label: "Lockers / Changing Rooms",
        },
        {
            icon: ShowerHead,
            label: "Showers",
        },
        {
            icon: Droplets,
            label: "Water Refill Stations",
        },
        {
            icon: HeartPulse,
            label: "First Aid Kit / AED",
        },
    ];

    return (
        <div
            className="mt-28 group w-full max-w-5xl mx-auto overflow-hidden rounded-3xl border border-gray-200 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            style={{
                backgroundColor: "oklch(92.9% 0.013 255.508)",
            }}
        >
            <div className="grid lg:grid-cols-2 gap-0 min-h-[550px]">
                {/* Image Section */}
                <div className="relative h-[280px] lg:h-full overflow-hidden">
                    <Image
                        src={facility.imageUrl}
                        alt={facility.facilityType}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute top-4 left-4">
                        <span
                            className="px-4 py-2 rounded-full text-sm font-semibold text-white"
                            style={{
                                backgroundColor: "oklch(44.6% 0.043 257.281)",
                            }}
                        >
                            {facility.facilityType}
                        </span>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8 flex flex-col justify-between">
                    <div>
                        {/* Title */}
                        <div className="flex justify-between items-center">
                            <div>
                                <h2
                                    className="text-3xl font-bold mb-4"
                                    style={{
                                        color: "oklch(44.6% 0.043 257.281)",
                                    }}
                                >
                                    {facility.facilityType}
                                </h2>
                            </div>
                            <div className="flex gap-4">
                                <EditModal facility={facility} />
                                <DeleteModal facility={facility} />
                            </div>
                        </div>

                        {/* Info */}
                        <div className="grid sm:grid-cols-3 gap-4 mb-6">
                            <div className="flex items-center gap-2">
                                <MapPin
                                    size={18}
                                    style={{
                                        color: "oklch(44.6% 0.043 257.281)",
                                    }}
                                />
                                <span className="text-gray-700 text-sm">
                                    {facility.location}
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <DollarSign
                                    size={18}
                                    style={{
                                        color: "oklch(44.6% 0.043 257.281)",
                                    }}
                                />
                                <span className="text-gray-700 text-sm">
                                    ${facility.pricePerHour}/hr
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <Users
                                    size={18}
                                    style={{
                                        color: "oklch(44.6% 0.043 257.281)",
                                    }}
                                />
                                <span className="text-gray-700 text-sm">
                                    {facility.capacity} People
                                </span>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="mb-8">
                            <h3
                                className="font-semibold text-lg mb-2"
                                style={{
                                    color: "oklch(44.6% 0.043 257.281)",
                                }}
                            >
                                Description
                            </h3>

                            <p className="text-gray-600 leading-relaxed">
                                {facility["Enter your description"]}
                            </p>
                        </div>

                        {/* Amenities */}
                        <div>
                            <h3
                                className="font-semibold text-lg mb-4"
                                style={{
                                    color: "oklch(44.6% 0.043 257.281)",
                                }}
                            >
                                On-Site Facilities
                            </h3>

                            <div className="grid sm:grid-cols-2 gap-4">
                                {amenities.map((item, index) => {
                                    const Icon = item.icon;

                                    return (
                                        <div
                                            key={index}
                                            className="flex items-center gap-3 rounded-xl border border-gray-200 p-3 bg-white"
                                        >
                                            <div
                                                className="p-2 rounded-lg"
                                                style={{
                                                    backgroundColor:
                                                        "oklch(44.6% 0.043 257.281 / 0.10)",
                                                }}
                                            >
                                                <Icon
                                                    size={18}
                                                    style={{
                                                        color: "oklch(44.6% 0.043 257.281)",
                                                    }}
                                                />
                                            </div>

                                            <span className="text-sm text-gray-700">
                                                {item.label}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <BookingCard facility={facility} />
                </div>
            </div>
        </div>
    );
};

export default FacilityDetailsPage;