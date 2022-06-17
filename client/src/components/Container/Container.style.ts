import { styled } from '@mui/material/styles';

interface ISContainer {
	swidth?: string;
	smargin?: string;
	smaxheight?: string;
	isfullheight?: boolean;
	maxwidth?: string;
	padding?: string;
}

export const SContainer = styled('div')(
	({ swidth, smargin, isfullheight, smaxheight, maxwidth, padding }: ISContainer) => ({
		display: 'inline-block',
		borderRadius: '35px',
		backgroundColor: '#fff',
		padding: !padding ? '26px 20px' : padding,
		height: isfullheight ? '100%' : '',
		width: swidth ? swidth : 'auto',
		maxHeight: smaxheight ? smaxheight : '',
		maxWidth: maxwidth ? maxwidth : '',
		margin: smargin ? smargin : '',
		overflowY: 'auto',
	})
);
