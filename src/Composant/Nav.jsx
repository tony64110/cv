import React from 'react'

export default function Nav() {
    return (
        <div>
            <div className='flex justify-between items-center bg-white h-16'>
                <div className='font-DM text-2xl font-bold'>
                    Portfolio
                </div>

                <a href="http://localhost:3000/admin">
                    <button className="btn btn-outline btn-info">Login</button></a>
            </div>
        </div>
    )
}

