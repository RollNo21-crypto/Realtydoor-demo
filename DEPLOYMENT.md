# Deployment Guide - Reznicocare Real Estate Platform

This guide covers deploying your Next.js real estate application to various platforms.

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Environment Variables](#environment-variables)
- [Database Setup](#database-setup)
- [Platform-Specific Deployment](#platform-specific-deployment)
  - [Vercel (Recommended)](#vercel-recommended)
  - [Cloudflare Pages](#cloudflare-pages)
  - [Docker / Self-Hosted](#docker--self-hosted)
- [Post-Deployment](#post-deployment)
- [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before deploying, ensure you have:

- ✅ Node.js 18.17.0 or higher
- ✅ A production PostgreSQL database
- ✅ All required environment variables configured
- ✅ A successful local build (`npm run build`)

---

## Environment Variables

Copy `.env.production.example` to `.env.production` and fill in all required values:

### Required Variables

```bash
# Database
DATABASE_URL="postgresql://user:password@host:5432/database"

# Authentication
NEXTAUTH_SECRET="generate-with-openssl-rand-base64-32"
NEXTAUTH_URL="https://yourdomain.com"

# Application
NEXT_PUBLIC_APP_URL="https://yourdomain.com"
```

### Optional Variables

```bash
# Cloudinary (for image uploads)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=""
CLOUDINARY_API_KEY=""
CLOUDINARY_API_SECRET=""

# Email (for contact forms)
SMTP_HOST=""
SMTP_PORT="587"
SMTP_USER=""
SMTP_PASSWORD=""
SMTP_FROM="noreply@yourdomain.com"
```

### Generate Secrets

```bash
# Generate NEXTAUTH_SECRET
openssl rand -base64 32
```

---

## Database Setup

### Recommended PostgreSQL Providers

1. **[Supabase](https://supabase.com)** (Free tier available)
   - Easy setup with built-in connection pooling
   - Connection string format: `postgresql://postgres:[PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres`

2. **[Neon](https://neon.tech)** (Serverless PostgreSQL)
   - Excellent for serverless deployments
   - Connection string format: `postgresql://[user]:[password]@[endpoint].neon.tech/[dbname]`

3. **[Railway](https://railway.app)**
   - Simple deployment with PostgreSQL included
   - Connection string format: `postgresql://postgres:[PASSWORD]@[HOST]:[PORT]/railway`

### Running Migrations

After setting up your database:

```bash
# Set your DATABASE_URL
export DATABASE_URL="your-production-database-url"

# Run migrations
npm run db:migrate:deploy

# Optional: Seed the database
npm run db:seed
```

Or use the deployment script:

```bash
chmod +x prisma/deploy.sh
./prisma/deploy.sh
```

---

## Platform-Specific Deployment

### Vercel (Recommended)

Vercel is the easiest platform for deploying Next.js applications.

#### 1. Install Vercel CLI

```bash
npm install -g vercel
```

#### 2. Login to Vercel

```bash
vercel login
```

#### 3. Deploy

```bash
# First deployment
vercel

# Production deployment
vercel --prod
```

#### 4. Configure Environment Variables

In the Vercel dashboard:

1. Go to **Settings** → **Environment Variables**
2. Add all required variables from `.env.production.example`
3. Redeploy the application

#### 5. Configure Build Settings

Vercel should auto-detect Next.js. If needed, set:

- **Build Command**: `npm run build:production`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

#### Database Migrations on Vercel

Add a build script in Vercel dashboard or use the `build:production` script which automatically runs migrations.

---

### Cloudflare Pages

> **⚠️ Note**: Cloudflare Pages has limitations with PostgreSQL connections. Consider using a connection pooler (Supabase Pooler, Neon) or Cloudflare D1.

#### 1. Install Wrangler CLI

```bash
npm install -g wrangler
```

#### 2. Login to Cloudflare

```bash
wrangler login
```

#### 3. Deploy

```bash
# Build the application
npm run build

# Deploy to Cloudflare Pages
wrangler pages deploy .next
```

#### 4. Configure Environment Variables

In Cloudflare dashboard:

1. Go to **Pages** → Your project → **Settings** → **Environment variables**
2. Add all required variables

#### Database Considerations

For Cloudflare, you may need:
- **Supabase** with connection pooling enabled
- **Neon** (serverless-friendly)
- **Cloudflare D1** (SQLite alternative - requires schema migration)

---

### Docker / Self-Hosted

#### 1. Build Docker Image

```bash
npm run docker:build
```

Or manually:

```bash
docker build -t reznicocare .
```

#### 2. Run Container

```bash
# Using .env.production file
docker run -p 3000:3000 --env-file .env.production reznicocare
```

Or with docker-compose:

```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=${DATABASE_URL}
      - NEXTAUTH_SECRET=${NEXTAUTH_SECRET}
      - NEXTAUTH_URL=${NEXTAUTH_URL}
      - NEXT_PUBLIC_APP_URL=${NEXT_PUBLIC_APP_URL}
    depends_on:
      - db
  
  db:
    image: postgres:15-alpine
    environment:
      - POSTGRES_PASSWORD=yourpassword
      - POSTGRES_DB=real_estate
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

Run with:

```bash
docker-compose up -d
```

#### 3. Run Database Migrations

```bash
# Inside the container
docker exec -it <container-id> npm run db:migrate:deploy
```

---

## Post-Deployment

### 1. Verify Deployment

Check the health endpoint:

```bash
curl https://yourdomain.com/api/health
```

Expected response:
```json
{
  "status": "ok",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "uptime": 123.456
}
```

### 2. Test Key Features

- ✅ Homepage loads correctly
- ✅ Property listings display
- ✅ Search functionality works
- ✅ Authentication (login/signup)
- ✅ Images load from Unsplash/Cloudinary
- ✅ Map displays correctly (Leaflet)

### 3. Monitor Performance

- Check Vercel Analytics (if using Vercel)
- Monitor database connections
- Set up error tracking (Sentry, LogRocket, etc.)

### 4. Set Up Custom Domain

#### Vercel
1. Go to **Settings** → **Domains**
2. Add your custom domain
3. Configure DNS records as instructed

#### Cloudflare Pages
1. Go to **Custom domains**
2. Add your domain
3. Update DNS records

---

## Troubleshooting

### Build Failures

**Issue**: `Prisma Client not generated`

```bash
# Solution: Ensure postinstall script runs
npm run db:generate
```

**Issue**: `Module not found` errors

```bash
# Solution: Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

### Database Connection Issues

**Issue**: `Can't reach database server`

- ✅ Verify `DATABASE_URL` is correct
- ✅ Check database is running and accessible
- ✅ Ensure IP whitelist includes your deployment platform
- ✅ For serverless: Use connection pooling (Supabase Pooler, PgBouncer)

**Issue**: `Too many connections`

- Use connection pooling
- Reduce `connection_limit` in DATABASE_URL:
  ```
  postgresql://user:pass@host:5432/db?connection_limit=5
  ```

### Authentication Issues

**Issue**: `Invalid NEXTAUTH_URL`

- Ensure `NEXTAUTH_URL` matches your production domain
- No trailing slash
- Use `https://` in production

**Issue**: `Session not persisting`

- Verify `NEXTAUTH_SECRET` is set and consistent
- Check cookie settings in `lib/auth.ts`

### Image Loading Issues

**Issue**: Images not loading

- Verify image domains are in `next.config.mjs` → `images.remotePatterns`
- Check Cloudinary credentials if using image uploads

### Performance Issues

**Issue**: Slow page loads

- Enable caching headers (already configured in `next.config.mjs`)
- Use CDN for static assets
- Optimize images (already using AVIF/WebP)
- Consider adding Redis for session storage

---

## Additional Resources

- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Prisma Deployment Guide](https://www.prisma.io/docs/guides/deployment)
- [PostgreSQL Connection Pooling](https://www.prisma.io/docs/guides/performance-and-optimization/connection-management)

---

## Support

For issues specific to this application, please check:
- Application logs in your deployment platform
- Database logs
- Browser console for client-side errors

**Need help?** Contact your development team or create an issue in the project repository.
