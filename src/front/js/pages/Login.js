import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import micittImageUrl from "../../img/micitt.jpg";
import catImageUrl from "../../img/gato2.jpg";
import { Redirect } from "react-router-dom";

import "../../styles/login.scss";

export const Login = () => {
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

		fetch("https://3000-emerald-jellyfish-qyn0ga41.ws-us03.gitpod.io/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		})
			.then(response => response.json())
			.then(data => {
				console.log("Success:", data);
				sessionStorage.setItem("u_token", data.token);
				setRedirect(true);
			})
			.catch(error => {
				console.error("Error:", error);
			});

		// setRedirect(true);
	};

	return (
		<div className="container register-form">
			<div className="context" />
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

				<div className="text-center mt-5 d-flex justify-content-center align-items-center ">
					<form style={{ width: "500px" }} onSubmit={e => handleSubmit(e)}>
						<div className="form-floating mb-3 ">
							<div className="note">
								<p>Registro en Coder Geeks</p>
							</div>
							<br />
							<div className="form-content container2">
								<div className="row">
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
								<button className="w-100 btnLogin btn-lg btn-primary " type="submit" value="Login">
									Login
								</button>
							</div>
						</div>
						{redirect ? <Redirect to="/" /> : ""}
					</form>
				</div>
			</div>
		</div>
	);
};
