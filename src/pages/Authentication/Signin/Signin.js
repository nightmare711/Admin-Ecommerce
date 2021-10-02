import React from 'react'
import Logo from 'assets/logo.png'
import { TextField, Button } from '@material-ui/core'
import './Signin.css'

export const Signin = () => {
	return (
		<div className='flex flex-row w-full h-full sign-in'>
			<img
				className='flex-1'
				src='https://codeigniter.spruko.com/valex/ltr/public/assets/img/media/login.png'
				alt='Banner'
			/>
			<div className='flex items-center justify-center w-4/12 h-full left-content bg-primary'>
				<div className='flex flex-col w-9/12'>
					<img
						style={{ width: '200px' }}
						src={'https://templates.iqonic.design/prox/html/assets/images/logo-white.png'}
						alt='logo'
					/>
					<span className='mt-2 text-3xl font-bold text-welcome'>Welcome back!</span>
					<span>Please sign in to continue.</span>
					<TextField
						style={{ flex: 1, marginTop: '20px' }}
						className='w-full'
						id='filled-basic'
						label='Email'
						variant='filled'
						color='secondary'
					/>
					<TextField
						style={{ flex: 1, marginTop: '20px' }}
						className='w-full'
						id='filled-basic'
						label='Password'
						variant='filled'
						color='secondary'
					/>
					<Button size='large' style={{ marginTop: '20px' }} variant='contained' color='primary'>
						Sign in
					</Button>
					<span className='my-4 text-sm font-bold cursor-pointer'>Forget your account?</span>
				</div>
			</div>
		</div>
	)
}
