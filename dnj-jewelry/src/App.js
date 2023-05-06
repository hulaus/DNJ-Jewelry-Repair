import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Jewelry from './components/jewelry';
import Aboutus from './components/aboutUs';
import Custom from './components/custom';
import Navbar from './components/navbar';
import ImageGallery from './components/ImageGallery';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';


function App() {
  return (
    <>
      <div className="App">
        <header>
          <Navbar />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="jewelry" element={<Jewelry />} />
              <Route path="ImageGallery" element={<ImageGallery />} />
              <Route path="Aboutus" element={<Aboutus />} />
              <Route path="Custom" element={<Custom />} />
              <Route path='/login' element={<LoginForm />} />
              <Route path='/signup' element={<SignupForm />} />
              </Routes>
          </BrowserRouter>
        </header>
      </div>
    </>
  );
}

export default App;