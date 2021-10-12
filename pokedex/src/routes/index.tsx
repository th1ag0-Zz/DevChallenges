import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../pages/Home';

const { Navigator, Screen } = createNativeStackNavigator();

export const Routes = () => (
	<NavigationContainer>
		<Navigator screenOptions={{ headerShown: false }}>
			<Screen name="Home" component={Home} />
		</Navigator>
	</NavigationContainer>
);
