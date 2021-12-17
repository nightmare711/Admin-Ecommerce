import React from 'react'
import { API_TEST } from 'constants/API'
import { useQuery } from 'react-query'
import { DataContext } from 'context/DataContext'
import { toast } from 'react-toastify'

export const useGetOrderByOwner = () => {
	const data = React.useContext(DataContext)
	return useQuery(
		['useGetOrderByOwner.name'],
		() => {
			return fetch(`${API_TEST}/orders/${data.user?._id}`)
				.then((res) => res.json())
				.then((result) => result.result)
				.catch((err) => toast.error(err.message))
		},
		{ refetchInterval: 1000 }
	)
}
