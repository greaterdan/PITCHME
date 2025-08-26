# Deployment Checklist

## 🚀 Quick Deployment Guide

### 1. Google Cloud Console Setup
- [ ] Go to [Google Cloud Console](https://console.cloud.google.com/)
- [ ] Navigate to **APIs & Services** → **Credentials**
- [ ] Edit your OAuth 2.0 Client ID
- [ ] Add redirect URIs:
  ```
  http://localhost:3000/api/auth/callback/google
  http://localhost:3001/api/auth/callback/google
  https://your-domain.vercel.app/api/auth/callback/google
  https://your-domain.netlify.app/api/auth/callback/google
  ```

### 2. Vercel Deployment
- [ ] Connect GitHub repo to Vercel
- [ ] Add environment variables:
  ```
  GOOGLE_CLIENT_ID=your-google-client-id-here
  GOOGLE_CLIENT_SECRET=your-google-client-secret-here
  NEXTAUTH_URL=https://your-domain.vercel.app
  NEXTAUTH_SECRET=your-super-secret-key-change-this-in-production
  ```
- [ ] Deploy

### 3. Netlify Deployment
- [ ] Connect GitHub repo to Netlify
- [ ] Add same environment variables
- [ ] Deploy

### 4. Test OAuth
- [ ] Test Google sign-in on production
- [ ] Verify redirect works correctly
- [ ] Check for any console errors

## 🔧 Environment Variables Reference

```env
# Development
GOOGLE_CLIENT_ID=your-google-client-id-here
GOOGLE_CLIENT_SECRET=your-google-client-secret-here
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-super-secret-key-change-this-in-production

# Production (replace with your domain)
GOOGLE_CLIENT_ID=your-google-client-id-here
GOOGLE_CLIENT_SECRET=your-google-client-secret-here
NEXTAUTH_URL=https://your-domain.vercel.app
NEXTAUTH_SECRET=your-super-secret-key-change-this-in-production
```

## 🐛 Common Issues & Solutions

1. **"redirect_uri_mismatch"**
   - Solution: Add exact production URL to Google Cloud Console

2. **"Invalid client"**
   - Solution: Check GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET

3. **"NEXTAUTH_URL mismatch"**
   - Solution: Ensure NEXTAUTH_URL matches your production domain exactly

4. **Environment variables not loading**
   - Solution: Restart deployment after adding variables
