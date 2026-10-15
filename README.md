# SHEbuilds

Digital business starter kit website for women entrepreneurs in underprivileged and rural communities across India.

Built with **Next.js** and **Payload CMS 3** (SQLite).

## Quick start

```bash
pnpm install
pnpm seed    # creates admin user + migrates Notion resource content
pnpm dev
```

- Site: [http://localhost:3000](http://localhost:3000)
- Admin: [http://localhost:3000/admin](http://localhost:3000/admin)

### Default admin (local)

After `pnpm seed`:

- Email: `admin@shebuilds.local`
- Password: `shebuilds-admin`

Change this password after first login.

## Pages

| Route | Description |
| --- | --- |
| `/` | Home — mission, resource CTAs, partner section |
| `/resources` | Resource hub |
| `/resources/[slug]` | Starter guide, finance, branding, loan schemes |
| `/blog` | Student articles (managed in Payload) |
| `/gallery` | Workshop photos & videos (managed in Payload) |
| `/admin` | Payload CMS |

## Managing content

1. Open `/admin` and sign in.
2. **Resources** — edit markdown for guides/templates/schemes.
3. **Posts** — write blog articles; set status to **Published**.
4. **Gallery** — upload image/video media, add title/caption/event date.
5. **Media** — shared uploads for posts and gallery.

## Environment

Copy `.env.example` to `.env`:

```bash
DATABASE_URL=file:./data/shebuilds.db
PAYLOAD_SECRET=your-long-random-secret
```

## Brand assets

Logo and section imagery live in `public/brand/`.
