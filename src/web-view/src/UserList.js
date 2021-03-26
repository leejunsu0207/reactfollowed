import React from 'react';

const User = ({user}) =>{
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    );
}

const UserList = ({users}) => {

    return (
        <div>
            {users.map(user=>(
                <User user={user} key={user.id}/>
            ))}

           {/*
                배열 안의 원소가 가지고 있는 고유의 값이 없다면 map()
                함수를 사용 할 때 설정하는 콜백 함수의 두번째 파라미터
                index를 key로 사용하면 된다
            */}
           {/* {users.map((user, index) => (
                <User user={user} key={index} />
            ))}*/}
        </div>
    );
};

export default UserList;