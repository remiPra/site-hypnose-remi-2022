import React from 'react'
import Link from 'next/link'
import NavBarMobileHypose from '../NavBarMobileHypnose'

function Header() {
    return (
        <>
            <header className="w-[100%] justify-center">
                <NavBarMobileHypose />
                <div className=" mt-[80px] w-[100%] flex justify-center">
                    <img width="500px" src='assets/logoRémiPradereSopromagnetiseur.png' />
                </div>
                <h1 className="colorPrimary mb-[60px] text-[24px] w-[100%] text-center ">Hypnotherapeute - Praticien en Hypnose à Toulouse</h1>
                <nav className={`w-[100%] mb-[80px] justify-center 
                hidden md:flex`}>
                    <ul className={`w-[100%] flex flex-row justify-center`}>
                        <Link passHref href='/'>
                            <li className={` btnF fron-left font-medium text-[20px] min-w-[180px] max-w-[400px] text-center`}>
                                ACCUEIL

                            </li>
                        </Link>
                        <Link passHref href='/'>
                            <li className={`btnF from-left font-medium text-[20px] min-w-[180px] max-w-[400px] text-center`}>
                                BUT DE L HYPNOSE</li>
                        </Link>
                        <Link passHref href='/'>
                            <li className={`btnF from-left font-medium text-[20px] min-w-[180px] max-w-[400px] text-center`}>
                                QUI SUIS JE </li>
                        </Link>
                        <Link passHref href='/contact'>
                            <li className={`btnF from-left font-medium text-[20px] min-w-[180px] max-w-[400px] text-center`}>
                                TARIFS ET CONTACT</li>
                        </Link>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header