import React from 'react'
import './HeaderPage.css'

export const HeaderPage = ({ title, route }) => {
	return (
		<div className='header-page'>
			<span className='tile'>Welcome to {title}</span>
			<div className='route'>
				<span className='route__extend'>Home</span>
				{route ? <span>/</span> : null}
				{route ? <span className='route__main'>{route}</span> : null}
			</div>
		</div>
	)
}
