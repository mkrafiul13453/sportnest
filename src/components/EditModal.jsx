"use client";

import {
    Button,
    Input,
    Label,
    Modal,
    TextField,
    TextArea,
    Select,
    ListBox,
    FieldError,
} from "@heroui/react";

import { Building2, Edit, Edit2Icon } from "lucide-react";
import toast from "react-hot-toast";

export function EditModal({ facility }) {
    const { _id, facilityType, location, capacity, "Enter your description": description, pricePerHour, imageUrl, ownerEmail, timeSlots } = facility;
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
        const res = await fetch(`http://localhost:5000/facility/${_id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        const facility = await res.json();
        console.log(facility);
        toast.success("Facility Edit successfully!");
        e.target.reset();
    }

    return (
        <Modal>
            <Button variant="tertiary"> <Edit /> Edit Now</Button>

            <Modal.Backdrop>
                <Modal.Container placement="center">
                    <Modal.Dialog className="max-w-5xl w-full rounded-3xl overflow-hidden">
                        <Modal.CloseTrigger />

                        {/* Header */}
                        <Modal.Header className="text-center flex flex-col items-center pb-2">
                            <Modal.Icon
                                className="text-white"
                                style={{
                                    backgroundColor: "oklch(44.6% 0.043 257.281)",
                                }}
                            >
                                <Building2 className="size-5" />
                            </Modal.Icon>

                            <Modal.Heading
                                className="text-3xl font-bold"
                                style={{
                                    color: "oklch(44.6% 0.043 257.281)",
                                }}
                            >
                                Edit Your Facility
                            </Modal.Heading>

                            <p className="text-gray-600 mt-2">
                                Fill in the details below to add a sports facility.
                            </p>
                        </Modal.Header>

                        {/* Body */}
                        <Modal.Body className="p-6 md:p-8">
                            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Facility Type */}
                                <div>
                                    <Select
                                        defaultValue={facilityType}
                                        name="facilityType"
                                        isRequired
                                        className="w-full"
                                        placeholder="Select Facility Type"
                                    >
                                        <Label>Facility Type</Label>

                                        <Select.Trigger className="w-full rounded-2xl border border-gray-300 px-4 py-3">
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
                                <TextField name="ownerEmail" isRequired defaultValue={ownerEmail}>
                                    <Label>Owner Email</Label>

                                    <Input
                                        type="email"
                                        placeholder="Enter your email address"
                                        className="rounded-2xl"
                                    />

                                    <FieldError />
                                </TextField>

                                {/* Image URL */}
                                <TextField name="imageUrl" isRequired defaultValue={imageUrl}>
                                    <Label>Image URL</Label>

                                    <Input
                                        type="url"
                                        placeholder="Enter image URL"
                                        className="rounded-2xl"
                                    />

                                    <FieldError />
                                </TextField>

                                {/* Location */}
                                <TextField name="location" isRequired defaultValue={location}>
                                    <Label>Location</Label>

                                    <Input
                                        placeholder="Enter facility location"
                                        className="rounded-2xl"
                                    />

                                    <FieldError />
                                </TextField>

                                {/* Price */}
                                <TextField name="pricePerHour" isRequired defaultValue={pricePerHour}>
                                    <Label>Price Per Hour ($)</Label>

                                    <Input
                                        type="number"
                                        placeholder="Enter price"
                                        className="rounded-2xl"
                                    />

                                    <FieldError />
                                </TextField>

                                {/* Capacity */}
                                <TextField name="capacity" isRequired defaultValue={capacity}>
                                    <Label>Capacity</Label>

                                    <Input
                                        type="number"
                                        placeholder="Enter player capacity"
                                        className="rounded-2xl"
                                    />

                                    <FieldError />
                                </TextField>

                                {/* Time Slots */}
                                <div className="md:col-span-2">
                                    <TextField name="timeSlots" isRequired defaultValue={timeSlots}>
                                        <Label>Available Time Slots</Label>

                                        <Input
                                            placeholder="8:00 AM - 10:00 AM, 4:00 PM - 6:00 PM"
                                            className="rounded-2xl"
                                        />

                                        <FieldError />
                                    </TextField>
                                </div>

                                {/* Description */}
                                <div className="md:col-span-2">
                                    <TextField name="description" isRequired defaultValue={description}>
                                        <Label>Description</Label>

                                        <TextArea
                                            placeholder="Provide facility details, amenities, rules and additional information..."
                                            className="min-h-[140px] rounded-3xl"
                                        />

                                        <FieldError />
                                    </TextField>
                                </div>
                                {/* Footer */}
                                <Modal.Footer className="px-8 pb-8">
                                    <Button
                                        slot="close"
                                        variant="secondary"
                                        className="rounded-2xl"
                                    >
                                        Cancel
                                    </Button>

                                    <Button 
                                        type="submit"
                                        className="rounded-2xl text-white px-8"
                                        style={{
                                            backgroundColor: "oklch(44.6% 0.043 257.281)",
                                        }}
                                    >
                                        <Edit2Icon /> Edit Facility
                                    </Button>
                                </Modal.Footer>
                            </form>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}