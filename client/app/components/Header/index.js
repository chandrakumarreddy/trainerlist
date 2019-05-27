import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default function Header() {
	return (
		<nav
			className="navbar navbar-custom"
			role="navigation"
			aria-label="main navigation"
		>
			<div className="container">
				<div className="navbar-brand">
					<Link
						className="navbar-item button-transparent-brand"
						to="/"
					>
						Tutioner
					</Link>

					<a
						role="button"
						className="navbar-burger burger"
						aria-label="menu"
						aria-expanded="false"
						data-target="navbarBasicExample"
					>
						<span aria-hidden="true" />
						<span aria-hidden="true" />
						<span aria-hidden="true" />
					</a>
				</div>

				<div id="navbarBasicExample" className="navbar-menu">
					<div className="navbar-end">
						<div className="navbar-item">
							<div className="buttons">
								<Link className="button-transparent" to="/profile">
									Profile
								</Link>
								{/* <Link
									className=" button-transparent"
									to="/register"
								>
									Register
								</Link> */}
								<Link
									className="button-transparent"
									to="/adminlogin"
								>
									Register
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}
