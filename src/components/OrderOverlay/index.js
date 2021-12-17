import React from 'react'
import { onMoveAnimation } from 'services/useDevelopUI'
import './OrderOverlay.css'

export const OrderOverlay = ({ order }) => {
	return (
		<div id='order-overlay' className='order-overlay'>
			<div onClick={() => onMoveAnimation('order-overlay', 'moveOutOpacity')} className='overlay' />
			<div className='order-container'>
				<span className='title'>Order Overlay</span>
				<div className='info-container'>
					<span className='subtitle'>Name: </span>
					<span className='subtitle-attr'>{order?.name}</span>
				</div>
				<div className='info-container'>
					<span className='subtitle'>Quantity: </span>
					<span className='subtitle-attr'>{order?.count}</span>
				</div>
				<div className='info-container'>
					<span className='subtitle'>Price: </span>
					<span className='subtitle-attr'>{order?.price}</span>
				</div>
				<div className='info-container'>
					<span className='subtitle'>Price in Coin: </span>
					<span className='subtitle-attr'>{order?.price_coin}</span>
				</div>
				<div className='info-container'>
					<span className='subtitle'>Product Id: </span>
					<span className='subtitle-attr'>{order?._id}</span>
				</div>
				<img src={order?.image} alt='Product' />
			</div>
		</div>
	)
}
