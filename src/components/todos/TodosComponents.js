
import React, {useEffect, useState} from 'react';

import {getTodos} from "../../services";
import {Todos} from "./Todos";

function TodosComponents() {
    const [todos,setTodos]= useState([])

    useEffect(()=>{
        getTodos().then(value => setTodos([...value]))
    },[])
    return (
        <div>
            {
                todos.map(value => <Todos item ={value} key = {value.id}/> )
            }
        </div>
    );
}

export {TodosComponents};