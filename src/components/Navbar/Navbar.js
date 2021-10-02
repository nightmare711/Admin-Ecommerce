import React from 'react'
import Logo from 'assets/logo.png'
import SearchIcon from '@mui/icons-material/Search'
import NotificationsIcon from '@mui/icons-material/Notifications'
import './Navbar.css'

export const Navbar = () => {
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
				<img src='https://picsum.photos/200' alt='Avatar' />
			</div>
		</div>
	)
}
