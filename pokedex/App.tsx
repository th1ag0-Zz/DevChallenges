import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

import { Routes } from './src/routes';
import theme from './src/global/styles/theme';
import { customFonts } from './src/utils/fonts';

export default function App() {
	const [fontLoaded, setFontLoaded] = useState(false);

	useEffect(() => {
		async function _loadFontsAsync() {
			await Font.loadAsync(customFonts);
			setFontLoaded(true);
		}

		_loadFontsAsync();
	}, []);

	if (!fontLoaded) {
		return <AppLoading />;
	}

	return (
		<>
			<StatusBar
				barStyle="dark-content"
				backgroundColor="transparent"
				translucent={false}
			/>
			<ThemeProvider theme={theme}>
				<Routes />
			</ThemeProvider>
		</>
	);
}
