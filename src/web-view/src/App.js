import React, {useRef, useState} from 'react';
import Hello from "./Hello";
import './App.css'
import Wrapper from "./Wrapper";
import Counter from "./Counter";
import InputSample from "./InputSample";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

const App = () => {
    const [inputs, setInputs] = useState({
        username: '',
        email: ''
    });
    const {username, email} = inputs;
    const onChange = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };
    const [users, setUsers] = useState([
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com'
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com'
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com'
        }

    ]);

    const nextId = useRef(4);
    const onCreate = () => {
        const user ={
            id: nextId.current,
            username,
            email
        };
        //setUsers([...users, user]);
        setUsers(users.concat(user))
        setInputs({
            username: '',
            email: ''
        });
        nextId.current += 1;
    }

    return (
        // Hello.js
        /*<div>
            <Hello name={"react"} color={"red"}/>
            <Hello color={"pink"}/>
            <div style={style}>{name}</div>
            <div className="gray-box"></div>
        </div>*/

        // Wrapper.js
        /*<Wrapper>
            <Hello name={"react"} color={"red"} isSprcial/>
            <Hello color={"pink"}/>
        </Wrapper>*/

        // Counter.js
        /*<Counter/>*/

        // InputSample.js
        /*<InputSample/>*/

        // UserList.js
        <>
            <CreateUser
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />
            <UserList users={users}/>
        </>
    );
};

export default App;