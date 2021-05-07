
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
	const [click, setCLick] = useState(false);
	const handleClick = () => setCLick(!click);
	const closeMobileMenu = () => setCLick(false);
	return (
		<nav className="navbar">
			<div className="navbar-container">
				<Link to="/" className="navbar-logo">
					HTLD <i className="fab fa-typo3" />
				</Link>

				<div className="menu-icon" onClick={handleClick}>
					<i className={click ? "fas fa-times" : "fas fa-bars"}></i>
				</div>
				<ul className={click ? "nav-menu active" : "nav-menu"}>
					<li className="nav-item">
						<Link to="/" className="nav-links" onClick={closeMobileMenu}>
							Home
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/" className="nav-links" onClick={closeMobileMenu}>
							Services
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/" className="nav-links" onClick={closeMobileMenu}>
							Products
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/" className="nav-links" onClick={closeMobileMenu}>
							Sign Up
						</Link>
					</li>

				</ul>
			
			</div>
		</nav>
	);
}
export default Navbar;