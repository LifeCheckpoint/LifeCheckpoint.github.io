import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import { useEffect, useRef } from 'react';

import SakuraWrapper from '@site/src/components/SakuraWrapper';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <SakuraWrapper></SakuraWrapper>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            随便逛逛...
          </Link>
          &nbsp;&nbsp;&nbsp;
          <Link
            className="button button--secondary button--lg"
            to="friends">
            看看友链...
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  const bgRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const moveX = (e.clientX - centerX) * -0.005;
      const moveY = (e.clientY - centerY) * -0.005;
      
      bgRef.current.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Layout
      title={`星空列车`}
      description="一些...描述？">
      <div ref={bgRef} className={styles.bgContainer} />
      <HomepageHeader />
      <main className="mainpage">
      </main>
    </Layout>
  );
}
