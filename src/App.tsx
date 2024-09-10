import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Homepage from './Pages/Homepage'
import About from './Pages/About'
import Services from './Pages/Services'
import Projects from './Pages/Projects'
import './App.css'
import './fonts.css';
import { useEffect } from 'react';
import { useDarkMode } from './Components/Context'
import ScrollToTop from './Components/ScrollToTop'


function App() {
  const { darkMode } = useDarkMode();

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    
    <div >
    <BrowserRouter >
    <ScrollToTop />
    <Navbar />
    <Routes >
       <Route  path ="/" element={<Homepage />} />
       <Route  path ="/about" element={<About />} />
       <Route  path ="/services" element={<Services />} />
       <Route  path ="/projects" element={<Projects />} />
       </Routes>
       <Footer />
       </BrowserRouter>
    </div>
  )
}

export default App
