import React from 'react';

import { SContainer } from './Container.style';

interface IProps {
	width?: string;
	margin?: string;
	maxHeight?: string;
	isFullHeight?: boolean;
	isPadding?: boolean;
	padding?: string;
	maxWidth?: string;
}

const Container: React.FC<IProps> = ({ children, width, margin, maxHeight, padding, isFullHeight, maxWidth }) => {
	return (
		<SContainer
			swidth={width}
			smargin={margin}
			smaxheight={maxHeight}
			isfullheight={isFullHeight}
			maxwidth={maxWidth}
			padding={padding}
		>
			{children}
		</SContainer>
	);
};

export default Container;
