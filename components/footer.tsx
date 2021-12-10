import styles from '../styles/footer.module.scss'

export type IPage = 'home' | 'faq' | 'contribute' | 'testimonials' | 'speaking' | 'coaching'

interface IProps {
  page: IPage
}

export default function Footer({ page }: IProps) {
  const getClassName = (id: IPage) => (id === page ? styles.activePage : '')

  return (
    <footer className={styles.footer}>
      <nav>
        <a href="/" className={getClassName('home')}>HOME</a>
        <a href="https://courses.opheron.com/coaching" className={getClassName('coaching')}>COACHING</a>
        <a href="/speaking" className={getClassName('speaking')}>SPEAKING</a>
        <a href="https://courses.opheron.com/free-webinars">UPCOMING EVENTS</a>
        <a href="/testimonials" className={getClassName('testimonials')}>TESTIMONIALS</a>
        <a href="/faq" className={getClassName('faq')}>FAQ</a>
      </nav>
      <div className={styles.socialCard}>
        <ul>
          <li>Friend me on <a href="https://www.facebook.com/jaymes.opheron">Facebook</a></li>
          <li>Connect with me on <a href="https://www.linkedin.com/in/jaymesopheron/">LinkedIn</a></li>
          <li>Follow my pages on <a href="https://www.facebook.com/CatalyticConversations/">Facebook</a> and <a href="https://www.linkedin.com/company/catalyticconversations">LinkedIn</a></li>
          <li><a href="mailto:jaymes@opheron.com">Drop me an email</a> at <strong>jaymes@opheron.com</strong></li>
          <li>
            <a target="_blank" rel="external noreferrer" href="https://calendly.com/jaymes-opheron/curiosity-call">
              Book a free curiosity call
            </a>
            &nbsp;at a time convenient for your schedule
          </li>
        </ul>
        <figure>
          <img src="/suit.jpg" alt="Jaymes O'Pheron" />
          <figcaption>Jaymes OʼPheron</figcaption>
        </figure>
      </div>
    </footer>
  )
}
