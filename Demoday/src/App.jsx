import Counter from './components/Counter'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Testemunhas from './components/Testemunhas'
import AreaRefugio from './components/AreaRefugio'
function App() {

  return (
    <>
      <Header />
      <Testemunhas/>
      <main>
        <Counter endValue={67} text="Nacionalidades atendidas" />
        <Counter endValue={1000} text="Atendimentos em 2024" />
        <Counter endValue={1200} text="Alunos de português" />
      </main>
      <AreaRefugio/>
      <Footer/>
      
    </>
  )
}

export default App
