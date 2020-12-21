import React from 'react';
import StyledStatsBackground from './Background/StatsBackground';
import { StatsSection, TagLine } from './Stats.elements';

const Stats = ({ tagline }) => {
  return (
    <StyledStatsBackground>
      <StatsSection>
        <TagLine>{tagline}</TagLine>
      </StatsSection>
    </StyledStatsBackground>
  );
};

export default Stats;
