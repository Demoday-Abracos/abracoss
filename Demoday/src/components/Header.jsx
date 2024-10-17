import './styles/Header.css'

function Header() {

    return (
        <>
            <header>
                <div className="logo">
                    <a href="#"><img src="assets/images/Logo.png" alt="Logo" /></a>
                </div>
                <nav>
                    <a href="#" className='nav-link'>Home</a>
                    <a href="#" className='nav-link'>Psicológos</a>
                    <a href="#" className='nav-link'>Cursos</a>
                    <a href="#" className='nav-link'>Cards</a>
                    <a href="#" className='nav-link'>Documentação</a>
                    <a href="#" className='nav-link'>Sobre</a>
                </nav>
                <div className='area_cadastro'>
                    <div className='login'>Login</div>
                    <div className='cadastro'>Cadastre-se</div>
                </div>
            </header>
            <section className='sec-principal'>
                <h1 className='h1-principal'>Explore nossas categorias: </h1>
                <div className='gifs-home'>
                    <img src="assets/gifs/documento.gif" alt="Gif do documento" />
                    <p>Suporte para regularização de documentos com segurança e tranquilidade.</p>
                </div>
                <div className='gifs-home'>
                    <img src="assets/gifs/cards.gif" alt="" />
                    <p>Tradução rápida da sua língua nativa para o português brasileiro com os cards.</p>
                </div>
                <div className='gifs-home'>
                    <img src="assets/gifs/books.gif" alt="" />
                    <p>Cursos para melhorar sua comunicação em português e facilitar sua integração.</p>
                </div>
                <div className='gifs-home'>
                    <img src="assets/gifs/saude-mental.gif" alt="" />
                    <p>Oferecemos apoio para sua saúde mental, promovendo bem-estar e equilíbrio.</p>
                </div>
            </section>
        </>
    )
}
export default Header