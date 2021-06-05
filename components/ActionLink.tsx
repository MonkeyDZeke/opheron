import LinkTo from './LinkTo'
import styles from '../styles/components.module.scss'

const ActionLink = ({
  children, href, left = false, ...rest
}) => (
  <div className={styles.action}>
    <span className={styles.actionbtn}>
      <LinkTo className={`${styles.actionlink} ${left && styles.left}`} href={href} {...rest}>{children}</LinkTo>
    </span>
  </div>
)

export default ActionLink
