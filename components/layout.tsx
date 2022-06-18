import { ReactChild, ReactChildren } from 'react'
import { PopupWidget } from 'react-calendly'
import Footer, { IPage } from './footer'
import styles from '../styles/layout.module.scss'

// eslint-disable-next-line react/require-default-props
export default function Layout({ children, page = 'home' }: { children: ReactChild | ReactChildren, page?: IPage }) {
  const getClassName = (id: IPage) => (id === page ? styles.activePage : '')

  return (
    <>
      <div className={styles.tagBar}>
        <h1>Digital Wellness Specialist, Coach, Consultant, Speaker</h1>
      </div>
      <h1 className={styles.logo}><a href="/"><img src="/logo.png" alt="Catalytic Conversations" /></a></h1>
      <div className={styles.tagBar}>
        <h2>Reconciling Humanity and Technology</h2>
        <h2>Liberating You From Digital Burnout</h2>
        <h2>Crafting Healthy Hybrid Communities</h2>
      </div>
      {/* <h2>Reconciling Humanity and Technology</h2> */}
      <nav className={styles.nav}>
        <a href="/" className={getClassName('home')}>HOME</a>
        <a href="/coaching" className={getClassName('coaching')}>COACHING</a>
        <a href="/speaking" className={getClassName('speaking')}>SPEAKING</a>
        {/* <a href="https://courses.opheron.com/free-webinars">UPCOMING EVENTS</a> */}
        <a href="/testimonials" className={getClassName('testimonials')}>TESTIMONIALS</a>
        <a href="/faq" className={getClassName('faq')}>FAQ</a>
      </nav>
      <div className={styles.paper}>
        {children}
        <Footer page={page} />
        <small>&copy; 2020 Catalytic Conversations LLC</small>
        <PopupWidget
          url="https://calendly.com/jaymes-opheron"
          text="Book a no-fee strategy call with me!"
          color="#045601"
          textColor="#ffffff"
          pageSettings={{
            primaryColor: '#045601',

          }}
        />
      </div>
    </>
  )
}
