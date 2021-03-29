import React, {useCallback, useMemo, useReducer, useRef, useState} from 'react';
import Hello from "./Hello";
import './App.css'
import Wrapper from "./Wrapper";
import Counter from "./Counter";
import InputSample from "./InputSample";
import UserList from "./UserList";
import CreateUser from "./CreateUser";
import useInputs from './hooks/useInputs';
import produce from 'immer';

// const countActiveUsers = (users) => {
//     console.log('활성 사용자 수를 세는중...');
//     return users.filter(user => user.active).length;
// }
function countActiveUsers(users) {
    console.log('활성 사용자 수를 세는중...');
    return users.filter(user => user.active).length;
}

const initialState = {
   /* inputs: {
        username: '',
        email: ''
    },*/
    users: [
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com',
            active: true
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com',
            active: false
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com',
            active: false
        }
    ]
};

function reducer(state, action) {
    switch (action.type) {

       /* case 'CHANGE_INPUT':
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.name]: action.value
                }
            };*/

        case 'CREATE_USER':

            return produce(state, draft => {
                draft.users.push(action.user);
            });
            // return {

               /* inputs: initialState.inputs,
                users: state.users.concat(action.user)*/

                // users: state.users.concat(action.user)

            // };

        case 'TOGGLE_USER':
            // return {
            //     ...state,
            //     users: state.users.map(user =>
            //         user.id === action.id ? { ...user, active: !user.active } : user
            //     )
            // };

            return produce(state, draft => {
                const user = draft.users.find(user => user.id === action.id);
                user.active = !user.active;
            });

        case 'REMOVE_USER':
            // return {
            //     ...state,
            //     users: state.users.filter(user => user.id !== action.id)
            // };
            return produce(state, draft => {
                const index = draft.users.findIndex(user => user.id === action.id);
                draft.users.splice(index, 1);
            });

        default:
            return state;


    }
}

// UserDispatch 라는 이름으로 내보내줍니다.
export const UserDispatch = React.createContext(null);


const App = () => {
    // const [inputs, setInputs] = useState({
    //     username: '',
    //     email: ''
    // });
    // const {username, email} = inputs;

    /*const onChange = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };*/

    /*  const onChange = useCallback(e => {
          const { name, value } = e.target;
          setInputs(inputs => ({
              ...inputs,
              [name]: value
          }));
      }, []);*/

    // const [users, setUsers] = useState([
    //     {
    //         id: 1,
    //         username: 'velopert',
    //         email: 'public.velopert@gmail.com',
    //         active: true
    //     },
    //     {
    //         id: 2,
    //         username: 'tester',
    //         email: 'tester@example.com',
    //         active: false
    //     },
    //     {
    //         id: 3,
    //         username: 'liz',
    //         email: 'liz@example.com',
    //         active: false
    //     }
    // ]);

    /*const nextId = useRef(4);*/
    /*const onCreate = () => {
        const user = {
            id: nextId.current,
            username,
            email
        };
        //setUsers([...users, user]);   // spread 연산자
        setUsers(users.concat(user));    // concat 함수
        setInputs({
            username: '',
            email: ''
        });
        nextId.current += 1;
    };*/
    /*const onCreate = useCallback(() => {
        const user = {
            id: nextId.current,
            username,
            email
        };
        setUsers(users => users.concat(user));

        setInputs({
            username: '',
            email: ''
        });
        nextId.current += 1;
    }, [username, email]);*/

    /*const onRemove = id => {
        // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
        // = user.id 가 id 인 것을 제거함
        setUsers(users.filter(user => user.id !== id))
    };*/

    /* const onRemove = useCallback(id => {
         // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
         // = user.id 가 id 인 것을 제거함
         setUsers(users => users.filter(user => user.id !== id));
     }, []);*/

    /*const onToggle = id => {
        setUsers(
            users.map(user =>
                user.id === id ? {...user, active: !user.active} : user
            )
        );
    };*/
    /* const onToggle = useCallback(id => {
         setUsers(users =>
             users.map(user =>
                 user.id === id ? { ...user, active: !user.active } : user
             )
         );
     }, []);*/


    // const count = useMemo(() => countActiveUsers(users), [users]);

    // const [{ username, email }, onChange, onReset] = useInputs({
    //     username: '',
    //     email: ''
    // });

    const [state, dispatch] = useReducer(reducer, initialState);
    const nextId = useRef(4);

    const { users } = state;
    // const {username, email} = state.inputs;

/*    const onChange = useCallback(e => {
        const {name, value} = e.target;
        dispatch({
            type: 'CHANGE_INPUT',
            name,
            value
        });
    }, []);*/

    // const onCreate = useCallback(() => {
    //     dispatch({
    //         type: 'CREATE_USER',
    //         user: {
    //             id: nextId.current,
    //             username,
    //             email
    //         }
    //     });
    //     onReset();
    //     nextId.current += 1;
    // }, [username, email, onReset]);

    // const onToggle = useCallback(id => {
    //     dispatch({
    //         type: 'TOGGLE_USER',
    //         id
    //     });
    // }, []);
    //
    // const onRemove = useCallback(id => {
    //     dispatch({
    //         type: 'REMOVE_USER',
    //         id
    //     });
    // }, []);

    const count = useMemo(() => countActiveUsers(users), [users]);
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
        /*<>
            <CreateUser
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />
            <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
            <div>활성사용자 수 : {count}</div>
        </>*/

        <UserDispatch.Provider value={dispatch}>
            <CreateUser
                // username={username}
                // email={email}
                // onChange={onChange}
                // onCreate={onCreate}
            />
            <UserList users={users} />
            <div>활성사용자 수 : {count}</div>
        </UserDispatch.Provider>
    );
}

export default App;