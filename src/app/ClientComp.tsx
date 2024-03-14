'use client';
import dynamic from 'next/dynamic';
import React from 'react';

const LazyCompSSR = dynamic(
  () => import('./LazyImportComponent').then((mod) => mod.LazyImportComponent),
  { ssr: true }
);

const LazyCompNonSSR = dynamic(
  () =>
    import('./LazyImportComponentSSR').then(
      (mod) => mod.LazyImportComponentSSR
    ),
  { ssr: false }
);

export const ClientComp = () => {
  return (
    <div>
      <LazyCompSSR />
      <LazyCompNonSSR />
    </div>
  );
};
