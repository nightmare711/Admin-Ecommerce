import React from 'react'
import { DataContext } from 'context/DataContext'
import { API_TEST } from 'constants/API'
import { toast } from 'react-toastify'
import { useQuery } from 'react-query'

export const useUpdateUser = () => {
	const data = React.useContext(DataContext)
	return (info) => {
		return fetch(`${API_TEST}/users/update/${data.user?._id}`, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(info),
		})
			.then((res) => res.json())
			.then((result) => {
				if (result.status === 1) {
					toast.success('Update successful')
				} else {
					toast.error(result.message)
				}
			})
			.catch((err) => toast.error(err.message))
	}
}
export const useGetUserById = () => {
	const data = React.useContext(DataContext)
	console.log('user', data.user?._id)
	return useQuery(['useGetUserById.name'], () => {
		return fetch(`${API_TEST}/users/${data.user?._id}`)
			.then((res) => res.json())
			.then((result) => {
				if (result.status === 1) {
					return result.result
				} else {
					toast.error(result.message)
				}
			})
			.catch((err) => toast.error(err.message))
	})
}
