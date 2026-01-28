import React from 'react';
import { ResponsivePage } from '../components/ResponsivePage';
import BillingMobile from './BillingMobile';
import BillingDesktop from './BillingDesktop';

/**
 * Billing Page
 * 
 * Renders mobile or desktop version based on screen size.
 */

const Billing: React.FC = () => {
  return (
    <ResponsivePage
      mobile={<BillingMobile />}
      desktop={<BillingDesktop />}
    />
  );
};

export default Billing;
