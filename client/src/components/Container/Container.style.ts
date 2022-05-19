import { styled } from '@mui/material/styles';

interface ISContainer {
	sWidth?: string;
	sMargin?: string;
	sMaxHeight?: string;
	isFullHeight?: boolean;
	isPadding?: boolean;
}

export const SContainer = styled('div')(({ sWidth, sMargin, isFullHeight, isPadding, sMaxHeight }: ISContainer) => ({
	display: 'inline-block',
	borderRadius: '35px',
	backgroundColor: '#fff',
	padding: !isPadding ? '26px 20px' : '',
	height: isFullHeight ? '100%' : '',
	width: sWidth ? sWidth : 'auto',
	maxHeight: sMaxHeight ? sMaxHeight : '',
	margin: sMargin ? sMargin : '',
}));
