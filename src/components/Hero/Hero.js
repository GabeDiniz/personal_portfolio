import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row >
    <LeftSection>
      <SectionTitle main center>
        Gabriel Diniz
      </SectionTitle>
      <SectionText>
        Welcome! Uhh.. I didn't expect you here to be honest. Especially considering the url for this website is "aquamarine-jelly". I don't know about you, but I think that's pretty sketchy.. Anyway, enjoy your time here! <br /> Oh and DON'T TOUCH ANYTHING! Just kidding, do whatever you want
      </SectionText>
      {/* <Button onClick={() => window.location = 'https:/google.com'}>Learn More</Button> */}
    </LeftSection>
  </Section>
);

export default Hero;