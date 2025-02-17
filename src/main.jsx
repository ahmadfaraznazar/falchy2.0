import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AboutUs from './components/aboutus.jsx'
import Slider from './components/marqueslider.jsx'
import Footer from './components/footer.jsx'


import "@fontsource-variable/brygada-1918"; 
import "@fontsource-variable/brygada-1918/wght.css"; 
import "@fontsource-variable/brygada-1918/wght-italic.css";
import "@fontsource/inter"; 
import "@fontsource/inter/400.css"; 
import "@fontsource/inter/400-italic.css"; 
import 'typeface-cantata-one'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AboutUs/>
    <Slider/>
    <Footer/>
  </StrictMode>,
)
