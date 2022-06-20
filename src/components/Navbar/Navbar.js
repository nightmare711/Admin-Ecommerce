import React, { useContext } from 'react'
import Logo from 'assets/logo.png'
import SearchIcon from '@mui/icons-material/Search'
import NotificationsIcon from '@mui/icons-material/Notifications'
import { Link } from 'react-router-dom'
import { DataContext } from 'context/DataContext'
import './Navbar.css'

export const Navbar = () => {
	const data = useContext(DataContext)
	return (
		<div className='flex flex-row items-center justify-between w-full max-w-screen-xl navbar'>
			<img className='navbar__logo' src={Logo} alt='Logo' />
			<div className='flex flex-row items-center navbar__right'>
				<div className='mr-8 navbar__right--icon'>
					<SearchIcon />
				</div>
				<div className='mr-8 navbar__right--icon'>
					<NotificationsIcon />
				</div>
				<div className='relative account-container'>
					<img src='https://picsum.photos/200' alt='Avatar' />
					<div className='pt-7 account'>
						<ul className='account-list'>
							<Link to='/profile'>
								<li>Profile</li>
							</Link>
							<li onClick={() => data.setUser(null)}>Logout</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}
