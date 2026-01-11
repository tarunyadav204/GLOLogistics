import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import ContactUs from './pages/ContactUs';
import SenderForm from './components/SenderForm';
import Login from './pages/Login';

function App() {

  //const isLoggedIn = localStorage.getItem("isLoggedIn");


  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/home' element={<SenderForm />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path="services/shipments" element={<Services />} />


      </Routes>

    </>
  );
}

export default App;
