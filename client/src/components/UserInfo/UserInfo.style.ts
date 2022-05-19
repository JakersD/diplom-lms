import { styled } from '@mui/material/styles';

export const SContainer = styled('div')(() => ({
	display: 'flex',
	flexDirection: 'column',
}));

export const STitleContainer = styled('div')(() => ({
	display: 'flex',
	alignItems: 'center',
	marginBottom: '16px',
}));

export const SIcon = styled('img')(() => ({
	width: '105px',
	height: '105px',
	borderRadius: '100%',
	marginRight: '20px',
}));

export const SName = styled('p')(() => ({
	fontFamily: 'Roboto, sans-serif',
	fontSize: '24px',
	lineHeight: '28px',
}));

export const SDescription = styled('p')({
	fontFamily: 'Roboto, sans-serif',
	fontSize: '14px',
	lineHeight: '16px',
	marginBottom: '16px',
});
