import { useState } from 'react'
import Head from 'next/head'
import PayPalBtn from '../components/PayPalBtn'
import Layout from '../components/layout'
import styles from '../styles/contribute.module.scss'
import CurrencyInput from '../components/CurrencyInput'

export default function Contribute() {
  const [success, setSuccess] = useState(false)
  const [amount, setAmount] = useState('225.18')
  const onSuccess = () => setSuccess(true)

  return (
    <div className="container">
      <Head>
        <title>Contribute - Catalytic Conversations</title>
      </Head>

      <Layout page="contribute">
        <article className={styles.contribute}>
          <h3>Thank you for joining one of my <i>Pay-What-You-Want</i> Mastermind Groups!</h3>
          <p>
            I believe strongly in giving back to the community, so I initially
            offered my Mastermind groups on The 15 Invaluable Laws of Growth
            completely free. But people got so much value from their involvement,
            that I got multiple requests for a way to pay for them!
          </p>
          <p>
            Therefore, here is now an opportunity for you to contribute to me
            being able to continue offering these powerful Masterminds free of charge.
            If youʼre on this page, youʼve already successfully registered, so itʼs
            obviously not required to contribute anything. Itʼs totally up to you.
          </p>
          <p className={styles.payment}>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label>Average cost of a Mastermind:&nbsp;
              <CurrencyInput
                value={amount}
                onChange={({ target: { value } }) => setAmount(value)}
              />
            </label>
            {!success ? (
              <PayPalBtn
                amount={parseFloat(amount.replace(/[$,]*/g, ''))}
                currency="USD"
                onSuccess={onSuccess}
              />
            ) : (
              <p>Thank you! You successfully contributed ${amount}!</p>
            )}
          </p>
        </article>
      </Layout>
    </div>
  )
}
