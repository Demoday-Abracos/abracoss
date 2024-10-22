import '../Styles/Cursos.css'
import lupa from '../../../public/assets/images/lupa.png'
import bandeira from '../../../public/assets/images/bandeira_refugiados.png'

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
                <p className='palavra_aprender'>Aprenda AINDA ESTOU ARRUMANDO.<br /></p> <p><span className='ptt'>Português</span></p>

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
        <section className='fundo_bandeira'>
            <div className='colocar_displayy'>
                <img src={bandeira} alt="bandeira_refugiados" title='bandeira_refugiados' className='bandeira_refugiados'/>
            </div>
        </section>

            {/* DIFERENCIAIS: */}
        <section className='diferenciais'>
                <h1>Diferenciais</h1>
                    <div className='colocar_displayyy'>
                        <p>Benefícios que você ira querer!</p>
                        <button className='ComeceAq' title='Comece Aqui' alt='Comece_Aqui'>
                            Comece Aqui
                        </button>
            </div>
        </section>




<div className='lllllllll'></div>
     </>   
    )
}
export default Cursos