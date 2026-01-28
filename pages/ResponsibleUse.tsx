import React from 'react';
import { ResponsivePage } from '../components/ResponsivePage';
import ResponsibleUseMobile from './ResponsibleUseMobile';
import ResponsibleUseDesktop from './ResponsibleUseDesktop';

/**
 * ResponsibleUse Page
 * 
 * Renders mobile or desktop version based on screen size.
 */

const ResponsibleUse: React.FC = () => {
  return (
    <ResponsivePage
      mobile={<ResponsibleUseMobile />}
      desktop={<ResponsibleUseDesktop />}
    />
  );
};

export default ResponsibleUse;
