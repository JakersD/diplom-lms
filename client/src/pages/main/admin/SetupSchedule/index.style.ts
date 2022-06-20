import { styled } from '@mui/material/styles';

export const SActiveButton = styled('button')(() => ({
	fontFamily: 'Roboto',
	fontSize: '14px',
	lineHeight: '16px',
	backgroundColor: '#336CFF',
	padding: '8px 16px',
	borderRadius: '35px',
	color: '#fff',
	border: 'none',
	cursor: 'pointer',
}));

export const SNotActiveButton = styled('button')(() => ({
	fontFamily: 'Roboto',
	fontSize: '14px',
	lineHeight: '16px',
	backgroundColor: '#fff',
	padding: '8px 16px',
	borderRadius: '35px',
	color: '#000',
	border: 'none',
	cursor: 'pointer',
}));

export const SButtonsContainer = styled('div')(() => ({
	display: 'flex',
	alignItems: 'center',
	margin: '38px 0',
}));
