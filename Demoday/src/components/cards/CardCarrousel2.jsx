import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import '../Styles/CardCarrousel.css';
import Card from './Card';

const CardCarousel = () => {
    const cards = [
        { image: 'assets/images/compras.gif', label: 'Compras' },
        { image: 'assets/images/escola.gif', label: 'Escolas' },
        { image: 'assets/images/documento.gif', label: 'Documentos' },
        { image: null, label: 'Alimentação' }, 
        { image: null, label: 'Banco' },
        { image: null, label: 'Polícia' },
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
