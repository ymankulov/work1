import './App.css';
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Tools from "./components/Tools";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Services/>
      <Portfolio/>
        <Tools/>
        <About/>
        <Contact/>
      <Footer/>

    </div>
  );
}

export default App;

{/*<Routes>*/}
{/* <Route path='/' element={<Header/>}/>*/}
{/* <Route path='/about' element={<About/>}/>*/}
{/* <Route path='/services' element={<Services/>}/>*/}
{/* <Route path='/' element={<Header/>}/>*/}
{/*</Routes>*/}