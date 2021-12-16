import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import GitHubIcon from '@mui/icons-material/GitHub'
import './Profile.css'

export const Profile = (props) => {
	return (
		<div className='profile__container'>
			<div id='overlay'>
				<div className='profile__top'>
					<img
						className='profile__img'
						src='https://avatarfiles.alphacoders.com/149/thumb-149567.jpg'
					></img>
					<h2 className='profile__name'>Thien Hoan</h2>
					<div className='email'>
						<h4>@ThienHoanNeee</h4>
						<h4>0xa84...7bf0</h4>
					</div>
					<h5 className='user__bio'>Im a gud boiz</h5>
					<p className='joined__date'>Joined Sep 2021</p>
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
					<input className='user__input' type='text'></input>
					<label>Display name</label>
					<input className='user__input' type='text' value='Thien Hoan'></input>
					<label>Email</label>
					<input
						className='user__input'
						type='email'
						value='nguyenthienhoangeatam@gmail.com'
					></input>
					<label>Bio</label>
					<textarea rows='5' className='user__input' value='I am a gud boiz'></textarea>
					<h1 className='title'>Social media</h1>
					<div className='social'>
						<TwitterIcon className='social__icon' />
						<input className='social__input' type='text' value='Enter twitter'></input>
					</div>
					<div className='social'>
						<FacebookIcon className='social__icon' />
						<input className='social__input' type='text' value='Enter facebook'></input>
					</div>
					<div className='social'>
						<InstagramIcon className='social__icon' />
						<input className='social__input' type='text' value='Enter instagram'></input>
					</div>
					<div className='social'>
						<GitHubIcon className='social__icon' />
						<input className='social__input' type='text' value='Enter github'></input>
					</div>
					<button className='save'>Save Profile</button>
				</form>
			</div>
		</div>
	)
}
