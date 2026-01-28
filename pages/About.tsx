import React from 'react';
import { ResponsivePage } from '../components/ResponsivePage';
import AboutMobile from './AboutMobile';
import AboutDesktop from './AboutDesktop';

/**
 * About Page
 * 
 * Renders mobile or desktop version based on screen size.
 */

const About: React.FC = () => {
  return (
    <ResponsivePage
      mobile={<AboutMobile />}
      desktop={<AboutDesktop />}
    />
  );
};

export default About;
