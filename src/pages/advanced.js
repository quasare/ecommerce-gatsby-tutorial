import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Skus from '../components/Products/Skus';

const AdvancedExamplePage = () => (
	<Layout>
		<SEO title="Shop Hoodies" />
		<h1>Find Hoodies</h1>
		<Skus />
	</Layout>
);

export default AdvancedExamplePage;
