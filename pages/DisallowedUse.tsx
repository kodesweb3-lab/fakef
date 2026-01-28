import React from 'react';
import { ResponsivePage } from '../components/ResponsivePage';
import DisallowedUseMobile from './DisallowedUseMobile';
import DisallowedUseDesktop from './DisallowedUseDesktop';

/**
 * DisallowedUse Page
 * 
 * Renders mobile or desktop version based on screen size.
 */

const DisallowedUse: React.FC = () => {
  return (
    <ResponsivePage
      mobile={<DisallowedUseMobile />}
      desktop={<DisallowedUseDesktop />}
    />
  );
};

export default DisallowedUse;
