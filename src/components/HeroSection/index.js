import React, { useState } from 'react';
import Video from '../../videos/video.mp4';

import { SignUpButton } from '../ButtonElements';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroButtonWrapper,
  ArrowForward,
  ArrowRight,
} from './HeroElements';

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <HeroContainer id='home'>
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
          <HeroH1>Virtual Banking Made Easy</HeroH1>
          <HeroP>
            Sign up for a new account today and receive $250 in credit towards
            your next payment.
          </HeroP>
          <HeroButtonWrapper>
            <SignUpButton
              to='/signUp'
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary='true'
              dark='true'
              smooth={true}
              duration={800}
              spy={true}
              exact='true'
              offset={-80}
            >
              Get started {hover ? <ArrowForward /> : <ArrowRight />}
            </SignUpButton>
          </HeroButtonWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
