'use client';
import dynamic from 'next/dynamic';
import React from 'react';

const LazyComp = dynamic(
  () => import('./LazyImportComponent').then((mod) => mod.LazyImportComponent),
  { ssr: false }
);

export const ClientComp = () => {
  return (
    <div>
      <LazyComp />
    </div>
  );
};
