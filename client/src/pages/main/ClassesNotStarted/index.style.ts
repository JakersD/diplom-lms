import { styled } from '@mui/material/styles';

export const SClassesContainer = styled('div')(() => ({
	display: 'flex',
	flexWrap: 'wrap',
	maxWidth: '1720px',
	margin: '32px auto',
	padding: '0 30px',
}));

export const SClassesItem = styled('div')(() => ({
	display: 'inline-block',
	marginRight: '73px',
	width: '705px',
}));

export const SClassesMessage = styled('p')(() => ({
	fontFamily: 'Roboto, sans-serif',
	fontSize: '36px',
	lineHeight: '42px',
	marginBottom: '32px',
}));
