#!/bin/bash
# Production database migration deployment script

set -e

echo "🚀 Starting database migration deployment..."

# Check if DATABASE_URL is set
if [ -z "$DATABASE_URL" ]; then
    echo "❌ ERROR: DATABASE_URL environment variable is not set"
    exit 1
fi

echo "✅ DATABASE_URL is configured"

# Generate Prisma Client
echo "📦 Generating Prisma Client..."
npx prisma generate

# Run migrations
echo "🔄 Running database migrations..."
npx prisma migrate deploy

echo "✅ Database migrations completed successfully!"

# Optional: Seed database (uncomment if needed)
# echo "🌱 Seeding database..."
# npm run db:seed

echo "🎉 Deployment preparation complete!"
