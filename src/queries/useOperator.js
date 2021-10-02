import { useQuery } from 'react-query'
import { API_TEST, AUTH_USER } from 'constants/index'
import { encrypt } from 'services/cryptojs'

export const useGetOperators = () => {
	console.log(
		JSON.stringify({
			params: encrypt({
				info: encrypt(AUTH_USER),
			}),
		})
	)
	return useQuery(['useGetOperators.name'], () => {
		return fetch(API_TEST + '/operator', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify({
				params: encrypt({
					info: encrypt(AUTH_USER),
				}),
			}),
		})
			.then((res) => res.json())
			.then((response) => {
				if (response.status === 1) {
					return response.result
				}
				return []
			})
	})
}
