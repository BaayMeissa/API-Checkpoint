import UserCard from './components/UserCard';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


const UserList = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    useEffect(()=>{
        const fetchData = ()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {setData(response.data)})
        .catch((error)=>{setError(error)})
        }
        fetchData()
    },[])
    
    if(error){
        return(
            <div>{error}</div>
        )
    }
    return(
        <>
            {data.map((user,index)=>(
                <UserCard
                name  = {user.name}
                email = {user.email}
                username = {user.username}
                adresse = {user.address.street}
                phone = {user.phone}/>
            ))}
            
        </>
)
}


export default UserList;