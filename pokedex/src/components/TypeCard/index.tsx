import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import TypeSvg from '../../assets/types/grass.svg';

import { Container, Name } from './styles';

export const TypeCard: React.FC = () => {
	return (
		<Container>
			<TypeSvg width={RFValue(15)} height={RFValue(15)} fill="white" />
			<Name>{'Grass'}</Name>
		</Container>
	);
};
