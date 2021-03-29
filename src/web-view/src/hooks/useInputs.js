
import React, {useCallback, useReducer, useState} from 'react';
/*

function reducer(state, action){
    switch (action.type){
        case 'CHANGE_INPUT':
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.name]: action.value
                }
            };

        default:
            return state;
    }
}

const UseInputs = (initialForm) => {

    const [form, setForm] = useState(initialForm);
    const [state, dispatch] = useReducer(reducer, initialForm);
    // change
    /!*const onChange = useCallback(e =>{
        const {name, value} = e.target;
        setForm(form => ({...form, [name]: value}));
    }, []);*!/

    const onChange = useCallback(e => {
        const {name, value} = e.target;
        dispatch({
            type: 'CHANGE_INPUT',
            name,
            value
        });
    }, []);


    const reset = useCallback(()=> dispatch(initialForm), [initialForm]);

    return[state, onChange, reset];
};

export default UseInputs;*/

function useInputs(initialForm) {
    const [form, setForm] = useState(initialForm);
    // change
    const onChange = useCallback(e => {
        const { name, value } = e.target;
        setForm(form => ({ ...form, [name]: value }));
    }, []);
    const onReset = useCallback(() => setForm(initialForm), [initialForm]);
    return [form, onChange, onReset];
}

export default useInputs;
