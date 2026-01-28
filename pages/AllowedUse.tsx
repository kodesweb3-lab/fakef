import React from 'react';
import { ResponsivePage } from '../components/ResponsivePage';
import AllowedUseMobile from './AllowedUseMobile';
import AllowedUseDesktop from './AllowedUseDesktop';

/**
 * AllowedUse Page
 * 
 * Renders mobile or desktop version based on screen size.
 */

const AllowedUse: React.FC = () => {
  return (
    <ResponsivePage
      mobile={<AllowedUseMobile />}
      desktop={<AllowedUseDesktop />}
    />
  );
};

export default AllowedUse;
