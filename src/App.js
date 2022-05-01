import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About Us/About';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Footer from './Components/Footer/Footer';


function App() {
  return (
    
    <div className="App">
     
     <Navbar />
     <Footer/>
    </div>
    
  );
}

export default App;
