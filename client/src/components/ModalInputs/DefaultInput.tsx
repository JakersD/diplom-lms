import { createMuiTheme, TextField, ThemeProvider } from '@mui/material';
import React from 'react';

interface IProps {
	title: string;
	value: string;
}

const theme = createMuiTheme({
	palette: {
		text: {
			disabled: '#000',
		},
	},
});

const DefaultInput: React.FC<IProps> = ({ title, value }) => {
	return (
		<ThemeProvider theme={theme}>
			<TextField sx={{ marginBottom: '24px' }} label={title} value={value} disabled multiline fullWidth />
		</ThemeProvider>
	);
};

export default DefaultInput;
