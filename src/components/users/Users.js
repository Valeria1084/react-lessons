
import React, {useEffect, useState} from 'react';
import {getPost, getUsers} from "../service/user.api.service";
import {User} from "../user/User";

function Users() {
    let[users,setUsers] = useState([])
    let[pst,setPost] = useState(null)
    useEffect(() => { getUsers().then(value => setUsers(value.data))})
    const choosePost =(id) =>{
        getPost(id).then(value => setPost(value.data))
    }
    return (
        <div>
            {pst && (<div>{pst.title}</div>)}

        <hr/>
    {
        users.map(value => <User
    key = {value.id}
    item={value}
    choosePost={choosePost} />)
    }
        </div>
    );
}


export {Users};