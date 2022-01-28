import { map } from 'ramda';
import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import {
  IntlContextConsumer,
  changeLocale,
  useIntl,
  FormattedMessage,
} from 'gatsby-plugin-react-intl';
import classNames from 'classnames';

import Button from '../../../components/Button';
import Drawer, { DRAWER_VARIANTS } from '../../../components/Drawer';
import DropDown, {
  MENU_VARIANTS as DROPDOWN_VARIANTS,
} from '../../../components/Menu';
import Icon from '../../../components/Icon';
import Tooltip from '../../../components/Tooltip';

import { ThemeContext } from '../../Theme';

import { LANGS, SECTIONS } from '../../../constants';

import TranslateIcon from '../../../images/translate.svg';
import LightModeIcon from '../../../images/light-mode.svg';
import DarkModeIcon from '../../../images/dark-mode.svg';
import MenuIcon from '../../../images/menu.svg';
import CloseIcon from '../../../images/close.svg';

import messages from './messages';

import * as classes from './style.module.css';

function MenuToggle({ isDrawerOpen, onClick }) {
  const { formatMessage } = useIntl();

  const iconProps = isDrawerOpen
    ? { component: CloseIcon, 'aria-label': formatMessage(messages.closeMenu) }
    : { component: MenuIcon, 'aria-label': formatMessage(messages.openMenu) };

  return (
    <Button className={classes.menuToggle} onClick={onClick}>
      <Icon {...iconProps} />
    </Button>
  );
}

function Brand({ fullName }) {
  return (
    <Button className={classes.brand} to={`#${SECTIONS.landing}`}>
      {fullName}
    </Button>
  );
}

function Translation() {
  const { formatMessage } = useIntl();

  const label = formatMessage(messages.translate);

  return (
    <DropDown variant={DROPDOWN_VARIANTS.dropDownRight}>
      <DropDown.Toggle>
        <Icon component={TranslateIcon} aria-label={label} />
      </DropDown.Toggle>
      <DropDown.List>
        <IntlContextConsumer>
          {({ languages }) =>
            map(
              (language) => (
                <DropDown.Item
                  key={language}
                  onClick={() => changeLocale(language)}
                >
                  {LANGS[language]}
                </DropDown.Item>
              ),
              languages,
            )
          }
        </IntlContextConsumer>
      </DropDown.List>
    </DropDown>
  );
}

function Theme() {
  const { toggleTheme, isDark } = useContext(ThemeContext);
  const { formatMessage } = useIntl();

  const label = formatMessage(
    messages[isDark ? 'darkThemeMode' : 'lightThemeMode'],
  );

  return (
    <Tooltip title={label} noMargin>
      <Button onClick={toggleTheme}>
        <Icon
          component={isDark ? LightModeIcon : DarkModeIcon}
          aria-label={label}
        />
      </Button>
    </Tooltip>
  );
}

function Github({ link }) {
  const { isDark } = useContext(ThemeContext);
  const { lightGithubLogo, darkGithubLogo } = useStaticQuery(graphql`
    query {
      lightGithubLogo: file(relativePath: { eq: "github-logo-light.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 60
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      darkGithubLogo: file(relativePath: { eq: "github-logo-dark.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 60
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);

  return (
    <Button
      className={classes.githubLink}
      to={link}
      target="_blank"
      rel="noopener"
    >
      <GatsbyImage
        image={getImage(isDark ? lightGithubLogo : darkGithubLogo)}
        alt="Github logo"
      />
    </Button>
  );
}

function Navigation({
  currentSection,
  isLargeVp,
  buttonsProps = {},
  className,
}) {
  return (
    <nav className={classNames(classes.nav, className)}>
      <Button
        to={`#${SECTIONS.purpose}`}
        {...buttonsProps}
        className={classNames(
          classes.navLink,
          {
            [classes.activeNavLink]:
              currentSection === SECTIONS.landing ||
              currentSection === SECTIONS.purpose,
          },
          buttonsProps.className,
        )}
      >
        <FormattedMessage {...messages.introduction} />
      </Button>
      <Button
        to={`#${SECTIONS.timeline}${isLargeVp ? '-1' : ''}`}
        {...buttonsProps}
        className={classNames(
          classes.navLink,
          { [classes.activeNavLink]: currentSection === SECTIONS.timeline },
          buttonsProps.className,
        )}
      >
        <FormattedMessage {...messages.timeline} />
      </Button>
      <Button
        to={`#${SECTIONS.skills}`}
        {...buttonsProps}
        className={classNames(
          classes.navLink,
          { [classes.activeNavLink]: currentSection === SECTIONS.skills },
          buttonsProps.className,
        )}
      >
        <FormattedMessage {...messages.skills} />
      </Button>
      <Button
        to={`#${SECTIONS.contacts}`}
        {...buttonsProps}
        className={classNames(
          classes.navLink,
          { [classes.activeNavLink]: currentSection === SECTIONS.contacts },
          buttonsProps.className,
        )}
      >
        <FormattedMessage {...messages.contacts} />
      </Button>
    </nav>
  );
}

export default function Header({
  opaque,
  currentSection,
  isLargeVp,
  isDrawerOpen,
  closeDrawer,
  toggleDrawer,
  githubLink,
  fullName,
  className,
  ...props
}) {
  return (
    <>
      <header
        className={classNames(
          classes.root,
          { [classes.opaque]: opaque && !isDrawerOpen },
          className,
        )}
        {...props}
      >
        <Brand fullName={fullName} />
        <div className={classes.rightSection}>
          {isLargeVp && (
            <Navigation currentSection={currentSection} isLargeVp />
          )}
          <Translation />
          <Theme />
          <Github link={githubLink} />
          {!isLargeVp && (
            <MenuToggle isDrawerOpen={isDrawerOpen} onClick={toggleDrawer} />
          )}
        </div>
      </header>
      {!isLargeVp && (
        <Drawer open={isDrawerOpen} variant={DRAWER_VARIANTS.fromRight}>
          <Navigation
            className={classes.navSmallVp}
            currentSection={currentSection}
            buttonsProps={{ onClick: closeDrawer }}
          />
        </Drawer>
      )}
    </>
  );
}
