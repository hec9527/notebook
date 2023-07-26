import React from 'react';
import Loading from '../loading';

const LazyLoading: React.FC<{ component: React.LazyExoticComponent<any> }> = ({ component }) => {
  const AsyncComponent = component;

  return (
    <React.Suspense fallback={<Loading />}>
      <AsyncComponent />
    </React.Suspense>
  );
};

LazyLoading.displayName = 'LazyLoading';

export default LazyLoading;
