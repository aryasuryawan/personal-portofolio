import React from "react";
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./pages/Home"
import About from "./pages/About"
import ContactForm from "./pages/Contact"
import portofolio from './portofolio.json'
import PortofolioPage from "./components/PortofolioPage";
import DetailsPortofolio from "./pages/DetailsPortofolio";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <ContactForm/> } />
        <Route path="/portofolio/:id" element={<DetailsPortofolio/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
