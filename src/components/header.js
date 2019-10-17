import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle }) => (
	<header
		style={{
			background   : `#209CEE`,
			marginBottom : `1.45rem`
		}}>
		<div
			style={{
				margin   : `0 auto`,
				maxWidth : 960,
				padding  : `1.45rem 1.0875rem`
			}}>
			<h1 style={{ margin: 0 }}>
				<Link
					to="/"
					style={{
						color          : `white`,
						textDecoration : `none`
					}}>
					{siteTitle}
				</Link>
			</h1>
			<Link to="/"> Home </Link>
			<Link to="/store"> Store </Link>
			<Link to="/"> Contact Us </Link>
		</div>
	</header>
);

Header.propTypes = {
	siteTitle : PropTypes.string
};

Header.defaultProps = {
	siteTitle : ``
};

export default Header;
