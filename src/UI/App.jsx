import {BrowserRouter, Router, Route, Routes} from 'react-router-dom';

import About from "../pages/about/About"
import Contact from "../pages/contact/Contact"
import Gallery from "../pages/gallery/Gallery"
import Home from "../pages/home/Home"
import Notfount from "../pages/notFound/Notfount"
import Plans from "../pages/plans/Plans"
import Trainers from "../pages/trainers/Trainers"
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';



const App = () => {
  return (

       <BrowserRouter>
       
       <Navbar />
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='gallery' element={<Gallery/>}/>
          <Route path='plans' element={<Plans/>}/>
          <Route path='trainers' element={<Trainers/>}/>
          <Route path='*' element={<Notfount/>}/>
        </Routes>
        <Footer />
       </BrowserRouter>

   
  )
}

export default App
