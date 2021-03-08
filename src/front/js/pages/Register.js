import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import micittImageUrl from "../../img/micitt.jpg";
import catImageUrl from "../../img/gato2.jpg";

import "../../styles/register.scss";

export const Register = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");
	const [redirect, setRedirect] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();
		if (email === "" || pass === "") {
			alert("correo y contraseña son requeridos");
		}
		console.log(email, pass);
		// FETCH
		const data = { email: email, password: pass };

		fetch("https://3000-emerald-jellyfish-qyn0ga41.ws-us03.gitpod.io/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		})
			.then(response => response.json())
			.then(data => {
				console.log("Success:", data);
				setRedirect(true);
			})
			.catch(error => {
				console.error("Error:", error);
			});

		// setRedirect(true);
	};

	return (
		<div className="container register-form">
			<div id="particle-container">
				<div className="particle" />
				<div className="particle" />
				<div className="particle" />
				<div className="particle" />
				<div className="particle" />
				<div className="particle" />
				<div className="particle" />
				<div className="particle" />
				<div className="particle" />
				<div className="particle" />
				<div className="particle" />
				<div className="particle" />
				<div className="particle" />
				<div className="particle" />
				<div className="particle" />
				<div className="particle" />
				<div className="particle" />
				<div className="particle" />
				<div className="particle" />
				<div className="particle" />
				<div className="particle" />
				<div className="particle" />
				<div className="particle" />
				<div className="particle" />
				<div className="particle" />
				<div className="particle" />
				<div className="particle" />
				<div className="particle" />
				<div className="particle" />
				<div className="particle" />

				<div className="form">
					<div className="note">
						<p>Registro en Coder Geeks</p>
					</div>
					<br />
					<div className="form-content container2">
						<div className="row">
							<div className="col-md-12">
								<div className="form-group">
									<input
										type="name"
										className="form-control"
										id="floatingName"
										placeholder="Name Last Name"
										onChange={e => setPass(e.target.value)}
									/>
									<label htmlFor="floatingInput">Name</label>
								</div>
							</div>
							<div className="col-md-12">
								<div className="form-group">
									<input
										type="email"
										className="form-control"
										id="floatingInput"
										placeholder="name@example.com"
										onChange={e => setEmail(e.target.value)}
									/>
									<label htmlFor="floatingInput">Email address</label>
								</div>
							</div>
							<div className="col-md-12">
								<div className="form-group">
									<input
										type="password"
										className="form-control"
										id="floatingPassword"
										placeholder="Password"
										onChange={e => setPass(e.target.value)}
									/>
									<label htmlFor="floatingPassword">Password</label>
								</div>
							</div>
						</div>

						<button className="w-100 btnRegister btn-lg btn-primary" type="submit" value="Register">
							Register
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
