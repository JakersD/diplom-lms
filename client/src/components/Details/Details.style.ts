import { styled } from '@mui/material/styles';

export const SFlexContainer = styled('div')(() => ({
	display: 'flex',
	alignItems: 'center',
}));

export const SDetailsBlock = styled('div')(() => ({
	marginRight: '52px',
}));

export const STitle = styled('p')(() => ({
	fontFamily: 'Roboto, sans-serif',
	fontSize: '14px',
	lineHeight: '16px',
	color: '#8B8B8B',
	margin: '0 0 8px 0',
}));

export const SDetail = styled('p')(() => ({
	fontFamily: 'Roboto, sans-serif',
	fontSize: '16px',
	margin: 0,
	lineHeight: '19px',
}));
