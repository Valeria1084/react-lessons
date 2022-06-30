import React from 'react';

function Rocket({item:{mission_name,launch_year,links:{mission_patch_small}}}) {
    return (
        <div>
            <h1>{mission_name}</h1>
            <h3>{launch_year}</h3>
            <img src={mission_patch_small} alt=""/>
        </div>
    );
}

export {Rocket};