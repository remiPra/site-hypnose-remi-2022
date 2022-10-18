import '../styles/globals.css'
import 'tailwindcss/tailwind.css';
import CallComponent from '../component/CallComponent/CallComponent';
import Footer from '../component/Footer/Footer';
import {Provider} from 'react-redux'
import { store } from '../store';
import AOS from "aos";
import {useEffect} from 'react'


function MyApp({ Component, pageProps }) {
  
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });

  }, [])
  
  return (
  <>
  <Provider store={store}>
    
    <Component {...pageProps} />
    <CallComponent />
    <Footer></Footer>
  </Provider>
  </> 
    )
}

export default MyApp
