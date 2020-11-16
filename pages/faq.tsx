import Head from 'next/head'
import Link from 'next/link'
import { GetServerSideProps } from 'next'
import Layout from '../components/layout'
import styles from '../styles/faq.module.scss'

export default function Faq() {
  return (
    <div className="container">
      <Head>
        <title>FAQ - Catalytic Conversations</title>
      </Head>

      <Layout page="faq">
        <article className={styles.faq}>
          <p><strong>Questions are awesome, glad you're asking some!</strong></p>
          <dl>
            <dt id="solo" className={styles.active}>
              Why couldn't I simply read amazing books and apply them myself?
            </dt>
            <dd>
              <p>Everyone’s own journey is their own responsibility. Each of us holds our life in
                our hands, and it is up to us what we do with it. No one else can force us to
                grow, and no one else can prevent us from growing. This is the amazing and
                terrifying power of self-determination.</p>
              <p>Yet alongside that truth there exists another -- we are not designed to operate
                in isolation. The ideas of the lone wolf and the solitary genius are deeply flawed
                myths. Human potential exists primarily and fundamentally in the intersection of
                aligned minds.</p>
              <blockquote>
                <p>If I have seen further than others, it is by standing upon the shoulders of
                  giants.</p>
                <cite>Sir Isaac Newton</cite>
              </blockquote>
              <p>It is impossible to reach our full potential without the force multipliers of
                mentorship and partnership. There are questions we cannot ask of ourselves that
                we desperately need to answer. There are blindspots we cannot see until they are
                shown to us. There are self-limiting beliefs which drive us in endless cycles of
                destruction until they are exposed by others. There are barriers of fear which
                wall us against liberation and change which require an external hand for rescue.
                Any successful recovered addict will tell you they would never have made it out
                without their sponsor.</p>
              <p>Let me ask you a gentle question: in the life-changing books you have read, have
                you fully put into practice even one tenth of what they offer? I would wager that
                if you have, it’s because others came alongside you in that endeavor.</p>
            </dd>
            <dt id="christian" className={styles.active}>
              Do I have to be a Christian to benefit from your programs?
            </dt>
            <dd>
              <p>As a devout Christian and lay theologian everything I do is predicated upon my
                faith, so the programs I offer are going to be colored and shaped by that
                worldview. However, I am not equipped or called to be a spiritual counsellor,
                pastor, or priest. My calling to the laity is very clear to me, and as such the
                services I offer are not spiritual in focus. The truths we explore in a Mastermind
                group or in a coaching program are universal and recognized by world-class experts
                throughout history and across cultures.</p>
              <p>Thus if you are not a Christian, or even if you are of a contrary faith, you will
                still gain a great deal of benefit from my programs and the materials I train
                with. You’re free to simply skip over the pieces that are more obviously derived
                from Scripture and the Tradition of the Church. If you are a Christian, we will
                have more common ground and will be able to discuss more aspects of your life with
                more liberty, but that is by no means required.</p>
            </dd>
            <dt id="mastermind" className={styles.active}>
              What exactly is a Mastermind Group?
            </dt>
            <dd>
              <p>The concept of the Mastermind was originally coined by Napoleon Hill as a result
                of his research into the most successful people in the world. Here is its simplest
                and most concise definition:</p>
              <blockquote>
                <p>The coordination of knowledge and effort of two or more people, who work toward
                  a definite purpose, in the spirit of harmony.</p>
                <cite>Napoleon Hill</cite>
              </blockquote>
              <p>There have been many different applications of this concept in different formats
                and for different purposes. Sometimes they are focused around a single individual
                and their success or growth (like an advisory council), or they are focused on the
                growth of each person in the group. Sometimes they use a particular curriculum or
                project as a focus, sometimes not. Not all work as well as others depending on who
                is in them, who is facilitating them, and various other factors.</p>
              <p>The kind of Mastermind that I am certified to facilitate has been proven to be
                dramatically effective by tens of thousands of people all over the world in every
                conceivable industry and background. As a trained facilitator, I lead a group of
                8-10 select, growth-focused, motivated individuals through a powerful,
                life-changing book (typically by John Maxwell) for a set number of weeks. We meet
                weekly for an hour where we celebrate our wins, collaboratively seek solutions for
                challenges we’ve faced, explore the selected one or two chapters assigned for that
                week’s reading for actionable value in our current situations, assist each other
                in uncovering barriers to progress, and self-assign action items that the group
                can then hold us accountable for.</p>
              <p>There is nothing quite like the connection that is forged in these groups. I’ve
                been awed by it, personally. If you are interested in exploring their potential
                for yourself, I recommend you <Link href="/upcoming#mmgs"><a>check out which ones are
                upcoming</a></Link> and registering for one that fits your schedule.</p>
            </dd>
            <dt id="coaching" className={styles.active}>
              What’s the difference between coaching, training, therapy, and spiritual counselling?
            </dt>
            <dd>
              <p>The word ‘coach’ has been thrown around so much lately that its meaning has
                become bloated almost beyond recognition. A lot of people associate it most
                strongly with sports coaches, which is unfortunate. There’s a glut of people
                wanting to share their advice and call it coaching. Not that there’s anything
                wrong with teaching things or educating people -- after all, <Link href="/upcoming#webinars"><a>I do that too</a></Link>.</p>
              <p>But coaching isn’t teaching. It isn’t training.</p>
              <p>It isn’t me pouring knowledge or information into your head that you didn’t have
                before. It’s me drawing out solutions and potential that you didn’t know you
                possessed. Coaching is fundamentally about asking questions, not answering them.
                By asking careful, insightful, structured questions I am able to help you think
                through your challenges with unprecedented clarity and self-awareness so that you
                can create a realistic actionable plan to accomplish your goals. And then, again
                by asking questions, I am able to help you put that plan into action by providing
                accountability and troubleshooting guidance to overcome obstacles you face along
                the way.</p>
              <p>Coaching also isn’t therapy.</p>
              <p>Some of the most liberating breakthroughs I’ve had in life I experienced while in
                therapy, and I personally believe that every single person should have a therapist.
                Therapy isn’t just for ‘those’ people, it’s for you.</p>
              <p>But therapy is fundamentally distinct from coaching because therapy is focused
                in the past and how the events of the past are impacting your present. Coaching
                is focused on clarity of the future and turning that into action for the present.
                It approaches your current self from the other side of time. This is why therapy
                and coaching often work hand in hand and synergize well.</p>
              <p><span className="short">(Therapy also sometimes tends to come from a more medical
              perspective and so they may be able to give medical advice and prescribe medications
              -- coaching does not qualify one for this kind of advice.)</span></p>
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
                help a client exponentially improve their performance <i>without knowing anything
                about the client’s field of expertise</i>. In contrast, an unmarried marriage
                counsellor would and should be laughed out of practice.</p>
              <p>This is why, although I have expertise in communication, I don’t only coach
                people with their communication skills. Coaching is coaching, whether you are
                trying to improve your physical health, your business success, or your love life.
                The approach to improvement is fundamentally the same.</p>
              <p>That said, I do have an affinity for those who are remote professionals, because
                of <Link href="https://www.codementor.io/@jaymes-opheron"><a>my experience as a remote
                web developer</a></Link>, and so it’s easier for me to grok the jargon, in turn making it
                easier for me to ask the right questions.</p>
              <p>If you want to step forward into this journey, <Link href="https://forms.gle/Hd13iF6iVsncr97i6"><a target="_blank">fill out an
                application form now!</a></Link></p>
            </dd>
            <dt id="pay" className={styles.active}>
              How much can I expect to pay?
            </dt>
            <dd>
              <p>If you’re wanting to just dip your toe in and see what a Mastermind is like, or
                to get to know me better, <Link href="/upcoming#free_mmg"><a>you can join a free
                Mastermind</a></Link> on <Link href="https://www.amazon.com/15-Invaluable-Laws-Growth-Potential/dp/1599953676"><a target="_blank" rel="noreferrer">
                John Maxwell’s book The 15 Invaluable Laws of Growth</a></Link> risk-free. It’s a great way to get
                warmed up to the idea of personal growth and get some clarity on where you want to go next.</p>
              <p>The other Masterminds are all a fixed price, and you can see what’s currently available and
                upcoming <Link href="/upcoming#mmgs"><a>here</a></Link>. The prices are based on how many weeks they are
                for, and the first time I release a new Mastermind group I offer it at 30% off. I also have a
                10% discount I offer active Toastmasters and those who have successfully completed at least
                one other of my paid Mastermind groups before.</p>
              <p>Coaching programs are much more variable in cost because they tend to be more personalized
                to the individual. Different clients have different needs and function at different levels.
                This changes the value they are going to get out of a coaching relationship, and thus how much
                investment that coaching is worth. It’s not about me and my hourly rate -- it’s about you and
                the impact the solutions we uncover will have on your life.</p>
              <p>That means hiring me or any other quality coach will be a significant investment. <Link href="https://forms.gle/Hd13iF6iVsncr97i6"><a target="_blank">Fill out an application form</a></Link> so we can discuss what that looks like for you.</p>
            </dd>
            <dt id="toastmasters" className={styles.active}>
              What is Toastmasters and why is it a big deal?
            </dt>
            <dd>
              <p><Link href="https://toastmasters.org"><a target="_blank" rel="noreferrer">Toastmasters
                International</a></Link> is a global nonprofit educational organization that teaches public
                speaking and leadership skills through a network of local clubs. It’s been around
                since 1924, and has shaped the lives of world-class leaders and communicators as
                well as single moms and college students.</p>
              <p>For me, Toastmasters is all about confidence and influence. I’ve seen men who
                have never been truly respected in their lives break down and weep at being
                applauded for their first speech. I’ve seen shy and insecure individuals blossom
                into leadership competence, delegating effectively and creating teams to
                accomplish things they never could have imagined. It’s amazing how much having
                a safe place to fail and grow will do for you.</p>
              <p>Myself, I have almost completed two Distinguished Toastmaster awards, and I’ve
                completed two full educational paths: Effective Coaching and Presentation Mastery.
                I’m also working through three more, so the grass doesn’t grow under my feet,
                haha. I’ve also been highly involved in leadership, not only at the club level,
                but also in <Link href="https://d32toastmasters.org/"><a target="_blank" rel="noreferrer">
                my district</a></Link>. I’ve been Area Director twice, and I’m currently a Division Director.
                I’m currently also a member of four clubs: <Link href="https://harbortoastmasters.org/"><a target="_blank" rel="noreferrer">Harbor Club</a></Link>, <Link href="https://sheltonwa.toastmastersclubs.org/"><a target="_blank" rel="noreferrer">Shelton
                Community Club</a></Link>, <Link href="https://soundadvice.toastmastersclubs.org/"><a target="_blank" rel="noreferrer">
                Sound Advice Advanced</a></Link>, and <Link href="https://nerdmasters.toastmastersclubs.org/"><a target="_blank" rel="noreferrer">
                Nerdmasters</a></Link> (which I helped charter).</p>
              <p>I wasn’t joking when I said I’m obsessed. I highly recommend you check out a
                local club in your area (or drop in to visit one of my clubs -- we all meet
                online and you’re more than welcome) and see why for yourself.</p>
            </dd>
          </dl>
        </article>
      </Layout>
    </div>
  )
}
