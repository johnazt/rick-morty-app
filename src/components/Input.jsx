import React from "react";

const Input = ({ id, setId, searchById }) => {
	return (
		<div className="container-input">
			<div className="container__title"></div>
			<div className="container__search-bar container-info">
				<input
					className="input"
					placeholder="Type a number between 1 and 126"
					type="search"
					value={id}
					onChange={e => setId(e.target.value)}
				/>
				<button className="btn-input" onClick={searchById}>
					Search
				</button>
			</div>
		</div>
	);
};

export default Input;
