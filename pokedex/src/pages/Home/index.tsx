import React from 'react';
import { useWindowDimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import FilterSvg from '../../assets/icons/filter.svg';
import SortSvg from '../../assets/icons/sort.svg';
import GenerationSvg from '../../assets/icons/generation.svg';
import SearchSvg from '../../assets/icons/search.svg';
import PokebalSvg from '../../assets/patterns/pokeball_background.svg';

import { PokemonCard } from '../../components/PokemonCard';

import {
	Container,
	HeaderFilters,
	HeaderFilterButton,
	HeaderContent,
	Title,
	Description,
	SearchContent,
	SearchButton,
	Input,
	Content,
} from './styles';

export const Home: React.FC = () => {
	const { width } = useWindowDimensions();

	return (
		<Container>
			<PokebalSvg
				width={width}
				height={width / 2}
				style={{ position: 'absolute' }}
			/>

			<HeaderFilters>
				<HeaderFilterButton>
					<GenerationSvg width={RFValue(25)} height={RFValue(25)} />
				</HeaderFilterButton>

				<HeaderFilterButton>
					<SortSvg width={RFValue(25)} height={RFValue(25)} />
				</HeaderFilterButton>

				<HeaderFilterButton>
					<FilterSvg width={RFValue(25)} height={RFValue(25)} />
				</HeaderFilterButton>
			</HeaderFilters>

			<HeaderContent>
				<Title>{'Pokédex'}</Title>
				<Description>
					{'Search for Pokémon by name or using the National Pokédex number.'}
				</Description>

				<SearchContent>
					<SearchButton>
						<SearchSvg width={RFValue(20)} height={RFValue(20)} />
					</SearchButton>

					<Input
						placeholder="What Pokémon are you looking for?"
						autoCorrect={false}
					/>
				</SearchContent>
			</HeaderContent>

			<Content>
				<PokemonCard />
			</Content>
		</Container>
	);
};
