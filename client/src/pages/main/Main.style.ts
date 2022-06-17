import { styled } from '@mui/material/styles';

export const STextLG = styled('p')(({ padding }: { padding?: string }) => ({
	fontFamily: 'Roboto, sans-serif',
	fontSize: '36px',
	padding: padding ? padding : '32px 0',
	lineHeight: '42px',
}));

export const SMainWrapper = styled('div')(() => ({
	maxWidth: '1720px',
	margin: '0 auto',
}));

export const SMainContainer = styled('div')(() => ({
	margin: '0 32px',
}));

export const SMainButton = styled('button')(({ margin }: { margin?: string }) => ({
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
	margin: margin ?? '',
}));
