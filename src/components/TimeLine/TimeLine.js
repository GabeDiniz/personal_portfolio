import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  // const [activeItem, setActiveItem] = useState(0);
  // const carouselRef = useRef();

  // const scroll = (node, left) => {
  //   return node.scrollTo({ left, behavior: 'smooth' });
  // }

  // const handleClick = (e, i) => {
  //   e.preventDefault();

  //   if (carouselRef.current) {
  //     const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
  //     scroll(carouselRef.current, scrollLeft);
  //   }
  // }

  // const handleScroll = () => {
  //   if (carouselRef.current) {
  //     const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

  //     setActiveItem(index);
  //   }
  // }

  // // snap back to beginning of scroll when window is resized
  // // avoids a bug where content is covered up if coming from smaller screen
  // useEffect(() => {
  //   const handleResize = () => {
  //     scroll(carouselRef.current, 0);
  //   }

  //   window.addEventListener('resize', handleResize);
  // }, []);

  return (
    <Section id="about">
      <SectionDivider />
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        I am a student majoring in Geomatics and pursuing a minor in Computer Science at the University of Waterloo. I'm a hard-working student who wants to build my reputation as a dedicated and focused employee. 
      </SectionText>
      <SectionText>
        For my first and second co-op, I was an Instructional Support Assistant for a JavaScript course at the University of Waterloo. I worked with a small team to alter assignments, grade, and teach JavaScript. This job allowed me to build on my communication, and problem-solving skills.
      </SectionText>
      <SectionText>
        My most recent co-op, I worked as a Website Developer at a start-up company called U+ Education. The experience I gained was amazing. I got to work in a fast-paced environment with a large team. I was exposed to all the different sectors of the company and learned a great amount from other teams within U+. I was given the opportunity to work on the second and improved version of the U+ website. I was also the lead for the Website Developer team where I managed 3 other students who helped me maintain and improve the U+ website. 
      </SectionText>
      <SectionText>
        I believe that I have obtained skills from my competitive university and past jobs which define me. I am excited to implement and further develop them in any future opportunities that I receive.
      </SectionText>
    </Section>
  );
};

export default Timeline;
