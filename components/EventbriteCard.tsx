import ActionLink from './ActionLink'
import styles from '../styles/components.module.scss'

const EventbriteCard = () => (
  <div className={styles.card}>
    <h4>Sign Up For My Next Webinar!</h4>
    <img src="/conqueringdigitalburnout.png" alt="Conquering Digital Burnout" />
    <h5>Practical solutions for remote professionals to rediscover joyful productivity</h5>
    <p>During this powerful and liberating event you will learn:</p>
    <ul>
      <li>The 3 pillars of burnout and their healthy counterparts</li>
      <li>The 6 ways even pre-clinical burnout can cripple your career</li>
      <li>The 5 ways digital environments can exacerbate the problem</li>
      <li>
        The top 6 key strategies of digital wellness that conquer burnout,
        multiply career potential, and redeem digital engagement
      </li>
    </ul>
    <p>
      Join for the training, stay for the Q&amp;A, and then participate in an exclusive group
      coaching session to help you apply these principles right away! Transform your life through
      immediate action!
    </p>
    <h6>BONUS:</h6>
    <p>
      For ticket-holders only, you have the opportunity to book a Worklife Wellness Consultation
      and/or a Personality Consultation private coaching session with me at half of the regular fee!
    </p>
    <ActionLink target="_blank" rel="external" href="https://www.eventbrite.com/e/conquering-digital-burnout-tickets-264796943787">Register Now!</ActionLink>
  </div>
)

export default EventbriteCard
