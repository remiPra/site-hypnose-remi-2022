import Link from 'next/link'
import React from 'react'
import { useDispatch } from 'react-redux'
import { menuTrue } from '../../featured/basketSlice'
import ComponenthDeuxTraitBleu from '../../component/ComponenthDeuxTraitBleu' 

function ContactComponentCard() {
    const dispatch = useDispatch()
    return (
        <section className="section1 p-5 lg:px-[100px] lg:py-[70px] mb-[70px]" >
           
            <ComponenthDeuxTraitBleu title="Venez à bout de vos troubles grâce à l’hypnose" />

            <div className='flex flex-wrap justify-center'>
                {[
                 
                    {
                        title: "Séance d'hypnose au Cabinet à Toulouse",
                        tarif: 'Tarif : 50 euros',
                        description: "la séance peut durer d 1h a 1h30 uniquement sur rendez vous",

                    },
                    {
                        title: "Séance d'hypnose en télé Consultation",
                        tarif: 'Tarif : 50 euros',
                        description: "la séance peut durer d 1h a 1h30 uniquement sur rendez vous",

                    }
                ].map(((el, index) => (
                    <div key={index} className="m-6 p-6 min-w-[250px] bg-white rounded-lg  w-[300px] border-gray-200 shadow-[#6b89c9] shadow-2xl dark:bg-gray-800 dark:border-gray-700">
                        <h3  className="text-[25px] text-[#decb8c] mb-2 text-2xl font-bold tracking-tight dark:text-white">{el.title}</h3>
                        <h4 className='text-[#6b89c9]'>{el.tarif}</h4>
                        <p className="mb-3 font-normal text-[#6b89c9] dark:text-gray-400">la séance peut durer d 1h a 1h30 uniquement sur rendez vous </p>
                      
                            <a onClick={()=>dispatch(menuTrue())} className="cursor-pointer inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#6b89c9] rounded-lg hover:bg-[#decb8c] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Prendre Rdv
                                <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </a>
                        
                    </div>
                )))}
            </div>


        </section>
    )
}

export default ContactComponentCard