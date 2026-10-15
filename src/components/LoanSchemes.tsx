import type { ReactNode } from 'react'

function Scheme({
  id,
  title,
  amount,
  children,
}: {
  id: string
  title: string
  amount: string
  children: ReactNode
}) {
  return (
    <section id={id} className="loan-section">
      <div className="loan-head">
        <h2>{title}</h2>
        <p className="loan-amount">{amount}</p>
      </div>
      {children}
    </section>
  )
}

export function LoanSchemes() {
  return (
    <div className="loan">
      <div className="loan-intro">
        <p>
          These are trusted government schemes that offer money help (loans) to women who want to
          start or grow their small business. Each one is slightly different. Read carefully to see
          which one fits your idea best.
        </p>
        <p>
          You do not need to repay these all at once. These are loans with low interest. Interest means
          how much more you need to pay back on top of the loan. The loans are given by banks or
          government agencies.
        </p>
        <p className="loan-remember">
          <strong>Remember:</strong> there are many more schemes, and they are different for different
          state governments.
        </p>
      </div>

      <section className="loan-section" id="extra-notes">
        <h2>Extra notes for all schemes</h2>
        <div className="loan-notes">
          <article className="loan-card">
            <p>
              If you <strong>can’t read or write</strong>, ask for help from a local teacher, NGO
              worker, or family member to fill forms.
            </p>
          </article>
          <article className="loan-card">
            <p>
              Always <strong>carry original and photocopies</strong> of your documents.
            </p>
          </article>
          <article className="loan-card">
            <p>
              You may need to <strong>open a bank account</strong> if you don’t already have one.
            </p>
          </article>
          <article className="loan-card">
            <p>
              Some schemes need a <strong>guarantor</strong> or a group application (like SHGs or
              NGOs).
            </p>
          </article>
          <article className="loan-card">
            <p>
              If you feel unsure, visit your <strong>local Common Service Centre (CSC)</strong> for
              help.
            </p>
          </article>
        </div>
        <p className="loan-note">You can use these examples of government loan schemes:</p>
      </section>

      <Scheme id="stree-shakti" title="1. Stree Shakti Yojana" amount="Up to ₹25 lakh">
        <p className="loan-lead">
          This scheme gives loans up to ₹25 lakh to help women start or grow a business. You get a
          lower interest rate if you are eligible. It is supported by banks like SBI and Canara Bank.
        </p>
        <div className="loan-split">
          <article className="loan-card">
            <h3>Who can apply</h3>
            <ul>
              <li>The woman must own most of the business (more than 51%).</li>
              <li>Age: 18 to 65 years.</li>
              <li>You can apply alone, with a partner, or in a Self-Help Group (SHG).</li>
              <li>
                You must attend a short training called the Entrepreneurship Development Programme
                (EDP).
              </li>
            </ul>
          </article>
          <article className="loan-card loan-card--blush">
            <h3>How to apply</h3>
            <ol>
              <li>Go to a nearby bank branch (SBI, Canara Bank, and others).</li>
              <li>Bring your business idea, ID, address proof, and bank documents.</li>
              <li>Ask the bank for the Stree Shakti Yojana loan application.</li>
            </ol>
            <p className="loan-aside">You cannot apply online.</p>
          </article>
        </div>
      </Scheme>

      <Scheme id="stand-up-india" title="2. Stand Up India Scheme" amount="₹10 lakh – ₹1 crore">
        <p className="loan-lead">
          This scheme gives big loans between ₹10 lakh and ₹1 crore to help women (and SC/ST
          individuals) start a new business — like a small factory, a shop, or a service business
          (such as tailoring or computer repair).
        </p>
        <div className="loan-split">
          <article className="loan-card">
            <h3>Who can apply</h3>
            <ul>
              <li>You must be a woman, or belong to the Scheduled Castes or Scheduled Tribes category.</li>
              <li>Your business must be brand new — not one you already started.</li>
              <li>You must be 18 years or older.</li>
              <li>You should not have defaulted (missed payments) on any earlier loans.</li>
            </ul>
          </article>
          <article className="loan-card loan-card--blush">
            <h3>How to apply</h3>
            <p>You have two options:</p>
            <ol>
              <li>
                Apply online at the official website:{' '}
                <a href="https://www.standupmitra.in" target="_blank" rel="noreferrer">
                  www.standupmitra.in
                </a>
              </li>
              <li>
                Or go directly to a bank and ask for help applying under <strong>Stand Up India</strong>.
              </li>
            </ol>
          </article>
        </div>
        <article className="loan-card">
          <h3>Bring</h3>
          <ul>
            <li>
              A clear <strong>business plan</strong> — what you are going to sell or do, who your
              customers are, and how much you will earn.
            </li>
            <li>KYC documents like an Aadhaar card, PAN card, and a passport-size photo.</li>
            <li>Bank account details.</li>
          </ul>
          <p>
            You can also ask for help from your local <strong>Common Service Centre (CSC)</strong> or
            a government-recognised <strong>loan facilitation agency</strong>.
          </p>
        </article>
      </Scheme>

      <Scheme id="annapurna" title="3. Annapurna Scheme" amount="Up to ₹50,000">
        <p className="loan-lead">
          This scheme helps women who want to start or expand small food businesses, such as
          catering, selling tiffins, or cooking items at home. You can get a loan up to ₹50,000.
        </p>
        <div className="loan-split">
          <article className="loan-card">
            <h3>Who can apply</h3>
            <ul>
              <li>
                Women involved in food-related work like cooking, catering, or home-food delivery.
              </li>
              <li>
                You must have a simple plan for your food business — what you will cook, where you
                will sell, and what items you need.
              </li>
            </ul>
          </article>
          <article className="loan-card loan-card--blush">
            <h3>How to apply</h3>
            <ol>
              <li>
                Visit a <strong>public sector bank</strong> (like State Bank of India or Punjab
                National Bank).
              </li>
              <li>
                Ask for the <strong>Annapurna Scheme loan</strong>.
              </li>
              <li>
                Carry the following:
                <ul>
                  <li>Aadhaar card and address proof</li>
                  <li>Bank passbook</li>
                  <li>
                    A list of tools or items you want to buy, with prices (like tiffin boxes, a
                    stove, ingredients)
                  </li>
                  <li>Your business plan</li>
                </ul>
              </li>
            </ol>
          </article>
        </div>
        <p className="loan-close">
          Banks may ask for <strong>security</strong> or a <strong>guarantor</strong>. It is helpful
          to have a friend or family member who can sign as your guarantor.
        </p>
      </Scheme>

      <Scheme id="mahila-samridhi" title="4. Mahila Samridhi Yojana (MSY)" amount="Small loans">
        <p className="loan-lead">
          This scheme gives small loans to women from poor families, especially in rural and
          semi-urban areas, so they can earn money through a small business or self-employment.
        </p>
        <div className="loan-split">
          <article className="loan-card">
            <h3>Who can apply</h3>
            <ul>
              <li>Women age 18 and above.</li>
              <li>From economically weaker backgrounds (low household income).</li>
              <li>Living in rural or semi-urban areas.</li>
              <li>
                Must have a plan to start or grow a business like tailoring, mehendi, selling
                bangles, or making pickles.
              </li>
            </ul>
          </article>
          <article className="loan-card loan-card--blush">
            <h3>How to apply</h3>
            <p>Bring:</p>
            <ul>
              <li>Aadhaar and address proof</li>
              <li>Ration card (if available)</li>
              <li>Income certificate or self-declaration</li>
              <li>Business idea or plan</li>
            </ul>
          </article>
        </div>
        <p className="loan-close">
          This scheme is run in partnership with <strong>state agencies</strong>, so the local rules
          can change a bit.
        </p>
      </Scheme>

      <Scheme
        id="tread"
        title="5. TREAD Scheme (Trade Related Entrepreneurship Assistance)"
        amount="30% grant + 70% loan"
      >
        <p className="loan-lead">
          This scheme gives both free money (a grant) and a loan to help groups of women start small
          businesses that are not related to farming. To apply, women must work with a
          government-approved NGO. The scheme also includes training and guidance to help run the
          business successfully.
        </p>
        <div className="loan-stages">
          <article className="loan-card loan-card--blush">
            <h3>30% grant</h3>
            <p>The government gives 30% of the business cost as free money. You do not repay this part.</p>
          </article>
          <article className="loan-card loan-card--blush">
            <h3>70% loan</h3>
            <p>The remaining 70% is a loan from the bank, which you repay slowly over time.</p>
          </article>
        </div>
        <div className="loan-split">
          <article className="loan-card">
            <h3>Who can apply</h3>
            <ul>
              <li>You must be connected with an NGO (a registered women’s group or organisation).</li>
              <li>
                Your business must be in a non-farm sector — for example, weaving, craftwork,
                packaging, or tailoring.
              </li>
            </ul>
          </article>
          <article className="loan-card loan-card--blush">
            <h3>How to apply</h3>
            <ol>
              <li>
                Ask your local <strong>women’s NGO or SHG coordinator</strong> if they take part in
                the <strong>TREAD scheme</strong>.
              </li>
              <li>
                If yes, they will help you:
                <ul>
                  <li>Write your business proposal</li>
                  <li>Gather your ID and address documents</li>
                  <li>
                    Submit your application together with them to <strong>SIDBI</strong> or another
                    handling agency
                  </li>
                </ul>
              </li>
            </ol>
          </article>
        </div>
      </Scheme>

      <Scheme id="mudra" title="6. Pradhan Mantri Mudra Yojana (PMMY)" amount="Up to ₹10 lakh">
        <p className="loan-lead">
          This is one of the most popular small loan schemes for any woman running a micro or small
          business. It offers loans up to ₹10 lakh, based on what stage your business is in.
        </p>
        <div className="loan-stages">
          <article className="loan-card">
            <h3>Shishu (baby)</h3>
            <p>Loan up to ₹50,000 — for beginners.</p>
          </article>
          <article className="loan-card">
            <h3>Kishore (teen)</h3>
            <p>₹50,000 to ₹5 lakh — for growing businesses.</p>
          </article>
          <article className="loan-card">
            <h3>Tarun (adult)</h3>
            <p>₹5 lakh to ₹10 lakh — for expanding a business.</p>
          </article>
        </div>
        <div className="loan-split">
          <article className="loan-card">
            <h3>Who can apply</h3>
            <ul>
              <li>Women aged 18 or more with a business idea.</li>
              <li>No history of loan default.</li>
              <li>
                Open to all kinds of businesses: tailoring, selling vegetables, beauty parlours, home
                products, and more.
              </li>
            </ul>
          </article>
          <article className="loan-card loan-card--blush">
            <h3>How to apply</h3>
            <ol>
              <li>
                Visit any <strong>bank</strong> (public or private), <strong>rural bank</strong>, or{' '}
                <strong>microfinance institution</strong> that gives <strong>Mudra loans</strong>.
              </li>
              <li>
                Ask for the <strong>PMMY loan application</strong>.
              </li>
              <li>
                Bring:
                <ul>
                  <li>Aadhaar card</li>
                  <li>Address proof</li>
                  <li>A simple business plan</li>
                  <li>1 passport-size photo</li>
                  <li>If you already have a business: income or proof of sales</li>
                </ul>
              </li>
            </ol>
          </article>
        </div>
        <p className="loan-close">
          There is <strong>no processing fee</strong>, and you don’t need to offer anything as
          security for <strong>Shishu-level loans</strong>.
        </p>
      </Scheme>
    </div>
  )
}
