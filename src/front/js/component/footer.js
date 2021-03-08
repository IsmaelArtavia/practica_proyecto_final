import React, { Component } from "react";
import micittImageUrl from "../../img/micitt.jpg";
import catImageUrl from "../../img/gato2.jpg";
import "../../styles/footer.scss";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<p>
			Made with <i className="fa fa-heart text-danger" /> by{" "}
			<a href="http://www.4geeksacademy.com">4Geeks Academy</a>
			<p className="mt-5 mb-3 text-muted">sponsored by</p>
			<img id="image" src={micittImageUrl} />
			<img id="image2" src={catImageUrl} />
		</p>
	</footer>
);
