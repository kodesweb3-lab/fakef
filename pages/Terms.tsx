import React from 'react';
import { ResponsivePage } from '../components/ResponsivePage';
import TermsMobile from './TermsMobile';
import TermsDesktop from './TermsDesktop';

/**
 * Terms Page
 * 
 * Renders mobile or desktop version based on screen size.
 */

const Terms: React.FC = () => {
  return (
    <ResponsivePage
      mobile={<TermsMobile />}
      desktop={<TermsDesktop />}
    />
  );
};

export default Terms;
