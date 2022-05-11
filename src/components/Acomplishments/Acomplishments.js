import React from 'react';

import {
	Section,
	SectionDivider,
	SectionTitle,
} from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
	{ number: 10, text: 'Projects in various fields' },
	{ number: 2, text: 'Research Paper Published' },
	// { number: 1900, text: 'Github Followers' },
	// { number: 5000, text: 'Github Stars' },
];

const Acomplishments = () => (
	<Section>
		<SectionTitle>Personal Acomplishments</SectionTitle>
		<Boxes>
			{data.map((card, index) => (
				<Box key={index}>
					<BoxNum>{card.number}</BoxNum>
					<BoxText>{card.text}</BoxText>
				</Box>
			))}
		</Boxes>
	</Section>
);

export default Acomplishments;
