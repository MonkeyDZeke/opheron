import { ReactChild, ReactChildren } from 'react'
import Footer, { IPage } from './footer'
import styles from '../styles/layout.module.scss'

export default function Layout({ children, page = 'home' }: { children: ReactChild | ReactChildren, page?: IPage }) {
  const getClassName = (id: IPage) => id === page ? styles.activePage : ''
  
  return (
    <>
      <div className={styles.tagBar}><h2>Liberating Your Potential Through the Power of Intentional Habits and Communication</h2></div>
      <h1 className={styles.logo}><a href="/"><img src="/logo.png" alt="Catalytic Conversations" /></a></h1>
      <nav className={styles.nav}>
        <a href="/" className={getClassName('home')}>HOME</a>
        <a href="/upcoming" className={getClassName('upcoming')}>UPCOMING WEBINARS &amp; MASTERMINDS</a>
        <a href="/testimonials" className={getClassName('testimonials')}>TESTIMONIALS</a>
        <a href="/faq" className={getClassName('faq')}>FAQ</a>
      </nav>
      <div className={styles.paper}>
        {children}
        <Footer page={page} />
        <small>&copy; 2020 Catalytic Conversations</small>
      </div>
    </>
  )
}
