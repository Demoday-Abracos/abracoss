import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import '../Styles/CardCarrousel.css';
import Card from './Card';

const CardCarousel = () => {
    const cards = [
        { image: 'assets/images/maca.gif', label: 'Alimentação' },
        { image: 'assets/images/banco.gif', label: 'Banco' },
        { image: 'assets/images/policia.gif', label: 'Polícia' },
        { image: null, label: 'Alimentação' }, 
        { image: null, label: 'Banco' },
        { image: null, label: 'Polícia' },
        { image: null, label: 'Compras' },
        { image: null, label: 'Escola' },
        { image: null, label: 'Documentos' },
    ];

    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={3}
            navigation
            loop={true}
            style={{ width: '80%', margin: '0 auto' }}
        >
            {cards.map((card, index) => (
                <SwiperSlide key={index}>
                    <Card image={card.image} label={card.label} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default CardCarousel;
