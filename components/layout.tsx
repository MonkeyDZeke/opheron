import { ReactChild, ReactChildren } from 'react'
import Footer, { IPage } from './footer'
import styles from './layout.module.scss'

export default function Layout({ children, page = 'home' }: { children: ReactChild | ReactChildren, page?: IPage }) {
  return (
    <>
      <div className={styles.tagBar}><h2>Liberating the Power Potential of Remote Professionals Through Intentional Habits and Communication</h2></div>
      <h1 className={styles.logo}><img src="/logo.png" alt="Catalytic Conversations" /></h1>
      <div className={styles.paper}>
        {children}
        <Footer page={page} />
      </div>
    </>
  )
}
