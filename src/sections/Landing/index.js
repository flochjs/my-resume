import React from 'react';
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image';
import { FormattedMessage } from 'gatsby-plugin-react-intl';
import classNames from 'classnames';

import Button from '../../components/Button';

import { useBackground, useDeviceDetect } from '../../hooks';

import messages from './messages';

import * as classes from './style.module.css';

function Title({ isMobile, moveDown }) {
  const jsLogo = (
    <StaticImage
      src="../../images/js-logo.png"
      alt="Javascript logo"
      width={20}
      style={{ verticalAlign: 'baseline', marginLeft: '.1em' }}
      placeholder="blurred"
      formats={['auto', 'webp', 'avif']}
    />
  );

  const sentences = isMobile ? (
    <>
      <h1 className={classes.firstSentence}>FULL STACK{jsLogo}</h1>
      <h1 className={classes.secondSentence}>
        <FormattedMessage {...messages.dev} />
      </h1>
    </>
  ) : (
    <>
      <h1 className={classes.firstSentence}>FULL STACK JAVASCRIPT</h1>
      <h1 className={classes.secondSentence}>
        <FormattedMessage {...messages.webDev} />
        {jsLogo}
      </h1>
    </>
  );

  return (
    <div
      className={classNames(classes.title, {
        [classes.mobileTitle]: isMobile,
        [classes.desktopTitle]: !isMobile,
      })}
    >
      {sentences}
      <Button className={classes.moveIndication} onClick={moveDown}>
        {isMobile ? (
          <FormattedMessage {...messages.swipeUp} />
        ) : (
          <FormattedMessage {...messages.scroll} />
        )}
        <span className={classes.line} />
      </Button>
    </div>
  );
}

export default function Landing({ moveDown }) {
  const background = useBackground();
  const { isMobile } = useDeviceDetect();

  return (
    <div className={classes.root}>
      <Title isMobile={isMobile()} moveDown={moveDown} />
      <GatsbyImage
        image={background}
        style={{
          position: 'absolute',
          height: '100%',
          zIndex: -1,
        }}
        alt=""
      />
    </div>
  );
}
