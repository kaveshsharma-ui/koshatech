This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Email Configuration (Contact Form)

The contact form is configured to use **Hostinger SMTP** settings. To configure:

1. Create a `.env.local` file in the root directory
2. Add the following environment variables:

```env
# Hostinger SMTP Settings
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=sales@koshatech.com
SMTP_PASSWORD=your_email_password

# reCAPTCHA Configuration
RECAPTCHA_SECRET_KEY=your-recaptcha-secret-key
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your-recaptcha-site-key
```

**Important:** Replace `your_email_password` with the actual password for `sales@koshatech.com`.

### Hostinger SMTP Details:
- **SMTP Host:** `smtp.hostinger.com`
- **SMTP Port:** `465` (SSL)
- **SMTP Secure:** `true`
- **Email:** `sales@koshatech.com`
- **Password:** Your email account password (get from Hostinger hPanel)

The form will send emails to `sales@koshatech.com` when submissions are received.
