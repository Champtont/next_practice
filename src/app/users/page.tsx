/* As this is a server side component, you can write fetch functions here */
import React from 'react'
import UserCard from '../component/UserCard/UserCard';

/*With Typescript, we define the shape of the data */
interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        }
    }
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
}

const UsersPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: User[] = await res.json();
    return (
        <>
            <h1>Users</h1>
            <ul>{users.map(user => <UserCard key={user.id} id={user.id} name={user.name} username={user.username} email={user.email} address={{street : user.address.street, suite : user.address.suite, city : user.address.city, zipcode : user.address.zipcode, geo : {lat : user.address.geo.lat, lng : user.address.geo.lng}}} phone={user.phone} website={user.website} company={{
                name: user.company.name,
                catchPhrase: user.company.catchPhrase,
                bs: user.company.bs
            }} />)}</ul>
        </>
    )
}

export default UsersPage