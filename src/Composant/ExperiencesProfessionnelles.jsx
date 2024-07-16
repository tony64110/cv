import React, { useEffect, useState } from 'react'
import { url } from './URL'

export default function ExperiencesProfessionnelles() {
    const [experiences, setExperiences] = useState([])
    async function fetchExperiences() {
        const response = await fetch(url + '/experiences')
        const data = await response.json()
        setExperiences(data)
        console.log(data);
    }
    useEffect(() => {
        fetchExperiences();
    }, [])
    return (
        <div className=' h-60'>
            <div className='flex justify-center '>

                <h3 className="bg-slate-400 rounded-full text-center  text-2xl  w-full p-5 border-white shadow-2xl">Expériences professionnelles</h3>
            </div>
            <div className='flex  justify-center items-center gap-10 mt-10' >
                {experiences && experiences.map(item =>
                    <div className='flex flex-col items-center gap-4 ' key={item._id} >
                        <h5 className='text-xl'>Année:{item.annee}</h5>
                        <h5 className='text-xl'>Entreprise: {item.entreprise} </h5>
                        <h5 className='text-xl'>Poste: {item.poste} </h5>

                    </div>
                )}


            </div>
        </div>

    )
}