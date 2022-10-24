import React from 'react'
import ComponenthDeuxTraitBleu from '../ComponenthDeuxTraitBleu.js'

function PresentationCabinet() {
    return (
        <div className='section1 p-5 lg:px-[100px] lg:py-[70px]'>
            <ComponenthDeuxTraitBleu />
            <div className='shadow-xl block md:flex mt-[50px]'>
                <div data-aos="fade-right" className='hidden lg:block lg:w-4/6'>
                    <img className='' src="/assets/buddhaPresntation.jpg" />
                </div>
                <div data-aos="fade-left" className='text-[#6b89c9] w-[100%] lg:w-2/6 pt-[30px]  px-[30px]'>
                    <h3 className='text-[#decb8c] text-[25px]'>Adresse : </h3>
                    <h3>17 rue du Professeur Francisco Sanchez
                        <br/>31100 TOULOUSE
                    </h3>
                    <p>Lundi Mardi Samedi</p>
                    <p>Uniquement sur Rdv</p>
                    <h3 className='mt-[50px] text-[#decb8c] text-[25px] '>Carte : </h3>
                    <div className="gmap_canvas  flex justify-center">
                        <iframe width="200" height="200" id="gmap_canvas" src="https://maps.google.com/maps?q=cabinet%20hypnose%20remi%20pradere&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
                        </iframe>
                        <div className='opacity-60 top-0 left-0 z-10 w-[100%] h-[100%] bg-[#6b89c9] absolute'>
                            <p >
                                   
                                </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PresentationCabinet