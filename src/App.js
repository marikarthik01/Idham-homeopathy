import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About Us/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import AboutHomeo from './Components/About Homeo/AboutHomeo';
import DiseasesTreatment from './Components/Diseases Treatment/DiseasesTreatment';
import TreatmentTypes from './Components/Diseases Treatment/TreatmentTypes';
import TreatmentDetail from './Components/Diseases Treatment/TreatmentDetail/TreatmentDetail';
import TreatmentBA from './Components/Diseases Treatment/TreatmentBA/TreatmentBA';
import Contactus from './Components/Contact Us/Contactus';
import Blog from './Components/Blog/Blog';
import Services from './Components/Services/Services';
import BeforeAfter from './Components/Diseases Treatment/BeforeAfter/BeforeAfter';


function App() {
  return (


    <div className="App">

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="About/" element={<About />}></Route>
          <Route path="AboutHomeo/" element={<AboutHomeo />}></Route>
          <Route path="DiseasesTreatment/" element={<DiseasesTreatment />}></Route>
          <Route path="Blog/" element={<Blog />}></Route>
          <Route path="TreatmentTypes/" element={<TreatmentTypes />}></Route>
          <Route path="TreatmentDetail/" element={<TreatmentDetail />}></Route>
          <Route path="BeforeAfter/" element={<BeforeAfter />}></Route>
          <Route path="TreatmentBA/" element={<TreatmentBA />}></Route>
          <Route path="Services/" element={<Services />}></Route>
          <Route path="Contactus/" element={<Contactus />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>


  );
}

export default App;
