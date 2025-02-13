// import React from 'react';
// import Footer from './components/Footer';
// import Heading from './components/Heading';
// import MainContent from './components/MainContent';
// import Counter_App from "./components/Counter_App";
import { BrowserRouter, Link } from "react-router-dom";
// import Api from "./components/Api";
import Routing from "./components/Routing";


const App = () => {
  return (
    
      // {/* <Heading />  */}
      // {/* <MainContent  /> */}
      // {/* <Footer /> */}
      // {/* <Counter_App /> */}
      // {/* <Api /> */}
      <BrowserRouter>
        <nav>
          <Link to='/' >  Home  </Link>
          <Link to='/about'>  About  </Link>
          <Link to='/contact'>  Contacts  </Link>
        </nav>
        <Routing />
      </BrowserRouter>


  
  );
}

export default App;
