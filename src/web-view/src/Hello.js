import React from 'react';

const Hello = ({color, name, isSprcial}) => {
    return (
        <div>
            <div style={{color: color}}>
                {/*{isSprcial ? <b>*</b> : null}*/}
                {isSprcial && <b>*</b>}
                안녕하세요 {name}
            </div>
        </div>
    );
};

Hello.defaultProps ={
    name : '이름없음'
}

export default Hello;