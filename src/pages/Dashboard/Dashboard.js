import React from 'react'
import { HeaderPage } from 'components'
import { ImportExport as ExportIcon, FilterAlt as FilterIcon } from '@mui/icons-material'
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
		</div>
	)
}
