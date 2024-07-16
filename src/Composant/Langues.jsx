import React, { useEffect, useState } from 'react'
import { url } from './URL'

export default function Langues() {
    const [langues, setLangues] = useState([])
    async function fetchLangues() {
        const response = await fetch(url + '/langues')
        const data = await response.json()
        setLangues(data)
        console.log(data);
    }
    useEffect(() => {
        fetchLangues();
    }, [])

    return (

        <div className=' rounded-xl h-60'>
            <div className='flex justify-center'>

                <h3 className="bg-slate-400 rounded-full text-center  text-2xl  w-full p-5 border-white shadow-2xl">Langues</h3>
            </div>
            <div className='flex justify-center items-center gap-4 mt-10'>
                {langues && langues.map(item =>
                    <div className='flex flex-row gap-4 ml-10 mt-3' key={item._id} >
                        <h5 className='text-xl'>{item.name}</h5>
                        <h5 className='text-xl'>: {item.level} </h5>

                    </div>
                )}


            </div>
        </div>
    )
} 