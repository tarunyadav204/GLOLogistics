import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<h1>Home Page</h1>} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path="services/shipments" element={<Services />} />


      </Routes>

    </>
  );
}

export default App;
