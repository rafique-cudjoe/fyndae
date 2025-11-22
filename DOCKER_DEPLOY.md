# Docker Deployment Guide

This project is configured for easy deployment with Docker and Nginx, optimized for Coolify.

## Quick Start

### Using Docker Compose (Development)

```bash
# Build and start the services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

### Using Single Dockerfile (Production/Coolify)

```bash
# Build the image
docker build -t fyndae-app .

# Run the container
docker run -p 80:80 -e NODE_ENV=production fyndae-app
```

## Coolify Deployment

### Setup Instructions

1. **Create a new service in Coolify**
   - Choose "Docker Compose" or "Dockerfile" deployment
   - Connect your Git repository

2. **Configure Environment Variables**
   - Copy values from `.env.example`
   - Set `NODE_ENV=production`
   - Set `PORT=3000`

3. **Port Configuration**
   - The app exposes port 80 (Nginx)
   - Node.js backend runs on port 3000 internally
   - Coolify will automatically map to your domain

4. **Health Check**
   - Endpoint: `/health`
   - Expected response: `{"status":"ok","timestamp":"..."}`

### Architecture

- **Nginx**: Serves static files and proxies API requests
- **Node.js**: Handles backend API routes
- Both services run in a single container for simplicity

### Static Files
- Frontend: Served by Nginx from `/usr/share/nginx/html`
- Backend API: Proxied to Node.js on port 3000

### API Routes
All requests to `/api/*` are proxied to the Node.js backend.

## Local Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## Environment Variables

Required environment variables:
- `PORT`: Server port (default: 3000)
- `NODE_ENV`: Environment mode (development/production)

See `.env.example` for all available options.

## Troubleshooting

### Container won't start
- Check logs: `docker logs <container_id>`
- Verify environment variables are set
- Ensure port 80 is available

### API requests failing
- Check Nginx configuration in `nginx.conf`
- Verify backend is running: `curl http://localhost:3000/health`
- Check network connectivity between services

### Build fails
- Clear Docker cache: `docker builder prune`
- Check Node.js version compatibility (requires Node 20+)
- Verify all dependencies in package.json
