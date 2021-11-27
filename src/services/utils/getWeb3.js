import { getNodeUrl } from 'services/utils/getRpcUrl'
import Web3 from 'web3'

const RPC_URL = getNodeUrl()
const httpProvider = new Web3.providers.HttpProvider(RPC_URL, { timeout: 10000 })
export const getWeb3 = () => {
	const web3 = new Web3(httpProvider)
	return web3
}
export const getContract = (abi, address, contractOptions) => {
	const web3 = getWeb3()
	return new web3.eth.Contract(abi, address, contractOptions)
}
