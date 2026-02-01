# Next.js Real Estate Template

A comprehensive, production-ready Next.js 14 template for real estate websites featuring server-side rendering, PostgreSQL database integration, authentication, and a premium user interface.

![Next.js](https://img.shields.io/badge/Next.js-14%2B-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC)

## ✨ Features

### Core Functionality
- 🏠 **Property Listings** - Browse and search premium properties with advanced filtering
- 🔍 **Server-Side Rendering** - Fast, SEO-friendly pages built with Next.js App Router
- 🖼️ **Image Optimization** - Automatic optimization with Next.js Image component
- 📱 **Responsive Design** - Beautiful UI that works on all devices
- 🎨 **Premium Aesthetics** - Glassmorphism effects, smooth animations, and modern typography

### Authentication & Authorization
- 🔐 **NextAuth.js v5** - Secure authentication with credentials provider
- 👥 **Role-Based Access** - Support for User, Agent, and Admin roles
- 🛡️ **Protected Routes** - Middleware-based route protection
- 📧 **Session Management** - JWT-based sessions with role information

### Database & API
- 🗄️ **PostgreSQL** - Robust relational database with Prisma ORM
- 🔄 **CRUD Operations** - Complete API routes for properties, users, and inquiries
- ✅ **Validation** - Zod schemas for type-safe data validation
- 🐳 **Docker Support** - Local PostgreSQL setup with Docker Compose

### UI Components
- 🎯 **shadcn/ui** - Pre-configured component library
- 🎠 **Image Carousels** - Property image galleries with Embla Carousel
- 📝 **Forms** - React Hook Form with Zod validation
- 🎨 **Theming** - CSS variables for easy customization

## 🚀 Quick Start

### Prerequisites
- Node.js 18.17 or later
- PostgreSQL database (or use Docker)
- pnpm, npm, or yarn

### Installation

1. **Clone the repository**
   ```bash
   cd reznicocare
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Update `.env` with your database credentials and secrets:
   ```env
   DATABASE_URL="postgresql://postgres:password@localhost:5432/real_estate"
   NEXTAUTH_SECRET="your-secret-here"
   NEXTAUTH_URL="http://localhost:3000"
   ```

4. **Start PostgreSQL (using Docker)**
   ```bash
   docker-compose up -d
   ```

5. **Run database migrations**
   ```bash
   npm run db:migrate
   ```

6. **Seed the database (optional)**
   ```bash
   npm run db:seed
   ```

7. **Start the development server**
   ```bash
   npm run dev
   ```

8. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
reznicocare/
├── app/                          # Next.js App Router
│   ├── api/                      # API routes
│   │   ├── auth/[...nextauth]/   # NextAuth handlers
│   │   ├── properties/           # Properties API
│   │   └── inquiries/            # Contact form API
│   ├── properties/               # Property pages
│   │   ├── [id]/                 # Property detail page
│   │   └── page.tsx              # Property listing page
│   ├── login/                    # Authentication pages
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Homepage
│   └── globals.css               # Global styles
├── components/                   # React components
│   ├── ui/                       # shadcn/ui components
│   ├── property-card.tsx         # Property card component
│   ├── contact-form.tsx          # Contact form component
│   ├── navigation.tsx            # Navigation component
│   └── footer.tsx                # Footer component
├── lib/                          # Utilities and configs
│   ├── auth.ts                   # NextAuth configuration
│   ├── prisma.ts                 # Prisma client
│   ├── utils.ts                  # Utility functions
│   └── validations/              # Zod schemas
├── prisma/                       # Database
│   ├── schema.prisma             # Database schema
│   └── seed.ts                   # Seed script
├── public/                       # Static assets
├── middleware.ts                 # Route protection
└── next.config.mjs               # Next.js configuration
```

## 🗄️ Database Schema

### Models
- **User** - User accounts with role-based access (USER, AGENT, ADMIN)
- **Property** - Property listings with full details and location
- **PropertyImage** - Multiple images per property with ordering
- **Favorite** - User bookmarks for properties
- **Inquiry** - Contact form submissions

### Relationships
- Users can create properties (agents/admins)
- Properties have multiple images
- Users can favorite properties
- Users can submit inquiries for properties

## 🎨 Customization

### Theme Colors
Edit `tailwind.config.ts` to customize the color scheme:
```typescript
colors: {
  gold: '#C5A059',           // Primary accent color
  'bg-light': '#F9F8F6',     // Light background
  'bg-dark': '#0F1112',      // Dark background
}
```

### Fonts
The template uses Google Fonts (Playfair Display + Inter). Configure in `app/layout.tsx`.

## 📝 Demo Credentials

After seeding the database, use these credentials to test:

**Agent Account**
- Email: `agent@realestate.com`
- Password: `agent123`

**Admin Account**
- Email: `admin@realestate.com`
- Password: `admin123`

## 🧪 Testing

### Unit Tests (Jest)
```bash
npm test
```

### E2E Tests (Playwright)
```bash
npm run test:e2e
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import the repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Environment Variables for Production
- `DATABASE_URL` - PostgreSQL connection string
- `NEXTAUTH_SECRET` - Generate with `openssl rand -base64 32`
- `NEXTAUTH_URL` - Your production URL

## 📦 Built With

- [Next.js 14](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Prisma](https://www.prisma.io/) - Database ORM
- [NextAuth.js](https://next-auth.js.org/) - Authentication
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Zod](https://zod.dev/) - Schema validation
- [React Hook Form](https://react-hook-form.com/) - Form handling
- [Embla Carousel](https://www.embla-carousel.com/) - Image carousels

## 📄 License

This project is provided as a template for educational and commercial use.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Support

For support, email support@example.com or open an issue.

---

Built with ❤️ using Next.js 14
