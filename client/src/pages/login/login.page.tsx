import React from 'react';
import { Grid, Button, Typography } from '@mui/material';

import { STextField, SContainer } from './login.page.style';

const Login: React.FC = () => {
	return (
		<SContainer container justifyContent='center' alignItems='center' direction='column' spacing={2}>
			<Grid item>
				<Typography variant='h5' color='primary'>
					Авторизация
				</Typography>
			</Grid>
			<Grid item>
				<Grid container direction='column' alignItems='center' justifyContent='center'>
					<STextField variant='outlined' label='Email' fullWidth />
					<STextField variant='outlined' label='Password' fullWidth />
					<Button size='large' variant='contained' color='primary' fullWidth>
						Войти
					</Button>
				</Grid>
			</Grid>
		</SContainer>
	);
};

export default Login;
