import { Stack, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { colors } from '../../constants/colors'
import { SearchBar } from '../index'
import { Logo } from '../../assets'

const Navbar = () => {
	return (
		<Stack
			direction={'row'}
			alignItems={'center'}
			justifyContent={'space-between'}
			sx={{ position: 'sticky', top: 0, zIndex: 999, background: colors.primary }}
		>
			<Link to={'/'}>
				<img src={Logo} alt='logo' height={120} />
			</Link>
			<SearchBar />
			<Box />
		</Stack>
	)
}

export default Navbar
