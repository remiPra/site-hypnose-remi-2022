import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import NavBarMobileHypose from '../component/NavBarMobileHypnose'
import Header from '../component/Home/Header'
import Parralax1 from '../component/Home/Parralax1'

export default function Home() {
  return (<>
    <Header />
    <Parralax1 />
  </>

  )
}
