import React from 'react'
import { TextField, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { useLogin } from 'services/authenticate'
import './Signin.css'

export const Signin = () => {
	const login = useLogin()
	const [info, setInfo] = React.useState({
		username: '',
		password: '',
	})
	const [error, setError] = React.useState({
		username: false,
		password: false,
	})
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
						className='w-full username-input'
						id='filled-basic'
						label='Email'
						variant='filled'
						color='secondary'
						error={error.username}
						onChange={(e) => setInfo({ ...info, username: e.target.value })}
					/>
					<TextField
						style={{ flex: 1, marginTop: '20px' }}
						className='w-full username-input'
						id='filled-basic'
						label='Password'
						variant='filled'
						color='secondary'
						type='password'
						error={error.password}
						onChange={(e) => setInfo({ ...info, password: e.target.value })}
					/>
					<Button
						onClick={() => {
							var errorTemp = error
							if (!info.username) {
								errorTemp = { ...errorTemp, username: true }
							} else {
								errorTemp = { ...error, username: false }
							}
							if (!info.password) {
								errorTemp = { ...errorTemp, password: true }
							} else {
								errorTemp = { ...errorTemp, password: false }
							}
							setError(errorTemp)
							if (!errorTemp.username && !errorTemp.password) {
								login(info)
							}
						}}
						size='large'
						style={{ marginTop: '20px' }}
						variant='contained'
						color='primary'
					>
						Sign in
					</Button>
					<Link to='/signup' className='my-4 text-sm font-bold cursor-pointer'>
						Do not have account?
					</Link>
				</div>
			</div>
		</div>
	)
}
