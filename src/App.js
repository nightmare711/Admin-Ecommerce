import { Switch, Route } from 'react-router-dom'
import { Signin as SigninPage, Dashboard as DasboardPage } from 'pages'
import { Navbar, Sidebar } from 'components'
import React from 'react'
function App() {
	if (false) {
		return (
			<div className='flex flex-row h-full App'>
				<div className='flex flex-col flex-1'>
					<Switch>
						<Route component={SigninPage} />
					</Switch>
				</div>
			</div>
		)
	}
	return (
		<div className='flex flex-row justify-center h-full App'>
			<div className='flex flex-col flex-1 h-full max-w-screen-xl app__width'>
				<Navbar />
				<Sidebar />
				<Switch>
					<Route path='/dashboard' component={DasboardPage} />
				</Switch>
			</div>
		</div>
	)
}

export default App
