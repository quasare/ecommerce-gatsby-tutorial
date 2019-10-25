import React, { Component } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import SkuCard from './SkuCard';
import styled from 'styled-components';

const conatinerStyles = {
	display        : 'flex',
	flexDirection  : 'row',
	flexWrap       : 'wrap',
	justifyContent : 'space-between',
	padding        : '1rem 0 1rem 0'
};

const Conatainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	padding: 1rem 0 1rem 0;
	@media (max-width: 768px) {justify-content: center !important;}
	
`;



class Skus extends Component {
	// Initialise Stripe.js with your publishable key.
	// You can find your key in the Dashboard:
	// https://dashboard.stripe.com/account/apikeys
	state = {
		stripe : null
	};
	componentDidMount() {
		const stripe = window.Stripe('pk_test_ZBwOYcZOBbFzpgkWJ0pTBNX5006OBMpJ5h');
		this.setState({ stripe });
	}

	render() {
		return (
			<StaticQuery
				query={graphql`
					query SkusForProduct {
						skus: allStripeSku {
							edges {
								node {
									id
									currency
									price
									image
									attributes {
										name
									}
									inventory {
										type
									}
								}
							}
						}
					}
				`}
				render={({ skus }) => (
					<Conatainer style={conatinerStyles}>
						{skus.edges.map(({ node: sku }) => (
							<SkuCard key={sku.id} sku={sku} stripe={this.state.stripe} />
						))}
					</Conatainer>
				)}
			/>
		);
	}
}

export default Skus;
