import Head from 'next/head';
import React from 'react';
import styles from './PrimaryLayout.module.css';

export interface IPrimaryLayout {}
type PrimaryLayoutProps = {
  children?: React.ReactNode;
};
const PrimaryLayout: React.FC<IPrimaryLayout> = ({
  children,
}: PrimaryLayoutProps) => {
  return (
    <>
      <Head>
        <title>Primary Layout Example</title>
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default PrimaryLayout;
