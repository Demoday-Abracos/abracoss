import './styles/Header.css'

function Header() {

    return(
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
    )
}
export default Header