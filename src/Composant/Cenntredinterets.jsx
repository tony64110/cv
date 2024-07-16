import React, { useEffect, useState } from 'react'
import { url } from './URL'

export default function Cenntredinterets() {

    const [interets, setInterets] = useState([])

    async function fetchInterets() {
        const response = await fetch(url + '/centredinteret')

        const data = await response.json()
        setInterets(data)

    }
    useEffect(() => {
        fetchInterets();
    }, [])


    return (


        <div className=' rounded-xl h-60'>
            <div className='flex justify-center '>

                <h3 className="bg-[#15616D] text-[#FDFFFF] font-orbitron rounded-full text-center  text-3xl  w-full p-5 border-white shadow-2xl">Centre d'intérêts</h3>
            </div>

            <div className='flex justify-center items-center gap-4 mt-10'>

                {interets && interets.map(item =>
                    <div className='flex flex-col gap-4 ml-10 mt-3' key={item._id}>
                        <h5 className='text-xl  text-[#FDFFFF] font-orbitronl'>{item.activite} </h5>
                        {/* <p>{item._id} </p> */}
                    </div>)}
            </div>

        </div>

    )
}
