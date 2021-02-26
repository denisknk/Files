import React, { lazy, Suspense } from 'react';
import { Loader } from '../../components/Loader';

const Index = lazy(() => import('./index'));

export const FilesPage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Index />
    </Suspense>
  );
};
