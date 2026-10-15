import Link from 'next/link'
import type { ReactNode } from 'react'

const steps = [
  ['step-1', '01 Idea'],
  ['step-2', '02 Interest'],
  ['step-3', '03 Customer'],
  ['step-4', '04 Start small'],
  ['step-5', '05 Gov help'],
  ['step-6', '06 Money'],
  ['step-7', '07 Spread'],
] as const

const icons = {
  spark: (
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />
  ),
  heart: (
    <path d="M12 20s-7-4.4-7-9.2A3.8 3.8 0 0 1 12 7.5a3.8 3.8 0 0 1 7 3.3C19 15.6 12 20 12 20z" />
  ),
  people: (
    <>
      <circle cx="9" cy="8" r="3" />
      <circle cx="16" cy="9" r="2.5" />
      <path d="M3.5 19c1.2-3 3.4-4.5 5.5-4.5S13.3 16 14.5 19M14 14.6c1.2-.4 2.5-.4 3.8.2 1.5.8 2.5 2.3 2.7 4.2" />
    </>
  ),
  shop: (
    <>
      <path d="M4 9h16l-1.2 10.2a2 2 0 0 1-2 1.8H7.2a2 2 0 0 1-2-1.8L4 9z" />
      <path d="M8 9V7a4 4 0 0 1 8 0v2" />
    </>
  ),
  eye: (
    <>
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12z" />
      <circle cx="12" cy="12" r="2.5" />
    </>
  ),
  needle: (
    <>
      <path d="M7 17l10-10" />
      <path d="M15 5l4 4-2 2-4-4 2-2z" />
      <path d="M6 18c-1.5 1.5-3 1-3 1s.5-1.5 2-3" />
    </>
  ),
  cook: (
    <>
      <path d="M5 11h14v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7z" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
      <path d="M9 6V4M12 5V3M15 6V4" />
    </>
  ),
  beauty: (
    <>
      <path d="M8 4c2 3 2 6 0 9M16 4c-2 3-2 6 0 9" />
      <path d="M6 20c2-4 4-6 6-6s4 2 6 6" />
    </>
  ),
  child: (
    <>
      <circle cx="12" cy="8" r="3.2" />
      <path d="M6 20c1.2-4 3.2-6 6-6s4.8 2 6 6" />
      <path d="M8 12.5c-2 .5-3.5 2-4 4M16 12.5c2 .5 3.5 2 4 4" />
    </>
  ),
  book: (
    <>
      <path d="M5 5.5A2.5 2.5 0 0 1 7.5 3H19v16H7.5A2.5 2.5 0 0 0 5 21.5V5.5z" />
      <path d="M5 18.5A2.5 2.5 0 0 1 7.5 16H19" />
    </>
  ),
  coin: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 7v10M9.5 9.5h3.2a1.8 1.8 0 0 1 0 3.6H9.5" />
    </>
  ),
  train: (
    <>
      <path d="M4 18h16" />
      <path d="M7 18V9l5-4 5 4v9" />
      <path d="M10 18v-3h4v3" />
    </>
  ),
  certificate: (
    <>
      <rect x="5" y="4" width="14" height="12" rx="1.5" />
      <path d="M9 8h6M9 11h4" />
      <path d="M10 16l-1.5 4 3.5-2 3.5 2L14 16" />
    </>
  ),
  market: (
    <>
      <path d="M4 10l2-5h12l2 5" />
      <path d="M5 10v9h14v-9" />
      <path d="M9 19v-5h6v5" />
    </>
  ),
  phone: (
    <>
      <rect x="7" y="3" width="10" height="18" rx="2" />
      <path d="M10 18h4" />
    </>
  ),
  poster: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="1.5" />
      <path d="M8 8h8M8 12h8M8 16h5" />
    </>
  ),
  gift: (
    <>
      <rect x="4" y="10" width="16" height="10" rx="1" />
      <path d="M4 14h16M12 10v10" />
      <path d="M12 10c-2-3-5-3-5-1s2.5 2.5 5 1c2.5 1.5 5 .8 5-1s-3-2-5 1z" />
    </>
  ),
  chat: (
    <>
      <path d="M5 6h14v9H9l-4 3V6z" />
      <path d="M9 10h6M9 13h4" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M8.5 12.2l2.3 2.3 4.7-5" />
    </>
  ),
  home: (
    <>
      <path d="M4 11l8-7 8 7v9a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9z" />
    </>
  ),
  leaf: (
    <path d="M5 19c8 0 12-8 14-14-6 2-14 6-14 14zM5 19c4-4 8-6 12-7" />
  ),
  star: (
    <path d="M12 3l2.4 5.4 5.9.6-4.4 3.9 1.3 5.8L12 16.2 6.8 18.7l1.3-5.8L3.7 9l5.9-.6L12 3z" />
  ),
  flag: (
    <>
      <path d="M6 21V4" />
      <path d="M6 5h11l-2.5 3.5L17 12H6" />
    </>
  ),
  send: (
    <path d="M4 11l16-7-7 16-2.5-6.5L4 11z" />
  ),
} as const

