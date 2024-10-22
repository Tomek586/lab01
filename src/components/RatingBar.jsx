import React from 'react';

const RatingBar = ({ rate }) => {
    const totalStars = 10; // Łączna liczba gwiazdek

    return (
        <div className="rating-bar">
            {Array.from({ length: totalStars }, (_, index) => (
                <span key={index} className="star">
                    {}
                    {index < rate ? '★' : '☆'}
                </span>
            ))}
        </div>
    );
};

export default RatingBar;