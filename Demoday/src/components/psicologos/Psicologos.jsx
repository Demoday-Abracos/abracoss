import '../Styles/Psicologos.css'
import Beneficios from './Beneficios'
import Trabalhadores from './trabalhadores'

function Psicologos() {
    return(
        <>
        <section>
            <div className="fundo_psicologos">
                <p>Abraçando sonhos, construindo futuros. Cada<br /> <span className='passo'>passo</span> é um caminho para um novo <span className='recomeço'>recomeço.</span></p>
            </div>
        </section>

        <section className='we'>
            <h1>Nossos melhores Profissionais:</h1>
        </section>

        <section className='bordaa'>
            <Trabalhadores foto='assets/images/drca.svg' titulo='Dra. Camilla loures' paragrafo='Psicologia do Trauma e Resiliência Emocional'/>
            <Trabalhadores foto='assets/images/DrRichard.svg' titulo='Dr. Richard Gomes' paragrafo='Psicologia da Inclusão e Apoio a Imigrantes e Refugiados'/>
            <Trabalhadores foto='assets/images/DrRaquel.svg' titulo='Dra. Raquel sanches' paragrafo='Psicologia do Estresse e Bem-Estar Mental'/>
        </section>

        <section className='Laranja'>
        <div className='textinho'>
            <h1>Beneficios</h1>
            <p>Acompanhe os privilégios de nossos serviços</p>
        </div>
            <div className='imagens'>
                <Beneficios foto='assets/images/Consultas.svg' texto='Consultas
                sem custo'/>
                <Beneficios foto='assets/images/atendimento.svg' texto='Atendimentos online'/>
                <Beneficios foto='assets/images/Tratamento.svg' texto='Tratamento acompanhado'/>
            </div>
        </section>

        <section className='Formulario'>
            <div className='juncao'>
            <img src="assets/images/Apertodemao.svg" alt="Aperto de mão" />
                <div className='envolta'>
                    <div className='ladoaperto'>
                        <h1>Preencha o formulário</h1>
                        <p>Para que possamos entender melhor o seu caso e oferecer a assistência adequada</p>
                    </div>
                    <div className='preparadolaranja'>
                        <p className='preparado'>Preparado para começar?</p>
                        <p className='preparadoazul'>Preparado</p>
                    </div>
                </div>
                
            </div>
        </section>
        </>
    )
}
export default Psicologos