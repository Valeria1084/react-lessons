import React, {useEffect, useState} from 'react';
import {Rocket} from "../rocket/Rocket";

function Rockets() {
    const [rockets ,setRocket] = useState([])
    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(response =>response.json())
            .then(value => setRocket(value))
    },[])
    return (
        <div>
            {
            rockets.filter(value => value.launch_year !=='2020').map((rocket ,index) =><Rocket key ={index} item ={rocket}/>)
            }

        </div>
    );
}

export {Rockets};