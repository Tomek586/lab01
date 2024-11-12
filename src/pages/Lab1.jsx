import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../module-data";

function Lab1() {
	const { id } = useParams();

	if (!id) return <p>Brak identyfikatora osoby.</p>;

	const osoba = data.find((person) => person.id === parseInt(id));

	if (!osoba) return <p>Nie znaleziono osoby o tym identyfikatorze.</p>;

	return (
		<div className="container">
			<h1 className="text-center my-4">Profil Osoby</h1>
			<div className="person-card">
				<h2>{osoba.name}</h2>
				<p>
					<strong>ID:</strong>{" "}
					{osoba.id}
				</p>
				<p>
					<strong>
						Data urodzenia:
					</strong>{" "}
					{osoba.birth}
				</p>
				<p>
					<strong>Kolor oczu:</strong>{" "}
					{osoba.eyes}
				</p>
				<p>
					<strong>Ocena:</strong>{" "}
					{osoba.rating}
				</p>
			</div>

			{}
			<style jsx>{`
				.person-card {
					border: 1px solid #ccc;
					border-radius: 8px;
					padding: 15px;
					width: 300px;
					margin: auto;
					box-shadow: 0 2px 5px
						rgba(0, 0, 0, 0.1);
					background-color: #f9f9f9;
				}
				h1 {
					text-align: center;
				}
				h2 {
					margin: 0;
					font-size: 1.5em;
				}
				p {
					margin: 5px 0;
				}
			`}</style>
		</div>
	);
}

export default Lab1;
