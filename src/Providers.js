import React from 'react'
import { DataContext } from 'context/DataContext'
import { BrowserRouter as Router } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

export const Providers = ({ children }) => {
	return (
		<QueryClientProvider client={queryClient}>
			<DataContext.Provider>
				<Router>{children}</Router>
			</DataContext.Provider>
		</QueryClientProvider>
	)
}
