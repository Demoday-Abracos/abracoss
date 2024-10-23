import Desenvolvedores from "./Desenvolvedores"
import Descricao from "./Descricao"
function SobreNos() {
    return (
        <>
            <div className="imgs">
                <Descricao
                    imagem='assets/images/alvo.svg'
                    titulo='Missão'
                    texto='Promover um ambiente acolhedor para imigrantes e refugiados, onde possam reconstruir suas vidas no Brasil por meio do acesso a recursos essenciais, como oportunidades de emprego, educação e apoio social.'
                />
            </div>

            <div className="imgs">
                <Descricao
                    imagem='assets/images/olho.svg'
                    titulo='Visão'
                    texto='Ser a principal trilha para imigrantes e refugiados no Brasil, facilitando sua integração econômica, social e cultural, ao mesmo tempo em que promovemos uma sociedade mais inclusiva, acolhedora e próspera para todos.'
                />
            </div>

            <div className="imgs">
                <Descricao
                    imagem='assets/images/coracao.svg'
                    titulo='Valores'
                    texto='Inclusão & Diversidade: Valorizamos a riqueza cultural e social trazida por diferentes culturas. Acreditamos que todos, independentemente de sua origem, têm o direito de se sentir incluso e parte da sociedade.  Crescimento: Valorizar o desenvolvimento pessoal e profissional dos imigrantes, fornecendo os recursos para que alcancem seu potencial. Esperança: Ser um farol de esperança para aqueles que buscam um novo começo, oferecendo ferramentas para o sucesso e a reintegração.'
                />
            </div>
            <div className="titulodev">
                <h1>Desenvolvedores</h1>

            </div>
            <section className="sectchones">
                <div className="devs">

                    <div>
                        <Desenvolvedores
                            imagens='assets/images/iarley.png'
                            titulo='Iarley Souza'
                            texto='"Acredito que histórias merecem ser ouvidas e que devemos abrir nossos corações para aqueles que mais precisam.".'
                            texto2='Product Owner, Full-Stack'
                            foto1='assets/images/githublogo.svg'
                            foto2='assets/images/LinkedynLogo.svg'

                        /></div>


                    <div>
                        <Desenvolvedores
                            imagens='assets/images/hugo.png'
                            titulo='Hugo Ribeiro'
                            texto='“Gratidão por fazer parte deste projeto incrível; juntos, estamos transformando vidas e espalhando esperança”.'
                            texto2='Scrum Master, Full-stack'
                            foto1='assets/images/githublogo.svg'
                            foto2='assets/images/LinkedynLogo.svg'
                        />

                    </div>

                </div>

                <div className="devs">

                    <div>
                        <Desenvolvedores
                            imagens='assets/images/Frame 11 (2).png'
                            titulo='Vitor Hugo'
                            texto='"Acredito que histórias merecem ser ouvidas e que devemos abrir nossos corações para aqueles que mais precisam.".'
                            texto2='UI/UX & Front end'
                            foto1='assets/images/githublogo.svg'
                            foto2='assets/images/LinkedynLogo.svg'

                        /></div>


                    <div>
                        <Desenvolvedores
                            imagens='assets/images/hillary.png'
                            titulo='Hillary Silva'
                            texto='“Gratidão por fazer parte deste projeto incrível; juntos, estamos transformando vidas e espalhando esperança”.'
                            texto2='UI/UX & Front end'
                            foto1='assets/images/githublogo.svg'
                            foto2='assets/images/LinkedynLogo.svg'
                        />

                    </div>

                </div>

                <div className="devs">

                    <div>
                        <Desenvolvedores
                            imagens='assets/images/ramalho.png'
                            titulo='Victor Ramalho'
                            texto='"Acredito que histórias merecem ser ouvidas e que devemos abrir nossos corações para aqueles que mais precisam.".'
                            texto2='Cloud Back-end'
                            foto1='assets/images/githublogo.svg'
                            foto2='assets/images/LinkedynLogo.svg'

                        /></div>


                    <div>
                        <Desenvolvedores
                            imagens='assets/images/jonathan.png'
                            titulo='Jonathan Silva'
                            texto='“Gratidão por fazer parte deste projeto incrível; juntos, estamos transformando vidas e espalhando esperança”.'
                            texto2='Scrum Master, Full-stack'
                            foto1='assets/images/githublogo.svg'
                            foto2='assets/images/LinkedynLogo.svg'
                        />

                    </div>

                </div>

                <div className="ryan">
                        <Desenvolvedores
                            imagens='assets/images/ryan.png'
                            titulo='Ryan Honorato'
                            texto='“Gratidão por fazer parte deste projeto incrível; juntos, estamos transformando vidas e espalhando esperança”.'
                            texto2='Scrum Master, Full-stack'
                            foto1='assets/images/githublogo.svg'
                            foto2='assets/images/LinkedynLogo.svg'
                        />

                    </div>
            </section>
        </>
    )
}

export default SobreNos