import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import Land from './components/Land';
import Navbar from './components/Navbar/Navbar';
import Join from './components/Join';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
     <Navbar />
     <Land />
     <Join />
     <Footer/>
    </div>
  );
}

export default App;
