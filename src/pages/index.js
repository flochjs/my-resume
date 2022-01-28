import { startsWith, slice, isNil, pipe } from 'ramda';
import React, { useState, useEffect, memo } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { defineMessages, useIntl } from 'gatsby-plugin-react-intl';
import classNames from 'classnames';

import Layout from '../providers/Layout';

import Landing from '../sections/Landing';
import Purpose from '../sections/Purpose';
import TimelineSections, {
  TimelineNavigation,
  TimelineDrawer,
} from '../sections/Timeline';
import Skills from '../sections/Skills';
import Contacts from '../sections/Contacts';

import Seo from '../components/Seo';

import { useBoolean, useWindowSize } from '../hooks';

import { SECTIONS } from '../constants';

import experiences from '../data/experiences';
import skills from '../data/skills';
import contacts from '../data/contacts';

import * as classes from './index.module.css';
import { list as menuListClassName } from '../components/Menu/style.module.css';

const messages = defineMessages({
  home: {
    id: 'pages/root-home',
    defaultMessage: 'Home',
  },
});

const FULL_PAGE_SCROLLING_SPEED = 1200;
const LARGE_VP_MIN_WIDTH = 900;
const LARGE_VP_MIN_HEIGHT = 700;

const Wrapper = memo(function Wrapper({
  fullpageApi,
  isLargeVp,
  openExperienceDrawer,
  setActiveStep,
  activeStep,
  isADrawerOpen,
}) {
  useEffect(() => {
    if (fullpageApi?.setAllowScrolling)
      fullpageApi.setAllowScrolling(!isADrawerOpen);
  }, [fullpageApi, isADrawerOpen]);

  return (
    <ReactFullpage.Wrapper>
      <section data-anchor={SECTIONS.landing} className="section">
        <Landing moveDown={fullpageApi?.moveSectionDown} />
      </section>
      <section data-anchor={SECTIONS.purpose} className="section">
        <Purpose isLargeVp={isLargeVp} />
      </section>
      <TimelineSections
        isLargeVp={isLargeVp}
        openExperienceDrawer={openExperienceDrawer}
        setActiveStep={setActiveStep}
        activeStep={activeStep}
        experiences={experiences}
        skills={skills}
      />
      <section data-anchor={SECTIONS.skills} className="section">
        <Skills skills={skills} />
      </section>
      <section data-anchor={SECTIONS.contacts} className="section">
        <Contacts contacts={contacts} />
      </section>
    </ReactFullpage.Wrapper>
  );
});

export default function HomePage({ location: { hash } }) {
  const { formatMessage } = useIntl();

  const [currentSection, setCurrentSection] = useState(SECTIONS.landing);
  const [currentExperience, setCurrentExperience] = useState(0);

  useEffect(() => {
    if (!hash) return;

    const hashValue = slice(1, Infinity, hash);

    if (startsWith(SECTIONS.timeline, hashValue)) {
      setCurrentSection(SECTIONS.timeline);

      const dashPos = SECTIONS.timeline.length;
      const experienceIdDefined = hashValue[dashPos] === '-';

      if (experienceIdDefined) {
        const experienceId = pipe(
          slice(dashPos + 1, Infinity),
          (id) => parseInt(id, 10) - 1,
        )(hashValue);
        if (experienceId < experiences.length)
          setCurrentExperience(experienceId);
      }
    } else if (SECTIONS[hashValue]) setCurrentSection(SECTIONS[hashValue]);
  }, [hash, setCurrentSection, setCurrentExperience]);

  const { width, height } = useWindowSize();
  const [isLargeVp, setIsLargeVp] = useState(null);

  // To fix `100vh` IOS bug
  useEffect(() => {
    document.body.style.setProperty('--app-height', `${height}px`);
  }, [height]);

  useEffect(() => {
    if (isNil(height) || isNil(width)) return;

    const nextState =
      width > LARGE_VP_MIN_WIDTH && height > LARGE_VP_MIN_HEIGHT;

    setIsLargeVp(nextState);

    if (currentSection === SECTIONS.timeline) {
      if (isLargeVp === false && nextState === true)
        window.location.hash = `${SECTIONS.timeline}-${currentExperience + 1}`;
      else if (isLargeVp === true && nextState === false)
        window.location.hash = SECTIONS.timeline;
    }
  }, [
    width,
    height,
    currentExperience,
    currentSection,
    isLargeVp,
    setIsLargeVp,
  ]);

  const {
    toggle: toggleMenuDrawer,
    setFalse: closeMenuDrawer,
    value: isMenuDrawerOpen,
  } = useBoolean();
  const {
    setTrue: openExperienceDrawer,
    setFalse: closeExperienceDrawer,
    value: isExperienceDrawerOpen,
  } = useBoolean();

  if (isNil(isLargeVp)) return null;

  const scrollableContent =
    currentSection === SECTIONS.skills ||
    (currentSection === SECTIONS.timeline && !isLargeVp) ||
    (currentSection === SECTIONS.contacts && !isLargeVp);

  return (
    <Layout
      isDrawerOpen={isMenuDrawerOpen}
      toggleDrawer={toggleMenuDrawer}
      closeDrawer={closeMenuDrawer}
      withoutFooter={scrollableContent}
      headerOpaque={scrollableContent}
      currentSection={currentSection}
      contacts={contacts}
      isLargeVp={isLargeVp}
    >
      <Seo title={formatMessage(messages.home)} />
      <div className={classes.root}>
        <ReactFullpage
          scrollOverflow
          scrollingSpeed={FULL_PAGE_SCROLLING_SPEED}
          normalScrollElements={`.${menuListClassName}`}
          onLeave={() => {}}
          render={({ fullpageApi }) => (
            <Wrapper
              fullpageApi={fullpageApi}
              isLargeVp={isLargeVp}
              openExperienceDrawer={openExperienceDrawer}
              activeStep={currentExperience}
              setActiveStep={setCurrentExperience}
              isADrawerOpen={isExperienceDrawerOpen || isMenuDrawerOpen}
            />
          )}
        />
        {isLargeVp && (
          <TimelineNavigation
            className={classNames(classes.timelineNavigation, {
              [classes.timelineNavigationAppear]:
                currentSection === SECTIONS.timeline,
            })}
            currentExperience={currentExperience}
            experiences={experiences}
          />
        )}
        {!isLargeVp && (
          <TimelineDrawer
            open={isExperienceDrawerOpen}
            close={closeExperienceDrawer}
            currentExperience={currentExperience}
            experiences={experiences}
            skills={skills}
          />
        )}
      </div>
    </Layout>
  );
}
