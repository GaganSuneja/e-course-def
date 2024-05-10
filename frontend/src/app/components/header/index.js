import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { logout } from '../login/action';
import { useDispatch } from 'react-redux';

const Header = () => {
	const showHeader = useSelector((state) => state.HeaderFooter.showHeader);
	const isUserLoggedIn = useSelector((state) => state.user.userLoggedIn);
	const dispatch = useDispatch();
	if (showHeader) {
		return (
			<nav className="navbar navbar-expand-sm custom-nav" style={{ fontFamily: 'Rubik' }}>
				<Link className="navbar-brand logo-url-spacing" to="/course">
					<img width="52%" src="../../assets/logo.png"/>
				</Link>
				<div style={{float:'right'}}>
					<ul className="navbar-nav color-black url-spacing">
						{/* <li className="nav-item">
						<Link className="nav-link" to="/home">
							HOME
						</Link>
					</li> */}
						<li className="nav-item">
							<Link className="nav-link" to="/about-us">
								ABOUT US
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/our-vision">
								OUR VISION
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/course">
								THE COURSE
							</Link>
						</li>
						{
							isUserLoggedIn &&
							(<li className="nav-item">
								<Link className="nav-link" to="/profile"> PROFILE</Link>
							</li>)
						}
						{
							isUserLoggedIn &&
							(<li className="nav-item">
								<a className="nav-link" onClick={logout(dispatch)}> LOG OUT</a>
							</li>)
						}
					</ul>
				</div>
			</nav>
		);
	}

	return null;
};


export default connect(null, { logout })(Header);

