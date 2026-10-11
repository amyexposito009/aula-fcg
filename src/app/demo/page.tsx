import type { Metadata } from 'next';

import Demo from './Demo';

export const metadata: Metadata = {
  title: 'Demo | Nextjs boilerplate',
  description: 'Demo page of the Next.js boilerplate.'
};

const DemoPage = () => <Demo />;

export default DemoPage;
