import React, { Component } from "react";
import micittImageUrl from "../../img/micitt.jpg";
import catImageUrl from "../../img/gato2.jpg";
import "../../styles/footer.scss";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<p>
			Made with <i className="fa fa-heart text-danger" /> by{" "}
			<a href="http://www.4geeksacademy.com">4Geeks Academy</a>
			<br />
			<p> Colaboradores</p>
			<a href="https://github.com/leisyarcia">LeisyArcia, </a>
			<a href="https://github.com/diego-sepulveda-lavin"> diego-sepulveda-lavin, </a>
			<a href="https://github.com/tommygonzaleza"> tommygonzaleza, </a>
			<a href="https://github.com/djoker07"> djoker07, </a>
			<a href="https://github.com/alejojimenez"> alejojimenez, </a>
			<a href="https://github.com/mojonapower"> mojonapower, </a>
			<a href="https://github.com/rosinni"> Rosinni Rodríguez, </a>
			<a href="https://github.com/pbullor"> pbullor, </a>
			<a href="https://github.com/ajoseerazo"> ajoseerazo </a>
			<p className="mt-5 mb-3 text-muted ">
				<p>sponsored by</p>
			</p>
			<img id="image" src={micittImageUrl} />
			<img id="image2" src={catImageUrl} />
		</p>
	</footer>
);
