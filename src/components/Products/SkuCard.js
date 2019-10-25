import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: flex-start;
	padding: 1rem;
	margin-bottom: 1rem;
	box-shadow: 5px 5px 25px 0 rgba(46, 61, 73, .2);
	background-color: #fff;
	border-radius: 6px;
	max-width: 300px;
`;

const StyledButton = styled.button`
	font-size: 13px;
	text-align: center;
	color: #fff;
	outline: none;
	padding: 12px;
	box-shadow: 2px, 5px, 10px rgba(0, 0, 0, .1);
	background-color: #077cbc;
	border-radius: 6px;
	letter-spacing: 1.5px;
	&:hover {
		cursor: pointer;
		filter: brightness(105%);
	}
`;

const StyledImage = styled.img`
	height: 20rem;
	width: 15rem;
	&:hover {
		transform: scale(1.05);
		transition: all 500ms;
	}
`;

const formatPrice = (amount, currency) => {
	let price = (amount / 100).toFixed(2);
	let numberFormat = new Intl.NumberFormat([ 'en-US' ], {
		style           : 'currency',
		currency        : currency,
		currencyDisplay : 'symbol'
	});
	return numberFormat.format(price);
};

const SkuCard = class extends React.Component {
	async redirectToCheckout(event, sku, quantity = 1) {
		event.preventDefault();
		const { error } = await this.props.stripe.redirectToCheckout({
			items      : [
				{
					sku,
					quantity
				}
			],
			successUrl : `http://localhost:8000/page-2/`,
			cancelUrl  : `http://localhost:8000/advanced`
		});

		if (error) {
			console.warn('Error:', error);
		}
	}

	render() {
		const sku = this.props.sku;
		return (
			<StyledCard>
				<h4> {sku.attributes.name} </h4> <p> Price: {formatPrice(sku.price, sku.currency)} </p>{' '}
				<StyledImage src={sku.image} alt="" />
				<StyledButton onClick={event => this.redirectToCheckout(event, sku.id)}> BUY ME </StyledButton>{' '}
			</StyledCard>
		);
	}
};

export default SkuCard;

// style={buttonStyles}
