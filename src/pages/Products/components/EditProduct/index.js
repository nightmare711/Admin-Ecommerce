/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { TextField, FormControl, InputLabel, Select, MenuItem, Input, Button } from '@mui/material'
import { useEditProduct } from 'queries/useProducts.queries'
import { onMoveAnimation } from 'services/useDevelopUI'
import SendIcon from '@mui/icons-material/Send'
import LoadingButton from '@mui/lab/LoadingButton'
import { toBase64 } from 'services/utils/utils'
import { toast } from 'react-toastify'

export const EditProduct = ({ info }) => {
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
			image: '',
			imageHover: '',
			totalSupply: 0,
			bought: 0,
			description: '',
			discount: 0,
			price_coin: 0,
			addition_information: [],
		})
		onMoveAnimation('edit-product', 'moveOutOpacity')
	}
	const onEditProduct = useEditProduct(onClose)
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
	React.useEffect(() => {
		if (info) {
			setInfoProduct({
				_id: info._id,
				name: info.name,
				product_type: info.product_type,
				price: info.price,
				image: info.image,
				imageHover: info.imageHover,
				totalSupply: info.totalSupply,
				bought: info.bought,
				description: info.description,
				discount: info.discount,
				price_coin: info.price_coin,
				addition_information: [],
			})
		}
	}, [info?.name])
	return (
		<div id={'edit-product'} className='form-overlay'>
			<div onClick={() => onMoveAnimation('edit-product', 'moveOutOpacity')} className='overlay' />
			<div className='form'>
				<span className='title'>Edit Product</span>
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
						value={infoProduct.price}
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
						value={infoProduct.totalSupply}
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
						value={infoProduct.discount}
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
						value={infoProduct.price_coin}
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
					value={infoProduct.description}
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
					<LoadingButton color='secondary' loadingPosition='start' variant='contained'>
						Delete
					</LoadingButton>
					<LoadingButton
						endIcon={<SendIcon />}
						// loading={loading}
						loadingPosition='end'
						variant='contained'
						onClick={() => {
							const isError = onValidate()
							if (!isError) {
								onEditProduct(infoProduct)
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
