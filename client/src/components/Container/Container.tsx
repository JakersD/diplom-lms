import React from 'react';

import { SContainer } from './Container.style';

interface IProps {
	width?: string;
	margin?: string;
	maxHeight?: string;
	isFullHeight?: boolean;
	isPadding?: boolean;
}

const Container: React.FC<IProps> = ({ children, width, margin, maxHeight, isFullHeight, isPadding }) => {
	return (
		<SContainer
			sWidth={width}
			sMargin={margin}
			sMaxHeight={maxHeight}
			isFullHeight={isFullHeight}
			isPadding={isPadding}
		>
			{children}
		</SContainer>
	);
};

export default Container;
