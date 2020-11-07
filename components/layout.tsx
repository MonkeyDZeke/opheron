import styles from './layout.module.css'

export default function Layout({ children }) {
  return (
    <>
      <div className={styles.tagBar}><h2>Liberating the Power Potential of Remote Professionals Through Intentional Habits and Communication</h2></div>
      <h1 className={styles.logo}><img src="/logo.png" alt="Catalytic Conversations" /></h1>
      <div className={styles.paper}>{children}</div>
    </>
  )
}
