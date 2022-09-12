import { useEffect, useState } from "react";
import Info from "./components/Info";
import ResidentsInfo from "./components/ResidentsInfo";
import Input from "./components/Input";
import axios from "axios";
import "./App.css";

function App() {
	const [location, setLocation] = useState({});
	const [id, setId] = useState("");

	useEffect(() => {
		const randomId = Math.floor(Math.random() * 126) + 1;
		axios
			.get(`https://rickandmortyapi.com/api/location/${randomId}`)
			.then(res => setLocation(res.data));
	}, []);

	const searchById = () => {
		axios
			.get(`https://rickandmortyapi.com/api/location/${id}`)
			.then(res => setLocation(res.data));
	};

	console.log(location);

	return (
		<div className="App">
			

			<Input id={id} setId={setId} searchById={searchById}></Input>

			<Info data={location} />

			<div className="container-characters container-info">
				{location.residents?.map(url => (
					<ResidentsInfo key={url} url={url} />
				))}
			</div>
		</div>
	);
}

export default App;
