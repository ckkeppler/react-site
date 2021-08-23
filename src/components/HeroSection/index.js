import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElements';
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
      <HeroContainer>
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
            <Button
              to='signup'
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary='true'
              dark='true'
            >
              Get started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroButtonWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
