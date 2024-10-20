
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/home/Header';
import Psicologos from './components/psicologos/Psicologos';
import Footer from './components/home/Footer';
import Home from './components/home/Home';
import Cards from './components/cards/Cards';
<<<<<<< HEAD
import Pagina1 from './components/cards/pag2/pagina1';
import MapSection from "./components/Documentos";
=======
import Pagina1 from './components/cards/pag2/Pagina1';
>>>>>>> 8ab769b0fecc10fd0cebe6074c07fcbfe03eca24
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='cards' element={<Cards />} />
          <Route path='Psicologos' element={<Psicologos />} />
          <Route path='hospital' element={<Pagina1/>}/>
          <Route path='mercado' element={<Pagina1/>}/>
          <Route path='Polícia' element={<Pagina1/>}/>
          <Route path='Banco' element={<Pagina1/>}/>
          <Route path='Compras' element={<Pagina1/>}/>
          <Route path='Transporte' element={<Pagina1/>}/>
          <Route path='Alimentação' element={<Pagina1/>}/>
          <Route path='MainSection' element={<Pagina1/>}/>
          <Route path='Alimentação' element={<Pagina1/>}/>

        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
