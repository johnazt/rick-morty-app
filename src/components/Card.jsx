import React from "react";

const Card = ({data}) => {
	return (
		<div className="card" >
			<h2 className="card__title">{data.name}</h2>
            <ul className="card__info">
                <li><b>Type: </b>{data.type}</li>
                <li><b>Dimension: </b> {data.dimension}</li>
                <li><b>Population: </b> {data.residents && data.residents.length}</li>
            </ul>
		</div>
	);
};

export default Card;
