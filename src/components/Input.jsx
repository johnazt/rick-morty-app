import React from 'react';

const Input = ({ id, setId, searchById }) => {

    return (
        <div>
            <input type="search" value={id} onChange={e => setId(e.target.value)} />
			<button onClick={searchById}>Search</button>
        </div>
    );
};

export default Input;