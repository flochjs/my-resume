import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FormattedMessage, useIntl } from 'gatsby-plugin-react-intl';
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image';

import Link from '../../components/Link';
import Icon from '../../components/Icon';

import { ThemeContext } from '../../providers/Theme';

import { makeMailLink, makePhoneLink } from '../../helpers';

import { useBackground } from '../../hooks';

import PhoneIcon from '../../images/phone.svg';
import EmailIcon from '../../images/email.svg';
import FileIcon from '../../images/file.svg';

import Resume from '../../assets/resume.pdf';

import messages from './messages';

import * as classes from './style.module.css';

function Banner() {
  const background = useBackground();

  return (
    <div className={classes.banner}>
      <h1 className={classes.contactMe}>
        <FormattedMessage {...messages.contactMe} />
        <StaticImage
          src="../../images/js-logo.png"
          alt="Javascript logo"
          width={10}
          style={{ verticalAlign: 'baseline', marginLeft: '.1em' }}
          placeholder="blurred"
          formats={['auto', 'webp', 'avif']}
        />
      </h1>
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

function Contacts({ phone, email, github, githubLink }) {
  const { formatMessage } = useIntl();
  const phoneLabel = formatMessage(messages.phone);
  const emailLabel = formatMessage(messages.email);
  const resumeLabel = formatMessage(messages.resume);
  const { isLight } = useContext(ThemeContext);
  const { lightGithubMark, darkGithubMark } = useStaticQuery(graphql`
    query {
      lightGithubMark: file(relativePath: { eq: "github-mark-light.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 28
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      darkGithubMark: file(relativePath: { eq: "github-mark-dark.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 28
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);

  return (
    <ul className={classes.contacts}>
      <li>
        <div className={classes.contact}>
          <span className={classes.label}>{phoneLabel}</span>
          <Link className={classes.link} to={makePhoneLink(phone)}>
            {phone}
          </Link>
          <div className={classes.bubble}>
            <Icon component={PhoneIcon} aria-label={phoneLabel} />
          </div>
        </div>
      </li>
      <li>
        <div className={classes.contact}>
          <span className={classes.label}>{emailLabel}</span>
          <Link
            className={classes.link}
            to={makeMailLink(email, formatMessage(messages.mailSubject))}
            target="_blank"
            rel="noopener"
          >
            {email}
          </Link>
          <div className={classes.bubble}>
            <Icon component={EmailIcon} aria-label={emailLabel} />
          </div>
        </div>
      </li>
      <li>
        <div className={classes.contact}>
          <span className={classes.label}>GITHUB</span>
          <Link
            className={classes.link}
            to={githubLink}
            target="_blank"
            rel="noopener"
          >
            {github}
          </Link>
          <div className={classes.bubble}>
            <GatsbyImage
              image={getImage(isLight ? darkGithubMark : lightGithubMark)}
              alt="Github logo"
            />
          </div>
        </div>
      </li>
      <li>
        <div className={classes.contact}>
          <span className={classes.label}>{resumeLabel}</span>
          <Link
            className={classes.link}
            to={Resume}
            target="_blank"
            rel="noopener"
          >
            resume.pdf
          </Link>
          <div className={classes.bubble}>
            <Icon component={FileIcon} aria-label={resumeLabel} />
          </div>
        </div>
      </li>
    </ul>
  );
}

export default function ContactsSection({ contacts }) {
  return (
    <div className={classes.root}>
      <Banner />
      <Contacts {...contacts} />
    </div>
  );
}
