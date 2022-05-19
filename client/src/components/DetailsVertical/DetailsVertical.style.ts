import { styled } from '@mui/material/styles';

export const SDetailsContainer = styled('div')(() => ({
	display: 'flex',
	flexDirection: 'column',
	marginBottom: '16px',
	'&:last-child': {
		marginBottom: '0',
	},
}));

export const SDetailsTitle = styled('p')(() => ({
	fontFamily: 'Roboto, sans-serif',
	fontSize: '14px',
	lineHeight: '16px',
	color: '#8B8B8B',
	marginBottom: '8px',
}));

export const SDetailsData = styled('p')(() => ({
	fontFamily: 'Roboto, sans-serif',
	fontSize: '16px',
	lineHeight: '19px',
}));
