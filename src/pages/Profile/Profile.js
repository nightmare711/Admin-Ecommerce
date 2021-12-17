import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import GitHubIcon from '@mui/icons-material/GitHub'
import { useGetUserById, useUpdateUser } from 'queries/useUsers'
import { DataContext } from 'context/DataContext'
import './Profile.css'

export const Profile = (props) => {
	const { data: user, refetch } = useGetUserById()
	const data = React.useContext(DataContext)
	const onUpdateUser = useUpdateUser()
	return (
		<div className='profile__container'>
			<div id='overlay'>
				<div className='profile__top'>
					<img
						className='profile__img'
						src='https://avatarfiles.alphacoders.com/149/thumb-149567.jpg'
						alt='Avatar'
					/>
					<h2 className='profile__name'>{user?.username}</h2>
					<div className='email'>
						<h4>{user?.email || '...'}</h4>
						<h4>{user?.address_metamask || '...'}</h4>
					</div>
					<h5 className='user__bio'>{user?.bio || '...'}</h5>
					<p className='joined__date'>{user?.createdAt || '...'}</p>
					<div className='statistical'>
						<div className='items'>
							<h2 className='number'>3,535</h2>
							<h5 className='text'>Items</h5>
						</div>
						<div className='items'>
							<h2 className='number'>12,9m</h2>
							<h5 className='text'>Volumn Traded</h5>
						</div>
						<div className='items'>
							<h2 className='number'>3,535</h2>
							<h5 className='text'>Created</h5>
						</div>
						<div className='items'>
							<h2 className='number'>3,535</h2>
							<h5 className='text'>Rank</h5>
						</div>
					</div>
				</div>
			</div>
			<div className='profile__detail'>
				<h1 className='title'>Profile details</h1>
				<form className='user__form'>
					<label>Username</label>
					<input
						className='user__input'
						value={data.user?.username}
						onChange={(e) => data.setUser({ ...data.user, username: e.target.value })}
						type='text'
					></input>
					<label>Display name</label>
					<input
						className='user__input'
						type='text'
						value={data.user?.last_name}
						onChange={(e) => data.setUser({ ...data.user, last_name: e.target.value })}
					></input>
					<label>Email</label>
					<input
						className='user__input'
						type='email'
						value={data.user?.email}
						onChange={(e) => data.setUser({ ...data.user, email: e.target.value })}
					></input>
					<label>Bio</label>
					<textarea
						rows='5'
						className='user__input'
						value={data.user?.bio}
						onChange={(e) => data.setUser({ ...data.user, bio: e.target.value })}
					></textarea>
					<h1 className='title'>Social media</h1>
					<div className='social'>
						<TwitterIcon className='social__icon' />
						<input className='social__input' type='text' value='Enter twitter'></input>
					</div>
					<div className='social'>
						<FacebookIcon className='social__icon' />
						<input
							value={data.user?.facebook}
							onChange={(e) => data.setUser({ ...data.user, facebook: e.target.value })}
							className='social__input'
							type='text'
						></input>
					</div>
					<div className='social'>
						<InstagramIcon className='social__icon' />
						<input
							className='social__input'
							type='text'
							value={data.user?.instagram}
							onChange={(e) => data.setUser({ ...data.user, instagram: e.target.value })}
						></input>
					</div>
					<div className='social'>
						<GitHubIcon className='social__icon' />
						<input className='social__input' type='text' value='Enter github'></input>
					</div>
					<button
						onClick={async (e) => {
							e.preventDefault()
							await onUpdateUser(data.user)
							refetch()
						}}
						className='save'
					>
						Save Profile
					</button>
				</form>
			</div>
		</div>
	)
}
