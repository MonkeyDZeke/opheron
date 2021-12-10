import Head from 'next/head'
import LinkTo from '../components/LinkTo'
import Layout from '../components/layout'
import styles from '../styles/faq.module.scss'
import ActionLink from '../components/ActionLink'

export default function Faq() {
  return (
    <div className="container">
      <Head>
        <title>FAQ - Catalytic Conversations</title>
      </Head>

      <Layout page="faq">
        <article className={styles.faq}>
          <h4>Questions are awesome, glad youʼre asking some!</h4>
          <dl>
            <dt id="bio" className={styles.active}>
              Tell me more about you; why did you choose this career?
            </dt>
            <dd>
              <p>Greetings friend, my name is Jaymes O’Pheron.</p>

              <p>Yep, Jaymes with a <a href="https://www.dictionary.com/browse/wye" target="_blank" rel="external noreferrer">wye </a>
                &ndash; or as I like to say &ndash; Jaymes with a why. “Why” is one of my favorite
                questions, and Iʼm an expert in asking questions.
              </p>

              <p>I started out as <a href="https://www.codementor.io/@jaymes-opheron" target="_blank" rel="external noreferrer">a freelance web developer</a>, though.
                I was good at it; I enjoyed the intellectual challenge. But I found myself burning
                out. In the process of exploring why and resolving the underlying issues, I
                discovered a passion for helping other nerds not kill themselves.
                As I gained experience, I found myself gravitating towards coaching other
                developers and helping them develop their skills more effectively.
                I particularly found satisfaction in leveraging my experience working
                100% remotely and my communication expertise to help others make authentic
                connections online, even outside my industry.
              </p>

              <p>Similarly, in my obsession <span className="short">(my wife might say addiction)</span>{' '}
                with <LinkTo href="/faq#toastmasters">Toastmasters</LinkTo> I’ve found myself gaining more fulfillment and satisfaction
                from coaching other speakers than from doing speeches myself -- despite the fact that I{' '}
                <i>love</i> giving speeches. I also volunteer a great deal with and help lead
                addiction and recovery ministries, and then draw from that and my own experience
                with recovery to constantly help those around me.
              </p>

              <p>When I realized all these things, it clicked for me, and I discovered that while
                web development was <i>what I did</i>, <LinkTo href="/faq#coaching">coaching</LinkTo> is <i>who I am</i>. Now, I’m pivoting my
                focus from being a web developer to serving web developers, other remote
                professionals, and hybrid communities. There is a huge need right now with
                digital burnout on the rise and soft skills becoming not only a necessary edge
                in competitive markets but also becoming increasingly critical for survival.
                Depression is not just lost productivity.
              </p>

              <p>So let me ask you a question.</p>

              <p>How are you doing? <i>Really</i> doing?{' '}
                <span className="short">(&lsquo;Fine&rsquo; doesnʼt count. In all my experience, I
                  have never encountered someone who was purely, truly, just &lsquo;fine.&rsquo;)
                </span>
              </p>

              <p>Do you want to do better?</p>

              <p>Let’s talk about hope, solutions, and your future.</p>

              <p>I’m looking forward to hearing from you. :)</p>
              <ActionLink target="_blank" rel="external" href="https://calendly.com/jaymes-opheron/coaching-consultation-call">Book a free strategy call now!</ActionLink>
            </dd>
            <dt id="solo" className={styles.active}>
              Why couldnʼt I simply read amazing books and apply them myself?
            </dt>
            <dd>
              <p>Everyone’s own journey is their own responsibility. Each of us holds our life in
                our hands, and it is up to us what we do with it. No one else can force us to
                grow, and no one else can prevent us from growing. This is the amazing and
                terrifying power of self-determination.
              </p>
              <p>Yet alongside that truth there exists another -- we are not designed to operate
                in isolation. The ideas of the lone wolf and the solitary genius are deeply flawed
                myths. Human potential exists primarily and fundamentally in the intersection of
                aligned minds.
              </p>
              <blockquote>
                <p>If I have seen further than others, it is by standing upon the shoulders of
                  giants.
                </p>
                <cite>Sir Isaac Newton</cite>
              </blockquote>
              <p>It is impossible to reach our full potential without the force multipliers of
                mentorship and partnership. There are questions we cannot ask of ourselves that
                we desperately need to answer. There are blindspots we cannot see until they are
                shown to us. There are self-limiting beliefs which drive us in endless cycles of
                destruction until they are exposed by others. There are barriers of fear which
                wall us against liberation and change which require an external hand for rescue.
                Any successful recovered addict will tell you they would never have made it out
                without their sponsor.
              </p>
              <p>Let me ask you a gentle question: in the life-changing books you have read, have
                you fully put into practice even one tenth of what they offer? I would wager that
                if you have, it’s because others came alongside you in that endeavor.
              </p>
            </dd>
            <dt id="christian" className={styles.active}>
              Do I have to be a Christian to benefit from your programs?
            </dt>
            <dd>
              <p>As a devout Christian everything I do is predicated upon my
                faith, so the programs I offer are going to be colored and shaped by that
                worldview. However, I am not equipped or called to be a spiritual counsellor,
                pastor, or priest. My calling to the laity is very clear to me, and as such the
                services I offer are not spiritual in focus. The truths we explore in a
                group or in a coaching program are universal and recognized by world-class experts
                throughout history and across cultures.
              </p>
              <p>Thus if you are not a Christian, or even if you are of a contrary faith, you will
                still gain a great deal of benefit from my programs and the materials I train
                with. You’re free to simply skip over the pieces that are more obviously derived
                from Scripture and the Tradition of the Church. If you are a Christian, we will
                have more common ground and will be able to discuss more aspects of your life with
                more liberty, but that is by no means required.
              </p>
            </dd>
            <dt id="mastermind" className={styles.active}>
              What exactly is a Mastermind Group?
            </dt>
            <dd>
              <p>The concept of the mastermind was originally coined by Napoleon Hill as a result
                of his research into the most successful people in the world. Here is its simplest
                and most concise definition:
              </p>
              <blockquote>
                <p>The coordination of knowledge and effort of two or more people, who work toward
                  a definite purpose, in the spirit of harmony.
                </p>
                <cite>Napoleon Hill</cite>
              </blockquote>
              <p>There have been many different applications of this concept in different formats
                and for different purposes. Sometimes they are focused around a single individual
                and their success or growth (like an advisory council), or they are focused on the
                growth of each person in the group. Sometimes they use a particular curriculum or
                project as a focus, sometimes not. Not all work as well as others depending on who
                is in them, who is facilitating them, and various other factors.
              </p>
              <p>The kind of mastermind that I facilitate has been proven to be
                dramatically effective by tens of thousands of people all over the world in every
                conceivable industry and background. As a trained facilitator, I lead a group of
                6-10 select, growth-focused, motivated individuals through a powerful, life-changing
                book or course (n addition to my own content, I include a few select books by
                communication and leadership expert John Maxwell) for a set number of weeks. We meet
                weekly for an hour where we celebrate our wins, collaboratively seek solutions for
                challenges we’ve faced, explore the content selected for that week’s focus for
                actionable value in our current situations, assist each other in uncovering barriers
                to progress, and self-assign action items that the group can then hold us
                accountable for.
              </p>
              <p>There is nothing quite like the connection that is forged in these groups. I’ve
                been awed by it, personally. If you are interested in exploring their potential
                for yourself, I recommend that you{' '}
                <LinkTo href="https://courses.opheron.com/masterminds">check out which ones are upcoming</LinkTo>{' '}
                and register for one that fits your schedule.
              </p>
            </dd>
            <dt id="coaching" className={styles.active}>
              What’s the difference between coaching, training, therapy, and spiritual counselling?
            </dt>
            <dd>
              <p>The word ‘coach’ has been thrown around so much lately that its meaning has
                become bloated almost beyond recognition. A lot of people associate it most
                strongly with loud-yelling sports coaches, which is unfortunate. There’s a glut of
                people wanting to share their advice and call it coaching. Not that there’s anything
                wrong with teaching things or educating people -- after all, <LinkTo href="https://courses.opheron.com/free-webinars">I do that too</LinkTo>.
              </p>
              <p>But coaching isn’t teaching. It isn’t training.</p>
              <p>It isn’t me pouring knowledge or information into your head that you didn’t have
                before. It’s me drawing out solutions and potential that you didn’t know you
                possessed. Coaching is fundamentally about asking questions, not answering them.
                By asking careful, insightful, structured questions I am able to help you think
                through your challenges with unprecedented clarity and self-awareness so that you
                can create a realistic actionable plan to accomplish your goals. And then, again
                by asking questions, I am able to help you put that plan into action by providing
                accountability and troubleshooting guidance to overcome obstacles you face along
                the way.
              </p>
              <p>Coaching also isn’t therapy.</p>
              <p>Some of the most liberating breakthroughs I’ve had in life I experienced while in
                therapy, and I personally believe that every single person should have a therapist.
                Therapy isn’t just for ‘those’ people, it’s for you.
              </p>
              <p>But therapy is fundamentally distinct from coaching because therapy is focused
                in the past and how the events of the past are impacting your present. Coaching
                is focused on clarity of the future and turning that into action for the present.
                It approaches your current self from the other side of time. This is why therapy
                and coaching often work hand in hand and synergize well.
              </p>
              <p>
                <span className="short">(Therapy also sometimes tends to come from a more medical
                  perspective and so they may be able to give medical advice and prescribe
                  medications -- coaching does not qualify one for this kind of advice.)
                </span>
              </p>
              <p>Coaching is different from counselling as well, but in a different way of being
                different. Counselling, at least in how I use the term, tends to be focused on a
                particular aspect of one’s life. There’s premarital counselling, marriage
                counselling, grief counselling, and so on. They tend to be more spiritually
                focused and involve more of a parental element to the relationship. Coaching on
                the other hand may touch on these things, but is fundamentally holistic in its
                approach, and the coach is decidedly not paternal in their approach. One of the
                unique things about a coach is that the coach doesn’t actually need to be an
                expert in the area in which they are helping their client. This is because
                coaching is question-based, rather than teaching-based. A great coach can actually
                help a client exponentially improve their performance{' '}
                <i>without knowing anything about the client’s field of expertise</i>. In contrast,
                an unmarried marriage counsellor would and should be laughed out of practice.
              </p>
              <p>This is why, although I have expertise in communication, I don’t only coach
                people with their communication skills. Coaching is coaching, whether you are
                trying to improve your physical health, your business success, or your love life.
                The approach to improvement is fundamentally the same.
              </p>
              <p>That said, I do have an affinity for those who are remote professionals, because of{' '}
                <LinkTo href="https://www.codementor.io/@jaymes-opheron">my experience as a remote web developer</LinkTo>
                , and so it’s easier for me to grok the jargon, in turn making it
                easier for me to ask the right questions.
              </p>
              <p>If you want to step forward into this journey,{' '}
                <LinkTo href="https://calendly.com/jaymes-opheron/coaching-consultation-call" target="_blank">schedule a free strategy call with me now!</LinkTo>
              </p>
            </dd>
            <dt id="toastmasters" className={styles.active}>
              What is Toastmasters and why is it a big deal?
            </dt>
            <dd>
              <p><LinkTo href="https://toastmasters.org" target="_blank" rel="noreferrer">Toastmasters International</LinkTo>{' '}
                is a global nonprofit educational organization that teaches public
                speaking and leadership skills through a network of local clubs. It’s been around
                since 1924, and has shaped the lives of world-class leaders and communicators as
                well as single moms and college students.
              </p>
              <p>For me, Toastmasters is all about confidence and influence. I’ve seen men who
                have never been truly respected in their lives break down and weep at being
                applauded for their first speech. I’ve seen shy and insecure individuals blossom
                into leadership competence, delegating effectively and creating teams to
                accomplish things they never could have imagined. It’s amazing how much having
                a safe place to fail and grow will do for you.
              </p>
              <p>Myself, I have almost completed my Distinguished Toastmaster award, and I’ve
                completed four full educational paths, with a couple more in progress.
                I’ve also been highly involved in leadership, not only at the club level,
                but also in{' '}
                <LinkTo href="https://d32toastmasters.org/" target="_blank" rel="noreferrer">my district</LinkTo>.
                I’ve been Area Director twice, and a Division Director once, though I’m current on
                sabbatical from District leadership.
                I’m currently also an active member of three clubs:{' '}
                <LinkTo href="https://bold.toastmastersclubs.org/" target="_blank" rel="noreferrer">Bold &amp; Blue</LinkTo>,{' '}
                <LinkTo href="https://soundadvice.toastmastersclubs.org/" target="_blank" rel="noreferrer">Sound Advice Advanced</LinkTo>,{' '}
                and <LinkTo href="https://nerdmasters.toastmastersclubs.org/" target="_blank" rel="noreferrer">Nerdmasters</LinkTo>{' '}
                (which I helped charter).
              </p>
              <p>I wasn’t joking when I said I’m obsessed. I highly recommend you check out a
                local club in your area (or drop in to visit one of my clubs -- we all meet
                online and you’re more than welcome) and see why for yourself.
              </p>
            </dd>
          </dl>
        </article>
      </Layout>
    </div>
  )
}
