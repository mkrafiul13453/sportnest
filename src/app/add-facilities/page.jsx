"use client";
import { Button, FieldError, Input, Label, ListBox, Select, TextArea, TextField } from '@heroui/react';
import { redirect } from 'next/dist/server/api-utils';
import React from 'react';
import toast from 'react-hot-toast';

const AddFacilitiesPage = () => {
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
        const res =await fetch("http://localhost:5000/facility", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        const facility = await res.json();
        console.log(facility);
        // alert("Facility added successfully!");
        toast.success("Facility added successfully!");
        e.target.reset();
    }
    return (
        <div className="max-w-4xl mx-auto px-4 py-8 mt-20">
            <div
                className="bg-white rounded-3xl shadow-xl border border-gray-200 p-6 md:p-10"
                style={{
                    backgroundColor: "oklch(98% 0.005 255)",
                }}
            >
                {/* Header */}
                <div className="mb-8 text-center">
                    <h2
                        className="text-3xl font-bold"
                        style={{ color: "oklch(44.6% 0.043 257.281)" }}
                    >
                        Add New Facility
                    </h2>
                    <p className="text-gray-600 mt-2">
                        Fill in the details below to add a sports facility.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {/* Facility Type */}
                    <div>
                        <Select
                            name="facilityType"
                            isRequired
                            className="w-full"
                            placeholder="Select Facility Type"
                        >
                            <Label>Facility Type</Label>

                            <Select.Trigger className="w-full rounded-2xl border border-gray-300 px-4 py-3 hover:border-gray-500 transition-all">
                                <Select.Value />
                                <Select.Indicator />
                            </Select.Trigger>

                            <Select.Popover>
                                <ListBox>
                                    <ListBox.Item id="Football Turf">
                                        Football Turf
                                    </ListBox.Item>

                                    <ListBox.Item id="Badminton Court">
                                        Badminton Court
                                    </ListBox.Item>

                                    <ListBox.Item id="Tennis Court">
                                        Tennis Court
                                    </ListBox.Item>

                                    <ListBox.Item id="Basketball Court">
                                        Basketball Court
                                    </ListBox.Item>

                                    <ListBox.Item id="Swimming Pool">
                                        Swimming Pool
                                    </ListBox.Item>

                                    <ListBox.Item id="Cricket Ground">
                                        Cricket Ground
                                    </ListBox.Item>
                                </ListBox>
                            </Select.Popover>
                        </Select>
                    </div>

                    {/* Owner Email */}
                    <TextField name="ownerEmail" isRequired>
                        <Label>Owner Email</Label>

                        <Input
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full rounded-2xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />

                        <FieldError />
                    </TextField>

                    {/* Image Upload */}
                    <TextField name="imageUrl" isRequired>
                        <Label>Image URL (ImgBB/PostImage)</Label>

                        <Input
                            type="url"
                            placeholder="Enter your email URL"
                            className="w-full rounded-2xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />

                        <FieldError />
                    </TextField>

                    {/* Location */}
                    <TextField name="location" isRequired>
                        <Label>Location</Label>

                        <Input
                            placeholder="Enter your location"
                            className="w-full rounded-2xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />

                        <FieldError />
                    </TextField>

                    {/* Price Per Hour */}
                    <TextField name="pricePerHour" isRequired>
                        <Label>Price Per Hour ($)</Label>

                        <Input
                            type="number"
                            placeholder="Enter the price"
                            className="w-full rounded-2xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />

                        <FieldError />
                    </TextField>

                    {/* Capacity */}
                    <TextField name="capacity" isRequired>
                        <Label>Capacity</Label>

                        <Input
                            type="number"
                            placeholder="Enter player capacity"
                            className="w-full rounded-2xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />

                        <FieldError />
                    </TextField>

                    {/* Available Time Slots */}
                    <div className="md:col-span-2">
                        <TextField name="timeSlots" isRequired>
                            <Label>Available Time Slots</Label>

                            <Input
                                placeholder="8:00 AM - 10:00 AM, 4:00 PM - 6:00 PM"
                                className="w-full rounded-2xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            />

                            <FieldError />
                        </TextField>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2">
                        <TextField name="Enter your description" isRequired>
                            <Label>Description</Label>

                            <TextArea
                                placeholder="Provide facility details, amenities, rules, and additional information..."
                                className="w-full min-h-[140px] rounded-3xl border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            />

                            <FieldError />
                        </TextField>
                    </div>

                    {/* Submit Button */}
                    <div className="md:col-span-2 pt-4">
                        <Button
                            type="submit"
                            // isLoading={isPending}
                            className="w-full py-4 rounded-2xl font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                            style={{
                                backgroundColor: "oklch(44.6% 0.043 257.281)",
                            }}
                        >
                            Add Facility
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddFacilitiesPage;