import { map, juxt, pipe, keys } from 'ramda';
import React from 'react';
import classNames from 'classnames';
import { FormattedMessage, useIntl } from 'gatsby-plugin-react-intl';

import Icon from '../../components/Icon';
import Button from '../../components/Button';
import Drawer, { DRAWER_VARIANTS } from '../../components/Drawer';
import Progress, { PROGRESS_VARIANTS } from '../../components/Progress';
import Chip from '../../components/Chip';
import Skill from '../../components/Skill';
import Timeline from '../../components/Timeline';
import Tooltip, { TOOLTIP_VARIANTS } from '../../components/Tooltip';

import { useDeviceDetect } from '../../hooks';
import { mapIndexed, isOdd } from '../../helpers';
import { EXPERIENCE_TYPES, SECTIONS } from '../../constants';

import CloseIcon from '../../images/close.svg';

import messages from '../../data/experiences/messages';

import * as classes from './style.module.css';

const getExperienceTypeClassName = (type) =>
  classNames({
    [classes.education]: type === EXPERIENCE_TYPES.education,
    [classes.employee]: type === EXPERIENCE_TYPES.employee,
    [classes.freelance]: type === EXPERIENCE_TYPES.freelance,
  });

function Legend() {
  return (
    <ul className={classes.legend}>
      {pipe(
        keys,
        map((type) => (
          <li key={type} className={classes.legendItem}>
            <div
              className={classNames(
                classes.dot,
                classes.legendDot,
                classes[type],
              )}
            />
            <small>
              <FormattedMessage {...messages[type]} />
            </small>
          </li>
        )),
      )(EXPERIENCE_TYPES)}
    </ul>
  );
}

export function TimelineNavigation({
  currentExperience,
  experiences,
  className,
}) {
  return (
    <div className={classNames(classes.timelineNavigationContainer, className)}>
      <Timeline
        className={classes.timelineNavigation}
        activeStep={currentExperience}
      >
        {mapIndexed(({ title, date, type }, index) => {
          const experienceTypeClassName = getExperienceTypeClassName(type);
          const titleEl = (
            <Chip className={experienceTypeClassName}>{title}</Chip>
          );
          const dateEl = date;
          const [leftContent, rightContent] = isOdd(index)
            ? [dateEl, titleEl]
            : [titleEl, dateEl];

          return (
            <Timeline.Step
              buttonProps={{
                to: `#${SECTIONS.timeline}-${index + 1}`,
                className: classes.stepBtn,
              }}
              key={index}
              dotClassName={experienceTypeClassName}
            >
              <Timeline.Step.LeftContent>
                {leftContent}
              </Timeline.Step.LeftContent>
              <Timeline.Step.RightContent>
                {rightContent}
              </Timeline.Step.RightContent>
            </Timeline.Step>
          );
        }, experiences)}
      </Timeline>
      <Legend />
    </div>
  );
}

function Experience({
  duration,
  title,
  story,
  techs,
  headerLastItem,
  skills,
  className,
}) {
  const { formatMessage } = useIntl();

  const durationLabel = formatMessage(messages.duration);
  const techsLabel = formatMessage(messages.techs);

  return (
    <article className={classNames(classes.experience, className)}>
      <div className={classes.experienceHeader}>
        <span className={classes.duration}>
          {duration && (
            <Tooltip
              title={durationLabel}
              variant={TOOLTIP_VARIANTS.bottomAbsoluteEnd}
            >
              <small aria-label={durationLabel}>{duration}</small>
            </Tooltip>
          )}
        </span>
        <h2 className={classes.title}>{title}</h2>
        <div className={classes.headerLastItem}>{headerLastItem}</div>
      </div>
      <div className={classes.story}>{story}</div>
      <Tooltip title={techsLabel} variant={TOOLTIP_VARIANTS.right}>
        <div className={classes.usedTechs} aria-label={techsLabel}>
          {map((tech) => {
            const { label, logo, link } = skills[tech];

            return (
              <Tooltip key={tech} title={label} variant={TOOLTIP_VARIANTS.top}>
                <Skill
                  className={classes.tech}
                  label={label}
                  logo={logo}
                  link={link}
                />
              </Tooltip>
            );
          }, techs)}
        </div>
      </Tooltip>
    </article>
  );
}

export function TimelineDrawer({
  open,
  close,
  currentExperience,
  experiences,
  skills,
}) {
  const { formatMessage } = useIntl();

  return (
    <Drawer
      className={classes.drawer}
      open={open}
      variant={DRAWER_VARIANTS.fromLeft}
    >
      {currentExperience !== -1 && (
        <Experience
          {...experiences[currentExperience]}
          skills={skills}
          headerLastItem={
            <Button onClick={close}>
              <Icon
                component={CloseIcon}
                aria-label={formatMessage(messages.closeDrawer)}
              />
            </Button>
          }
        />
      )}
    </Drawer>
  );
}

function LargeVp({ experiences, skills }) {
  const { formatMessage } = useIntl();

  return mapIndexed(
    (experience, index) => (
      <section
        data-anchor={`${SECTIONS.timeline}-${index + 1}`}
        key={index}
        className="section"
      >
        <div className={classes.largeVp}>
          <Progress
            className={classes.connector}
            variant={PROGRESS_VARIANTS.vertical}
          />
          <Experience
            className={classes.card}
            {...experience}
            skills={skills}
            headerLastItem={
              <Tooltip
                title={formatMessage(messages[experience.type])}
                variant={TOOLTIP_VARIANTS.bottomAbsoluteStart}
              >
                <div
                  className={classNames(
                    classes.dot,
                    getExperienceTypeClassName(experience.type),
                  )}
                />
              </Tooltip>
            }
          />
        </div>
      </section>
    ),
    experiences,
  );
}

function SmallVp({
  activeStep,
  setActiveStep,
  openExperienceDrawer,
  experiences,
}) {
  const { isMobile } = useDeviceDetect();

  return (
    <section className="section" data-anchor={SECTIONS.timeline}>
      <div
        className={classNames(classes.smallVp, {
          [classes.mobile]: isMobile(),
        })}
      >
        <Timeline className={classes.timeline} activeStep={activeStep}>
          {mapIndexed(({ title, date, type }, index) => {
            const experienceTypeClassName = getExperienceTypeClassName(type);
            const titleEl = (
              <Chip className={experienceTypeClassName}>{title}</Chip>
            );
            const [leftContent, rightContent] = isOdd(index)
              ? [date, titleEl]
              : [titleEl, date];

            return (
              <Timeline.Step
                key={index}
                dotClassName={experienceTypeClassName}
                buttonProps={{
                  onClick: juxt([
                    openExperienceDrawer,
                    () => setActiveStep(index),
                  ]),
                }}
              >
                <Timeline.Step.LeftContent>
                  {leftContent}
                </Timeline.Step.LeftContent>
                <Timeline.Step.RightContent>
                  {rightContent}
                </Timeline.Step.RightContent>
              </Timeline.Step>
            );
          }, experiences)}
        </Timeline>
      </div>
    </section>
  );
}

export default function TimelineSection({
  isLargeVp,
  activeStep,
  setActiveStep,
  openExperienceDrawer,
  experiences = [],
  skills = [],
}) {
  const Component = isLargeVp ? LargeVp : SmallVp;

  return (
    <Component
      activeStep={activeStep}
      setActiveStep={setActiveStep}
      openExperienceDrawer={openExperienceDrawer}
      experiences={experiences}
      skills={skills}
    />
  );
}
