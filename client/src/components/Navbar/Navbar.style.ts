import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const SWrapper = styled('div')(() => ({
	maxWidth: '1720px',
	margin: '0 auto',
	padding: '24px 30px',
	backgroundColor: '#fff',
}));

export const SFlexContainer = styled('div')(() => ({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
}));

export const SLogo = styled('p')(() => ({
	fontFamily: 'Roboto, sans-serif',
	fontSize: '14px',
	margin: 0,
	lineHeight: '16px',
	textTransform: 'uppercase',
}));

export const SItem = styled(Link)(() => ({
	textDecoration: 'none',
	color: 'black',
	marginRight: '15px',
	'&:last-child': {
		marginRight: '0',
	},
}));
