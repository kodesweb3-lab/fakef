import React from 'react';
import { ResponsivePage } from '../components/ResponsivePage';
import EthicsMobile from './EthicsMobile';
import EthicsDesktop from './EthicsDesktop';

/**
 * Ethics Page
 * 
 * Renders mobile or desktop version based on screen size.
 */

const Ethics: React.FC = () => {
  return (
    <ResponsivePage
      mobile={<EthicsMobile />}
      desktop={<EthicsDesktop />}
    />
  );
};

export default Ethics;
