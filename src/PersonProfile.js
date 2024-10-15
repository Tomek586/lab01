import React from 'react';

const PersonProfile = ({ person }) => {
    return (
        <div className="card mb-3" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title">{person.name}</h5>
                <p className="card-text"><strong>ID:</strong> {person.id}</p>
                <p className="card-text"><strong>Data urodzenia:</strong> {person.birth}</p>
                <p className="card-text"><strong>Kolor oczu:</strong> {person.eyes}</p>
                
            </div>
        </div>
    );
};

export default PersonProfile;
