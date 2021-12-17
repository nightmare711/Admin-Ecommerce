import React from 'react'
import { HeaderPage, HorizontalBarChart, DoughnutChart } from 'components'
import LinearProgress from '@mui/material/LinearProgress'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import {
	useGetHighestPrice,
	useGetHighestTotalSupply,
	useGetMostBoughtProduct,
} from 'queries/useProducts.queries'
import { ImportExport as ExportIcon, BarChart as BarChartIcon } from '@mui/icons-material'
import { useCheckConnected, useConnectWallet } from 'services/useWalletProviders'
import { useGetTotalInFund, useWithdraw } from 'queries/useFund'
import { useGetOrderByOwner } from 'queries/useOrder'
import { onMoveAnimation } from 'services/useDevelopUI'
import { OrderOverlay } from 'components'
import './Dashboard.css'

export const topUserTemp = [
	{
		name: 'Socrates Itumay',
		total: 12000,
		avatar: 'https://picsum.photos/200',
	},
	{
		name: 'Socrates Itumay',
		total: 12000,
		avatar: 'https://picsum.photos/200',
	},
	{
		name: 'Socrates Itumay',
		total: 12000,
	},
	{
		name: 'Socrates Itumay',
		total: 12000,
		avatar: 'https://picsum.photos/200',
	},
	{
		name: 'Socrates Itumay',
		total: 12000,
		avatar: 'https://picsum.photos/200',
	},
	{
		name: 'Socrates Itumay',
		total: 12000,
	},
	{
		name: 'Socrates Itumay',
		total: 12000,
		avatar: 'https://picsum.photos/200',
	},
	{
		name: 'Socrates Itumay',
		total: 12000,
		avatar: 'https://picsum.photos/200',
	},
]
export const topProductTemp = [
	{
		name: 'Laptop ASUS VivoBook X413JA',
		total: 120,
		image: 'https://picsum.photos/200',
	},
	{
		name: 'Laptop ASUS VivoBook X413JA',
		total: 120,
		image: 'https://picsum.photos/200',
	},
	{
		name: 'Laptop ASUS VivoBook X413JA',
		total: 120,
		image: 'https://picsum.photos/200',
	},
	{
		name: 'Laptop ASUS VivoBook X413JA',
		total: 120,
		image: 'https://picsum.photos/200',
	},
	{
		name: 'Laptop ASUS VivoBook X413JA',
		total: 120,
		image: 'https://picsum.photos/200',
	},
	{
		name: 'Laptop ASUS VivoBook X413JA',
		total: 120,
		image: 'https://picsum.photos/200',
	},
	{
		name: 'Laptop ASUS VivoBook X413JA',
		total: 120,
		image: 'https://picsum.photos/200',
	},
	{
		name: 'Laptop ASUS VivoBook X413JA',
		total: 120,
		image: 'https://picsum.photos/200',
	},
]

// const summary = [
// 	{
// 		clientName: 'Tran Hoang',
// 		productId: 12,
// 		productName: 'Laptop ASUS VivoBook X413JA',
// 		productCost: '2000',
// 		paymentMode: 'Online Payment',
// 		status: 0,
// 	},
// 	{
// 		clientName: 'Tran Hoang',
// 		productId: 12,
// 		productName: 'Laptop ASUS VivoBook X413JA',
// 		productCost: '2000',
// 		paymentMode: 'Online Payment',
// 		status: 2,
// 	},
// 	{
// 		clientName: 'Tran Hoang',
// 		productId: 12,
// 		productName: 'Laptop ASUS VivoBook X413JA',
// 		productCost: '2000',
// 		paymentMode: 'Online Payment',
// 		status: 0,
// 	},
// 	{
// 		clientName: 'Tran Hoang',
// 		productId: 12,
// 		productName: 'Laptop ASUS VivoBook X413JA',
// 		productCost: '2000',
// 		paymentMode: 'Online Payment',
// 		status: 2,
// 	},
// 	{
// 		clientName: 'Tran Hoang',
// 		productId: 12,
// 		productName: 'Laptop ASUS VivoBook X413JA',
// 		productCost: '2000',
// 		paymentMode: 'Online Payment',
// 		status: 1,
// 	},
// 	{
// 		clientName: 'Tran Hoang',
// 		productId: 12,
// 		productName: 'Laptop ASUS VivoBook X413JA',
// 		productCost: '2000',
// 		paymentMode: 'Online Payment',
// 		status: 2,
// 	},
// 	{
// 		clientName: 'Tran Hoang',
// 		productId: 12,
// 		productName: 'Laptop ASUS VivoBook X413JA',
// 		productCost: '2000',
// 		paymentMode: 'Online Payment',
// 		status: 2,
// 	},
// ]

