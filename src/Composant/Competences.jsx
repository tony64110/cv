import React, { useEffect, useState } from 'react'
import { url } from './URL'
export default function Competences() {

    const [competences, setCompetences] = useState([])

    async function fetchCompetence() {
        const response = await fetch(url + '/competence')

        const data = await response.json()
        setCompetences(data)

    }
    useEffect(() => {
        fetchCompetence();
    }, [])


    return (
        <div className='  rounded-xl h-60 w-2/3'>
            <div className='flex justify-center '>

                <h3 className="bg-[#15616D] text-[#FDFFFF] font-orbitron rounded-full text-center  text-3xl  w-full p-5  shadow-2xl">Compétences</h3>

            </div>
            <div className='flex justify-center items-center gap-4 mt-10'>
                {competences && competences.map(item =>
                    <div className='flex  gap-4 ' >
                        <h5 className='text-xl  text-[#FDFFFF] font-orbitron'>{item.skill} </h5>
                    </div>)}
            </div>
        </div>
    )
}
