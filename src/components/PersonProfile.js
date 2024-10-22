import React, { useState } from 'react';
import RatingBar from './RatingBar'; // Upewnij się, że ścieżka jest poprawna

const PersonProfile = ({ person, onEdit, onDelete }) => {
    // Stan dla rankingu
    const [rating, setRating] = useState(person.rating);

    const handleRate = () => {
        if (rating === 10) {
            setRating(0); 
        } else {
            setRating((prevRating) => Math.min(prevRating + 1, 10)); 
        }
    };

    return (
        <div className="card mb-3" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title">{person.name}</h5>
                <p className="card-text"><strong>ID:</strong> {person.id}</p>
                <p className="card-text"><strong>Data urodzenia:</strong> {person.birth}</p>
                <p className="card-text"><strong>Kolor oczu:</strong> {person.eyes}</p>
                
                {}
                <RatingBar rate={rating} />
                
                <p className="card-text"><strong>Ocena:</strong> {rating}/10</p>

                <div className="d-flex justify-content-between mt-3">
                    {/* Przycisk Edit */}
                    <button 
                        className="btn btn-warning" 
                        onClick={() => onEdit(person.id)}>
                        Edit
                    </button>
                    
                    {/* Przycisk Delete */}
                    <button 
                        className="btn btn-danger" 
                        onClick={() => onDelete(person.id)}>
                        Delete
                    </button>
                    
                    {/* Przycisk Rate */}
                    <button 
                        className="btn btn-primary" 
                        onClick={handleRate}>
                        Rate
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PersonProfile;
