import { getWeb3 } from './getWeb3'

const MAX_COUNT = 30

const timer = (ms) => new Promise((res) => setTimeout(res, ms))

export const onCheckStatusOfTransaction = async (hash, count = 0) => {
	while (count <= MAX_COUNT) {
		await timer(3000)
		const web3 = getWeb3()
		const transaction = await web3.eth.getTransactionReceipt(hash)

		if (transaction) {
			console.log(transaction)
			if (transaction.status) {
				return true
			}
			return false
		}
		count++
	}
	return false
}
