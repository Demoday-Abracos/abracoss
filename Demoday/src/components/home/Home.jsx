import Testemunhas from "./Testemunhas"
import Counter from "./Counter"
import AreaRefugio from "./AreaRefugio"
import Slide from "./Slide" // Verifique se o caminho é este mesmo

function Home() {
    return(
        <>
        <Slide></Slide>
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
            <Testemunhas></Testemunhas>
            <main>
                <Counter endValue={67} text="Nacionalidades atendidas" />
                <Counter endValue={1000} text="Atendimentos em 2024" />
                <Counter endValue={1200} text="Alunos de português" />
            </main>
            <AreaRefugio></AreaRefugio>
        </>
    )
}
export default Home