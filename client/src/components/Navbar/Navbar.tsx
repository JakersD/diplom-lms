import React from 'react';
import { useDispatch } from 'react-redux';

import { logoutUser } from '../../__data__/middlewares';
import {
	date24,
	date24Active,
	logout24,
	notification24,
	notification24Active,
	profile24,
	profile24Active,
} from '../../icons';
import { SWrapper, SFlexContainer, SLogo, SItem, SNavbar } from './Navbar.style';
import { useTypedSelector } from '../../__data__/hooks';
import { ERole } from '../../__data__/models';

interface IProps {
	isDate?: boolean;
	isNotification?: boolean;
	isProfile?: boolean;
}

const Navbar: React.FC<IProps> = ({ isDate = false, isNotification = false, isProfile = false }) => {
	const dispatch = useDispatch();
	const role = useTypedSelector((state) => state.user.data?.role);

	const handlerLogout = () => {
		dispatch(logoutUser());
	};

	return (
		<SNavbar>
			<SWrapper>
				<SFlexContainer>
					<SItem to={'/'}>
						<SLogo>Gachi Sheduler</SLogo>
					</SItem>
					<SFlexContainer>
						<SItem to={'/'}>
							<img src={isDate ? date24Active : date24} alt='Календарь' />
						</SItem>
						<SItem to={'/'}>
							<img src={isNotification ? notification24Active : notification24} alt='Уведомления' />
						</SItem>
						{role !== ERole.admin && (
							<SItem to={'/profile'}>
								<img src={isProfile ? profile24Active : profile24} alt='Личный кабинет' />
							</SItem>
						)}
						<SItem to={'/login'} onClick={handlerLogout}>
							<img src={logout24} alt='Выход' />
						</SItem>
					</SFlexContainer>
				</SFlexContainer>
			</SWrapper>
		</SNavbar>
	);
};

export default Navbar;
