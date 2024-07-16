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

export default function Home() {
    return (
        <div className="App bg-slate-100 ">
            {/* <html data-theme="garden"> */}
            <header>
                <Nav />
            </header>
            <main className='flex '>
                <div className='w-1/3'>

                    <Presentation />
                </div>
                <div className='w-2/3'>

                    <div className='flex flex-col mt-10' >
                        <div className=' mb-10 h-96 rounded-xl '>
                            <div className='flex justify-center '>

                                <Competences />
                            </div>
                            <div className='flex justify-around items-center'>
                                <Langues />

                                <Cenntredinterets />
                            </div>
                        </div>
                        <div className='flex justify-around items-center mb-10 h-96 rounded-xl'>
                            <ExperiencesProfessionnelles />
                        </div>
                        <div className='flex justify-center '>
                            <Formation />
                        </div>
                        <div className='flex flex-col justify-around mb-60 gap-10'>

                        </div>
                        <div>
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
