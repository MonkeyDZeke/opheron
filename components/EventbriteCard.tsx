import ActionLink from './ActionLink'
import styles from '../styles/components.module.scss'

const EventbriteCard = () => (
  <div className={styles.card}>
    <h4>Sign Up For My Next Webinar!</h4>
    <img src="/conqueringdigitalburnout.png" alt="Conquering Digital Burnout" />
    <h5>How to Identify and Conquer Burnout: Solutions for Remote Professionals</h5>
    <h6>Learn how to recover from burnout and rediscover joyful productivity</h6>
    <p>
      Burnout is a serious and growing problem for today’s remote workforce.
      It drains employee creativity, undermines performance and leads to missed opportunities.
    </p>
    <p>
      In a recent poll, Monster reported that two thirds, or 69 percent of remote employees are
      experiencing burnout signs and symptoms while working remotely.
    </p>
    <p>
      Additionally, American Psychological Association reports that 79% of employees
      have experienced work-related stress.
    </p>
    <blockquote>
      <p>
        As a former Technology Professional and Web Developer, I’ve experienced burnout first-hand.
        With proactive strategies, I rediscovered joyful and productive work.
      </p>
      <p>
        In this 2-Hour Training Event, I’m excited to share these strategies in hopes that you too
        can regain joyful, productive work and conquer burnout for good.
      </p>
      <cite>Jaymes O’Pheron, Digital Wellness Coach and Consultant</cite>
    </blockquote>
    <p>Join Jaymes O’Pheron to learn:</p>
    <ul>
      <li>The Signs and Symptoms of Occupational Burnout</li>
      <li>5 Ways Digital Environments Worsen Burnout </li>
      <li>
        How Digital Wellness beats burnout, personal and professional relationships, and
        improves career trajectory
      </li>
    </ul>
    <p>This training event also includes:</p>
    <ul>
      <li>An Interactive Q&amp;A</li>
      <li>Exclusive Group Coaching Session</li>
    </ul>
    <p>
      Leave with 6 Digital Wellness Strategies to tackle your burnout once and for all!
    </p>
    <h6>BONUS:</h6>
    <p>
      Attendees will also receive 1/2 OFF any Private Coaching Session with Jaymes O’Pheron!
      Select between: <i>A Worklife Wellness Consultation</i> or <i>A Personality Consultation</i>
    </p>
    <ActionLink target="_blank" rel="external" href="https://www.eventbrite.com/e/conquering-digital-burnout-tickets-264796943787">Register Now!</ActionLink>
  </div>
)

export default EventbriteCard
