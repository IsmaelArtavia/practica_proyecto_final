import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";

export const Navbar = () => {
	return (
		<nav className="navbar  nav navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand  mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn check ">Check the Context in action</button>
				</Link>
				<Link to="/Login">
					<button className="btn log ">Login</button>
				</Link>
				<Link to="/Register">
					<button className="btn reg ">Register</button>
				</Link>
			</div>
		</nav>
	);
};
