import React from 'react';

const FlexContainer = ({ element: Element, data }) => {
    return (
        <div className="container">
            <div className="row">
                {data.map((item, index) => (
                    <div key={index} className="col-md-3 mb-4"> {}
                        <Element {...item} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FlexContainer;
