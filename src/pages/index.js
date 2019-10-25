import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Main from '../images/Main.jpg';
import styled from 'styled-components';

const Image = styled.img`
	position: absolute;
	z-index: -1;
	width: 50%;
	height: 25rem;
`;

const StyledButton = styled(Link)`
	font-size: 13px;
	text-align: center;
	color: #fff;
	outline: none;
	padding: 12px;
	margin-top: 2rem;
	text-decoration: none;
	box-shadow: 2px, 5px, 10px rgba(0, 0, 0, .1);
	background-color: #077CBC;
	border-radius: 6px;
	letter-spacing: 1.5px;
	&:hover {
		cursor: pointer;
		filter: brightness(105%);
	}
`;

const StyledBody = styled.div`
	color: white;
	font-size: 2.15rem;
	text-align: center;
	margin: 1rem;
	padding-top: 5rem;
`;

const H1 = styled.h1`
	text-align: center !important;
	color: white;
`;

const IndexPage = () => (
	<Layout>
		<SEO title="Home" keywords={[ `Ecommerce`, `application`, `hoodie`, `test` ]} />
		<H1>Find your favorite Hoodie</H1>
		<StyledBody>
			<p>Stay warm and stylish</p>
			<StyledButton to="/store/"> Shop Now </StyledButton>
		</StyledBody>
	</Layout>
);

export default IndexPage;
