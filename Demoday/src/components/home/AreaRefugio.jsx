import '../Styles/Testemunhas.css'
import { Link } from 'react-router-dom'
function AreaRefugio() {
    return (
        <>
            <section className='baixo-depoimentos'>
                <div className='baix2'>
                    <h1>Refugiados no Brasil</h1>
                    <div className='emprego'>
                        <button className='button-primary'><Link to='/'>Procurando EMPREGO?</Link></button>
                        <button className='button-secondary'><Link to='contratar'>Querendo CONTRATAR?</Link></button>
                    </div>
                    <div className='preparadoo-ok'>
                        <h1>Preparado para começar?</h1>
                        <p>Clique</p>
                    </div>
                </div>


            </section>
        </>
    )
}
export default AreaRefugio