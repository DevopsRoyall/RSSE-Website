// components/Layout.tsx
import React from 'react';
import Head from 'next/head';
import { useRSSEContext } from './RSSEContext';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { logo, schedule1, schedule2 } = useRSSEContext();

  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <img src={logo} alt="RSSE Logo" />
      </header>
      <main>{children}</main>
      <footer>
        <div>
          <h2>RSSE 1 Schedule</h2>
          <ul>
            {schedule1.map((event, index) => (
              <li key={index}>{event}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2>RSSE 2 Schedule</h2>
          <ul>
            {schedule2.map((event, index) => (
              <li key={index}>{event}</li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
