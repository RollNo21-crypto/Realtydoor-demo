# Quick Deployment Guide - Reznicocare (Static Site)

This application is configured as a **static Next.js site with API routes** using mock data. No database setup required!

## 🚀 Deploy to Vercel (Recommended - 2 Minutes)

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Push your code to GitHub/GitLab/Bitbucket**

2. **Go to [Vercel](https://vercel.com)**
   - Sign in with your Git provider
   - Click "Add New Project"
   - Import your repository

3. **Configure Project**
   - Framework Preset: **Next.js** (auto-detected)
   - Build Command: `npm run build`
   - Output Directory: `.next` (auto-detected)

4. **Add Environment Variables** (Optional)
   ```
   NEXTAUTH_SECRET=your-secret-here
   NEXTAUTH_URL=https://your-domain.vercel.app
   NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
   ```
   
   Generate secret:
   ```bash
   openssl rand -base64 32
   ```

5. **Click Deploy** 🎉

Your site will be live at `https://your-project.vercel.app` in ~2 minutes!

---

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

---

## 📝 Environment Variables (Optional)

Only needed if you want authentication or custom features:

```bash
# Authentication (optional)
NEXTAUTH_SECRET="generate-with-openssl-rand-base64-32"
NEXTAUTH_URL="https://yourdomain.vercel.app"

# Application URL
NEXT_PUBLIC_APP_URL="https://yourdomain.vercel.app"

# Cloudinary (optional - for image uploads)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=""
CLOUDINARY_API_KEY=""
CLOUDINARY_API_SECRET=""
```

Set these in Vercel Dashboard:
- Go to **Settings** → **Environment Variables**
- Add each variable
- Redeploy

---

## ✅ Post-Deployment Checklist

1. **Test the deployment**
   - Visit your Vercel URL
   - Check homepage loads
   - Test property listings
   - Verify search works
   - Test navigation

2. **Custom Domain (Optional)**
   - Go to **Settings** → **Domains**
   - Add your custom domain
   - Update DNS records as instructed
   - Update `NEXTAUTH_URL` and `NEXT_PUBLIC_APP_URL` to use your domain

3. **Performance**
   - Your site is already optimized with:
     - ✅ Image optimization (AVIF/WebP)
     - ✅ Security headers
     - ✅ Compression
     - ✅ Static generation where possible

---

## 🔧 Troubleshooting

### Build Fails

**Issue**: TypeScript errors
```bash
# Run locally first
npm run type-check
npm run build
```

**Issue**: Missing dependencies
```bash
npm install
```

### Images Not Loading

- Verify `next.config.mjs` has correct image domains
- Check Unsplash images are accessible

### Authentication Issues

- Ensure `NEXTAUTH_SECRET` is set
- Verify `NEXTAUTH_URL` matches your deployment URL (no trailing slash)

---

## 📊 What's Deployed

Your deployment includes:
- ✅ Static pages (homepage, properties, about, etc.)
- ✅ API routes (health check, mock data endpoints)
- ✅ Mock property data (from `lib/mock-data.ts`)
- ✅ Image optimization
- ✅ Security headers
- ✅ SEO optimization

**No database required** - all data is served from mock files!

---

## 🔄 Future: Adding a Database

When you're ready to add a real database:

1. Set up PostgreSQL (Supabase, Neon, Railway)
2. Add `DATABASE_URL` environment variable
3. Run migrations: `npm run db:migrate:deploy`
4. Update API routes to use Prisma instead of mock data

See `DEPLOYMENT_FULL.md` for complete database deployment guide.

---

## 📚 Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel CLI Reference](https://vercel.com/docs/cli)

---

**Need help?** Check the [Vercel Support](https://vercel.com/support) or review build logs in your Vercel dashboard.
