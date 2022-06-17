import { styled } from '@mui/material/styles';

export const SIndicator = styled('p')(({ isSuccess }: { isSuccess: boolean }) => ({
	fontFamily: 'Roboto',
	fontSize: '16px',
	lineHeight: '19px',
	color: '#fff',
	textAlign: 'center',
	padding: '4px 12px',
	backgroundColor: isSuccess ? '#58D497' : '#FF7272',
	borderRadius: '16px',
}));
