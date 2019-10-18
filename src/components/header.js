import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';


const HeaderStyle = styled.header`
  background: #20232a;
  margin-bottom: 1.45rem
`;

const StyledLink = styled(Link)`
  color: white;
  padding-right: 1rem;
  text-decoration: none;
  &:hover{
	filter: brightness(105%);
  }
  
`

const Header = ({ siteTitle }) => (
	<HeaderStyle>
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
			<StyledLink to="/"  activeStyle={{ color: "blue" }}> Home </StyledLink>
			<StyledLink to="/store" activeStyle={{ color: "blue" }} > Store </StyledLink>
			<StyledLink to="/" activeStyle={{ color: "blue" }}> Contact Us </StyledLink>
		</div>
	</HeaderStyle>
);

Header.propTypes = {
	siteTitle : PropTypes.string
};

Header.defaultProps = {
	siteTitle : ``
};

export default Header;
