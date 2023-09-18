import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Header = ({ data }) => {
	const [activeMenu, setActiveMenu] = React.useState(0);

	const handleMenuClick = (index) => {
		setActiveMenu(index);
	};

	return (
		<header>
			<img src={logo} alt="logo" />
			<nav>
				<Link
					to="/"
					onClick={() => handleMenuClick(0)}
					className={activeMenu === 0 ? 'active' : ''}
				>
					Photos
				</Link>
				<Link
					to="/picolocal"
					onClick={() => handleMenuClick(1)}
					className={activeMenu === 1 ? 'active' : ''}
				>
					Picolocal
				</Link>
			</nav>
		</header>
	);
};

export default Header;
