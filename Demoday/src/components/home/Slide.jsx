import { Swiper, SwiperSlide } from "swiper/react"
import '../../App.css'
function Slide() {

    const data = [
        {id: '1', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/08/fullstack-blog.png'},
        {id: '2', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/08/home.png'},
    ]   
    return(
        <div className="container">
            <Swiper
            
            slidesPerView={1}
            pagination={{clickable: true}}
            navigation
            >
                
                {data.map ((item) => (
                    <SwiperSlide key={item.id}>
                        <img src={item.image} alt="Slide" className="slide-item"/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
export default Slide