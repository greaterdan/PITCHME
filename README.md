# PitchMe.dev

A modern landing page for building businesses instantly.

## Setup

### Local Development

1. Install dependencies:
```bash
npm install
```

2. Create a `.env.local` file in the root directory with your Google OAuth credentials:
```env
GOOGLE_CLIENT_ID=your-google-client-id-here
GOOGLE_CLIENT_SECRET=your-google-client-secret-here
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here
```

3. Run the development server:
```bash
npm run dev
```

### Production Deployment

#### Vercel Deployment

1. **Connect to Vercel:**
   - Go to [Vercel](https://vercel.com)
   - Import your GitHub repository
   - Deploy

2. **Add Environment Variables in Vercel:**
   - Go to your project dashboard
   - Navigate to **Settings** → **Environment Variables**
   - Add these variables:
   ```env
   GOOGLE_CLIENT_ID=your-google-client-id-here
   GOOGLE_CLIENT_SECRET=your-google-client-secret-here
   NEXTAUTH_URL=https://your-domain.vercel.app
   NEXTAUTH_SECRET=your-super-secret-key-change-this-in-production
   ```

3. **Update Google Cloud Console:**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Navigate to **APIs & Services** → **Credentials**
   - Edit your OAuth 2.0 Client ID
   - Add to **Authorized redirect URIs**:
   ```
   https://your-domain.vercel.app/api/auth/callback/google
   ```

#### Netlify Deployment

1. **Connect to Netlify:**
   - Go to [Netlify](https://netlify.com)
   - Import your GitHub repository
   - Deploy

2. **Add Environment Variables in Netlify:**
   - Go to your site dashboard
   - Navigate to **Site settings** → **Environment variables**
   - Add the same variables as above

3. **Update Google Cloud Console:**
   - Add to **Authorized redirect URIs**:
   ```
   https://your-domain.netlify.app/api/auth/callback/google
   ```

## Features

- Modern landing page with animated gradient background
- Interactive chatbox with animated text
- Google OAuth authentication
- Responsive design
- Next.js 14 with App Router
- Tailwind CSS styling
- Framer Motion animations

## Google OAuth Setup

The application uses NextAuth.js for Google OAuth authentication. Make sure to:

1. **Configure your Google OAuth credentials in the Google Cloud Console**
2. **Add the credentials to your environment variables**
3. **Set the authorized redirect URIs in Google Cloud Console:**
   - For local development: `http://localhost:3000/api/auth/callback/google`
   - For production: `https://your-domain.com/api/auth/callback/google`

### Troubleshooting

- **"redirect_uri_mismatch" error:** Make sure your redirect URI in Google Cloud Console matches exactly with your deployment URL
- **Environment variables not loading:** Restart your development server after adding `.env.local`
- **Production OAuth not working:** Verify your `NEXTAUTH_URL` matches your production domain exactly
