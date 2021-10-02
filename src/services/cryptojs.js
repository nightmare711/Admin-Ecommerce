import CryptoJS from 'crypto-js'
import { SECRET_KEY } from 'constants/index'

export const encrypt = (data) => {
	let dataFormat = typeof data === 'string' ? data : JSON.stringify(data)
	return CryptoJS.AES.encrypt(dataFormat, SECRET_KEY, {
		keySize: 128 / 8,
		iv: SECRET_KEY,
		mode: CryptoJS.mode.CBC,
		padding: CryptoJS.pad.Pkcs7,
	}).toString()
}
export const decrypt = (data) => {
	const dataDecrypt = CryptoJS.enc.Utf8.stringify(
		CryptoJS.AES.decrypt(data, SECRET_KEY, {
			keySize: 128 / 8,
			iv: SECRET_KEY,
			mode: CryptoJS.mode.CBC,
			padding: CryptoJS.pad.Pkcs7,
		})
	)
	try {
		const dataParse = JSON.parse(dataDecrypt)
		return dataParse
	} catch (err) {
		return dataDecrypt
	}
}
