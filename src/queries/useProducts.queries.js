import React from 'react'
import { DataContext } from 'context/DataContext'
import { useQuery } from 'react-query'
import { API_TEST } from 'constants/API'
import { toast } from 'react-toastify'

export const useGetProducts = () => {
	const data = React.useContext(DataContext)
	return useQuery(['useGetProducts.name'], () => {
		return fetch(`${API_TEST}/products/owner/${data.user._id}`)
			.then((res) => res.json())
			.then((result) => result.result)
			.catch((err) => [])
	})
}
export const usePostProduct = (onClose) => {
	const data = React.useContext(DataContext)
	return (info) => {
		fetch(`${API_TEST}/products`, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify({
				...info,
				productOwner: data.user._id,
			}),
		})
			.then((res) => res.json())
			.then((result) => {
				if (result.status === 1) {
					toast.success('Added product')
					onClose()
				} else {
					toast.error(result.message)
				}
			})
			.catch((err) => toast.error(err.message))
	}
}
export const useEditProduct = (onClose) => {
	const data = React.useContext(DataContext)
	return (info) => {
		fetch(`${API_TEST}/products/update/${info._id}`, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify({
				...info,
				productOwner: data.user._id,
			}),
		})
			.then((res) => res.json())
			.then((result) => {
				if (result.status === 1) {
					toast.success(result.message)
					onClose()
				} else {
					toast.error(result.message)
				}
			})
			.catch((err) => toast.error(err.message))
	}
}
export const useGetMostBoughtProduct = () => {
	const data = React.useContext(DataContext)
	return useQuery(['useGetMostBoughtProduct.name'], () => {
		return fetch(`${API_TEST}/products/owner/most/${data.user._id}?size=7`)
			.then((res) => res.json())
			.then((result) => result.result)
			.catch((err) => [])
	})
}
export const useGetHighestPrice = () => {
	const data = React.useContext(DataContext)
	return useQuery(['useGetHighestPrice.name'], () => {
		return fetch(`${API_TEST}/products/owner/price/${data.user._id}?size=7`)
			.then((res) => res.json())
			.then((result) => result.result)
			.catch((err) => [])
	})
}
export const useGetHighestTotalSupply = () => {
	const data = React.useContext(DataContext)
	return useQuery(['useGetMostBoughtProduct.name'], () => {
		return fetch(`${API_TEST}/products/owner/highest-supply/${data.user._id}?size=7`)
			.then((res) => res.json())
			.then((result) => result.result)
			.catch((err) => [])
	})
}
