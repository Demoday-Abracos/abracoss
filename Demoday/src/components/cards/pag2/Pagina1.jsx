import React from 'react';
import '../../Styles/CardCarrousel.css';
import Cards2 from './Cards2';
function Pagina1() {
    const [condicional, setcondicional] = React.useState({'Hospital':true, 'Mercado': true})

    function mudarCondicao(e){
        console.log(e.target.getAttribute('name'));
        setcondicional((prevcondicao) => {return {... prevcondicao, 'Hospital': ! prevcondicao.Hospital }})
    }

    
    return(
        <>
            <div className="img-fundo">
                <h1 style={{color: '#fff'}}>Conecte-se de forma rápida e <br /> simples em qualquer idioma.</h1>
            </div>
            <div className='button'>
                <button onClick={mudarCondicao} className='hospital'>Hospital</button>
                <button>mercado</button>
                <button>transporte </button>
                <button>alimentação</button>
                <button>Banco</button>
                <button>Polícia</button>
                <button>Compras</button>
                <button>Escola</button>
                <button>Compras</button>
            </div>
            {condicional.Hospital && <> <div className='titulo-card'>
                <h1>Hospital</h1>
            </div>
            <section className='Sobre-cards'>
                
                <Cards2  icon='assets/images/localCards.png' text='Onde fica o Hospital?' ></Cards2>    
                <Cards2 icon='assets/images/ambulanciaCards.png' text='Onde fica o Hospital?'></Cards2>    
                <Cards2 icon='assets/images/comunicacaoCards.png' text='Onde fica o Hospital?'></Cards2>       
                <Cards2 icon='assets/images/comunicacaoCards.png' text='Onde fica o Hospital?'></Cards2>       
            </section> </>} 
            <div className='titulo-card'>
                <h1>Mercado</h1>
            </div>
            <section className='Sobre-cards'>
                
                <Cards2  icon='assets/images/localCards.png' text='Onde fica o Hospital?' ></Cards2>    
                <Cards2 icon='assets/images/ambulanciaCards.png' text='Onde fica o Hospital?'></Cards2>    
                <Cards2 icon='assets/images/comunicacaoCards.png' text='Onde fica o Hospital?'></Cards2>       
                <Cards2 icon='assets/images/comunicacaoCards.png' text='Onde fica o Hospital?'></Cards2>       
            </section>
            <div className='titulo-card'>
                <h1>Transporte</h1>
            </div>
            <section className='Sobre-cards'>
                
                <Cards2  icon='assets/images/localCards.png' text='Onde fica o Hospital?' ></Cards2>    
                <Cards2 icon='assets/images/ambulanciaCards.png' text='Onde fica o Hospital?'></Cards2>    
                <Cards2 icon='assets/images/comunicacaoCards.png' text='Onde fica o Hospital?'></Cards2>       
                <Cards2 icon='assets/images/comunicacaoCards.png' text='Onde fica o Hospital?'></Cards2>       
            </section>
            <div className='titulo-card'>
                <h1>Alimentação</h1>
            </div>
            <section className='Sobre-cards'>
                
                <Cards2  icon='assets/images/localCards.png' text='Onde fica o Hospital?' ></Cards2>    
                <Cards2 icon='assets/images/ambulanciaCards.png' text='Onde fica o Hospital?'></Cards2>    
                <Cards2 icon='assets/images/comunicacaoCards.png' text='Onde fica o Hospital?'></Cards2>       
                <Cards2 icon='assets/images/comunicacaoCards.png' text='Onde fica o Hospital?'></Cards2>       
            </section> 
            <div className='titulo-card'>
                <h1>Banco</h1>
            </div>
            <section className='Sobre-cards'>
                
                <Cards2  icon='assets/images/localCards.png' text='Onde fica o Hospital?' ></Cards2>    
                <Cards2 icon='assets/images/ambulanciaCards.png' text='Onde fica o Hospital?'></Cards2>    
                <Cards2 icon='assets/images/comunicacaoCards.png' text='Onde fica o Hospital?'></Cards2>      
                <Cards2 icon='assets/images/comunicacaoCards.png' text='Onde fica o Hospital?'></Cards2>      
            </section> 
            <div className='titulo-card'>
                <h1>Polícia</h1>
            </div>
            <section className='Sobre-cards'>
                
                <Cards2  icon='assets/images/localCards.png' text='Onde fica o Hospital?' ></Cards2>    
                <Cards2 icon='assets/images/ambulanciaCards.png' text='Onde fica o Hospital?'></Cards2>    
                <Cards2 icon='assets/images/comunicacaoCards.png' text='Onde fica o Hospital?'></Cards2>       
                <Cards2 icon='assets/images/comunicacaoCards.png' text='Onde fica o Hospital?'></Cards2>       
            </section>    
        </>
    )
}
export default Pagina1