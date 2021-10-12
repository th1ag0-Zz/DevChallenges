import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity.attrs({
	activeOpacity: 0.7,
})`
	width: 100%;
	height: ${RFValue(115)}px;
	background-color: ${({ theme }) => theme.colors.types.background_grass};
	border-radius: 14px;
	position: relative;
	margin: ${RFValue(30)}px 0;
`;

export const InfoContent = styled.View`
	height: 100%;
	justify-content: space-between;
	padding: ${RFValue(20)}px;
`;

export const Number = styled.Text`
	font-family: ${({ theme }) => theme.fonts.bold};
	font-size: ${RFValue(12)}px;
	color: ${({ theme }) => theme.colors.text_dark_secondary};
`;

export const Title = styled.Text`
	font-family: ${({ theme }) => theme.fonts.bold};
	font-size: ${RFValue(26)}px;
	color: ${({ theme }) => theme.colors.shape};
`;

export const TypeContent = styled.View``;

export const PokemonImage = styled.Image`
	width: ${RFValue(130)}px;
	height: ${RFValue(130)}px;
	position: absolute;
	right: 10px;
	bottom: 10px;
`;
