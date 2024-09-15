import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Learn by doing',
    Svg: require('@site/static/img/learningByDoing.svg').default,
    description: (
      <>
        It's time to do the hard thing, we need to go beyond the tutorial hell. Let's learn by doing.
      </>
    ),
  },
  {
    title: 'Share what you learn',
    Svg: require('@site/static/img/sharing.svg').default,
    description: (
      <>
        Beyond the knowledge you can acquire, one of the best options for deep learning is to teach.
      </>
    ),
  },
  {
    title: 'Create community',
    Svg: require('@site/static/img/community.svg').default,
    description: (
      <>
        We can grow faster together being part of the community and adding value to the organization.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
