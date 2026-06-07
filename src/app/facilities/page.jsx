import FacilityCard from '@/components/FacilityCard';
import React from 'react';

const FacilitiesPage = async () => {
    const res = await fetch("http://localhost:5000/facility");
    const facilities = await res.json();
    console.log(facilities);
    return (
        <div className='max-w-7xl mx-auto'>
            <h1 className="text-3xl font-bold  mt-24 text-center">Your Game Supported by Our Best</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                {facilities.map((facility) => (
                    <FacilityCard key={facility._id} facility={facility} />
                ))}
            </div>
        </div>
    );
};

export default FacilitiesPage;