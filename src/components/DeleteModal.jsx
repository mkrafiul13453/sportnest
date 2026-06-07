"use client";
import { TrashBin } from '@gravity-ui/icons';
import { Button, Modal } from '@heroui/react';
import { TriangleAlert } from 'lucide-react';
import { redirect } from 'next/navigation';
import React from 'react';

const DeleteModal = ({ facility }) => {
    const handleDelete = async () => {
        const res = await fetch(`http://localhost:5000/facility/${facility._id}`, {
            method: "DELETE",
        });
        if (res.ok) {
            redirect("/facilities");
        }
    };

    return (
        <Modal>
            <Button variant="danger">
                <TrashBin />
                Delete
            </Button>

            <Modal.Backdrop>
                <Modal.Container placement="center">
                    <Modal.Dialog className="max-w-md rounded-3xl">
                        <Modal.CloseTrigger />

                        {/* Header */}
                        <Modal.Header className="flex flex-col items-center text-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                                <TriangleAlert className="h-8 w-8 text-red-600" />
                            </div>

                            <Modal.Heading className="mt-4 text-2xl font-bold text-gray-900">
                                Delete Facility?
                            </Modal.Heading>

                            <p className="mt-2 text-sm text-gray-500">
                                This action cannot be undone.
                            </p>
                        </Modal.Header>

                        {/* Body */}
                        <Modal.Body className="text-center px-6">
                            <div className="rounded-2xl border border-red-100 bg-red-50 p-4">
                                <p className="text-sm text-gray-600">
                                    You are about to permanently delete
                                </p>

                                <p className="mt-1 font-semibold text-gray-900">
                                    {facility.facilityType}
                                </p>
                            </div>

                            <p className="mt-4 text-sm text-gray-500">
                                All associated booking information and facility details
                                will be removed permanently.
                            </p>
                        </Modal.Body>

                        {/* Footer */}
                        <Modal.Footer className="flex gap-3">
                            <Button
                                slot="close"
                                variant="bordered"
                                className="flex-1 rounded-2xl"
                            >
                                Cancel
                            </Button>

                            <Button
                                color="danger"
                                className="flex-1 rounded-2xl font-semibold"
                                onClick={handleDelete}>
                                Delete Facility
                            </Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default DeleteModal;