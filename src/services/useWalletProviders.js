import React from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { toast } from 'react-toastify'

export const useDisconnectWallet = () => {
	const wallet = useWallet()
	return async () => {
		try {
			if (wallet.status === 'connected') {
				wallet.reset()
			}
			toast.success('Disconnect wallet successfully')
		} catch (err) {
			toast.error('Something went wrong')
		}
	}
}

export const useConnectWallet = () => {
	const wallet = useWallet()
	return async () => {
		if (window.ethereum) {
			if (parseInt(window.ethereum.networkVersion) === 97) {
				if (wallet.status !== 'connected') {
					try {
						await wallet.connect()
						if (window.ethereum?.selectedAddress) {
							toast.success('Connect Metamask successfully')
						} else {
							toast.error('User Rejected')
						}
					} catch (err) {
						toast.error('User Rejected')
					}
				} else {
					toast.error('Wallet connected! Do not try again!')
				}
			} else {
				try {
					// check if the chain to connect to is installed
					await window.ethereum.request({
						method: 'wallet_switchEthereumChain',
						params: [{ chainId: '0x61' }], // chainId must be in hexadecimal numbers
					})
				} catch (error) {
					// This error code indicates that the chain has not been added to MetaMask
					// if it is not, then install it into the user MetaMask
					if (error.code === 4902) {
						try {
							await window.ethereum.request({
								method: 'wallet_addEthereumChain',
								params: [
									{
										chainId: '0x61',
										rpcUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
									},
								],
							})
						} catch (addError) {
							console.error(addError)
						}
					}
					console.error(error)
				}
			}
		} else {
			toast.info('Please install metamask!')
		}
	}
}

export const useCheckAccountActive = () => {
	const [account, setAccount] = React.useState('')
	const wallet = useWallet()
	React.useEffect(() => {
		if (wallet.status === 'connected') {
			setAccount(window.ethereum.selectedAddress)
		} else {
			setAccount('')
		}
	}, [wallet.status])
	return account
}
export const useCheckConnected = () => {
	const [isConnected, setIsConnected] = React.useState(false)
	const wallet = useWallet()
	React.useEffect(() => {
		if (wallet.status === 'connected' || wallet.status === 'error') {
			setIsConnected(true)
		} else {
			setIsConnected(false)
		}
	}, [wallet.status])
	return isConnected
}
