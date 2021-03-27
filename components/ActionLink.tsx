import LinkTo from './LinkTo'
import styles from '../styles/components.module.scss'

const ActionLink = ({ children, href, ...rest }) => (
  <LinkTo className={styles.action} href={href} {...rest}>{children}</LinkTo>
)

export default ActionLink
