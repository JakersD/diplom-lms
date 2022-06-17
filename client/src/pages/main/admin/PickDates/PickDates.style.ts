import { styled } from '@mui/material/styles';

export const SPickSemBlock = styled('div')(() => ({
	display: 'flex',
	flexDirection: 'column',
}));

export const SButton = styled('button')(() => ({
	fontFamily: 'Roboto',
	fontSize: '14px',
	lineHeight: '24px',
	letterSpacing: '0.4px',
	textTransform: 'uppercase',
	color: '#fff',
	backgroundColor: '#336CFF',
	boxShadow: '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)',
	borderRadius: '16px',
	padding: '6px 18px',
	cursor: 'pointer',
	border: 0,
}));
