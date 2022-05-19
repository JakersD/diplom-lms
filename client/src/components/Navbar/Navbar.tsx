import React from 'react';

import { date24, date24Active, notification24, notification24Active, profile24, profile24Active } from '../../icons';
import { SWrapper, SFlexContainer, SLogo, SItem, SNavbar } from './Navbar.style';

interface IProps {
	isDate?: boolean;
	isNotification?: boolean;
	isProfile?: boolean;
}

const Navbar: React.FC<IProps> = ({ isDate = false, isNotification = false, isProfile = false }) => {
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
						<SItem to={'/profile'}>
							<img src={isProfile ? profile24Active : profile24} alt='Личный кабинет' />
						</SItem>
					</SFlexContainer>
				</SFlexContainer>
			</SWrapper>
		</SNavbar>
	);
};

export default Navbar;
