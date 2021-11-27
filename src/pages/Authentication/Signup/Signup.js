import React from 'react'
import { TextField, Button } from '@material-ui/core'
import { useConnectWallet, useCheckConnected } from 'services/useWalletProviders'
import { useRegister } from 'services/authenticate'

export const Signup = () => {
	const connect = useConnectWallet()
	const isConnect = useCheckConnected()
	const register = useRegister()
	const [info, setInfo] = React.useState({
		first_name: '',
		last_name: '',
		username: '',
		email: '',
		password: '',
		phone_number: '',
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
					<div className='flex flex-row'>
						<TextField
							onChange={(e) =>
								setInfo({
									...info,
									first_name: e.target.value,
								})
							}
							style={{ flex: 1, marginTop: '20px', marginRight: '10px' }}
							className='w-full'
							id='filled-basic'
							label='First Name'
							variant='filled'
							color='secondary'
						/>
						<TextField
							onChange={(e) =>
								setInfo({
									...info,
									last_name: e.target.value,
								})
							}
							style={{ flex: 1, marginTop: '20px', marginLeft: '10px' }}
							className='w-full'
							id='filled-basic'
							label='Last Name'
							variant='filled'
							color='secondary'
						/>
					</div>
					<TextField
						onChange={(e) =>
							setInfo({
								...info,
								username: e.target.value,
							})
						}
						style={{ flex: 1, marginTop: '20px' }}
						className='w-full'
						id='filled-basic'
						label='Username'
						variant='filled'
						color='secondary'
					/>

					<TextField
						onChange={(e) =>
							setInfo({
								...info,
								email: e.target.value,
							})
						}
						style={{ flex: 1, marginTop: '20px' }}
						className='w-full'
						id='filled-basic'
						label='Email'
						variant='filled'
						color='secondary'
					/>
					<TextField
						onChange={(e) =>
							setInfo({
								...info,
								password: e.target.value,
							})
						}
						style={{ flex: 1, marginTop: '20px' }}
						className='w-full'
						id='filled-basic'
						label='Password'
						variant='filled'
						color='secondary'
						type='password'
					/>
					<TextField
						onChange={(e) =>
							setInfo({
								...info,
								phone_number: e.target.value,
							})
						}
						style={{ flex: 1, marginTop: '20px' }}
						className='w-full'
						id='filled-basic'
						label='Phone Number'
						variant='filled'
						color='secondary'
					/>
					{isConnect ? (
						<Button
							onClick={() => register(info)}
							size='large'
							style={{ marginTop: '20px' }}
							variant='contained'
							color='primary'
						>
							Sign up
						</Button>
					) : (
						<Button
							onClick={() => connect()}
							size='large'
							style={{ marginTop: '20px' }}
							variant='contained'
							color='primary'
						>
							Connect metamask
						</Button>
					)}
				</div>
			</div>
		</div>
	)
}
