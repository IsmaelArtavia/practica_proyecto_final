import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container ">
			<div className="ripple-background">
				<div className="circle xxlarge shade1" />
				<div className="circle xlarge shade2" />
				<div className="circle large shade3" />
				<div className="circle mediun shade4" />
				<div className="circle small shade5" />
			</div>

			<ul className="list-group ">
				{store.demo.map((item, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between list"
							style={{ background: item.background }}>
							<Link to={"/single/" + index}>
								<span>{item.title}</span>
							</Link>
							{// Conditional render example
							// Check to see if the background is orange, if so, display the message
							item.background === "orange" ? <p style={{ color: item.initial }} /> : null}
							<button
								className="btn btn-success btn1"
								onClick={() => actions.changeColor(index, "orange")}>
								Change Color
							</button>
						</li>
					);
				})}
			</ul>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
