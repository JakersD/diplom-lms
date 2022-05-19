import React from 'react';
import { TDetail } from '../../__data__/models';

import { SContainer, SIcon, SName, STitleContainer, SDescription } from './UserInfo.style';
import { DetailsVertical } from '../../components';

interface IProps {
	name: string;
	icon: string;
	details: Array<TDetail>;
	description?: string;
}

const UserInfo: React.FC<IProps> = ({ name, icon, description, details }): JSX.Element => {
	return (
		<SContainer>
			<STitleContainer>
				<SIcon src={icon} alt='Иконка пользователя' />
				<SName>{name}</SName>
			</STitleContainer>
			{description && <SDescription>{description}</SDescription>}
			<DetailsVertical details={details} />
		</SContainer>
	);
};

export default UserInfo;
