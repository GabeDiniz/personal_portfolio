import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Gabriel Diniz
      </SectionTitle>
      <SectionText>
        The purpose of this Website Portfolio is to give you a general idea of who I am. 
      </SectionText>
      {/* <Button onClick={() => window.location = 'https:/google.com'}>Learn More</Button> */}
    </LeftSection>
  </Section>
);

export default Hero;