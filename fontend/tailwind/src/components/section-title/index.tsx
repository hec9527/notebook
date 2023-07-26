import React from 'react';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <h2 className='mt-8 text-amber-700'>{children}</h2>
      <hr className='mb-4' />
    </>
  );
};

SectionTitle.displayName = 'SectionTitle';

export default SectionTitle;
