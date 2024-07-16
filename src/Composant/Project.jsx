import React, { useEffect, useState } from 'react'
import { url } from './URL'
export default function Projet() {

    const [projet, setProjet] = useState([])

    async function fetchProjet() {
        const response = await fetch(url + '/projets')

        const data = await response.json()
        console.log(data);
        setProjet(data)

    }
    useEffect(() => {
        fetchProjet();
    }, [])


    return (
        <div className=' h-60'>
            <div className='flex justify-center '>

                <h3 className="bg-slate-400 rounded-full text-center  text-2xl  w-full p-5 border-white shadow-2xl">Projets</h3>

            </div>
            <div className='flex flex-row  gap-4'>
                {projet && projet.map(item =>
                    <div className='flex flex-col gap-4 ml-10 mt-3' >
                        <h5 className='text-xl'>{item.link} </h5>
                    </div>)}
            </div>
        </div>
    )
}
