import React, { useContext } from "react";
import { Context } from "../store/appContext";
import cat2ImageUrl from "../../img/Capture2.jpg";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="bg">
			<div className="bg bg2" />
			<div className="bg bg3" />
			<div className="content">
				<div className="text-center mt-5" />
				<div className="btn-group mt-2 mb-4" role="group" aria-label="actionButtons" />
				<h1>C0der Geek$ </h1>
				<p>
					<img src={cat2ImageUrl} />
				</p>
				<div className="alert alert-info">{store.message || "Loading message from the backend..."}</div>
			</div>
		</div>
	);
};
