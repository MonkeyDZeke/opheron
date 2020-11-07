import styles from './footer.module.scss'

export type IPage = 'home' | 'faq'

interface IProps {
  page: IPage
}

export default function Footer({ page }: IProps) {
  const getClassName = (id: IPage) => id === page ? styles.activePage : styles.inactivePage

  return (
    <footer className={styles.footer}>
      <nav>
        <a href="/" className={getClassName('home')}>HOME</a>
        <a href="/faq" className={getClassName('faq')}>FAQ</a>
      </nav>
      <div className={styles.socialCard}>
        <ul>
          <li>Facebook Profile</li>
          <li>Facebook Page</li>
          <li>LinkedIn Profile</li>
          <li>LinkedIn Page</li>
        </ul>
        <figure>
          <img src="/suit.jpg" alt="Jaymes O'Pheron" />
          <figcaption>Jaymes O'Pheron</figcaption>
        </figure>
      </div>
    </footer>
  )
}