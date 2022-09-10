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
			<h4>{character.name}</h4>
			<img src={character.image} alt={character.name} />
			<p>Status: {character.status}</p>
			<p>Origin: {character.origin?.name}</p>
			<p>Appearances: {character.episode?.length}</p>
		</div>
	);
};

export default ResidentsInfo;
