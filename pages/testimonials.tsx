/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../styles/testimonials.module.scss'

export default function Testimonials() {
  return (
    <div className="container">
      <Head>
        <title>Testimonials - Catalytic Conversations</title>
      </Head>

      <Layout page="testimonials">
        <article className={styles.testimonials}>
          <blockquote>
            <p>I felt stuck.  I was frustrated with my inability to get out of my own way and
              make progress towards my goals.  I decided to give Jaymes O'Pheron's Mastermind
              group a try.
            </p>
            <p>I'm very pleased with the results.  I've been involved in Success Teams and
              Mastermind groups in the past, but they were only focused on goal achievement.
              This group was focused on growth...on increasing and improving one's capability.
              That made the difference.
            </p>
            <p>While I still have much work ahead of me, Jaymes' Mastermind group helped me get
              unstuck and take strides towards my goals...while increasing my capability.
            </p>
            <p>If you are feeling stuck, stalled or mired in your life, I heartily recommend
              Jaymes O'Pheron and his Mastermind groups.
            </p>
            <cite>Kyle Hall, speaker, mentor, business consultant</cite>
          </blockquote>
          <blockquote>
            <p>I have wanted this kind of thing for a long time, knowing that I needed significant
              changes, and the group has given me the hope that changes will happen. Changes that
              have happened so far: I have been more encouraged when things have gone right, I have
              held onto and put to use ideas that I get which I would forget before, I have felt
              more reason to do pretty much everything, I've come back to things that I initially
              didn't do soon enough, I have an "excuse" to make changes that might otherwise have
              seemed too "disruptive", and overall I have felt that I can see clearer.
            </p>
            <cite>Patrick L.</cite>
          </blockquote>
          <blockquote>
            <p>This mastermind was a great place to reflect on and refine my ideas and direction
              for personal and professional growth. It was fun to engage the topics with a variety
              of people. Wherever each of us started with respect to our personal growth journey,
              we all participated, got insights and grew. I would recommend Jaymes's masterminds
              because he provides a fun environment to stretch yourself.
            </p>
          </blockquote>
          <blockquote>
            <p>I began the mastermind group by saying I don't know what I don't know, and
              that I was excited by what could emerge over the weeks. I found that applying a more
              structured approach, which the mastermind sessions provided, gave me great insights
              into practical steps I could take to grow strategically! Jaymes was an incredible
              facilitator, and did a remarkable job of integrating our very diverse insights into
              our discussions.
            </p>
            <cite>Mary Morrison, Past International Director, Toastmasters International</cite>
          </blockquote>
          <blockquote>
            <p>Mastermind is a time of pushing my own development by facing my fears, growing
              with them, and turning them into victories, great and small.  The sharing of
              perspectives and experiences brings together an attractive event of leadership.
              Each member has the chance and ability to open up about fears to life lessons, or
              simply encourage one another.  All are great moments of giving our own experiences
              in a thoughtful practical hour.
            </p>
            <cite>R. Zemek</cite>
          </blockquote>
          <blockquote>
            <p>This group was ably led and facilitated a depth of sharing that gave meaning to
              the book discussed: My fellow group members all had deeply personal and interesting
              perspectives and shared them generously.
            </p>
          </blockquote>
          <blockquote>
            <p>Jaymes has tremendous facilitation skills, extending encouragement, relatability
              and asks questions that dig a bit deeper. His passion for the materials discussed
              provides contagious enthusiasm to the participants. If you are ready to stretch in
              a supportive environment, then this masterclass is perfect.
            </p>
          </blockquote>
          <blockquote>
            <p>When I started these eight weeks I thought that I was doing it to help a friend,
              by the second week I knew I was doing something positive for my own life and
              development. Jaymes' ability to compassionately and wisely direct a group of
              people, who all had different things we were trying to overcome and improve in
              ourselves, was incredibly genuine and fostered a very safe environment to be
              vulnerable in. The material and readings were also valuable, but if it wasn't for
              the group of people that I met and connected with while delving into the laws I
              wouldn't have learned half as much about myself or what I need to do to grow and
              move forward. If someone had told me eight weeks ago that I would be feeling half
              as confident and ready to face life's challenges and continue to grow as I do now
              I wouldn't have believed them. I am so glad I decided to sign up for this Mastermind
              with Jaymes; it has changed my life and I think it could change yours too.
            </p>
            <cite>Sarah M.</cite>
          </blockquote>
          <blockquote>
            <p>Being a member of the mastermind led by Jaymes O'Pheron was a
              boost in my life. With his guidance, I was able to apply a
              series of important life lessons to help me live a more
              satisfying, fulfilling life. It helps to take a look at my life
              principles periodically so I adjust my view for the better. My
              husband noticed I was more introspective during the course of
              this mastermind.
            </p>
          </blockquote>
          <blockquote>
            <p>I have always felt motivated to learn and grow, but it was the feeling of
              community and the fact of accountability that kept me motivated to keep growing.
              Being a part of a like-minded group of people is so powerful and changes your
              everyday mindset.
            </p>
          </blockquote>
          <p>Do you want to join in this experience? <a href="https://courses.opheron.com/masterminds">Sign up for a Mastermind here!</a></p>
        </article>
      </Layout>
    </div>
  )
}
