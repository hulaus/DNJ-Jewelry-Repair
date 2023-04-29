import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/home';
import Jewelry from './components/jewelry';
import Forum from './components/forum';
import Aboutus from './components/aboutUs';
import Custom from './components/custom';
import Navbar from './components/navbar';


export const baseUrl = 'http:localhost:5000'

function App() {
 

  return (
    <div className="App">
   <Navbar />
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="jewelry" element={<Jewelry />} />
      <Route path="forum" element={<Forum />} />
      <Route path="Aboutus" element={<Aboutus />} />
      <Route path="Custom" element={<Custom />} />
    </Routes>
   </BrowserRouter>
    </div>

  );
}

export default App;
