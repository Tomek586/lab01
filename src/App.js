import React from 'react';
import { data } from './module-data'; 
import PersonProfile from './PersonProfile'; 

const App = () => {
    return (
        <div className="container">
            <h1 className="text-center my-4">Profile Osób</h1>
            <div className="row">
                {data.map(person => (
                    <div className="col-md-4" key={person.id}> 
                        <PersonProfile person={person} /> 
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
