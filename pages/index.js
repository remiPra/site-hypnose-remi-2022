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

export default function Home() {

  const img1 = 'image1';
  const img2 = 'image2';
  const img3 = 'image3';
  const menuBool = useSelector(selectMenuBool)
  const store = useSelector(selectBasketCardSecret4)
  
  
  return (<>
  <Head>
    <title>cabinet hypnose Toulouse Cugnaux Tournefeuille </title>
    <meta name="description" content="cabinet d'hypnose Toulouse Cugnaux Tourneufeuille hypnothérapeute "/>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Head>
    <Header />
    <Parralax1 img={img1} />
    <section className="section1">
      <div className="section1header" style={{ position: 'relative' }}>
        <div className="traitBleu"></div>
      {/* {JSON.stringify(store)} */}
        <h2 className='text-[20px] lg:text-[30px] w-[80%] md:w-[60%] '>Venez à bout de vos troubles grâce à l’hypnose</h2>
      </div>
      <div className="mt-[30px] flex flex-wrap justify-center">
        {[
          {
            title: "Phobies",
            tarif: 'Tarif : 50 euros',
            description: "Essayer a travers un script hynotique les effets que peuvent vous faire l'hypnose",

        },
        {
            title: "Confiance en soi",
            tarif: 'Tarif : 50 euros',
            description: "la séance peut durer d 1h a 1h30 uniquement sur rendez vous",

        },
        {
            title: "Arret du Tabac",
            tarif: 'Tarif : 50 euros',
            description: "la séance peut durer d 1h a 1h30 uniquement sur rendez vous",

        },
        {
            title: "Troubles de Sommeil",
            tarif: 'Tarif : 50 euros',
            description: "la séance peut durer d 1h a 1h30 uniquement sur rendez vous",

        }
        ].map((el,index) => (
          <div key={index} className="m-6 p-6  min-w-[250px] w-[300px] bg-white rounded-lg border-[2px] border-[white] shadow-[#1b271b] shadow-2xl  dark:bg-gray-800 dark:border-gray-700">
            <h3 style={{ color: '#1b271b' }} className="text-[25px] mb-2 text-center h-[80px] text-2xl font-bold tracking-tight dark:text-white">{el.title}</h3>
            <h4>{el.tarif}</h4>
            <p className="mb-3 font-normal text-[#1b271b] dark:text-gray-400">la séance peut durer d 1h a 1h30 uniquement sur rendez vous </p>
            <Link passHref href='/'>
              <a className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#1b271b] rounded-lg hover:bg-[#decb8c] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Prendre Rdv
                <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" ClipRule="evenodd"></path></svg>
              </a>
            </Link>
          </div>
        ))
        }

      </div>
      {/* 
        <div className="mt-[30px] flex">
          <div className="w-2/5 h-[400px]">
            <figure className='flex  relative justify-center'>
              <img className="imageSimple" width="80%" src="./assets/buddhaMobile.png" alt=""/>
              <figcaption style={{ padding: '20px' }}>helsqsqslo</figcaption>
            </figure>
          </div>
          <div className="w-3/5">
            <div style={{ padding: '16px 57px' }}>
              <h3 style={{ fontFamily: 'Playfair Display' }}>La premiere</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus eum a, laboriosam illo dicta, dolorem magni nihil eius, ipsum unde sed accusantium sit veniam cum esse vel incidunt nobis ipsa?</p>

              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus eum a, laboriosam illo dicta, dolorem magni nihil eius, ipsum unde sed accusantium sit veniam cum esse vel incidunt nobis ipsa?</p>
            </div>
          </div>
        </div> */}
    </section>
    <Parralax1 img={img2} />
    <ContactComponentCard />
    <Parralax1 img={img3} />
  </>

  )

}
