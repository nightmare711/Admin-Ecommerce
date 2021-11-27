import React from 'react'
import { HeaderPage } from 'components'
import { Add as AddIcon, FilterAlt as FilterIcon } from '@mui/icons-material'
import { useGetProducts } from 'queries/useProducts.queries'
import { onMoveAnimation } from 'services/useDevelopUI'
import { FormOverlay } from './components/FormOverlay'
import { EditProduct } from './components/EditProduct'
import './Products.css'

export const Products = () => {
	const { data: products } = useGetProducts()
	const [editProduct, setEditProduct] = React.useState(null)
	return (
		<div className='products'>
			<FormOverlay />
			<EditProduct info={editProduct} />
			<div className='flex flex-row items-center justify-between dashboard__header'>
				<HeaderPage title='Products' route='Products' />
				<div className='flex flex-row items-center btn-container'>
					<div
						onClick={() => onMoveAnimation('create-product', 'moveInOpacity')}
						className='mr-4 btn-primary'
					>
						<AddIcon />
						Product
					</div>
					<div className='btn-secondary'>
						<FilterIcon />
						Filter
					</div>
				</div>
			</div>
			<table>
				<thead>
					<tr>
						<th>#NO</th>
						<th>Product Name</th>
						<th>Product Info</th>
						<th>Price</th>
						<th>Supply</th>
						<th>Type</th>
						<th>Bought</th>
					</tr>
				</thead>
				{products?.map((product, index) => (
					<tr
						onClick={() => {
							setEditProduct(product)
							onMoveAnimation('edit-product', 'moveInOpacity')
						}}
						key={index}
					>
						<td>{index + 1}</td>
						<td>{product.name.substr(0, 10)}...</td>
						<td>{product.description.substr(0, 50)}...</td>
						<td>{product.price}</td>
						<td>{product.totalSupply}</td>
						<td>{product.product_type}</td>
						<td>{product.bought}</td>
					</tr>
				))}
			</table>
		</div>
	)
}
