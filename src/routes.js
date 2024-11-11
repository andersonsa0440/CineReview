import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/index';
import Filme from './pages/filme/index';
import Favoritos from './pages/favoritos/index';
import Erro from './pages/erro/index';
import Footer from './pages/footer/index';
import Header from './components/header/index';

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filme/:id" element={<Filme />} />
        <Route path='/favoritos' element={<Favoritos />} />
        <Route path='*' element={<Erro />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default RoutesApp;