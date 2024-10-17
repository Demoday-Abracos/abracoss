
import '../Styles/Testemunhas.css';

function Testemunhas() {
    return (
        <>
            <section className="testimonials-section">
                <h2>Depoimentos</h2>
                <div className="testimonials-carousel">
                    <button className="prev-btn">{"<"}</button>

                    <div className="testimonial">
                        <img src="assets/images/david.png" alt="David Mwangi" className="testimonial-img" />
                        <div className="testimonial-content">
                            <h3>David Mwangi</h3>
                            <div className="stars">★★★★★</div>
                            <p>Este site foi essencial para eu conseguir meus documentos e me estabelecer aqui. As informações são claras e fáceis de entender, e me senti acolhido desde o início.</p>
                        </div>
                    </div>

                    <div className="testimonial">
                        <img src="assets/images/samuel.png" alt="Samuel Okoru" className="testimonial-img" />
                        <div className="testimonial-content">
                            <h3>Samuel Okoru</h3>
                            <div className="stars">★★★★★</div>
                            <p>O site me ajudou não só com a documentação, mas também com o apoio psicológico, que foi fundamental para mim.</p>
                        </div>
                    </div>

                    <button className="next-btn">{">"}</button>
                </div>
            </section>
            
        </>
    );
}

export default Testemunhas;
