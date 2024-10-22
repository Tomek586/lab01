import React from 'react';
import FlexContainer from '../components/FlexContainer'; 
import { data } from '../module-data'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 

// Komponent do wyświetlania pojedynczego elementu

const Item = ({ name}) => (
    
    <div className="border mb-3 p-3 ms-3" style={{ width: '18rem' }}>
        <h5 className="text-center">{name}</h5>
    </div>
);

const Lab3Page = () => {
    return (
        <div>
            <h2>Laboratorium 3</h2>
            <FlexContainer element={Item} data={data} />
            
        </div>
    );
};

export default Lab3Page;
