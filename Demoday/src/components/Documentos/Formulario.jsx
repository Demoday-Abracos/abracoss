import '../Styles/Documentos.css';


function Formulario() {
    return (
      <section className="Laranja">
        <div className="tudo">
          <h2 className="titulo">Entre em contato com a regularização</h2>
          <form className="formulario">
            <div className="input-group">
              <input type="text" placeholder="Nome" required />
              <input type="email" placeholder="E-mail" required />
            </div>
            <div className="input-group">
              <textarea placeholder="Mensagem:" rows="5" required></textarea>
            </div>
            <button type="submit" className="botao-enviar">Enviar</button>
          </form>
        </div>
      </section>
    );
  }
  
  export default Formulario;