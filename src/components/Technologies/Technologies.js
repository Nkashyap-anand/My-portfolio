import React from 'react';
import { DiFirebase, DiReact, DiPython } from 'react-icons/di';
import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from '../../styles/GlobalComponents';
import {
	List,
	ListContainer,
	ListItem,
	ListParagraph,
	ListTitle,
} from './TechnologiesStyles';

const Technologies = () => (
	<Section id='tech'>
		<SectionDivider />
		<br />
		<SectionTitle>Technologies</SectionTitle>
		<SectionText>
			I have worked with a range of technologies in the web development world.
			From Back-end to Front-end. I have also worked with ML and DL.
		</SectionText>

		<List>
			<ListItem>
				<DiReact size='1 rem' />
				<ListContainer>
					<ListTitle>Front-End</ListTitle>
					<ListParagraph>
						Experience with <br />
						React.js
					</ListParagraph>
				</ListContainer>
			</ListItem>

			<ListItem>
				<DiFirebase size='1 rem' />
				<ListContainer>
					<ListTitle>Back-End</ListTitle>
					<ListParagraph>
						Experience with <br />
						Node & Databases
					</ListParagraph>
				</ListContainer>
			</ListItem>

			<ListItem>
				<DiPython size='1 rem' />
				<ListContainer>
					<ListTitle>Machine Learning</ListTitle>
					<ListParagraph>
						Experience with <br />
						ML & DL
					</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
	</Section>
);

export default Technologies;
