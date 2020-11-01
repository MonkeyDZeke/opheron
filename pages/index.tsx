import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Catalytic Conversations</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Vollkorn:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </Head>

      <div className={styles.tagBar}><h2>Liberating the Communication Power of Remote Professionals</h2></div>
      <h1 className={styles.logo}><img src="/logo.png" alt="Catalytic Conversations" /></h1>
      <div className={styles.paper}>
        <article>
          <p><strong>Greetings friend, my name is Jaymes O’Pheron.</strong></p>

          <p>Yep, Jaymes with a <a href="https://www.dictionary.com/browse/wye" target="_blank" rel="external">wye</a> &ndash; or as I like to say &ndash; Jaymes with a why. “Why” is one of my favorite questions, and I <i>love</i> to ask questions. It’s kind of my thing, to be honest.</p>

          <p>Questions are gateways of opportunity &ndash; portals to universes that we can explore and within which we discover solutions and ideas for expanding our potential. Questions in conversations with other people are even more powerful, as they unlock collaborative genius. Adding structure to those conversations can generate yet more value, exponentially catalyzing the existing growth of the participants and their solution-discovery process. </p>

          <p>Put simply, I am passionate about facilitating conversations which liberate people's full potential.</p>

          <p>That can happen through <a href="https://www.johncmaxwellgroup.com/jaymesopheron/Coaching" target="_blank" rel="external">one-on-one coaching sessions</a>, where we work together to help you reach your purpose, vision and goals by working through programs specific to your needs. Together, we create a strategic, powerful plan for you to gain clarity through a regular process including interaction and accountability.</p>

          <p>That can also happen through <a href="https://www.johncmaxwellgroup.com/jaymesopheron/Mastermind" target="_blank" rel="external">mastermind group discussions</a>, where a select group of people come together with common focus on personal and business growth. There is a unique synergy of energy, commitment, and excitement that participants bring to a mastermind group. My facilitated groups offer a combination of peer brainstorming, education, accountability and support in a group setting, discovering value from the diverse perspectives of each individual involved.</p>

          <p>Both of these conversation formats are absolutely amazing. I can’t recommend them enough. I’ve invested into becoming an independent coach, facilitator, trainer, and speaker with certification from <a href="https://johnmaxwellteam.com" target="_blank" rel="external">the John Maxwell Team</a> so that I can dedicate my career to adding value to people this way.</p>

          <p>I started out as <a href="https://www.codementor.io/@jaymes-opheron" target="_blank" rel="external">a freelance web developer</a> and I enjoyed the intellectual challenge, for sure. But as I gained experience, I found myself gravitating towards coaching other developers and helping them develop their skills more effectively. I particularly found satisfaction in leveraging my experience working 100% remotely and my communication expertise to help others make authentic connections online, even outside my industry.</p>

          <p>Similarly, in my obsession <span className={styles.short}>(my wife might say addiction)</span> with Toastmasters I’ve found myself gaining more fulfillment and satisfaction from coaching other speakers than from doing speeches myself. Despite the fact that I <i>love</i> giving speeches.</p>

          <p>When I realized that, it clicked for me, and I discovered that while web development was <i>what I did</i>, coaching is <i>who I am</i>. </p>

          <p>So let me ask you a question. <span className={styles.short}>(But first, I’ll make the quick observation that in all my experience I’ve never encountered someone who was truly, merely ‘fine.’)</span></p>

          <p>How are you doing? <i>Really</i> doing?</p>

          <p>Do you want to do better?</p>

          <p>Let’s talk about hope, solutions, and your future.</p>

          <p>I’m looking forward to hearing from you. :)</p>
        </article>
      </div>
      <main className={styles.main}>
      </main>
    </div>
  )
}
