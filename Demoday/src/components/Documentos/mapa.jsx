import '../Styles/Documentos.css';

function Mapa({ mapaSrc }) {
    return (
      <section className="Laranja">
        <div className="tudo">
          <div className="mapa-container">
            <img src={mapaSrc} alt="Mapa da localização" className="mapa-imagem" />
          </div>
        </div>
      </section>
    );
  }
  
  export default Mapa;