import LinkTo from './LinkTo'
import styles from '../styles/components.module.scss'

const ActionLink = ({
  children, href, left = false, ...rest
}) => (
  <LinkTo className={`${styles.action} ${left && styles.left}`} href={href} {...rest}>{children}</LinkTo>
)

export default ActionLink
