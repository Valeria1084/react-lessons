import React from 'react';

function Todos({item}) {
    return (
        <div>
            <h3>{item.id} - {item.title}</h3>
        </div>
    );
}

export {Todos};