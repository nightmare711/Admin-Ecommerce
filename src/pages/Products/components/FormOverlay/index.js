import React from 'react'
import { TextField, FormControl, InputLabel, Select, MenuItem, Input, Button } from '@mui/material'
import { usePostProduct } from 'queries/useProducts.queries'
import { onMoveAnimation } from 'services/useDevelopUI'
import SendIcon from '@mui/icons-material/Send'
import LoadingButton from '@mui/lab/LoadingButton'
import { toBase64 } from 'services/utils/utils'
import { toast } from 'react-toastify'
import './FormOverlay.css'

export const FormOverlay = ({ refetch }) => {
	const [infoProduct, setInfoProduct] = React.useState({
		name: '',
		product_type: '',
		price: 0,
		image:
			'https://onemart.boostifythemes.com/gadget/wp-content/uploads/sites/4/2021/06/Layer-1938.jpg',
		imageHover:
			'https://onemart.boostifythemes.com/gadget/wp-content/uploads/sites/4/2021/06/Layer-192.jpg',
		totalSupply: 0,
		bought: 0,
		description: '',
		discount: 0,
		price_coin: 0,
		addition_information: [],
	})
	const [error, setError] = React.useState({
		name: false,
		price: false,
		totalSupply: false,
		description: false,
	})
	const onClose = () => {
		setInfoProduct({
			name: '',
			product_type: '',
			price: 0,
			image:
				'https://onemart.boostifythemes.com/gadget/wp-content/uploads/sites/4/2021/06/Layer-1938.jpg',
			imageHover:
				'https://onemart.boostifythemes.com/gadget/wp-content/uploads/sites/4/2021/06/Layer-192.jpg',
			totalSupply: 0,
			bought: 0,
			description: '',
			discount: 0,
			price_coin: 0,
			addition_information: [],
		})
		onMoveAnimation('create-product', 'moveOutOpacity')
	}
	console.log(infoProduct)
	const onAddProduct = usePostProduct(onClose)
	const onValidate = () => {
		var errorTemp = error
		if (infoProduct.name === '') {
			errorTemp = { ...errorTemp, name: true }
		} else {
			errorTemp = { ...errorTemp, name: false }
		}
		if (parseInt(infoProduct.price) === 0) {
			errorTemp = { ...errorTemp, price: true }
		} else {
			errorTemp = { ...errorTemp, price: false }
		}
		if (parseInt(infoProduct.totalSupply) === 0) {
			errorTemp = { ...errorTemp, totalSupply: true }
		} else {
			errorTemp = { ...errorTemp, totalSupply: false }
		}
		if (infoProduct.description === '') {
			errorTemp = { ...errorTemp, description: true }
		} else {
			errorTemp = { ...errorTemp, description: false }
		}
		setError(errorTemp)
		if (errorTemp.name || errorTemp.description || errorTemp.price || errorTemp.totalSupply) {
			return true
		}
		return false
	}
	return (
		<div id={'create-product'} className='form-overlay'>
			<div
				onClick={() => onMoveAnimation('create-product', 'moveOutOpacity')}
				className='overlay'
			/>
			<div className='form'>
				<span className='title'>Add Product</span>
				<TextField
					error={error.name}
					onChange={(e) =>
						setInfoProduct({
							...infoProduct,
							name: e.target.value,
						})
					}
					value={infoProduct.name}
					style={{ marginTop: '15px' }}
					id='filled-basic'
					label='Name'
					variant='filled'
				/>

				<div className='flex flex-row' style={{ marginTop: '15px' }}>
					<TextField
						onChange={(e) =>
							setInfoProduct({
								...infoProduct,
								price: e.target.value,
							})
						}
						error={error.price}
						style={{ flex: 1, marginRight: '10px' }}
						id='filled-basic'
						label='Price'
						variant='filled'
						type='number'
					/>
					<TextField
						onChange={(e) =>
							setInfoProduct({
								...infoProduct,
								totalSupply: e.target.value,
							})
						}
						error={error.totalSupply}
						className='mr-2'
						style={{ flex: 1, marginLeft: '10px' }}
						id='filled-basic'
						label='Total Supply'
						variant='filled'
						type='number'
					/>
				</div>
				<div className='flex flex-row' style={{ marginTop: '15px' }}>
					<TextField
						onChange={(e) =>
							setInfoProduct({
								...infoProduct,
								discount: e.target.value,
							})
						}
						style={{ flex: 1, marginRight: '10px' }}
						id='filled-basic'
						label='Discount'
						variant='filled'
						type='number'
					/>
					<TextField
						onChange={(e) =>
							setInfoProduct({
								...infoProduct,
								price_coin: e.target.value,
							})
						}
						style={{ flex: 1, marginLeft: '10px' }}
						id='filled-basic'
						label='Price Coin'
						variant='filled'
						type='number'
					/>
				</div>

				<TextField
					onChange={(e) =>
						setInfoProduct({
							...infoProduct,
							description: e.target.value,
						})
					}
					error={error.description}
					style={{ marginTop: '15px' }}
					id='filled-basic'
					label='Description'
					variant='filled'
				/>

				<FormControl style={{ marginTop: '15px' }} fullWidth>
					<InputLabel id='demo-simple-select-label'>Product Type</InputLabel>
					<Select
						labelId='demo-simple-select-label'
						id='demo-simple-select'
						value={infoProduct.product_type}
						label='Product Type'
						onChange={(e) =>
							setInfoProduct({
								...infoProduct,
								product_type: e.target.value,
							})
						}
					>
						<MenuItem value={'Watch'}>Watch</MenuItem>
						<MenuItem value={'TV'}>TV</MenuItem>
						<MenuItem value={'Phone'}>Phone</MenuItem>
						<MenuItem value={'Laptop'}>Laptop</MenuItem>
						<MenuItem value={'More'}>More</MenuItem>
					</Select>
				</FormControl>
				<div style={{ marginTop: '15px' }} className='flex flex-row'>
					<label style={{ marginRight: '15px' }} htmlFor='contained-button-file'>
						<Input
							style={{ display: 'none' }}
							accept='image/*'
							id='contained-button-file'
							multiple
							type='file'
							onChange={async (e) => {
								const base64 = await toBase64(e.target.files[0])
								toast.success('Upload image success')
								setInfoProduct({ ...infoProduct, image: base64 })
							}}
						/>
						<Button variant='contained' component='span'>
							Upload Image
						</Button>
					</label>
					<label htmlFor='contained-button-file-2'>
						<Input
							style={{ display: 'none' }}
							accept='image/*'
							id='contained-button-file-2'
							multiple
							type='file'
							onChange={async (e) => {
								const base64 = await toBase64(e.target.files[0])
								toast.success('Upload image success')
								setInfoProduct({ ...infoProduct, imageHover: base64 })
							}}
						/>
						<Button variant='contained' component='span'>
							Upload Hover
						</Button>
					</label>
				</div>

				<div style={{ marginTop: '15px' }} className='flex flex-row items-center justify-around'>
					<LoadingButton
						onClick={() => onMoveAnimation('create-product', 'moveOutOpacity')}
						color='secondary'
						loadingPosition='start'
						variant='contained'
					>
						Cancel
					</LoadingButton>
					<LoadingButton
						endIcon={<SendIcon />}
						// loading={loading}
						loadingPosition='end'
						variant='contained'
						onClick={async () => {
							const isError = onValidate()
							if (!isError) {
								await onAddProduct(infoProduct)
								refetch()
							}
						}}
					>
						Send
					</LoadingButton>
				</div>
			</div>
		</div>
	)
}
