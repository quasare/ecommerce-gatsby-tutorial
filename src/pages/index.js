import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

import Checkout from '../components/checkout';

const IndexPage = () => (
	<Layout>
		<SEO title="Home" keywords={[ `Ecommerce`, `application`, `shirt`, `test` ]} />
		<h1>Look no Further for your Favorite Hoodie</h1>
		<p>Find your favorite Hoodie</p>
		<p>Stay warm and stylish</p>
		<Link to="/advanced/"> Products </Link>
	</Layout>
);

export default IndexPage;
