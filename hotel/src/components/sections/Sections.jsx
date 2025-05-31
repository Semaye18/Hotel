import React, { useEffect, useState } from 'react';
import styles from './Sections.module.scss';
import Hero from '../hero/Hero';
import Hero1 from '../hero1/Hero1';
import Hero2 from '../hero2/Hero2';

const components = [<Hero />, <Hero1 />, <Hero2 />];

const Sections = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % components.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.slider}>
      {components.map((Component, i) => (
        <div
          key={i}
          className={`${styles.slide} ${i === index ? styles.active : ''}`}
        >
          {Component}
        </div>
      ))}
    </div>
  );
};

export default Sections;
