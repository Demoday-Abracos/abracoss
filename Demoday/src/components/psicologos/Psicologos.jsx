import '../Styles/Psicologos.css'
import Trabalhadores from './trabalhadores'

function Psicologos() {
    return(
        <>
        <section>
            <div className="fundo_psicologos"></div>
        </section>

        <section className='we'>
            <h1>Nossos melhores Profissionais:</h1>
        </section>

        <section className='bordaa'>
            <Trabalhadores foto='assets/images/DrCamila.svg' titulo='Dra. Camilla loures' paragrafo='Psicologia do Trauma e Resiliência Emocional'/>
            <Trabalhadores foto='assets/images/DrRichard.svg' titulo='Dr. Richard Gomes' paragrafo='Psicologia da Inclusão e Apoio a Imigrantes e Refugiados'/>
            <Trabalhadores foto='assets/images/DrRaquel.svg' titulo='Dra. Raquel sanches' paragrafo='Psicologia do Estresse e Bem-Estar Mental'/>
        </section>

        <section>
            
        </section>
        </>
    )
}
export default Psicologos