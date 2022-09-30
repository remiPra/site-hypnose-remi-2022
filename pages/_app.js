import '../styles/globals.css'
import 'tailwindcss/tailwind.css';
import CallComponent from '../component/CallComponent/CallComponent';
import Footer from '../component/Footer/Footer';
import {Provider} from 'react-redux'
import { store } from '../store';


function MyApp({ Component, pageProps }) {
  
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
