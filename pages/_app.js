import '../styles/globals.css'
import 'tailwindcss/tailwind.css';
import CallComponent from '../component/CallComponent/CallComponent';


function MyApp({ Component, pageProps }) {
  return (
  <>
    <Component {...pageProps} />
    <CallComponent />
  </> 
    )
}

export default MyApp
