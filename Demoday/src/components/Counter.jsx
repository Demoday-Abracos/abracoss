import React, { useEffect, useRef, useState } from 'react';
import './Styles/Counter.css';

const Counter = ({ endValue, text }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [count, setCount] = useState(0);
    const counterRef = useRef(null);

    // Função para detectar se o elemento está no viewport
    const isElementInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    // Função para animar a contagem
    const animateCounter = (start, end, duration) => {
        let startTime = null;

        const step = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = currentTime - startTime;
            const currentValue = Math.min(Math.floor((progress / duration) * (end - start) + start), end);
            setCount(currentValue);

            if (currentValue < end) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    };

    useEffect(() => {
        // Função para verificar se o elemento está visível ao rolar a página
        const handleScroll = () => {
            if (counterRef.current && isElementInViewport(counterRef.current) && !isVisible) {
                setIsVisible(true);
                animateCounter(0, endValue, 2000); // 2000ms = 2 segundos para a contagem
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isVisible, endValue]);

    return (
        <>
            <section className='coounter'>
                <div ref={counterRef} className={`counter ${isVisible ? 'show' : ''}`}>
                    <h1>{count}</h1>
                    <p>{text}</p>
                </div>
            </section>
            
        </>
    );
};

export default Counter;
