import SobreNos from './components/SobreNos/SobreNos';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/home/Header';
import Psicologos from './components/psicologos/Psicologos';
import Footer from './components/home/Footer';
import Home from './components/home/Home';
import Cards from './components/cards/Cards';
import Pagina1 from './components/cards/pag2/pagina1';
import Passaporte from './components/Documentos/Passaporte';
import Cursos from './components/Cursos/Cursos';
import Empregabilidade from './components/Empregados/Empregabilidade'
import Empresas from './components/Empresas/Empresas';
import Bandeira from './components/Documentos/Bandeira';
import Formulario from './components/Documentos/Formulario';
import Regularizacao from './components/Documentos/Regularizacao';
import Mapa from './components/Documentos/Mapa';
import Videoaulas from './components/videoaulas/videoaulas';
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
          <Route path='SobreNos' element={<SobreNos/>}/>
          <Route path='Cursos' element={<Cursos/>}/>
          <Route path='Empregar' element={<Empregabilidade/>}/>
          <Route path='Empresas' element={<Empresas/>}/>
<<<<<<< HEAD
          <Route path='Fomulario' element={<Formulario/>}/>
          <Route path='Regularizacao' element={<Regularizacao/>}/>
          <Route path='Mapa' element={<Mapa/>}/>
<<<<<<< HEAD
=======
>>>>>>> 87682da3967c150f1fc5aa2a9cec557ed44632e5
          <Route path='Passaporte' element={<Passaporte/>}/>
          <Route path='Bandeira' element={<Bandeira/>}/>
          <Route path='Videoaulas' element={<Videoaulas/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
