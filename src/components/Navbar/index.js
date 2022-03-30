import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavMenu>
				<NavLink to="/">
						Home
					</NavLink>
					<NavLink to="/googlemap">
						Google Map
					</NavLink>
					<NavLink to="/about">
						About
					</NavLink>
					<NavLink to="/contact">
						Contact Us
					</NavLink>
					<NavLink to="/Recycleitems">
					    Recycled Items
					</NavLink>
					<NavLink to="/login">
						Login
					</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
