

function Footer() {
    return(
        <footer>
            <div className="img-footer">
                <img className="logo-central" src="assets/images/Logo2x.png" alt="Logo" />

                <div className="logos">
                    <img src="assets/images/facebook.png" alt="logo do facebook" />
                    <img src="assets/images/insta.png" alt="logo do instagram" />
                    <img src="assets/images/linkedin.png" alt="logo do linkedin" />
                    <img src="assets/images/whats.png" alt="logo do whatsapp" />
                </div>
                
            </div>
            <div className="nomes-footer">
                <h2>ABRAÇOS</h2>
                <p>Home</p>
                <p>Documentação</p>
                <p>Psicológos</p>
                <p>Cursos</p>
                <p>Empregabilidade</p>
            </div>
            <div className="nomes-footer">
                <h2>CONTATOS</h2>
                <p>Fale conosco</p>
                <p>FAQ</p>
            </div>
            <div>
                <img src="assets/images/desenho-footer.png" alt="" />
            </div>
        </footer>
    )
}
export default Footer