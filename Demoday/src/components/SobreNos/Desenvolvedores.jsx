import '../Styles/SobreNos.css'
 

function Desenvolvedores ({imagens, texto,titulo ,foto1, foto2 ,texto2}) {
    return (
        <>
        <div className='Fundoslaranja'>
            <div>
                <img src={imagens} alt="" />
            </div>
            <div>
                <h1>{titulo}</h1>
                <div>
                    <img src={foto1} alt="" />
                    <img src={foto2} alt="" />
                </div>

                <p>
                {texto}
                </p>

                <p className='textoazul'>{texto2}</p>
            </div>


        </div>
        </>
    )
}

export default Desenvolvedores