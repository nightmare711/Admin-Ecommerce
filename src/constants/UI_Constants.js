import DashboardIcon from '@material-ui/icons/Dashboard'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import HelpIcon from '@material-ui/icons/Help'
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore'
import LocalShippingIcon from '@material-ui/icons/LocalShipping'
import RecentActorsIcon from '@material-ui/icons/RecentActors'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'

export const listSidebar = [
	{
		title: 'Dashboard',
		href: '/dashboard',
		child: [],
		icon: <DashboardIcon />,
	},
	{
		title: 'Order',
		href: '/order',
		child: [],
		icon: <LocalShippingIcon />,
	},
	{
		title: 'Users',
		href: '/users',
		child: [],
		icon: <AccountCircleIcon />,
	},
	{
		title: 'Manage',
		href: '',
		icon: <RecentActorsIcon />,
		child: [
			{
				title: 'Manager',
				href: '/manager',
				child: [],
			},
			{
				title: 'Staff',
				href: '/staff',
				child: [],
			},
		],
	},
	{
		title: 'Products',
		href: '/product',
		child: [],
		icon: <LocalGroceryStoreIcon />,
	},
	{
		title: 'Support',
		href: '/support',
		child: [],
		icon: <HelpIcon />,
	},
	{
		title: 'More',
		href: '',
		icon: <MoreHorizIcon />,
		child: [
			{
				title: 'Github',
				href: '',
				link: 'https://github.com/nightmare711',
				child: [],
			},
			{
				title: 'Facebook',
				href: '',
				link: 'https://www.facebook.com/kudokun0711/',
				child: [],
			},
			{
				title: 'Docs',
				href: 'https://www.facebook.com/kudokun0711/',
				link: 'https://www.facebook.com/kudokun0711/',
				child: [],
			},
		],
	},
]
