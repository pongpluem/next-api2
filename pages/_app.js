import '@/styles/globals.css'

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";                                         
        

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
