import React from 'react';

import {
	Section,
	SectionText,
	SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
	<Section row nopadding>
		<LeftSection>
			<SectionTitle main center>
				Hey!! <br />
				Welcome to my personal portfolio.
			</SectionTitle>
			<SectionText>
				I am a web developer and machine learning enthusiast. I have done work
				in various sectors of computer science and engineering.
			</SectionText>
			<Button onClick={() => (window.location = '#about')}>Learn More</Button>
		</LeftSection>
	</Section>
);

export default Hero;
