/* eslint-disable no-restricted-globals */
import React from 'react'
import { API_TEST } from 'constants/API'
import { DataContext } from 'context/DataContext'
import WALABI from 'constants/WAL.json'
import { getContract, getWeb3 } from 'services/utils/getWeb3'
import { WAL_ADDRESS } from 'constants/addresses'
import { toast } from 'react-toastify'
import { onCheckStatusOfTransaction } from './utils/checkStatus'

const web3 = getWeb3()
export const useLogin = () => {
	const data = React.useContext(DataContext)
	return (info) => {
		return fetch(`${API_TEST}/users/login`, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(info),
		})
			.then((res) => res.json())
			.then((result) => {
				if (result.status === 1) {
					data.setUser(result.result)
					toast.success('Login successful')
				} else {
					toast.error(result.message)
				}
			})
			.catch((err) => toast.error(err.message))
	}
}

export const useRegister = () => {
	return async (info) => {
		const wacContract = getContract(WALABI, WAL_ADDRESS)
		const contractData = wacContract.methods
			.transfer('0xd10858A28260638524FE442F6c266dd153d6f46F', web3.utils.toBN(200 * 10 ** 18))
			.encodeABI()
		const params = [
			{
				from: window.ethereum?.selectedAddress,
				to: WAL_ADDRESS,
				data: contractData,
			},
		]
		fetch(`${API_TEST}/users/validate`, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(info),
		})
			.then((response) => response.json())
			.then((validate) => {
				if (validate.status === 1) {
					window.ethereum
						?.request({
							method: 'eth_sendTransaction',
							params: params,
						})
						.then(async (res) => {
							if (res) {
								toast.success('Transaction submitted')
								const status = await onCheckStatusOfTransaction(res)
								if (status) {
									await fetch(`${API_TEST}/users/register`, {
										headers: {
											'Content-type': 'application/json',
										},
										method: 'POST',
										body: JSON.stringify(info),
									})
									toast.success('Claim wasted hero successfully')
									location.href = '/signin'
								} else {
									toast.error('Something went wrong')
								}
							} else {
								toast.error('User rejected')
							}
						})
						.catch((err) => {
							console.log(err)
							toast.error('User rejected')
						})
				} else {
					toast.error(validate.message)
				}
			})
			.catch((err) => toast.error(err.message))
	}
}
export const useLogout = () => {
	const data = React.useContext(DataContext)
	return () => {
		data.setUser(null)
		toast.success('Logout successful')
	}
}
