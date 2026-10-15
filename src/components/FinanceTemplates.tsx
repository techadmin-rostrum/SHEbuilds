type Column = [string, string, string]

type Template = {
  id: string
  title: string
  image: string
  imageAlt: string
  whatTitle: string
  what: string[]
  whyTitle: string
  why: string[]
  extra?: { title: string; paragraphs: string[]; steps?: string[] }
  prompt: string
  quote: string[]
  howTitle: string
  columns: Column[]
  closingTitle: string
  closing: string[]
}

const templates: Template[] = [
  {
    id: 'startup-costs',
    title: 'Startup Costs Template',
    image: '/brand/image-1.webp',
    imageAlt: 'Startup Costs Template worksheet',
    whatTitle: 'What are “Startup Costs”?',
    what: [
      'Startup costs are the money you need to start your business. This includes things like tools, supplies, rent, or licenses. It is usually a one-time cost to get everything ready.',
    ],
    whyTitle: 'Why are they important?',
    why: [
      'They help you know how much money you need to start. If you know the cost, you can save up, borrow wisely, or ask for help. This way, you are not surprised later.',
    ],
    prompt: 'Use the Startup Costs template below.',
    quote: [
      'This table helps you figure out how much money you need before starting your business.',
      'You will write what things you need to buy, how many, and the price of each.',
    ],
    howTitle: 'How to use this table, column by column',
    columns: [
      ['Item I Need to Buy', 'Write the name of the thing you need for your business.', 'Sewing machine, cloth, cooking pot, mirror'],
      ['How Many?', 'Write the number of that item you need.', '1 sewing machine, 5 sets of cloth, 2 trays'],
      ['Cost per Item (₹)', 'Write the price of 1 item.', 'If 1 cloth set is ₹100, write ₹100'],
      ['Total for that item', 'Multiply how many items there are × its price.', '5 cloth sets × ₹100 = ₹500'],
    ],
    closingTitle: 'Then at the bottom',
    closing: [
      'Add up the totals for each item.',
      'This final number is how much money you need to begin.',
    ],
  },
  {
    id: 'monthly-expenses',
    title: 'Monthly Expenses Template',
    image: '/brand/image-4.webp',
    imageAlt: 'Monthly Expenses Template worksheet',
    whatTitle: 'What are “monthly expenses”?',
    what: [
      'Monthly expenses are the regular costs you pay every month to keep your business running. These can be things like buying raw materials, transport, electricity, data bundles, or loan payments.',
    ],
    whyTitle: 'Why are they important?',
    why: [
      'They help you know how much money you must earn each month to keep your business going. If your sales are low, you can cut some costs. It also helps you avoid debt or loss.',
    ],
    extra: {
      title: 'What is the value of your labour?',
      paragraphs: [
        'Your labour is the time, effort and energy you put into running your business — making products, serving customers, travelling to markets and more. Even if no one pays you directly, your work has real value.',
        'Without your effort, nothing happens — so your time should be counted like any other cost.',
      ],
      steps: [
        'Decide how many hours you work in a month. Example: 5 days a week, 2 hours per day = 40 hours a month.',
        'Choose a fair hourly rate for your time. Think: what would you pay someone else to do your work? A common rate is ₹30–₹50 per hour.',
        'Multiply the two to find your labour cost. Example: 40 hours × ₹30/hour = ₹1,200 per month.',
        'Add this to your monthly expenses table. It goes in the “Your Own Labour” column.',
      ],
    },
    prompt: 'Use the Monthly Expenses template below.',
    quote: [
      'This table helps you see what money you spend every month to keep your business running.',
      'These are things you buy or pay for again and again.',
    ],
    howTitle: 'How to use this table, column by column',
    columns: [
      ['Expense Type', 'Write the name of what you spend money on each month.', 'Ingredients, bus fare, mobile recharge, electricity'],
      ['Amount per Month (₹)', 'Write how much money you spend for that thing in one month.', 'Try to remember what you spent last month, or ask for help to guess'],
      ['Your Own Labour (Time Spent + ₹)', 'Write how many hours you worked and what your time is worth.', '20 hours × ₹30/hour = ₹600. Your effort has value — always include it to know your real costs'],
    ],
    closingTitle: 'Then at the bottom',
    closing: [
      'Add up all the numbers in the Amount column and in the Labour column.',
      'This gives you the true monthly cost of running your business.',
    ],
  },
  {
    id: 'revenue-forecast',
    title: 'Revenue Forecast Template',
    image: '/brand/image-3.webp',
    imageAlt: 'Revenue Forecast Template worksheet',
    whatTitle: 'What is a “revenue forecast”?',
    what: [
      'A revenue forecast is a guess or plan for how much money your business will make in the future. You can write down what you think you will earn every week or every month based on what you sell.',
      'It is not always exact. It is a smart guess to help you plan.',
    ],
    whyTitle: 'Why is it important?',
    why: [
      'It shows if your business idea will make enough money. You can see if you are growing or not. It also helps when you want to apply for a loan or explain your plan to others.',
    ],
    prompt: 'Use the Revenue Forecast template below.',
    quote: [
      'This table helps you plan how much money you can earn in a month.',
      'You write what you sell, how much you charge, and how many customers you may get.',
    ],
    howTitle: 'How to use this table, column by column',
    columns: [
      ['What I Sell', 'Write the name of each product or service you offer.', 'Haircut, bangles, food plate, embroidery'],
      ['Price (₹)', 'Write how you charge for one unit or one service.', '1 haircut = ₹50'],
      ['How Many in a Month?', 'Write how many people might buy that thing in one month.', 'If you serve 5 customers a week, that is 20 in a month'],
      ['Total Earned (₹)', 'Multiply price × number of sales.', '₹50 × 20 = ₹1,000'],
    ],
    closingTitle: 'Then at the bottom',
    closing: [
      'Add up all the totals from each row.',
      'This is your total expected income for one month.',
    ],
  },
  {
    id: 'savings-tracker',
    title: 'Savings Tracker Template',
    image: '/brand/image-2.webp',
    imageAlt: 'Savings Tracker Template worksheet',
    whatTitle: 'What is a “savings tracker”?',
    what: [
      'A savings tracker is a simple way to keep track of how much money you are saving over time. Each time you save, you write down the date and amount. You can also draw boxes or use a goal chart to make it fun and easy.',
    ],
    whyTitle: 'Why is it important?',
    why: [
      'It helps you reach goals like buying a big item or growing your business. It shows your progress and motivates you to keep saving, even small amounts. It also builds your habit of planning money.',
    ],
    prompt: 'Use the Savings Tracker template below.',
    quote: [
      'This table helps you see how much money you are saving.',
      'You can save small amounts from your business to use later for growth or emergencies.',
    ],
    howTitle: 'How to use this table, column by column',
    columns: [
      ['Date', 'Write the date when you saved the money.', '1 June, or “Week 1”'],
      ['Amount Saved (₹)', 'Write how much you saved that time.', 'Even ₹20 or ₹50 is good'],
      ['Purpose', 'Write why you are saving the money, if there is a reason.', 'To buy a mirror, tools, or pay rent later'],
      ['Total So Far (₹)', 'Add this amount to what you had saved earlier.', 'This shows how your savings are growing'],
    ],
    closingTitle: 'Then each time you save more',
    closing: ['Add a new row with the date and amount.', 'Update the Total So Far number.'],
  },
  {
    id: 'break-even',
    title: 'Break-even Calculator Template',
    image: '/brand/image.webp',
    imageAlt: 'Break-Even Calculator Template worksheet',
    whatTitle: 'What is a “break-even calculator”?',
    what: [
      'A break-even calculator helps you find out when your business starts to make a profit. It shows how many products or services you must sell to cover all your costs (startup + monthly). Anything you earn after this is your profit.',
    ],
    whyTitle: 'Why is it important?',
    why: [
      'It helps you set the right price for your product or service. It tells you how many sales you need before you start making profit. It also helps you see if your business idea will work well.',
    ],
    extra: {
      title: 'What does “break-even” mean?',
      paragraphs: [
        'Break-even means your business has made enough money to cover all your costs — not more, not less. You don’t lose money, but you don’t make profit yet. You are at zero.',
        'After you break even, any extra money you make is your profit. You have already sold enough to get back the money you spent on startup costs and monthly expenses.',
      ],
    },
    prompt: 'Use the Break-Even Calculator template below.',
    quote: [
      'This table helps you know how many sales you need to cover your business costs.',
      'After that number, the rest is your profit.',
    ],
    howTitle: 'How to use this table, row by row',
    columns: [
      ['Startup Costs', 'Write down how much money you spent to start the business, from your Startup Costs Template.', 'Tools, cloth, sewing machine, registration'],
      ['Monthly Expenses', 'Write down the monthly costs to keep your business running, from your Monthly Expenses template.', 'Rent, transport, phone credit, materials'],
      ['Price Per Product or Service (₹)', 'Write the selling price of one item or service.', 'One dress = ₹500, or one haircut = ₹100'],
      ['Break-Even Calculation', 'Use (Startup Costs + Monthly Expenses) ÷ Price Per Product.', 'This is how many items you must sell to cover all your costs'],
    ],
    closingTitle: 'Then use the result',
    closing: [
      'This number is your minimum target every month.',
      'Any customer after that means profit for you.',
    ],
  },
]

