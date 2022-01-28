import { map, filter, pipe, values } from 'ramda';
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FormattedMessage, useIntl } from 'gatsby-plugin-react-intl';
import classNames from 'classnames';

import Link from '../../components/Link';
import Skill from '../../components/Skill';
import Rating from '../../components/Rating';

import { useBackground, useDeviceDetect } from '../../hooks';

import { SKILL_TYPES } from '../../constants';

import messages from './messages';

import * as classes from './style.module.css';

function Section({ title, stack }) {
  return (
    <section className={classes.section}>
      <h2 className={classes.subtitle}>{title}</h2>
      <ul className={classes.skills}>
        {map(
          ({ label, value, ...skillsProps }) => (
            <li className={classes.skill} key={label}>
              <Skill label={label} {...skillsProps} />
              <em className={classes.label}>{label}</em>
              <Rating className={classes.progress} value={value} />
            </li>
          ),
          stack,
        )}
      </ul>
    </section>
  );
}

function Banner() {
  const background = useBackground();

  return (
    <div className={classes.stories}>
      <FormattedMessage
        {...messages.story}
        values={{
          story1: (chunks) => (
            <p className={classNames(classes.story, classes.story1)}>
              {chunks}
            </p>
          ),
          story2: (chunks) => (
            <p className={classNames(classes.story, classes.story2)}>
              {chunks}
            </p>
          ),
          story3: (chunks) => (
            <p className={classNames(classes.story, classes.story3)}>
              {chunks}
            </p>
          ),
          responsive: (chunks) => (
            <Link
              to="https://en.wikipedia.org/wiki/Responsive_web_design"
              target="_blank"
              rel="noopener"
            >
              {chunks}
            </Link>
          ),
          i18n: (chunks) => (
            <Link
              to="https://en.wikipedia.org/wiki/Internationalization_and_localization"
              target="_blank"
              rel="noopener"
            >
              {chunks}
            </Link>
          ),
          seo: (chunks) => (
            <Link
              to="https://en.wikipedia.org/wiki/Search_engine_optimization"
              target="_blank"
              rel="noopener"
            >
              {chunks}
            </Link>
          ),
          strong: (chunks) => (
            <strong className={classes.thanksReact}>{chunks}</strong>
          ),
        }}
      />
      <GatsbyImage
        image={background}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1,
          width: '100%',
          height: '100%',
        }}
        alt=""
      />
    </div>
  );
}

const getStack = (expectedType, skills) =>
  pipe(
    filter(({ type }) => type === expectedType),
    values,
  )(skills);

export default function Skills({ skills }) {
  const { formatMessage } = useIntl();
  const { isMobile } = useDeviceDetect();

  return (
    <div className={classNames(classes.root, { [classes.mobile]: isMobile() })}>
      <Banner />
      <Section
        title={formatMessage(messages.front)}
        stack={getStack(SKILL_TYPES.front, skills)}
      />
      <Section
        title={formatMessage(messages.back)}
        stack={getStack(SKILL_TYPES.back, skills)}
      />
      <Section
        title={formatMessage(messages.others)}
        stack={getStack(SKILL_TYPES.others, skills)}
      />
      <Section
        title={formatMessage(messages.tools)}
        stack={getStack(SKILL_TYPES.tools, skills)}
      />
      <Section
        title={formatMessage(messages.languages)}
        stack={getStack(SKILL_TYPES.language, skills)}
      />
    </div>
  );
}
