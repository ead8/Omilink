# Omilink

**Omilink** is a link-in-bio app: one page for your socials, dev profiles, tips, and contact links. Built with **Next.js**, **shadcn/ui**, **Clerk**, and **MongoDB**.

## Preview

- **Homepage** — marketing / sign-in entry  
- **User page** — `yoursite.com/{username}` with your links  

(Add screenshots under `public/assets/` if you want images in this README.)

## Features

- **Profile** — Username, name, bio, avatar (via Clerk).
- **Many link types** — Social, professional (incl. dev platforms), creative, messaging, storefront, misc.
- **Private links** — Optional access key for sensitive misc links.
- **Responsive** — Works on mobile and desktop.

## Tech stack

- Next.js (App Router) · React  
- shadcn/ui · Tailwind  
- Clerk · MongoDB / Mongoose  

## Installation

1. Clone this repo (use **your** fork URL when you publish it):  
   `git clone https://github.com/<your-username>/omilink.git`
2. Install: `npm install` or `pnpm install`
3. Create a MongoDB database and copy the connection string.
4. Create a Clerk app and copy the API keys.
5. Copy `.env.example` → `.env.local` and fill variables.
6. Run: `npm run dev` → [http://localhost:3000](http://localhost:3000)

## Usage

1. Sign up or sign in.
2. Open **Dashboard → Manage**, set username, bio, and links.
3. **Publish** your page.
4. Share `yoursite.com/<username>`.

## Contributing

PRs and issues are welcome. Upstream ideas can also go to [MySocials](https://github.com/r2hu1/MySocials).

## License

GPL-3.0 — see [LICENCE.md](./LICENCE.md) (inherited from upstream).

## Support

Open an issue on this repo or contact the maintainer of your fork.

Thanks for using **Omilink**.
