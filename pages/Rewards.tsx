import React from 'react';
import { ResponsivePage } from '../components/ResponsivePage';
import RewardsMobile from './RewardsMobile';
import RewardsDesktop from './RewardsDesktop';

/**
 * Rewards Page
 * 
 * Renders mobile or desktop version based on screen size.
 */

const Rewards: React.FC = () => {
  return (
    <ResponsivePage
      mobile={<RewardsMobile />}
      desktop={<RewardsDesktop />}
    />
  );
};

export default Rewards;
