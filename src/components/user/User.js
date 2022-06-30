import React from 'react';

function User({item,choosePost}) {
    return (
        <div>
            <h2>{item.id} - {item.name}</h2>
            <button onClick={ () => {
                choosePost(item.id)
            }}>Posts</button>
        </div>
    );
}

export {User};