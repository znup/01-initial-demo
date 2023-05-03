import { ReactNode } from 'react';

import Head from 'next/head';
import { Navbar } from '../Navbar';

interface propsWithChildren {
  children: ReactNode;
}

export const MainLayout = ({ children }: propsWithChildren) => {
  return (
    <>
      <Head>
        <title>Adan pr</title>
        <meta name="description" content="Home Page" />
      </Head>
      <Navbar />

      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 `}
      >
        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
          {children}
        </div>
      </main>
    </>
  );
};
