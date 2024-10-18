import React from 'react';

const Card = ({ image, label }) => {
    return (
        <div className="card">
            <div className="icon">
                {image ? (
                    <img className="img-card" src={image} alt={label} />
                ) : (
                    <span className="default-icon">{label}</span>
                )}
            </div>
            <div>{label}</div>
        </div>
    );
};

export default Card;
