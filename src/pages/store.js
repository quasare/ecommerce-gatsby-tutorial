import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Skus from '../components/Products/Skus';
import styled from 'styled-components';

const H1 = styled.h1`color: white;`;

const Body = styled.div`

`;

const AdvancedExamplePage = () => (
	<Layout>
		<SEO title="Shop Hoodies" />
		<H1>Find Your Hoodies</H1>
		<Body>
			<Skus />
		</Body>
	</Layout>
);

export default AdvancedExamplePage;
