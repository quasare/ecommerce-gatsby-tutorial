import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import styled from 'styled-components';

const StyledButton = styled(Link)`
	font-size: 13px;
	text-align: center;
	color: #fff;
	outline: none;
	padding: 12px;
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

const Body = styled.div`color: white;`;

const aboutUs = () => (
	<Layout>
		<SEO title="About Us" />
		<Body>
			<h1>About Us</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores dolorum, beatae ipsam corporis cum sit
				fugit aspernatur blanditiis, quaerat cupiditate, labore obcaecati ducimus! Cupiditate hic voluptatem
				commodi deserunt quasi dolorem!
			</p>
			<StyledButton to="/">Home</StyledButton>
		</Body>
	</Layout>
);

export default aboutUs;
