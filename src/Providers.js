import React from 'react'
import { DataContext } from 'context/DataContext'
import { BrowserRouter as Router } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { getNodeUrl } from 'services/utils/getRpcUrl'
import bsc, { UseWalletProvider } from '@binance-chain/bsc-use-wallet'

const queryClient = new QueryClient()
const rpcUrl = getNodeUrl()

export const Providers = ({ children }) => {
	const [user, setUser] = React.useState(null)
	return (
		<UseWalletProvider
			chainId={parseInt(97)}
			connectors={{
				walletconnect: { rpcUrl },
				bsc,
			}}
		>
			<QueryClientProvider client={queryClient}>
				<DataContext.Provider value={{ user, setUser }}>
					<Router>{children}</Router>
				</DataContext.Provider>
			</QueryClientProvider>
		</UseWalletProvider>
	)
}
