import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import NavBarMobileHypose from '../component/NavBarMobileHypnose'
import Header from '../component/Home/Header'
import Parralax1 from '../component/Home/Parralax1'
import ContactComponentCard from '../component/Home/ContactComponent'
import { useSelector } from 'react-redux'
import { selectBasketCardSecret4, selectMenuBool } from '../featured/basketSlice'
import PresentationMoi from '../component/PresentationMoi/PresentationMoi'
import PresentationCabinet from '../component/Home/PresentationCabinet'
import ComponentDeuxTraitBleu from '../component/ComponenthDeuxTraitBleu'

export default function Home() {

  const img1 = 'image1';
  const img2 = 'image2';
  const img3 = 'image3';
  const menuBool = useSelector(selectMenuBool)
  const store = useSelector(selectBasketCardSecret4)


  return (<>
    <Head>
      <title>cabinet hypnose Toulouse Cugnaux Tournefeuille </title>
      <meta name="description" content="cabinet d'hypnose Toulouse Cugnaux Tourneufeuille hypnothérapeute " />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header index="main" />
    <Parralax1 img={img1} />
    <section className="section1 p-5 lg:px-[100px] lg:py-[70px]">
      <ComponentDeuxTraitBleu title="Venez à bout de vos troubles grâce à l hypnose" />
      {/* <p>Voici plusieurs exemples d applications que l hypnose peut vous apportez </p>
      <p>Choisissez l une des différentes options qui se présentent à vous </p> */}
      <div className="mt-[30px] flex flex-wrap justify-center">
        {[
          {
            title: "Phobies",
            tarif: 'Tarif : 50 euros',
            description: "Essayer a travers un script hynotique les effets que peuvent vous faire l'hypnose",
            lien:'/PerteDePoidsScript'
          },
          {
            title: "Perte de Poids",
            tarif: 'Tarif : 50 euros',
            description: "Essayer a travers un script hynotique en ligne les effets que peuvent vous faire l'hypnose",
            lien:'/perteDePoidsScript'
          },
          {
            title: "Confiance en soi",
            tarif: 'Tarif : 50 euros',
            description: "la séance peut durer d 1h a 1h30 uniquement sur rendez vous",
            lien:'/PerteDePoidsScript'
          },
          {
            title: "Arret du Tabac",
            tarif: 'Tarif : 50 euros',
            description: "la séance peut durer d 1h a 1h30 uniquement sur rendez vous",
            lien:'/PerteDePoidsScript'
          },
          {
            title: "Troubles Sommeil",
            tarif: 'Tarif : 50 euros',
            description: "la séance peut durer d 1h a 1h30 uniquement sur rendez vous",
            lien:'/PerteDePoidsScript'
          },
          {
            title: "Troubles Sexuels",
            tarif: 'Tarif : 50 euros',
            description: "la séance peut durer d 1h a 1h30 uniquement sur rendez vous",
            lien:'/PerteDePoidsScript'
          }
        ].map((el, index) => (
          <div key={index} className="hover:duration-300 hover:translate-y-[-30px] hover:ease-linear m-6 p-6  min-w-[250px] w-[300px] bg-white rounded-lg border-[2px] border-[white] shadow-[#6b89c9] shadow-2xl  dark:bg-gray-800 dark:border-gray-700">
            <h3 className="text-[#decb8c] text-[25px]  text-center h-[50px] text-2xl font-bold tracking-tight dark:text-white">{el.title}</h3>

            <p className="mb-3 font-normal text-[#6b89c9] dark:text-gray-400">{el.description} </p>
            <Link passHref href={el.lien}>
              <a className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#6b89c9] rounded-lg hover:bg-[#decb8c] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                En savoir Plus
                <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </a>
            </Link>
          </div>
        ))
        }

      </div>

    </section>
    <Parralax1 img={img2} />
    <PresentationMoi />
    <Parralax1 img={img3} />
    <PresentationCabinet />
    <Parralax1 img={img3} />
    <ContactComponentCard />

  </>

  )

}
