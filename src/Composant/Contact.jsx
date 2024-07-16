import { useState, useEffect } from 'react'
import { url } from './URL'

export default function Contact() {

    const [contact, setContact] = useState([]) // oussama il ecrit useState([])

    async function getContact() { // fonction asynchrone
        const response = await fetch(url + '/contact') // on peut mettre directement l'adresse url
        const data = await response.json()
        console.log(data)
        setContact(data);

    }

    useEffect(() => { // on appelle la fonction avec useEffect
        getContact()
    }, []) // pour eviter qu'il appelle plusieurs fois on met un tableau vide et comme ça il appelle une seule fois

    return (
        <>
            <div >
                {contact.length > 0 &&
                    <> <div  >
                        <div className=' flex justify-center'>

                            <h3 className="  rounded-lg text-center bg-[#15616D] text-[#FDFFFF] font-orbitron text-2xl w-1/4 p-5">Contact</h3>
                        </div>
                        <div className='flex  items-center justify-center gap-6 text-xl ml-10 mt-3 text-white'>

                            <div >
                                <h5 className='flex flex-row gap-4 '>Tel : {contact[0].tel}</h5>
                            </div>
                            <div >
                                <h5 className='flex flex-row gap-4 '>Mail : {contact[0].email}</h5>
                            </div>
                            <div >
                                <h5 className='flex flex-row gap-4 '>Adresse : {contact[0].adresse}</h5>
                            </div>
                        </div>
                    </div>
                    </>
                }
            </div >
        </>
    )
}