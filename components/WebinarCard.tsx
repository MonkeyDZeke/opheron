import LinkTo from './LinkTo'
import styles from '../styles/components.module.scss'

const WebinarCard = ({
  ...rest
}) => (
  <div className={styles.card}>
    <h4>Sign Up For My Next Webinar!</h4>
    <script src="https://cdn.podia.com/embeds.js" async />
    <LinkTo {...rest} href="https://courses.opheron.com/task-time-management-that-works" data-podia-embed="card">Task &amp; Time Management That Works</LinkTo>
  </div>
)

export default WebinarCard
