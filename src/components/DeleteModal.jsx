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

            
        </Modal>
    );
};

export default DeleteModal;