import React from "react";

const Info = ({ data }) => {
	return (
		<div className="info container-info">
			<ul className="info__list ">
                <li className="info__title">
                    <b>Name:</b><br />{data.name}</li>
				<li>
					<b>Type: </b><br />
					{data.type}
				</li>
				<li>
					<b>Dimension: </b><br /> {data.dimension}
				</li>
				<li>
					<b>Population: </b><br /> {data.residents && data.residents.length}
				</li>
			</ul>
		</div>
	);
};

export default Info;
