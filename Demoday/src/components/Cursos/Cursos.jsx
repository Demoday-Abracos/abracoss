import '../Styles/Cursos.css'
import lupa from '../../../public/assets/images/lupa.png'
import produtividade from '../../../public/assets/images/produtividade.png'
import desenvolvimento from '../../../public/assets/images/desenvolvimento.png'
import metodologias from '../../../public/assets/images/metodologias.png'
import cofrinho from '../../../public/assets/images/cofrinho.png'
import curriculo from '../../../public/assets/images/curriculo.png'
import certificado from '../../../public/assets/images/certificado.png'
import resultados from '../../../public/assets/images/resultados.png'
import quadrado_laranja from '../../../public/assets/images/quadrado_laranja.png'
import azul from '../../../public/assets/images/img_azul_cursos.png'

function Cursos(){
    return(
        <>
            {/* IMAGEM DE FUNDO */}
        <section>
            <div className='barra_laranja_pesquisa'>
                <input type="text" name="buscar" className='buscar' placeholder='Busque aqui' title='buscar'/>
                <img src={lupa} alt="lupa" className='lupa'/>
            </div>

            <div className="fundo_cursos">
                <p className='palavra_aprender'>Aprenda<br /></p> <p><span className='ptt'>Português</span></p>

                <div className='div_branca' title='Escreva o que quer aprender aqui'>
                    <h4 className='O_que_você_quer_aprender'>O que você quer aprender?</h4>
                    <div className='colocar_display'>
                        <img src={lupa} alt="lupa" className='lupa2'/>
                        <input type="text" name='aprender' placeholder='diálogos, gramática...' className='buscarr'/>
                    </div>
                </div>
            </div>
        </section>

            {/* PARTE DA BANDEIRA: */}
        <div className='colocar_displayy'>
            <section className='fundo_bandeira'>
                <h1 className='aproveitar'>Aproveite para aprender mais sobre:</h1>
                <nav className='display_branca'>
                    <div className='div_brancona'>
                        <img className='img_branca' src={produtividade} alt="" />
                        <p className='paragrafo_branco'>Produtividade</p>
                    </div>
                    <div className='div_brancona'>
                        <img className='img_branca' src={desenvolvimento} alt="" />
                        <p className='paragrafo_branco'>Desenvolvimento</p> <p className='paragrafo_branco'>pessoal e profissional</p>
                    </div>
                    <div className='div_brancona'>
                        <img className='img_branca' src={metodologias} alt="" />
                        <p className='paragrafo_branco'>Metodologias de</p> <p className='paragrafo_branco'>Aprendizagem</p>
                    </div>
                </nav>
            </section>
        </div>

            {/* DIFERENCIAIS: */}
        <section className='diferenciais'>
                <h1 className='h1_diferenciais'>Diferenciais</h1>
                    <div className='colocar_displayyy'>
                        <p className='p_beneficios'>Benefícios que você ira querer!</p>
                        <button className='ComeceAq' title='Comece Aqui' alt='Comece_Aqui'>
                            Comece Aqui
                        </button>
            </div>
            <div className='div_azul'>
                <div className='div_diferenciais'>
                    <img className='img_diferenciais' src={cofrinho} alt="" />
                    <p className='parag_dif'>Estudo sem</p> <p className='parag_dif'>custo</p>
                </div>
                <div className='div_diferenciais'>
                    <img className='img_diferenciais' src={curriculo} alt="" />
                    <p className='parag_dif'>Turbine seu</p> <p className='parag_dif'>currículo</p>
                </div>
                <div className='div_diferenciais'>
                    <img className='img_diferenciais' src={certificado} alt="" />
                    <p className='parag_dif'>conquiste o seu</p> <p className='parag_dif'>certificado</p>
                </div>
                <div className='div_diferenciais'>
                    <img className='img_diferenciais' src={resultados} alt="" />
                    <p className='parag_dif'>tenha os melhores</p> <p className='parag_dif'>resultados</p>
                </div>
            </div>
        </section>

            {/* OBJETIVOS: */}
            <h1 className='h1_obj'>Objetivos</h1>
        <div className='objetivos'>
            <img className='img_laranja1' src={quadrado_laranja} alt="" />
            <p className='p_obj'>Em termos gerais, o nosso curso visa ensinar português de forma descomplicada além de aumentar conhecimentos e habilidades de imigrantes e refugiados. Para  viabilizar isso, estabelecemos dois objetivos principais:</p>
            <img className='img_laranja2' src={quadrado_laranja} alt="" />
        </div>

        <div className='paragrafos_obg'>
            <p className='paragrafo2_obj'>
                1. Permitir que refugiados e imigrantes interajam com a sociedade e tenham acesso aos seus  direitos básicos, sem precisar da ajuda de outras pessoas.
            </p>
            <p className='paragrafo2_obj'>
                2. Apoio a transição para o mercado de trabalho, com o objetivo de promover a total inclusão social e financeira desses indivíduos.
            </p>
        </div>
        <img className='div_azul_cursos' src={azul} alt="" />
     </>   
    )
}
export default Cursos