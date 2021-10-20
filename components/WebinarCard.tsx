import LinkTo from './LinkTo'
import styles from '../styles/components.module.scss'

const WebinarCard = ({
  ...rest
}) => (
  <div className={styles.card}>
    <h4>Sign Up For My Next Webinar!</h4>
    <script src="https://cdn.podia.com/embeds.js" async />
    <LinkTo {...rest} href="courses.opheron.com/healthy-hybrid-communities" data-podia-embed="card">Healthy Hybrid Communities</LinkTo>
  </div>
)

export default WebinarCard
