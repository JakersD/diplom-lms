import React from 'react';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';
import { Grid, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

import { STextField, SContainer } from './login.page.style';
import { useInput } from '../../__data__/hooks/useInput';
import { EValidationType } from '../../__data__/models';
import { loginUser } from '../../__data__/middlewares';
import { checkValidation } from '../../__data__/utils';
import { useTypedSelector } from '../../__data__/hooks';

const LoginPage: React.FC = () => {
	const username = useInput('username', [{ type: EValidationType.IS_REQUIRED }]);
	const password = useInput('password', [{ type: EValidationType.IS_REQUIRED }]);
	const { enqueueSnackbar } = useSnackbar();
	const dispatch = useDispatch();
	const { error, errorMsg, isLoading } = useTypedSelector((state) => state?.user);

	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault();

		try {
			checkValidation(username, password);

			dispatch(loginUser({ username: username.value, password: password.value }));
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
						<LoadingButton
							size='large'
							variant='contained'
							color='primary'
							type='submit'
							loading={isLoading}
							fullWidth
						>
							Войти
						</LoadingButton>
					</Grid>
				</Grid>
			</SContainer>
		</form>
	);
};

export default LoginPage;
