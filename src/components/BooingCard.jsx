"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Card, DateField, Label } from "@heroui/react";
import { ArrowRight } from "lucide-react";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

export default function BookingCard({ facility }) {

    const {
        data: session,
    } = authClient.useSession()
    // console.log("Session Data:", session);
    const user = session?.user;
    // console.log("Current User:", user);

    const handleBooking = async () => {
        const bookingData = {
            userId: user?.id,
            userImage: user?.image,
            userName: user?.name,
            facilityId: facility._id,
            facilityType: facility.facilityType,
            pricePerHour: facility.pricePerHour,
            imageUrl: facility.imageUrl,
            bookingDate: new Date(), // You would replace this with the actual selected date
        };


        const res = await fetch("http://localhost:5000/booking", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bookingData),
        })
        const result = await res.json();
        toast.success("Booking successful!");
        redirect("/facilities");
        console.log("Booking Response:", result);


        // console.log("Booking Data:", bookingData);
        // Here you would typically send this data to your backend API to create a booking
    }


    return (
        <Card className="mt-8 p-6 rounded-3xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            style={{
                backgroundColor: "oklch(92.9% 0.013 255.508)",
            }}>
            <DateField className="w-[256px] mb-4" name="date">
                <Label className="font-semibold text-lg mb-2"
                    style={{
                        color: "oklch(44.6% 0.043 257.281)",
                    }}>Date</Label>

                <DateField.Group>
                    <DateField.Input>
                        {(segment) => (
                            <DateField.Segment segment={segment} />
                        )}
                    </DateField.Input>
                </DateField.Group>
            </DateField>
            {/* Price section */}
            <div className="mt-8">
                <p className="text-2xl font-bold text-gray-800">
                    ${facility.pricePerHour} <span className=" text-2xl font-normal text-gray-600">Per Hour</span>
                </p>
            </div>
            <div className="mt-8">
                <Button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105"
                    style={{
                        backgroundColor: "oklch(44.6% 0.043 257.281)",
                    }} onClick={handleBooking}>Book Now <ArrowRight size={18} />
                </Button>
            </div>
        </Card>
    );
}