type IconName = keyof typeof icons

function Icon({ name }: { name: IconName }) {
  return (
    <span className="start-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        {icons[name]}
      </svg>
    </span>
  )
}

function Tile({
  icon,
  title,
  children,
}: {
  icon: IconName
  title: string
  children: ReactNode
}) {
  return (
    <article className="start-tile">
      <Icon name={icon} />
      <h3>{title}</h3>
      <div className="start-tile__body">{children}</div>
    </article>
  )
}

function Quote({ children }: { children: ReactNode }) {
  return <blockquote className="start-quote-card">{children}</blockquote>
}

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="start-table">
      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.join('|')}>
              {row.map((cell) => (
                <td key={cell}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function StarterGuide() {
  return (
    <div className="start">
      <div className="start-intro">
        <p>
          Welcome! This is your SHEbuilds starter guide, helping you go from a small idea to a real
          business you can run from your home or neighbourhood.
        </p>
        <p>
          Launching a small business is seven simple steps. You don’t need to be perfect, rich, or
          fully ready. Just start one step at a time.
        </p>
      </div>

      <nav className="start-nav" aria-label="Guide steps">
        {steps.map(([id, label]) => (
          <a key={id} href={`#${id}`}>
            {label}
          </a>
        ))}
      </nav>

      <section id="step-1" className="start-section">
        <header className="start-head">
          <p className="start-kicker">Step 01</p>
          <h2>Discover your business idea</h2>
          <p className="start-lead">
            Every good business starts with something simple — something you know, enjoy, or see
            people needing around you. You can start with your skills, your hands, your home, or
            even your kitchen.
          </p>
        </header>

        <div className="start-bento">
          <Tile icon="heart" title="What do you enjoy?">
            <p>What do you enjoy doing in your daily life?</p>
          </Tile>
          <Tile icon="star" title="What are you good at?">
            <p>Something you do well, or something people already appreciate.</p>
          </Tile>
          <Tile icon="spark" title="What can people pay for?">
            <p>What skill do you already have, even a small one, that someone else might pay for?</p>
          </Tile>
          <Tile icon="home" title="What is missing nearby?">
            <p>What is missing in your neighbourhood that women or families need?</p>
          </Tile>
        </div>

        <h3>Real-life ideas from women like you</h3>
        <div className="start-feature-row">
          <Tile icon="needle" title="Stitching">
            <Quote>
              “I already stitch my children’s clothes. I can offer stitching for other women in my
              area.”
            </Quote>
          </Tile>
          <Tile icon="cook" title="Cooking">
            <Quote>
              “Everyone loves my mango pickle. I can make small jars and sell them.”
            </Quote>
          </Tile>
          <Tile icon="beauty" title="Beauty">
            <Quote>
              “No one nearby offers mehndi for brides. I can learn the basics and start at home.”
            </Quote>
          </Tile>
          <Tile icon="child" title="Childcare">
            <Quote>
              “Many mothers work during the day. I can look after 5–6 small children at home.”
            </Quote>
          </Tile>
          <Tile icon="book" title="Tuition">
            <Quote>“I am good at maths. I can teach children nearby for a small price.”</Quote>
          </Tile>
        </div>

        <div className="start-action">
          <Icon name="flag" />
          <div>
            <h3>Action step</h3>
            <p>
              Write 2 or 3 ideas in your notebook. Use the{' '}
              <Link href="/#idea-exploration">Business Idea Exploration on the homepage</Link> to
              help you.
            </p>
          </div>
        </div>
      </section>

      <section id="step-2" className="start-section">
        <header className="start-head">
          <p className="start-kicker">Step 02</p>
          <h2>Check if people around you want it</h2>
          <p className="start-lead">
            With 2–3 ideas, find out which one people nearby actually need — before you spend time
            or money. Talk, observe, and listen. Nothing formal is required.
          </p>
        </header>

        <div className="start-split">
          <Tile icon="chat" title="Talk to 3–5 people you trust">
            <p>Ask neighbours, friends, or relatives:</p>
            <Quote>
              “If I started making [your idea], would that be helpful? Would you try it or buy it?”
            </Quote>
            <p className="start-example">
              “I asked 4 women about homemade rotis. Three said yes. One only needs them in school
              season.”
            </p>
          </Tile>
          <Tile icon="eye" title="Look at shops and stalls nearby">
            <ul>
              <li>Are people already selling what you want to offer?</li>
              <li>If yes — can you do it differently or better?</li>
              <li>If not — maybe there’s a gap you can fill.</li>
            </ul>
            <p className="start-example">
              “Three people sell store-bought pickle. I can offer fresh homemade mango pickle in
              reusable jars.”
            </p>
          </Tile>
        </div>

        <h3>What to notice</h3>
        <div className="start-feature-row start-feature-row--3">
          <Tile icon="people" title="What people need">
            <p>“Many women said they want affordable blouses.”</p>
          </Tile>
          <Tile icon="spark" title="What is missing">
            <p>“No one is selling custom-stitched kids’ clothes.”</p>
          </Tile>
          <Tile icon="shop" title="What they already buy">
            <p>“Factory-made kurtas are common but poor quality.”</p>
          </Tile>
        </div>

        <div className="start-action">
          <Icon name="book" />
          <div>
            <h3>Action step</h3>
            <p>In your notebook, write what you found out, for example:</p>
            <ul className="start-checks">
              <li>3 women liked the idea of buying rotis</li>
              <li>1 woman needs a low-cost babysitter</li>
              <li>No one is offering makeup services nearby</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="step-3" className="start-section">
        <header className="start-head">
          <p className="start-kicker">Step 03</p>
          <h2>Know who will buy from you</h2>
          <p className="start-lead">
            Your target customer is the person who will pay for what you offer. Knowing her helps
            you set a fair price, make the product right, and tell the right people.
          </p>
        </header>

        <div className="start-feature-row start-feature-row--3">
          <Tile icon="coin" title="Set a fair price">
            <p>Charge what covers your costs and feels fair for your area.</p>
          </Tile>
          <Tile icon="star" title="Make it just right">
            <p>Shape the product or service around what she actually wants.</p>
          </Tile>
          <Tile icon="send" title="Tell the right people">
            <p>Share the news where your customer already spends time.</p>
          </Tile>
        </div>

        <h3>Ask yourself</h3>
        <div className="start-feature-row start-feature-row--3">
          <Tile icon="people" title="Who needs this?">
            <p>Which women, families, or children nearby would buy from you?</p>
          </Tile>
          <Tile icon="heart" title="Why would they buy?">
            <p>What problem does your work solve in their day?</p>
          </Tile>
          <Tile icon="leaf" title="What matters most?">
            <p>Low price, homemade quality, or convenience?</p>
          </Tile>
        </div>

        <h3>Things to notice</h3>
        <div className="start-bento">
          <Tile icon="people" title="Age and role">
            <p>Mother? Student? Bride? Worker?</p>
          </Tile>
          <Tile icon="coin" title="Money level">
            <p>Can they pay a little more for quality, or do they need the lowest price?</p>
          </Tile>
          <Tile icon="shop" title="Shopping habit">
            <p>Shops, neighbours, markets, or WhatsApp groups?</p>
          </Tile>
          <Tile icon="heart" title="What they care about">
            <p>Homemade goods, fast service, packaging, or safe for kids?</p>
          </Tile>
        </div>

        <h3>Examples</h3>
        <div className="start-ledger">
          {[
            ['Making affordable blouses', 'Local mothers who can’t travel far for tailoring'],
            ['Cooking lunch tiffins', 'Women in shops or schools with no time to cook'],
            ['Offering bridal mehndi', 'Brides in nearby villages during wedding season'],
            ['Selling homemade soap', 'Families who want skin-safe, natural products'],
          ].map(([idea, customer]) => (
            <div key={idea} className="start-ledger__row">
              <strong>{idea}</strong>
              <span>{customer}</span>
            </div>
          ))}
        </div>

        <div className="start-action">
          <Icon name="flag" />
          <div>
            <h3>Action step</h3>
            <p>Complete this line in your notebook:</p>
            <Quote>“My customer is a ___ who wants ___ because ___.”</Quote>
            <ul>
              <li>
                “My customer is a working mother who wants ready lunch boxes because she is too busy
                to cook.”
              </li>
              <li>
                “My customer is a young bride who wants simple makeup because she can’t afford a
                salon.”
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="step-4" className="start-section">
        <header className="start-head">
          <p className="start-kicker">Step 04</p>
          <h2>Start small</h2>
          <p className="start-lead">
            You don’t need a shop, big money, or lots of equipment. Start from home with what you
            have. Serving 3 to 5 people you trust is a strong beginning.
          </p>
        </header>

        <div className="start-process">
          <Tile icon="spark" title="01 · Choose one thing">
            <p>Pick one simple product or service you already know — stitching, snacks, or beauty.</p>
          </Tile>
          <Tile icon="people" title="02 · Offer it to 3–5 people">
            <p>
              Neighbours, sisters-in-law, or market sellers. A low price or free trial is fine at
              first.
            </p>
          </Tile>
          <Tile icon="chat" title="03 · Ask for honest feedback">
            <p>What did they like or not like? Use the useful parts to improve.</p>
            <p className="start-example">
              “The mehendi was nice, but make it darker.” Next time, change the paste.
            </p>
          </Tile>
          <Tile icon="check" title="04 · Make one small change">
            <p>Improve one thing based on what you heard — then try again.</p>
          </Tile>
        </div>

        <h3>Real examples</h3>
        <div className="start-feature-row start-feature-row--3">
          <Tile icon="beauty" title="Beauty">
            <Quote>
              “I did threading and a facial for 3 neighbours. One wanted an oil head massage too — I’ll
              offer that next week.”
            </Quote>
          </Tile>
          <Tile icon="needle" title="Stitching">
            <Quote>
              “I stitched a blouse for my cousin. She liked the fit but asked for a deeper neckline.”
            </Quote>
          </Tile>
          <Tile icon="cook" title="Snacks">
            <Quote>
              “I made 5 packets of masala papad. Friends said it was tasty, but use less salt.”
            </Quote>
          </Tile>
        </div>

        <div className="start-action">
          <Icon name="check" />
          <div>
            <h3>Action checklist</h3>
            <ul className="start-checks">
              <li>I chose one thing to start with</li>
              <li>I offered it to 3–5 people I know</li>
              <li>I asked what they liked or didn’t like</li>
              <li>I improved one thing based on their feedback</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="step-5" className="start-section">
        <header className="start-head">
          <p className="start-kicker">Step 05</p>
          <h2>Understanding government help</h2>
          <p className="start-lead">
            You don’t need papers or ID to start from home. Later, when the business is more stable,
            free government support made for women can help you grow.
          </p>
        </header>

        <h3>What the government can offer</h3>
        <div className="start-feature-row">
          <Tile icon="coin" title="Loans">
            <p>Money you can borrow to grow your business.</p>
          </Tile>
          <Tile icon="train" title="Training">
            <p>Skills and guidance to run the work better.</p>
          </Tile>
          <Tile icon="market" title="Markets & fairs">
            <p>Permission to sell at local markets and haats.</p>
          </Tile>
          <Tile icon="certificate" title="Certificate">
            <p>Proof you are a real business owner.</p>
          </Tile>
        </div>

        <h3>When to think about this</h3>
        <p className="start-note">
          Not at the very start. After 3–6 months, when things feel steadier, you can look at:
        </p>
        <div className="start-bento">
          <Tile icon="coin" title="A small women’s loan">
            <p>Apply for support when sales are already happening.</p>
          </Tile>
          <Tile icon="market" title="Local exhibitions">
            <p>Sell in market exhibitions or haats.</p>
          </Tile>
          <Tile icon="people" title="Self-Help Groups">
            <p>Join a government-run women’s SHG.</p>
          </Tile>
          <Tile icon="certificate" title="Get listed">
            <p>Register as a business owner to unlock more help.</p>
          </Tile>
        </div>
        <p className="start-note">
          Full scheme details are on the{' '}
          <Link href="/resources/loan-schemes">Government Loan Schemes page</Link>.
        </p>

        <div className="start-highlight">
          <Icon name="certificate" />
          <div>
            <h3>One free option: Udyam registration</h3>
            <p>
              A free online certificate for women running small businesses. No heavy paperwork.
            </p>
            <div className="start-feature-row start-feature-row--3">
              <Tile icon="home" title="From home">
                <p>Register even if you work from home.</p>
              </Tile>
              <Tile icon="shop" title="No shop needed">
                <p>GST only if the law says your work needs it.</p>
              </Tile>
              <Tile icon="phone" title="Aadhaar OTP">
                <p>Any mobile number linked to your Aadhaar works.</p>
              </Tile>
            </div>
          </div>
        </div>

        <h3>Where you can get help</h3>
        <div className="start-feature-row start-feature-row--3">
          <Tile icon="home" title="CSC centres">
            <p>Common Service Centres nearby can help you register and apply for loans.</p>
          </Tile>
          <Tile icon="people" title="Local workers">
            <p>ASHA workers, anganwadi staff, and NGO offices.</p>
          </Tile>
          <Tile icon="phone" title="Family with a phone">
            <p>Someone with a smartphone can help fill simple online forms.</p>
          </Tile>
        </div>

        <article className="start-story">
          <Icon name="star" />
          <div>
            <h3>Rekha’s story</h3>
            <p>
              Rekha began facials and waxing from home in a village in Uttar Pradesh. When more
              customers came, she visited her local CSC, got Udyam registration, and with their help
              applied for a small women’s loan. She bought better products, served more people, and
              is saving toward a proper parlour.
            </p>
          </div>
        </article>

        <div className="start-action">
          <Icon name="coin" />
          <div>
            <h3>Action step</h3>
            <p>Write one small thing to save for — a tool, a flyer, or a CSC visit. Then write:</p>
            <Quote>
              “I will save ₹____ every _____ to buy ______. I hope to buy it by ______.”
            </Quote>
            <p className="start-example">
              “I will save ₹50 every week to buy a good facial brush by the end of the month.”
            </p>
          </div>
        </div>
      </section>

      <section id="step-6" className="start-section">
        <header className="start-head">
          <p className="start-kicker">Step 06</p>
          <h2>Understand your money</h2>
          <p className="start-lead">
            Even a small business needs simple planning. You don’t need a calculator or English —
            just a pen, a notebook, and a little time each week.
          </p>
        </header>

        <h3>Why this matters</h3>
        <div className="start-feature-row start-feature-row--3">
          {[
            ['coin', 'Set a fair price'],
            ['check', 'Avoid loss'],
            ['star', 'Know your real profit'],
            ['spark', 'Save for better tools'],
            ['people', 'Show your family the income'],
            ['flag', 'Plan for the future'],
          ].map(([icon, title]) => (
            <Tile key={title} icon={icon as IconName} title={title}>
              <p>Keep this in mind every week as you sell.</p>
            </Tile>
          ))}
        </div>

        <div className="start-split">
          <Tile icon="shop" title="Cost">
            <p>Money you spend to make or give your product or service.</p>
            <ul>
              <li>Snacks → flour, oil, gas, packets</li>
              <li>Beauty → mehendi, thread, creams</li>
              <li>Stitching → cloth, thread, needles</li>
            </ul>
          </Tile>
          <Tile icon="coin" title="Profit">
            <p>What is left after costs: profit = what you earn − what you spend.</p>
            <p className="start-example">
              Sell 5 diyas for ₹100. Spend ₹60 on clay, paint, oil. Profit = ₹40.
            </p>
          </Tile>
        </div>

        <article className="start-story">
          <Icon name="book" />
          <div>
            <h3>One notebook for your business only</h3>
            <p>
              Write your name and business idea on the first page. On the inside cover write:{' '}
              <em>“This book is for my earnings and hard work.”</em>
            </p>
          </div>
        </article>

        <h3>Three big questions</h3>
        <div className="start-process">
          <Tile icon="shop" title="01 · What do I pay for?">
            <p>List every item you use — even electricity, water, or tools that feel free.</p>
          </Tile>
          <Tile icon="coin" title="02 · What price can I charge?">
            <p>Check what people nearby pay. Not too low to cover costs. Not too high to scare buyers.</p>
          </Tile>
          <Tile icon="star" title="03 · What’s left?">
            <p>Selling price − cost = profit. That is what you keep, save, or invest again.</p>
          </Tile>
        </div>

        <div className="start-tables">
          <div>
            <p className="start-label">Stitching a blouse</p>
            <Table
              headers={['Item', 'Cost']}
              rows={[
                ['Fabric', '₹40'],
                ['Thread', '₹10'],
                ['Lining', '₹5'],
                ['Needle wear', '₹2'],
                ['Total', '₹57'],
              ]}
            />
          </div>
          <div>
            <p className="start-label">Giving a facial</p>
            <Table
              headers={['Item', 'Cost']}
              rows={[
                ['Multani mitti', '₹10'],
                ['Rosewater', '₹5'],
                ['Cotton pads', '₹2'],
                ['Candle or light', '₹2'],
                ['Total', '₹19'],
              ]}
            />
          </div>
          <div>
            <p className="start-label">Selling snacks</p>
            <Table
              headers={['Item', 'Cost']}
              rows={[
                ['Oil', '₹20'],
                ['Gram flour', '₹15'],
                ['Salt and masala', '₹5'],
                ['Packing paper', '₹3'],
                ['Stove gas', '₹7'],
                ['Total', '₹50'],
              ]}
            />
          </div>
        </div>

        <h3>Daily money table</h3>
        <Table
          headers={['Date', 'Work done', 'Cost', 'Price', 'Profit']}
          rows={[
            ['June 10', '10 hair oils', '₹70', '₹150', '₹80'],
            ['June 11', '3 mehendi designs', '₹15', '₹90', '₹75'],
            ['June 12', '6 pakora plates', '₹36', '₹90', '₹54'],
          ]}
        />

        <div className="start-split">
          <Tile icon="flag" title="Break-even">
            <p>You have earned back what you spent. Only after this do you make profit.</p>
            <ul>
              <li>Spend ₹200 → earn ₹200 = break-even</li>
              <li>Earn ₹300 → ₹100 profit</li>
            </ul>
          </Tile>
          <Tile icon="check" title="Mistakes to avoid">
            <ul>
              <li>Forgetting small costs</li>
              <li>Selling without checking profit</li>
              <li>Too many early discounts</li>
              <li>No notebook for spend and earn</li>
            </ul>
          </Tile>
        </div>

        <div className="start-action">
          <Icon name="book" />
          <div>
            <h3>Action step — two lists</h3>
            <div className="start-split start-split--plain">
              <div>
                <p className="start-label">Running costs (often)</p>
                <ul>
                  <li>Mehendi cones — ₹20 for 2</li>
                  <li>Cotton pads — ₹10 a pack</li>
                  <li>Massage oil — ₹30</li>
                </ul>
              </div>
              <div>
                <p className="start-label">Starting costs (once)</p>
                <ul>
                  <li>Small mirror — ₹70</li>
                  <li>Plastic stool — ₹150</li>
                  <li>Small table — already have</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="step-7" className="start-section">
        <header className="start-head">
          <p className="start-kicker">Step 07</p>
          <h2>Spread the word about your business</h2>
          <p className="start-lead">
            You don’t need a website or big posters. Grow by talking to neighbours, relatives,
            shopkeepers, and teachers — people who already know you.
          </p>
        </header>

        <h3>Tell 5–10 people you trust</h3>
        <div className="start-feature-row start-feature-row--3">
          <Quote>“Didi, I’ve started stitching blouses. If you need one, I’d love to do it.”</Quote>
          <Quote>
            “I’ve begun facials and threading from home. I can give you a discount for your first
            try.”
          </Quote>
          <Quote>
            “I sell small jars of homemade lemon pickle — fresh and safe for your family.”
          </Quote>
        </div>

        <h3>Make a small handwritten poster</h3>
        <p className="start-note">
          Pen and paper are enough. If you can’t write, ask a school-going child or teacher to help.
        </p>
        <div className="start-feature-row">
          <Tile icon="spark" title="What you do">
            <p>Say the service or product clearly.</p>
          </Tile>
          <Tile icon="coin" title="Price">
            <p>Keep it attractive and easy to read.</p>
          </Tile>
          <Tile icon="heart" title="One benefit">
            <p>Homemade, fast, safe, or nearby.</p>
          </Tile>
          <Tile icon="home" title="Name & place">
            <p>Your name and location. Phone only if you have one.</p>
          </Tile>
        </div>

        <h3>Where to hang it</h3>
        <div className="start-feature-row">
          <Tile icon="shop" title="Shops & market">
            <p>Local shops or the marketplace.</p>
          </Tile>
          <Tile icon="child" title="School gate">
            <p>Anganwadi or school entrance.</p>
          </Tile>
          <Tile icon="leaf" title="Temple or pump">
            <p>Village temple or water hand pump.</p>
          </Tile>
          <Tile icon="people" title="Women’s group">
            <p>SHG meeting place or NGO centre.</p>
          </Tile>
        </div>

        <h3>Give a small first-time offer</h3>
        <div className="start-feature-row start-feature-row--3">
          <Tile icon="gift" title="Facial offer">
            <p>“First-time facial — only ₹30!”</p>
          </Tile>
          <Tile icon="gift" title="Pickle offer">
            <p>“Buy 2 jars of achar, get 1 free!”</p>
          </Tile>
          <Tile icon="gift" title="Mehendi offer">
            <p>“Free mehendi on your child’s hand with bridal mehendi.”</p>
          </Tile>
        </div>

        <div className="start-highlight">
          <Icon name="phone" />
          <div>
            <h3>One WhatsApp message, if you can</h3>
            <p>Ask someone at home to help. Send 1–2 clear photos with a short note:</p>
            <Quote>
              “Rekha’s Homemade Achar — ₹40 per jar. Clean, tasty, and made fresh. I can deliver near
              Shiv Mandir. Please forward this to others.”
            </Quote>
          </div>
        </div>

        <Tile icon="chat" title="Ask happy customers to tell others">
          <Quote>
            “Didi, if you liked it, please tell your sister or neighbour. I’d be really grateful.”
          </Quote>
          <p>Word of mouth is the strongest tool you have.</p>
        </Tile>

        <div className="start-action">
          <Icon name="check" />
          <div>
            <h3>Spread-the-word checklist</h3>
            <ul className="start-checks">
              <li>I told 5–10 trusted people</li>
              <li>I made a handwritten poster and hung it in common places</li>
              <li>I gave a small first-time offer</li>
              <li>I asked a happy customer to tell one more person</li>
              <li>Optional: I shared a WhatsApp photo of my work</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