export function FinanceTemplates() {
  return (
    <div className="finance">
      <div className="finance-intro">
        <p>Understand your money. Plan it simply. Grow your business with confidence.</p>
        <p>
          This section gives you simple tools and examples to help you manage your costs, savings,
          and profits. Don’t worry if this feels new — you don’t need to be good at maths to use
          these tools.
        </p>
        <p>
          Just follow the steps with a notebook and use the ready-made tables in the SHEbuilds
          Finance Templates below.
        </p>
      </div>

      {templates.map((template) => (
        <section key={template.id} id={template.id} className="finance-block">
          <h2>{template.title}</h2>

          <div className="finance-layout">
            <div className="finance-copy">
              <div className="finance-split">
                <div>
                  <h3>{template.whatTitle}</h3>
                  {template.what.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <div>
                  <h3>{template.whyTitle}</h3>
                  {template.why.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {template.extra ? (
                <div className="finance-labour">
                  <h3>{template.extra.title}</h3>
                  {template.extra.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {template.extra.steps ? (
                    <>
                      <h3>How can you calculate it?</h3>
                      <ol>
                        {template.extra.steps.map((step) => (
                          <li key={step}>{step}</li>
                        ))}
                      </ol>
                    </>
                  ) : null}
                </div>
              ) : null}

              <p className="finance-prompt">{template.prompt}</p>

              <blockquote className="finance-quote">
                {template.quote.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </blockquote>
            </div>

            <figure className="finance-visual">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={template.image} alt={template.imageAlt} />
              <a
                className="btn btn--primary finance-download"
                href={template.image}
                download={`${template.title.replace(/\s+/g, '-')}.webp`}
              >
                Download template
              </a>
            </figure>
          </div>

          <div className="finance-sheet">
            <h3>{template.howTitle}</h3>
            <div className="finance-guide">
              <table>
                <thead>
                  <tr>
                    <th>Column</th>
                    <th>What to write</th>
                    <th>Explanation</th>
                  </tr>
                </thead>
                <tbody>
                  {template.columns.map((row) => (
                    <tr key={row[0]}>
                      <td>{row[0]}</td>
                      <td>{row[1]}</td>
                      <td>{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="finance-close">
              <h3>{template.closingTitle}</h3>
              <ul>
                {template.closing.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}
