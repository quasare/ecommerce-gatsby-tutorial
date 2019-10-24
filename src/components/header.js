import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const HeaderStyle = styled.header`
	background: #20232a;
	margin-bottom: 1.45rem;
`;

const StyledLink = styled(Link)`
  color: white;
  padding-right: 1rem;
  text-decoration: none;
  &:hover{
	filter: brightness(105%);
	
  }
  
`;

const Header = ({ siteTitle }) => (
	<HeaderStyle>
		<div
			style={{
				margin   : `0 auto`,
				maxWidth : 960,
				padding  : `1.45rem 1.0875rem`
			}}>
			<h1
				style={{
					margin : 0
				}}>
				<Link
					to="/"
					style={{
						color          : `white`,
						textDecoration : `none`
					}}>
					{' '}
					{siteTitle}{' '}
				</Link>{' '}
			</h1>{' '}
			<StyledLink
				to="/"
				activeStyle={{
					color : '#e5e5e5e5'
				}}>
				{' '}
				Home{' '}
			</StyledLink>{' '}
			<StyledLink
				to="/store"
				activeStyle={{
					color : '#e5e5e5e5'
				}}>
				{' '}
				Store{' '}
			</StyledLink>{' '}
			<StyledLink
				to="/aboutUs/"
				activeStyle={{
					color : '#e5e5e5e5'
				}}>
				About Us
			</StyledLink>
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
