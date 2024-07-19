import React from 'react';

export default function Nav() {
    return (
        <div>
            <div className='flex justify-between items-center z-10 h-16 bg-[#15616D] p-4 sm:p-6 md:p-8'>
                <div className='font-DM text-2xl font-bold z-10 text-[#FDFFFF]'>
                    Portfolio
                </div>
                <a href="http://localhost:3000/admin" className='z-10 text-[#FDFFFF]'>
                    <button className="btn btn-outline btn-info font-mono">Login</button>
                </a>
                <a href="http://localhost:3000/contact" className='z-10 text-[#FDFFFF]'>
                    <button className="btn btn-outline btn-info font-mono">Contact</button>
                </a>

            </div>
        </div>
    );
}
