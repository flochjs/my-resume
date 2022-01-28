import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { FormattedMessage } from 'gatsby-plugin-react-intl';

import Link from '../../components/Link';
import { SECTIONS } from '../../constants';

import messages from './messages';

import * as classes from './style.module.css';

export default function Purpose({ isLargeVp }) {
  return (
    <div className={classes.root}>
      <StaticImage
        src="../../images/profile.jpg"
        alt="Profile"
        placeholder="blurred"
        className={classes.facePicture}
        formats={['auto', 'webp', 'avif']}
      />
      <h1 className={classes.title}>
        <FormattedMessage {...messages.title} />
        <StaticImage
          src="../../images/js-logo.png"
          alt="Javascript logo"
          width={8}
          style={{ verticalAlign: 'baseline', marginLeft: '.1em' }}
          placeholder="blurred"
          formats={['auto', 'webp', 'avif']}
        />
      </h1>
      <div className={classes.stories}>
        <FormattedMessage
          {...messages.story}
          values={{
            story1: (chunks) => <p className={classes.story1}>{chunks}</p>,
            story2: (chunks) => <p className={classes.story2}>{chunks}</p>,
            timeline: (chunks) => (
              <Link to={`#${SECTIONS.timeline}${isLargeVp ? '-1' : ''}`}>
                {chunks}
              </Link>
            ),
            skills: (chunks) => (
              <Link to={`#${SECTIONS.skills}`}>{chunks}</Link>
            ),
            email: (chunks) => (
              <Link to={`#${SECTIONS.contacts}`}>{chunks}</Link>
            ),
            phone: (chunks) => (
              <Link to={`#${SECTIONS.contacts}`}>{chunks}</Link>
            ),
          }}
        />
      </div>
    </div>
  );
}
