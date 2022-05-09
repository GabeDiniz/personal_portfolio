import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { DiCssdeck, DiTerminalBadge } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: 'white', marginBottom: "20px" }}>
        <DiTerminalBadge size="4rem" /> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2> 
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://www.linkedin.com/in/gabrielsdiniz/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>

      <SocialIcons href="https://github.com/GabeDiniz">
        <AiFillGithub size="3rem" />
      </SocialIcons>
  
      <SocialIcons href="mailto:gabriel.sundiniz@gmail.com">
        <AiFillMail size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
