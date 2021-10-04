import React from 'react'
import { HeaderPage } from 'components'
import LinearProgress from '@mui/material/LinearProgress'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import { HorizontalBarChart, DoughnutChart } from 'components'
import {
	ImportExport as ExportIcon,
	FilterAlt as FilterIcon,
	BarChart as BarChartIcon,
} from '@mui/icons-material'
import './Dashboard.css'

export const Dashboard = () => {
	return (
		<div className='dashboard'>
			<div className='flex flex-row items-center justify-between dashboard__header'>
				<HeaderPage title='Dashboard' route='Dashboard' />
				<div className='flex flex-row items-center btn-container'>
					<div className='mr-4 btn-primary'>
						<ExportIcon />
						Export
					</div>
					<div className='btn-secondary'>
						<FilterIcon />
						Filter
					</div>
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
		</div>
	)
}
