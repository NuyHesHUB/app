import React from 'react';
/* import Users from '../pages/Users'; */

const UserList = ({users}) => {
    return (
        <div className='container'>
            {users.map((user) => {
                return(
                    <div className='card' key={user.id}>
                        <div className='card-body'>
                            {user.name}
                        </div>
                    </div>
                )
            })}
            
        </div>
    );
};

export default UserList;