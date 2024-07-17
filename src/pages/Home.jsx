import React from 'react'
import Cenntredinterets from '../Composant/Cenntredinterets';
import Competences from '../Composant/Competences';
import Contact from '../Composant/Contact';
import ExperiencesProfessionnelles from '../Composant/ExperiencesProfessionnelles';
import Langues from '../Composant/Langues';
import Presentation from '../Composant/Presentation';
import Formation from '../Composant/Formations';
import Nav from '../Composant/Nav'
import Projet from '../Composant/Project';
import ParticlesComponent from '../Composant/particles';

export default function Home() {
    return (
        <div className="App bg-slate-100 z-10  ">
            <header className='z-10'>
                <Nav />
            </header>
            <ParticlesComponent  />
            <main className='z-10 flex justify-center items-center flex-col '>
                <div>

                    <Presentation />
                </div>
                <div className='w-2/3  justify-center items-center'>

                    <div className='flex  flex-col  mt-10 z-10 ' >
                        <div className='justify-center items-center mb-10 h-96 rounded-xl z-10  '>
                            <div className='flex justify-center '>

                                <Competences  />
                            </div>
                            <div className='flex justify-center gap-40 items-center'>
                                <Langues />

                                <Cenntredinterets />
                            </div>
                        </div>
                        <div className='flex justify-around items-center mb-10 h-96 rounded-xl z-10 '>
                            <ExperiencesProfessionnelles />
                        </div>
                        <div className='flex justify-center  z-10 '>
                            <Formation />
                        </div>
                        <div className='flex flex-col justify-around mb-60 gap-10 z-10 '>

                        </div>
                        <div className='flex justify-center z-10 '>
                            <Projet />
                        </div>
                    </div>
                </div>
            </main>
            <footer className='bg-slate-600 h-44'>
                <Contact />

            </footer>

            {/* </html > */}
        </div >

    )
}
