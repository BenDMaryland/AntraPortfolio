
import './App.css';
import Navbar from "./components/NavBar.js"
import Home from "./pages/Home.js"
import { Routes, Route } from "react-router-dom"
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Contacts from './components/Contacts';


function App() {
  return (
    <div className="App">
      <Navbar />


      <Routes>
        <Route path='/*' element={<Home />} />
        <Route exact path='/portfolio' element={<Portfolio />} />
        <Route exact path='/contacts' element={<Contacts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
