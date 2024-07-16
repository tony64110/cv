import React from 'react'


export default function Presentation() {
    return (
        <div className='bg-cyan-900 h-[200vh] flex  justify-center'>
            <div className='fixed flex flex-col  gap-7  text-white'>

                <div className='flex justify-center items-center'>

                    <img className='w-40 rounded-2xl mt-4' src="./images/image.jpg" alt="" />
                </div>
                <div className='   flex flex-col items-center justify-center'>
                    <div className='flex flex-col gap-5 mb-10'>

                        <h2 className='text-4xl text-center font-anton font-bold '>Anthony Dumartin</h2>
                        <h3 className='text-xl font-workss'>En recherche d'alternance de Développeur Full-Stack</h3>
                    </div>

                    <h5 className='text-xl h-full flex justify-center items-center w-1/2 text-center font-playwrite mb-10'>Actuellement étudiant à La Fabrique Numérique Paloise dans le
                        programme Bootcamp Développeur React JS, Je souhaite intégrer votre équipe en alternance pendant la durée
                        de la formation Développeur Web Full Stack de niveau 2</h5>
                </div>

            </div>
        </div>
    )
}
