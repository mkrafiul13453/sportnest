"use client";
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import React from 'react';

const ProfilePage = () => {
    const {data:session} = authClient.useSession();
    const userInfo = session?.user;
    const {name, email, image} = userInfo || {};
    return (
        <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 mt-24">
            <div className="flex flex-col items-center p-6">
                <Image
                    src={image || "/default-profile.png"}
                    alt={name || "User Profile"} 
                    width={120}
                    height={120}
                    className="rounded-full object-cover border-4 border-blue-500"
                />

                <h2 className="mt-4 text-2xl font-bold text-gray-800">
                    {name || "User Name"}
                </h2>

                <p className="text-gray-500 text-sm mt-1">
                    {email || "User Email"}
                </p>

                <button className="mt-5 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    View Profile
                </button>
            </div>
        </div>
    );
};

export default ProfilePage;