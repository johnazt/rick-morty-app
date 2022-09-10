import React, { useEffect, useState } from "react";
import axios from "axios";

const ResidentsInfo = ({ url }) => {
	const [character, setCharacter] = useState({});

	useEffect(() => {
		axios.get(url).then(res => setCharacter(res.data));
	}, []);

	console.log(character);

	return (
		<div className="character">
			<p>Status: {character.status}</p>
			<img src={character.image} alt={character.name} />
			<h4>{character.name}</h4>
			<ul>
				<li><span>Specie:</span>{character.species}</li>
				<li><span>Origin:</span>{character.origin?.name}</li>
				<li><span>Appearances:</span>{character.episode?.length}</li>
			</ul>
			
		</div>
	);
};

export default ResidentsInfo;
