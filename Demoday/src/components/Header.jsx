import './styles/Header.css'

function Header() {

    return(
        <header>
            <div className="logo">
                <a href="#"><img src="assets/images/Logo.png" alt="Logo" /></a>
            </div>
            <nav>
                <a href="#">Home</a>
                <a href="#">Psicológos</a>
                <a href="#">Cursos</a>
                <a href="#">Cards</a>
                <a href="#">Documentação</a>
                <a href="#">Sobre</a>
            </nav>
            <div className='area_cadastro'>
                <div className='login'>Login</div>
                <div className='cadastro'>Cadastre-se</div>
            </div>
        </header>
    )
}
export default Header