import React from 'react';

interface Props {
  startYear?: number;
}

export const ExperienceYears: React.FC<Props> = ({ startYear = 2019 }) => {
  const currentYear = new Date().getFullYear();
  const years = Math.max(1, currentYear - startYear);
  return <span>{years}+</span>;
};
