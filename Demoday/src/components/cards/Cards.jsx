import Slide from "../home/Slide"
import '../Styles/Cards.css'
import CardCarousel from "./CardCarrousel"
import CardCarousel1 from "./CardCarrousel1"
import CardCarousel2 from "./CardCarrousel2"
function Cards() {
    const data = [
        {id: '1', image: 'assets/images/capaMulheres.png'},
        {id: '2', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/08/home.png'},
    ] 
    return(
        <>
            <div>
                <Slide slideData={data}/>
            </div>
            <section className="laranja">
                <h1>Qual a fala: </h1>
            </section>
            <CardCarousel/>
            <CardCarousel1/>
            <CardCarousel2/>
        </>
    )
}
export default Cards