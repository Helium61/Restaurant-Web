

import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VerticalStrip from './components/VerticalStrip';
import './App.css'

function App() {

  return (
    <Router>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/men-categories" element={<MenCategories />} />
        <Route path="/women-categories" element={<WomenCategories />} />
        <Route path="/tshirts-categories" element={<TshirtsCategories />} /> */}
        
      </Routes>
      <VerticalStrip />
      <Footer />
    </div>
   </Router>
  )
}

export default App
