import React from 'react';

const page = ({params}) => {
    return (
        <div>
            <h1>This is edit Component{params.id}</h1>
        </div>
    );
};

export default page;