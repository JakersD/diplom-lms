import React from 'react';

import { SContainer } from './Container.style';

const Container: React.FC = ({ children }) => {
	return <SContainer>{children}</SContainer>;
};

export default Container;
