import React, { useEffect, useState } from "react";
import axios from "axios";

const ResidentsInfo = ({ url }) => {
	const [character, setCharacter] = useState({});

	useEffect(() => {
		axios.get(url).then(res => setCharacter(res.data));
	}, []);

	console.log(character);

	const setStatusColor = () => {
		switch (character.status) {
			case "Alive":
				return "alive";
			case "Dead":
				return "dead";
			default:
				return "unknown";
		}
	};

	return (
		<div className="character">
			<p className="character__status">
				<span className={`status ${setStatusColor()}`}></span>
				{character.status}
			</p>
			<img
				className="character__img"
				src={character.image}
				alt={character.name}
			/>

			<ul className="character__info">
				<p className="character__name">{character.name}</p>

				<li>
					<span>Specie</span>
					<br />
					{character.species}
				</li>
				<li>
					<span>Origin</span>
					<br />
					{character.origin?.name}
				</li>
				<li>
					<span>Appearances</span>
					<br />
					{character.episode?.length}
				</li>
			</ul>
		</div>
	);
};

export default ResidentsInfo;
