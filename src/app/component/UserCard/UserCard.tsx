//an example of CSS styling modules
import React from 'react'
import styles from "./UserCard.module.css"

interface UserCardprops {
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

const UserCard: React.FC<UserCardprops> = (UserCardprops) => {
  return (
    <div className={styles.userCard}>
        <div className={styles.userCardTop}>
            <h2>{UserCardprops.name}</h2>
        </div>
        <div className={styles.userCardBottom}>
            <div className={styles.userCardBottomItem}>
                <div>City:</div>
                {UserCardprops.address.city}
            </div>
            <div className={styles.userCardBottomItem}>
                <div>Company</div>
                {UserCardprops.company.name}
            </div>
            <div className={styles.userCardBottomItem}>
                <div>Email</div>
                {UserCardprops.email}
            </div>
        </div>
    </div>
  )
}

export default UserCard