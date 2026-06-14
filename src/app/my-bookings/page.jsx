import { CancelBooking } from "@/components/CancelBooking";
import { auth } from "@/lib/auth";
import { CalendarDays, DollarSign, Eye, Trash2 } from "lucide-react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

const MyBookingsPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers() 
    });
        const user = session?.user;

    const res = await fetch(`http://localhost:5000/booking/${user?.id}`);
    const bookings = await res.json();
    console.log(bookings);

    return (
        <div className="space-y-5 max-w-6xl mx-auto mt-28">
            <h1 className="text-3xl font-bold text-center mt-24">My Bookings</h1>
            {bookings.map((booking) => (
                <div
                    key={booking._id}
                    className="group flex flex-col md:flex-row overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                    <div className="w-full md:w-72 h-56 md:h-48 flex-shrink-0 overflow-hidden relative">
                        <Image
                            src={booking.imageUrl}
                            alt={booking.facilityType}
                            fill
                            sizes="(max-width: 768px) 100vw, 288px"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>

                    <div className="flex flex-1 flex-col justify-between p-6">
                        <div>
                            <h2 className="text-2xl font-bold text-[oklch(44.6%_0.043_257.281)]">
                                {booking.facilityType}
                            </h2>

                            <div className="mt-3 flex flex-wrap items-center gap-4">
                                <div className="flex items-center gap-1.5">
                                    <DollarSign size={18} className="text-green-600" />
                                    <span className="font-semibold text-green-600">
                                        ${booking.pricePerHour}/hr
                                    </span>
                                </div>

                                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                                    Booked
                                </span>
                            </div>

                            <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                                <CalendarDays size={16} />
                                <span>{booking.bookingDate}</span>
                            </div>
                        </div>

                        <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-4 md:border-t-0 md:pt-0">
                            <Link
                                href={`/bookings/${booking._id}`}
                                className="flex items-center justify-center gap-2 rounded-xl bg-[oklch(44.6%_0.043_257.281)] px-4 py-2.5 text-sm text-white font-medium transition-all hover:opacity-90 shadow-sm"
                            >
                                <Eye size={16} />
                                View Details
                            </Link>
                            <CancelBooking bookingId={booking._id} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MyBookingsPage;