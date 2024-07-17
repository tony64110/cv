import React from 'react'


export default function Presentation() {
    return (
        <div className=' h-[200vh] flex  justify-center z-10'>
            <div className=' bg-[#15616d65] fixed flex flex-col  gap-7  text-white rounded-lg'>

                <div className='flex justify-center items-center'>

                    <img className='w-40 rounded-2xl mt-4' src="./images/image.jpg" alt="" />
                </div>
                <div className='   flex flex-col items-center justify-center'>
                    <div className='flex flex-col gap-5 mb-10'>

                        <h2 className='text-4xl text-center font-sans font-bold '>Anthony Dumartin</h2>
                        <h3 className='text-xl font-sans'>En recherche d'alternance de Développeur Full-Stack</h3>
                    </div>

                    <h5 className='text-xl h-full flex justify-center items-center w-1/2 text-center font-playwrite mb-10'>Actuellement étudiant à La Fabrique Numérique Paloise dans le
                        programme Bootcamp Développeur React JS, Je souhaite intégrer votre équipe en alternance pendant la durée
                        de la formation Développeur Web Full Stack de niveau 2</h5>
                </div>

            </div>
        </div>
    )
}
