import React, {useContext, useEffect} from 'react';
import {UserDispatch} from "./App";

const User = React.memo(({user/* onRemove, onToggle*/}) => {
    /*useEffect(() => {
        console.log('user 값이 설정됨');
        console.log(user);
        return () => {
            console.log('user 가 바뀌기 전..');
            console.log(user);
        };
    }, [user]);*/
    useEffect(() => {
       console.log(user);
    });

    const dispatch = useContext(UserDispatch);

    return (
      /*  <div>
            <b
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'green' : 'black'
                }}
                onClick={() => onToggle(user.id)}
            >
                {user.username}
            </b>
            &nbsp;
            <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>*/
        <div>
            <b
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'green' : 'black'
                }}
                onClick={() => {
                    dispatch({ type: 'TOGGLE_USER', id: user.id});
                }}
            >
                {user.username}
            </b>
            &nbsp;
            <span>({user.email})</span>
            <button onClick={() => {
                dispatch({ type: 'REMOVE_USER', id: user.id });
            }}>삭제</button>
        </div>
    );
});

const UserList = ({users/*, onRemove, onToggle*/}) => {

    return (
        <div>
           {/* {users.map(user => (
                <User
                    user={user}
                    key={user.id}
                    onRemove={onRemove}
                    onToggle={onToggle}
                />
            ))}*/}


            {users.map(user => (
                <User user={user} key={user.id} />
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

export default React.memo(UserList);