import Image from 'next/image'
import React from 'react'
import ComponenthDeuxTraitBleu from '../ComponenthDeuxTraitBleu.js'

function PresentationMoi() {
    const primary = "#6b89c9"
    const secondary = "#decb8c"
    return (<div className='section1 p-5 lg:px-[100px] lg:py-[70px]'>
        <ComponenthDeuxTraitBleu/>
        <div className='block  lg:flex mt-[50px] w-[100%]'>
            <div data-aos="fade-left" className='lg:w-2/6 lg:m-0'>
                    <img className='rounded-[50%] my-0 mx-auto   lg:rounded-md w-[300px]  lg:m-0 lg:w-[100%]' src="/assets/Profil.jpg" />     
            </div>
            <div data-aos="fade-right" className='px-5 w-[100%] lg:shadow-xl rounded-md lg:w-4/6 '>
               
                    <h3 className="text-[#decb8c] text-[25px] text-center mt-1 mb-5 w-[100%]">Rémi PRADERE votre hypnothérapeute sur Toulouse</h3>
                    <p className={`text-[${primary}]`} >Je m’appelle Rémi PRADERE, je suis praticien en hypnose Ericksonienne à Toulouse et en Haute Garonne.</p> 
                      <p className={`text-[${primary}]`}>Pédicure podologue pdepuis 16 ans , je suis deja au contact des personnes et de leur soucis . </p>
                      <p className={`text-[${primary}]`}>j’ai choisi de m’orienter vers l’humain, leur psychée  et d’accompagner les personnes vers leur mieux-être.</p> 
                      <p className={`text-[${primary}]`}>Désormais, je reconnecte les personnes à elles-mêmes avec l’hypnose, ce don que vous avez déjà en vous. Réveillons-le !</p>
                   
               
            </div>
        </div>
        </div>
    )
}

export default PresentationMoi