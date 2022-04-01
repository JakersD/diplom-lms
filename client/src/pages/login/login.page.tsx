import React, { useEffect } from 'react';
import { Grid, Button, Typography } from '@mui/material';

import { STextField, SContainer } from './login.page.style';
import { useInput } from '../../__data__/hooks/useInput';
import { EValidationType } from '../../__data__/models';

import { fetchUser } from '../../__data__/middlewares/user.middleware';
import { useDispatch, useSelector } from 'react-redux';
import { checkValidation } from '../../__data__/utils';
import { useSnackbar } from 'notistack';
import { useTypedSelector } from '../../__data__/hooks';

const Login: React.FC = () => {
	const username = useInput('username', [
		{ type: EValidationType.IS_REQUIRED },
		{ type: EValidationType.MIN_LENGTH, value: 8 },
	]);
	const password = useInput('password', [{ type: EValidationType.IS_REQUIRED }]);
	const { enqueueSnackbar } = useSnackbar();
	const dispatch = useDispatch();
	const { error, errorMsg } = useTypedSelector((state) => state?.usersReducer);

	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault();

		try {
			checkValidation(username, password);

			dispatch(fetchUser({ username: username.value, password: password.value }));
		} catch (errorMsg) {
			enqueueSnackbar(errorMsg as string, {
				variant: 'error',
			});
			console.error(errorMsg);
		}
	};

	if (error) {
		enqueueSnackbar(errorMsg, {
			variant: 'error',
		});
		console.error(errorMsg);
	}

	return (
		<form onSubmit={submitHandler}>
			<SContainer container justifyContent='center' alignItems='center' direction='column' spacing={2}>
				<Grid item>
					<Typography variant='h5' color='primary'>
						Авторизация
					</Typography>
				</Grid>
				<Grid item>
					<Grid container direction='column' alignItems='center' justifyContent='center'>
						<STextField
							{...username}
							variant='outlined'
							type='text'
							label='Логин'
							name='username'
							fullWidth
						/>
						<STextField
							{...password}
							variant='outlined'
							type='password'
							label='Пароль'
							name='password'
							fullWidth
						/>
						<Button size='large' variant='contained' color='primary' type='submit' fullWidth>
							Войти
						</Button>
					</Grid>
				</Grid>
			</SContainer>
		</form>
	);
};

export default Login;
