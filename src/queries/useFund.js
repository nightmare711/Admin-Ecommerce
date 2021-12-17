import WFABI from 'constants/WF.json'
import { WF_ADDRESS } from 'constants/addresses'
import { getContract } from 'services/utils/getWeb3'
import { onCheckStatusOfTransaction } from 'services/utils/checkStatus'
import { toast } from 'react-toastify'
import { useQuery } from 'react-query'

export const useWithdraw = () => {
	return () => {
		const wawContract = getContract(WFABI, WF_ADDRESS)
		const contractData = wawContract.methods.withdraw().encodeABI()
		const params = [
			{
				from: window.ethereum?.selectedAddress,
				to: WF_ADDRESS,
				data: contractData,
			},
		]
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
						toast.success('Delist warrior successfully')
					} else {
						toast.error('Something went wrong')
					}
				} else {
					toast.error('User rejected')
				}
			})
			.catch((err) => {
				toast.error('User rejected')
			})
	}
}

export const useGetTotalInFund = () => {
	return useQuery(['useGetTotalInFund.name'], async () => {
		const wawContract = getContract(WFABI, WF_ADDRESS)
		const total = await wawContract.methods.seller(window.ethereum?.selectedAddress).call()
		if (total) {
			return total * 10 ** -18
		}
		return 0
	})
}
