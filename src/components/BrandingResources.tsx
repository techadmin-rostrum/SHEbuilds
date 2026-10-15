export function BrandingResources() {
  return (
    <div className="brand">
      <div className="brand-intro">
        <p>Create a simple, strong look for your business that people will remember and trust.</p>
        <p>
          Branding means how your business <strong>looks</strong>, <strong>sounds</strong>, and{' '}
          <strong>feels</strong> to others. It includes your name, logo, colours and message. A good
          brand helps customers remember you, trust you, and come back.
        </p>
        <p>Your brand shows:</p>
        <ul className="brand-points">
          <li>Who you are</li>
          <li>What you do</li>
          <li>What makes your work special (like handmade, local, honest, women-led)</li>
        </ul>
        <p>To help you build your brand, follow the resources on setting up your brand below.</p>
      </div>

      <section id="business-name" className="brand-section">
        <h2>Business Name Toolkit</h2>
        <p className="brand-lead">
          Your business name is the first thing people see. It should be simple, easy to remember,
          and show what you do.
        </p>

        <h3>Naming tips</h3>
        <div className="brand-grid brand-grid--4">
          <article className="brand-card">
            <p>
              Easy to <strong>spell and say</strong>.
            </p>
          </article>
          <article className="brand-card">
            <p>
              Shows <strong>what you do</strong> or <strong>what makes you unique</strong>.
            </p>
          </article>
          <article className="brand-card">
            <p>
              Short and <strong>memorable</strong>.
            </p>
          </article>
          <article className="brand-card">
            <p>
              Feels <strong>personal or local</strong>.
            </p>
          </article>
        </div>

        <h3>Brainstorming prompts</h3>
        <p className="brand-note">Write your answers below — these will help you find the right name.</p>
        <div className="brand-grid brand-grid--2">
          <article className="brand-card brand-card--blush">
            <p>What do you sell?</p>
            <p className="brand-example">Example: bangles, pickles, embroidery work</p>
          </article>
          <article className="brand-card brand-card--blush">
            <p>Where do you live or what is your community known for?</p>
            <p className="brand-example">Example: Rajgrah village, mangoes, hand embroidery</p>
          </article>
          <article className="brand-card brand-card--blush">
            <p>
              What are some special words in your language that mean “beauty”, “power” or “trust”?
            </p>
            <p className="brand-example">Example: Shakti (power), Sundar (beautiful)</p>
          </article>
          <article className="brand-card brand-card--blush">
            <p>Do you want to include your name or your daughter’s name?</p>
            <p className="brand-example">Example: “Rekha’s Creations” or “Asha Threads”</p>
          </article>
        </div>

        <h3>Brainstorming template</h3>
        <div className="brand-table">
          <table>
            <thead>
              <tr>
                <th>Idea number</th>
                <th>Business name idea</th>
                <th>Why I like it</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3].map((number) => (
                <tr key={number}>
                  <td>{number}</td>
                  <td className="brand-blank" />
                  <td className="brand-blank" />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="brand-close">Ask friends or customers which one they like best.</p>
      </section>

      <section id="logo" className="brand-section">
        <h2>Making a Logo</h2>
        <p className="brand-lead">
          A logo is a <strong>small picture or design</strong> that represents your business. You can
          draw it by hand or make it on apps like <strong>Canva or LogoAI</strong>.
        </p>

        <h3>3 easy logo options</h3>
        <div className="brand-grid brand-grid--3">
          <article className="brand-card">
            <h3>Text logo</h3>
            <p>Just your business name in nice letters.</p>
            <p className="brand-example">Example: SHAKTI THREADS</p>
          </article>
          <article className="brand-card">
            <h3>Symbol + text</h3>
            <p>Add a small icon or symbol.</p>
            <p className="brand-example">Example: a flower + “Sundari Soaps”</p>
          </article>
          <article className="brand-card">
            <h3>Drawing logo</h3>
            <p>A hand-drawn picture of what you sell.</p>
            <p className="brand-example">Example: a sketch of a saree, pickle jar, or scissors</p>
          </article>
        </div>

        <div className="brand-grid brand-grid--2">
          <article className="brand-card brand-card--blush">
            <h3>Free tools</h3>
            <ul>
              <li>
                <a href="https://www.canva.com" target="_blank" rel="noreferrer">
                  www.canva.com
                </a>{' '}
                — choose a “Logo” template and start creating.
              </li>
              <li>
                <a href="https://www.logoai.com" target="_blank" rel="noreferrer">
                  www.logoai.com
                </a>{' '}
                — type your business name and it creates options for you.
              </li>
            </ul>
          </article>
          <article className="brand-card brand-card--blush">
            <h3>Logo ideas</h3>
            <ul>
              <li>A flower, leaf, or item related to your product</li>
              <li>Your name in beautiful writing</li>
              <li>A colour background with a simple symbol</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="mood-board" className="brand-section">
        <h2>Create a Mood Board</h2>
        <p className="brand-lead">
          A mood board helps you decide your <strong>business style</strong> and shows the look and
          feel of your business.
        </p>

        <h3>It includes</h3>
        <div className="brand-grid brand-grid--3">
          <article className="brand-card">
            <p>
              Your brand <strong>colours</strong>
            </p>
          </article>
          <article className="brand-card">
            <p>
              <strong>Fonts</strong> (letter style)
            </p>
          </article>
          <article className="brand-card">
            <p>
              <strong>Images or feelings</strong> — local, traditional, modern, fun, calm, and more
            </p>
          </article>
        </div>

        <h3>Steps</h3>
        <div className="brand-stack">
          <article className="brand-card brand-card--blush">
            <h3>1. Colour</h3>
            <p>
              Choose 3 colours that match your product (for example, pink for beauty, green for
              natural products).
            </p>
            <ul>
              <li>
                Main colour (biggest colour): <span className="brand-line" />
              </li>
              <li>
                Second colour: <span className="brand-line" />
              </li>
              <li>
                Extra colour: <span className="brand-line" />
              </li>
            </ul>
            <p className="brand-example">Example: Main — Red. Second — Gold. Extra — Cream.</p>
          </article>
          <article className="brand-card brand-card--blush">
            <h3>2. Font</h3>
            <p>Try big or small letters, bold, elegant, handwriting, and more.</p>
          </article>
          <article className="brand-card brand-card--blush">
            <h3>3. Images</h3>
            <p>Collect photos or patterns that inspire you, such as:</p>
            <ul>
              <li>Fabric swatches</li>
              <li>Pictures of your work</li>
              <li>Designs you like from market stalls</li>
            </ul>
          </article>
          <article className="brand-card brand-card--blush">
            <h3>4. Feelings</h3>
            <p>Words like “clean”, “warm”, “handmade”.</p>
          </article>
        </div>
        <p className="brand-close">Use your notebook to draw or paste mood board ideas.</p>
      </section>

      <section id="brand-story" className="brand-section">
        <h2>Sharing Your Brand Story</h2>
        <p className="brand-lead">
          People love to know the story behind your business. Your story helps customers trust you
          and feel proud to support your business.
        </p>

        <h3>Prompts to write your brand story</h3>
        <p className="brand-note">Write short, simple answers.</p>
        <div className="brand-grid brand-grid--3">
          <article className="brand-card">
            <p>Why did you start this business?</p>
            <p className="brand-example">
              Example: I wanted to earn my own money and help my children.
            </p>
          </article>
          <article className="brand-card">
            <p>What do you care about the most?</p>
            <p className="brand-example">Example: quality, tradition, hygiene, handmade skills.</p>
          </article>
          <article className="brand-card">
            <p>What makes your work special?</p>
            <p className="brand-example">
              Example: made at home, uses family recipes, made with love.
            </p>
          </article>
        </div>

        <h3>Write 3 lines to tell your story</h3>
        <div className="brand-lines" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </section>

      <section id="touchpoints" className="brand-section">
        <h2>Customer Touchpoints Checklist</h2>
        <p className="brand-lead">
          Whenever a customer sees or touches your product, they are building a memory of your
          business. This is called a “touchpoint”. If your brand (name, colours, logo, and more) is
          always visible and consistent, people remember you, trust you more, and are more likely to
          come back.
        </p>

        <h3>Small tips</h3>
        <div className="brand-grid brand-grid--2">
          <article className="brand-card">
            <p>
              <strong>Use one colour theme everywhere</strong> — like pink ribbons wherever
              possible.
            </p>
          </article>
          <article className="brand-card">
            <p>
              <strong>Make it feel personal</strong> — a handwritten name with care helps people
              feel connected.
            </p>
          </article>
        </div>

        <h3>Where to show your brand</h3>
        <div className="brand-table">
          <table>
            <thead>
              <tr>
                <th>Where</th>
                <th>What you can do</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Product packaging</td>
                <td>
                  Write your name or logo on a paper label or sticker. Use a rubber stamp. If you
                  sell in pouches or jars, tie a thread or ribbon in your brand colour.
                </td>
              </tr>
              <tr>
                <td>Price boards or menus</td>
                <td>
                  Write your business name at the top of your price list. Use your brand colours
                  (the same pen or paper colour). Add a hand-drawn logo or border.
                </td>
              </tr>
              <tr>
                <td>WhatsApp profile</td>
                <td>
                  Set your logo or a product photo with your name as your profile picture. Add your
                  business name in the bio.
                </td>
              </tr>
              <tr>
                <td>WhatsApp status and messages</td>
                <td>
                  When you post a photo or message, add your logo, slogan, or brand colour in the
                  image or text. Example: Rani’s Mehendi — Safe. Natural. Beautiful.
                </td>
              </tr>
              <tr>
                <td>Stalls or display tables</td>
                <td>
                  Use a cloth in your brand colour. Add a small board with your name. Print or draw
                  a sign and hang it with tape or clips. Handwriting works.
                </td>
              </tr>
              <tr>
                <td>Thank-you notes and business cards</td>
                <td>
                  On a paper slip, write your business name, contact number, and a thank-you line
                  like “Thank you for supporting my small business!” Add a simple logo or sketch.
                </td>
              </tr>
              <tr>
                <td>Bags, tags and receipts</td>
                <td>
                  If you pack items in paper bags, stamp or write your name or logo on them. Add a
                  small tag with the price or care instructions in your brand colours. If you use
                  bills, draw your logo on top.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="feedback" className="brand-section">
        <h2>Getting Feedback</h2>
        <p className="brand-lead">
          You don’t have to guess if your name or logo is good. Asking others helps you make smart
          choices before printing signs or packaging. People around you — neighbours, family, and
          early customers — can give advice that makes your brand stronger.
        </p>

        <h3>Who to ask</h3>
        <div className="brand-grid brand-grid--4">
          <article className="brand-card">
            <p>A regular customer</p>
          </article>
          <article className="brand-card">
            <p>A trusted neighbour or friend</p>
          </article>
          <article className="brand-card">
            <p>A teenager or student who uses their phone a lot</p>
          </article>
          <article className="brand-card">
            <p>A local seller</p>
          </article>
        </div>

        <div className="brand-grid brand-grid--2">
          <article className="brand-card brand-card--blush">
            <h3>What to ask them</h3>
            <p>Print or show them your name, logo, or mood board, and ask:</p>
            <ul>
              <li>“When you see this name, what do you think I sell?”</li>
              <li>“Is this logo clear and easy to understand?”</li>
              <li>“Does it look nice to you?”</li>
              <li>“Would you buy something from someone with this look?”</li>
            </ul>
          </article>
          <article className="brand-card brand-card--blush">
            <h3>What to listen for</h3>
            <ul>
              <li>If they look confused, your logo might need to be clearer.</li>
              <li>If they don’t understand the name, try something simpler.</li>
              <li>If they smile or nod, that’s a great sign.</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="record" className="brand-section">
        <h2>Keeping a Record</h2>
        <p className="brand-lead">
          Your brand is part of your identity. Keep your brand pieces in one place so they stay
          organised.
        </p>

        <h3>Where to keep it</h3>
        <div className="brand-grid brand-grid--4">
          <article className="brand-card">
            <p>
              A <strong>physical folder</strong>
            </p>
          </article>
          <article className="brand-card">
            <p>
              A <strong>notebook</strong>
            </p>
          </article>
          <article className="brand-card">
            <p>
              A <strong>photo gallery on your phone</strong>
            </p>
          </article>
          <article className="brand-card">
            <p>
              A <strong>small box</strong> for packaging samples
            </p>
          </article>
        </div>

        <h3>What to keep inside</h3>
        <ul className="brand-checks">
          <li>Final business name</li>
          <li>Logo sketch or screenshot</li>
          <li>Mood board or colour samples</li>
          <li>Example of packaging or a tag</li>
          <li>Any customer feedback</li>
          <li>Notes or ideas for the future</li>
        </ul>
      </section>
    </div>
  )
}
