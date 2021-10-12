import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
	height: ${RFValue(25)}px;
	background-color: ${({ theme }) => theme.colors.types.grass};
	flex-direction: row;
	align-self: flex-start;
	align-items: center;
	padding: ${RFValue(5)}px;
	border-radius: 6px;
`;

export const Name = styled.Text`
	font-family: ${({ theme }) => theme.fonts.medium};
	font-size: ${RFValue(12)}px;
	color: ${({ theme }) => theme.colors.shape};
	margin-left: ${RFValue(5)}px;
`;
