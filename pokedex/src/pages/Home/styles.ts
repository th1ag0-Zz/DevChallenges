import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.shape};
	padding-top: ${RFValue(32)}px;
	padding-left: ${RFValue(32)}px;
	padding-right: ${RFValue(32)}px;
`;

export const HeaderFilters = styled.View`
	flex-direction: row;
	align-self: flex-end;
`;

export const HeaderFilterButton = styled(BorderlessButton)`
	margin-left: ${RFValue(20)}px;
`;

export const HeaderContent = styled.View`
	margin-top: ${RFValue(35)}px;
`;

export const Title = styled.Text`
	font-family: ${({ theme }) => theme.fonts.bold};
	font-size: ${RFValue(32)}px;
	color: ${({ theme }) => theme.colors.text_dark};
	margin-bottom: ${RFValue(10)}px;
`;

export const Description = styled.Text`
	font-family: ${({ theme }) => theme.fonts.regular};
	font-size: ${RFValue(16)}px;
	color: ${({ theme }) => theme.colors.text};
	margin-bottom: ${RFValue(25)}px;
`;

export const SearchContent = styled.View`
	background-color: ${({ theme }) => theme.colors.background};
	width: 100%;
	height: ${RFValue(60)}px;
	border-radius: 14px;
	flex-direction: row;
	margin-bottom: ${RFValue(15)}px;
`;

export const SearchButton = styled(RectButton)`
	width: ${RFValue(58)}px;
	height: ${RFValue(60)}px;
	border-radius: 14px;
	align-items: center;
	justify-content: center;
`;

export const Input = styled.TextInput`
	flex: 1;
	padding: 0 ${RFValue(4)}px;
	font-family: ${({ theme }) => theme.fonts.regular};
	font-size: ${RFValue(16)}px;
	color: ${({ theme }) => theme.colors.text};
`;

export const Content = styled.View``;
