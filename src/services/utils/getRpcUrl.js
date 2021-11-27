import random from 'lodash/random'
import { BSC_TESTNET_1, BSC_TESTNET_2, BSC_TESTNET_3 } from 'constants/rpc'

const nodes = [BSC_TESTNET_1, BSC_TESTNET_2, BSC_TESTNET_3]

export const getNodeUrl = () => {
	const randomIndex = random(0, nodes.length - 1)
	return nodes[randomIndex]
}