export const Dashboard = () => {
	const { data: mostProduct } = useGetMostBoughtProduct()
	const { data: highestPrice } = useGetHighestPrice()
	const { data: highesSupply } = useGetHighestTotalSupply()
	const { data: orders } = useGetOrderByOwner()
	console.log('orders:', orders)
	const [infoOrder, setInfoOrder] = React.useState(null)
	const { data: totalFund, refetch: refetchGetFund } = useGetTotalInFund()
	const requestWithdraw = useWithdraw()
	const connect = useConnectWallet()
	const isConnect = useCheckConnected()

	return (
		<div className='dashboard'>
			<OrderOverlay order={infoOrder} />
			<div className='flex flex-row items-center justify-between dashboard__header'>
				<HeaderPage title='Dashboard' route='Dashboard' />
				<div className='flex flex-row items-center btn-container'>
					<div className='mr-4 btn-primary'>
						<ExportIcon />
						Export
					</div>
					{isConnect ? (
						<div className={`btn-secondary ${totalFund ? 'disabled' : ''}`}>
							Withdraw: {totalFund || 0}
						</div>
					) : (
						<div onClick={() => connect()} className='btn-secondary'>
							Connect
						</div>
					)}
				</div>
			</div>
			<div className='dashboard__card'>
				<div className='card'>
					<div className='flex flex-row items-center justify-between'>
						<span className='card__title'>Number Of Sales</span>
						<BarChartIcon style={{ color: '#8760FB', fontSize: '30px' }} />
					</div>
					<span className='card__number'>568</span>
					<LinearProgress style={{ margin: '10px 0px' }} variant='determinate' value={60} />
					<div className='flex items-center justify-between card__estimate'>
						<span>Last Month</span>
						<span>
							<ArrowDropUpIcon style={{ color: 'green' }} /> 0.7%
						</span>
					</div>
				</div>
				<div className='card'>
					<div className='flex flex-row items-center justify-between'>
						<span className='card__title'>Number Of Sales</span>
						<BarChartIcon style={{ color: '#8760FB', fontSize: '30px' }} />
					</div>
					<span className='card__number'>568</span>
					<LinearProgress style={{ margin: '10px 0px' }} variant='determinate' value={60} />
					<div className='flex items-center justify-between card__estimate'>
						<span>Last Month</span>
						<span>
							<ArrowDropUpIcon style={{ color: 'green' }} /> 0.7%
						</span>
					</div>
				</div>
				<div className='card'>
					<div className='flex flex-row items-center justify-between'>
						<span className='card__title'>Number Of Sales</span>
						<BarChartIcon style={{ color: '#8760FB', fontSize: '30px' }} />
					</div>
					<span className='card__number'>568</span>
					<LinearProgress style={{ margin: '10px 0px' }} variant='determinate' value={60} />
					<div className='flex items-center justify-between card__estimate'>
						<span>Last Month</span>
						<span>
							<ArrowDropUpIcon style={{ color: 'green' }} /> 0.7%
						</span>
					</div>
				</div>
				<div className='card'>
					<div className='flex flex-row items-center justify-between'>
						<span className='card__title'>Number Of Sales</span>
						<BarChartIcon style={{ color: '#8760FB', fontSize: '30px' }} />
					</div>
					<span className='card__number'>568</span>
					<LinearProgress style={{ margin: '10px 0px' }} variant='determinate' value={60} />
					<div className='flex items-center justify-between card__estimate'>
						<span>Last Month</span>
						<span>
							<ArrowDropUpIcon style={{ color: 'green' }} /> 0.7%
						</span>
					</div>
				</div>
			</div>
			<div className='flex flex-row mt-4 chart'>
				<div style={{ width: '100%', backgroundColor: 'var(--primary-color)' }}>
					<HorizontalBarChart />
				</div>
				<div className='flex flex-col p-4 ml-6 chart__right'>
					<span className='title'>Cost Breakdown</span>
					<span className='block mb-8 sub-title'>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry.
					</span>
					<div className='flex flex-row'>
						<div style={{ width: '200px' }}>
							<DoughnutChart />
						</div>
						<div style={{ width: '200px' }}>
							<DoughnutChart />
						</div>
					</div>
				</div>
			</div>
			<div className='card__top'>
				<div className='card__custom'>
					<span className='title'>Most Bought Products</span>
					<span className='block sub-title'>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry.
					</span>
					<ul className='custom__list'>
						{mostProduct?.map((product, key) => (
							<li className='flex flex-row custom__list--item' key={key}>
								<div className='flex flex-row items-center'>
									<img src={product.image} alt='Product' />
									<div className='flex flex-col ml-4 mr-2'>
										<span className='title'>{product.name}</span>
										<span className='subtitle'>Product's Name</span>
									</div>
								</div>
								<div style={{ minWidth: '80px' }} className='flex flex-col'>
									<span className='title'>{product.price}</span>
									<span className='subtitle'>Price Product</span>
								</div>
							</li>
						))}
					</ul>
				</div>
				<div className='card__custom'>
					<span className='title'>Highest Price Products</span>
					<span className='block sub-title'>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry.
					</span>
					<ul className='custom__list'>
						{highestPrice?.map((product, key) => (
							<li className='flex flex-row custom__list--item' key={key}>
								<div className='flex flex-row items-center'>
									<img src={product.image} alt='Product' />
									<div className='flex flex-col ml-4 mr-2'>
										<span className='title'>{product.name}</span>
										<span className='subtitle'>Product's Name</span>
									</div>
								</div>
								<div style={{ minWidth: '80px' }} className='flex flex-col'>
									<span className='title'>{product.price}</span>
									<span className='subtitle'>Price Product</span>
								</div>
							</li>
						))}
					</ul>
				</div>
				<div className='card__custom'>
					<span className='title'>Highest Supply Products</span>
					<span className='block sub-title'>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry.
					</span>
					<ul className='custom__list'>
						{highesSupply?.map((product, key) => (
							<li className='flex flex-row custom__list--item' key={key}>
								<div className='flex flex-row items-center'>
									<img src={product.image} alt='Product' />
									<div className='flex flex-col ml-4 mr-2'>
										<span className='title'>{product.name}</span>
										<span className='subtitle'>Product's Name</span>
									</div>
								</div>
								<div style={{ minWidth: '80px' }} className='flex flex-col'>
									<span className='title'>{product.bought}</span>
									<span className='subtitle'>Total Product</span>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className='summary'>
				<span className='title'>Product Summary</span>
				<span className='subtitle'>
					Lorem Ipsum is simply dummy text of the printing and typesetting.
				</span>
				<table>
					<thead>
						<tr>
							<th>#NO</th>
							<th>Name</th>
							<th>Address</th>
							<th>Country</th>
							<th>Total Price</th>
							<th>Payment Mode</th>
							<th>Quantity</th>
						</tr>
					</thead>
					{orders?.map((sum, index) => (
						<tr
							onClick={() => {
								setInfoOrder(sum)
								onMoveAnimation('order-overlay', 'moveInOpacity')
							}}
							key={index}
						>
							<td>{index + 1}</td>
							<td>{sum.lastName}</td>
							<td>{sum.address}</td>
							<td>{sum.country}</td>
							<td>{sum.price * sum.count}</td>
							<td style={{ textTransform: 'uppercase' }}>{sum.payment}</td>
							<td>{sum.count}</td>
						</tr>
					))}
				</table>
			</div>
		</div>
	)
}
