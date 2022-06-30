import React, {useEffect, useState} from 'react';
import {UserDetails} from "../userDetails/UserDetails";
import {User} from "../user/User";
function Users() {
    const [users,setUsers]= useState([])
    const [user,setUser] =useState(null)
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response =>response.json())
            .then(value => setUsers(value))

    },[])
    const userButton = (item)=>{
        setUser(item)
    }
    return (
 <div>
     {user && <UserDetails
         user={user}/> }
     {
         users.map(user => <User key ={user.id}
         item={user}
         userButton={userButton}/> )
     }
        </div>
    );
}

export {Users};