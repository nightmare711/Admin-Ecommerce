import React from 'react'
import { Link } from 'react-router-dom'
import { Dashboard as DashboardIcon, Person as PersonIcon } from '@mui/icons-material'
import './Sidebar.css'

const listSidebar = [
	{
		title: 'Dashboard',
		icons: <DashboardIcon />,
		to: '/dashboard',
	},
	{
		title: 'Products',
		icons: <PersonIcon />,
		to: '/products',
	},
]

export const Sidebar = () => {
	return (
		<div className='sidebar'>
			<ul className='flex flex-row sidebar__list'>
				{listSidebar.map((nav, key) => (
					<li key={key} className='sidebar__link'>
						<Link to={nav.to}>
							{nav.icons}
							<span className='ml-2'>{nav.title}</span>
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
