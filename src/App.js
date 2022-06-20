import { Switch, Route } from 'react-router-dom'
import {
	Signin as SigninPage,
	Signup as SignupPage,
	Dashboard as DashboardPage,
	Products as ProductsPage,
	Profile as ProfilePage,
} from 'pages'
import { DataContext } from 'context/DataContext'
import { Navbar, Sidebar } from 'components'
import { ToastContainer } from 'react-toastify'
import React from 'react'
import 'react-toastify/dist/ReactToastify.css'
function App() {
	const data = React.useContext(DataContext)
	if (!data.user) {
		return (
			<>
				<div className='flex flex-row h-full App'>
					<div className='flex flex-col flex-1'>
						<Switch>
							<Route component={SignupPage} exact path='/signup' />
							<Route component={SigninPage} />
						</Switch>
					</div>
				</div>
				<ToastContainer
					position='bottom-right'
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>
			</>
		)
	}
	return (
		<>
			<div className='flex flex-row justify-center h-full App'>
				<div className='flex flex-col flex-1 h-full max-w-screen-xl app__width'>
					<Navbar />
					<Sidebar />
					<Switch>
						<Route path='/products' component={ProductsPage} />
						<Route path='/dashboard' component={DashboardPage} />
						<Route path='/profile' component={ProfilePage} />
					</Switch>
					<div
						style={{ fontSize: '14px' }}
						className='flex items-center justify-center my-4 text-center'
					>
						Copyright © 2021{' '}
						<span style={{ color: '#52409B' }} className='ml-2'>
							WastedLands
						</span>
					</div>
				</div>
			</div>
			<ToastContainer
				position='bottom-right'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</>
	)
}

export default App
