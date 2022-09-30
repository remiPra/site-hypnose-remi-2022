import React from 'react'
import Link from 'next/link'

function Footer() {
    return (
        <div className='block md:flex bg-[#1b271b] text-white  py-[50px] px-[50px]'>
            <div className='block lg:flex'>
            <div className='lg:w-1/2 min-w-[300px] py-0 '>
                <h2 className='py-3 text-center'>Rémi PRADERE Hypnothérapeute</h2>
                <h3 className='py-3'>Hypnose éricksonienne à Toulouse</h3>
                <p>Le cabinet est facilement accessible depuis Blagnac, Balma, Ramonville-Saint-Agne, Colomiers, Saint Orens, Toulouse, Tournefeuille, Aucamville, Quint-Fonsegrives, L'Union, Beauzelle, Saint-Jean, Cugnaux ou Launaguet.</p>
            </div>
            <div className='lg:w-1/2   py-0 px-[15px]'>
                <h3 className='py-3 text-center'>Plan du Site</h3>
                <ul>
                    {[{ title: 'Accueil', href: '/' }, { title: 'Qui Suis je?', href: '/' }, { title: 'Contact', href: '/' }].map((el, index) => (
                        <Link passHref={true} href={el.href} key={index} >
                            <li className='text-white cursor-pointer'>{el.title}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            </div>
            <div className='block lg:flex'>
            <div className='lg:w-1/2 min-w-[300px]'>
                <h3 className='py-3 text-center'>Réseaux Sociaux</h3>
            </div>
            <div className='lg:w-1/2 min-w-[300px]'>
                <h3 className='py-3 text-center'>Plan</h3>
                <div className="mapouter">
                    <div className="gmap_canvas flex justify-center">
                        <iframe width="250" height="100" id="gmap_canvas" src="https://maps.google.com/maps?q=cabinet%20hypnose%20remi%20pradere&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                        </iframe>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Footer