import React from 'react';

import { TypeCard } from '../TypeCard';

import {
	Container,
	InfoContent,
	Title,
	Number,
	TypeContent,
	PokemonImage,
} from './styles';

export const PokemonCard: React.FC = () => {
	return (
		<Container>
			<InfoContent>
				<Number>{'#001'}</Number>
				<Title>{'Bulbasaur'}</Title>

				<TypeContent>
					<TypeCard />
				</TypeContent>
			</InfoContent>

			<PokemonImage
				source={{
					uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
				}}
			/>
		</Container>
	);
};
