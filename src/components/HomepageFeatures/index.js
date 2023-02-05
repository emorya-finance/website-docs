import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'User-Friendly',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        Transform your fitness journey and get rewarded with Emorya. 
        Our app makes it easy to track progress and reach your goals. 
        Join the revolution of healthy but wealthy people.
      </>
    ),
  },
  {
    title: 'Embrace a Healthier Life',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        Embrace a healthier life and unleash your full potential. 
        Say "Goodbye" to limitations and "Hello" to optimal health, 
        Increased energy, and a happier you. 
        Take control of your well-being and discover the benefits of a 
        healthier but wealthier lifestyle.
      </>
    ),
  },
  {
    title: 'Powered by MultiverseX',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        The blockchain built for the future. With advanced security measures, 
        scalability, and interoperability, MultiverseX is poised to revolutionize 
        the way businesses and individuals interact with each other. 
        Experience the benefits of a fast, efficient, and reliable blockchain. 
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
