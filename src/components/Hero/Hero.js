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
        I may not be the best at what I do, but I can assure you that I will work harder than anyone to excel and exceed your expectations. 
      </SectionText>
      {/* <Button onClick={() => window.location = 'https:/google.com'}>Learn More</Button> */}
    </LeftSection>
  </Section>
);

export default Hero;