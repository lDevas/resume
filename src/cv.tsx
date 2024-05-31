import profile from './assets/profile.jpg';
import emptyDot from './assets/emptyDot.svg';
import filledDot from './assets/filledDot.svg';
import type { Education, Experience, Skill } from './data'
import { educations, experiences, personalInformation, skills } from './data';

import styles from './cv.module.scss';

function App() {
  return (
    <>
      <Header />
      <Body />
    </>
  )
}

export function Header () {
  return (
    <div className={styles.pageHeaderBackground}>
      <div className={styles.pageHeader}>
        <div className={styles.cardLeft}>
          <img src={profile} className={styles.profileImage} />
          <h1 className={styles.profileName}>{personalInformation.name}</h1>
          <h2 className={styles.title}>{personalInformation.title}</h2>
          <h3 className={styles.location}>{personalInformation.location}</h3>
        </div>
        <div className={styles.cardRight}>
          <p className={styles.content}>{personalInformation.description}</p>
          <div className={styles.profileLinks}>
            {personalInformation.links.map((link) => (
              <a className={styles.profileLink} href={link.href} target='_blank'>
                <img className={styles.img} src={link.imgSrc} alt={link.name} />
                <div>
                  <div className={styles.type}>{link.type}</div>
                  <div className={styles.name}>{link.name}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Body () {
  return (
    <div className={styles.pageBackground}>
      <div className={styles.pageContainer}>
        <section className={styles.section}>
          <h4 className={styles.sectionHeader}>Experience</h4>
          {experiences.map(experience => (
            <Experience experience={experience} />
          ))}
        </section>
        <section className={styles.section}>
          <h4 className={styles.sectionHeader}>Skills</h4>
          <div className={styles.sectionColumnContainer}>
            {skills.map(skill => (
              <Skill skill={skill} />
            ))}
          </div>
        </section>
        <section className={styles.section}>
          <h4 className={styles.sectionHeader}>Education</h4>
          {educations.map(education => (
            <Education education={education} />
          ))}
        </section>
      </div>
    </div>
  );
}

interface ExperienceProps {
  experience: Experience;
}

export function Experience({ experience }: ExperienceProps) {
  return (
    <div className={styles.sectionContent}>
      <h5 className={styles.title}>{experience.client}</h5>
      <div className={styles.subtitle}>
        <h6 className={styles.subitemLeft}>{experience.role}</h6>
        <h6 className={styles.subitemRight}>{experience.timeframe}</h6>
      </div>
      <p className={styles.content}>{experience.description}</p>
    </div>
  );
}

interface SkillProps {
  skill: Skill;
}

export function Skill({ skill }: SkillProps) {
  return (
    <div className={styles.skillContainer}>
      <span className={styles.skill}>{skill.name}</span>
      <span className={styles.filler}></span>
      <div className={styles.skillDots}>
        {[0, 1, 2].map((value) => (
          <img src={value <= skill.level ? filledDot : emptyDot} alt={value.toString()} />
        ))}
      </div>
    </div>
  );
}

interface EducationProps {
  education: Education;
}

export function Education({ education }: EducationProps) {
  return (
    <div className={styles.sectionContent}>
      <h5 className={styles.title}>{education.institute}</h5>
      <div className={styles.subtitle}>
        <h6 className={styles.subitem}>{education.title}</h6>
        <h6 className={styles.subitem}>{education.timeframe}</h6>
      </div>
      <p className={styles.content}>{education.description}</p>
    </div>
  );
}

export default App
