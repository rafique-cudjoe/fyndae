# Docker Deployment Guide for Coolify

This project uses a **single Docker container** that runs both Nginx and Node.js.

## Quick Start

### Build and Run Locally

```bash
# Build the image
docker build -t fyndae-app .

# Run the container
docker run -d -p 80:80 \
  -e NODE_ENV=production \
  -e PORT=3000 \
  --name fyndae-app \
  fyndae-app

# View logs
docker logs -f fyndae-app

# Stop and remove
docker stop fyndae-app && docker rm fyndae-app
```

## Coolify Deployment

### Step-by-Step Setup

1. **Create New Service in Coolify**
   - Go to your Coolify dashboard
   - Click "New Resource" → "Service"
   - Choose "Dockerfile" deployment type
   - Connect repository: `git@github.com:Spaco1993/fyndae-FE.git`
   - Branch: `main`

2. **Environment Variables**
   
   Add these in Coolify's environment section:
   ```
   NODE_ENV=production
   PORT=3000
   ```
   
   Add other variables from `.env.example` as needed.

3. **Port Configuration**
   - **Exposed Port**: 80
   - Coolify will automatically map this to your domain
   - No need to configure internal ports

4. **Health Check** (Recommended)
   - Enable health checks in Coolify
   - Path: `/health`
   - Expected response: `{"status":"ok"}`
   - Interval: 30 seconds
   - Timeout: 5 seconds
   - Retries: 3

5. **Deploy**
   - Click "Deploy" button
   - Watch the build logs
   - Your app will be live at your configured domain

### How It Works

**Single Container Architecture:**

```
┌─────────────────────────────────────┐
│         Docker Container            │
│                                     │
│  ┌──────────────────────────────┐  │
│  │  Nginx (Port 80)             │  │
│  │  - Serves React static files │  │
│  │  - Proxies /api/* to Node.js │  │
│  └──────────────────────────────┘  │
│              ↓                      │
│  ┌──────────────────────────────┐  │
│  │  Node.js (Port 3000)         │  │
│  │  - Handles API routes        │  │
│  │  - Backend logic             │  │
│  └──────────────────────────────┘  │
│                                     │
└─────────────────────────────────────┘
```

**Traffic Flow:**
1. User requests → Nginx (port 80)
2. Static files (HTML, CSS, JS) → Served directly by Nginx
3. API requests (`/api/*`) → Proxied to Node.js on port 3000
4. All other routes → React app (for client-side routing)

## Testing Deployment

After deployment, test these endpoints:

```bash
# Health check
curl https://your-domain.com/health

# API endpoint
curl https://your-domain.com/api/ping

# Frontend (should return HTML)
curl https://your-domain.com
```

## Local Development

Development doesn't use Docker:

```bash
# Install dependencies
pnpm install

# Run dev server (Vite + Express)
pnpm dev

# Build for production
pnpm build

# Test production build locally
pnpm start
```

## Environment Variables

Create a `.env` file based on `.env.example`:

```bash
# Required
NODE_ENV=production
PORT=3000

# Optional - Add your custom variables
PING_MESSAGE=pong
```

## Troubleshooting

### Build Fails

**Issue**: Docker build fails during pnpm install
```bash
# Solution: Clear Docker cache
docker builder prune -a

# Rebuild
docker build --no-cache -t fyndae-app .
```

**Issue**: Node.js version mismatch
- Dockerfile uses Node 20 - ensure package.json is compatible

### Container Won't Start

```bash
# Check logs
docker logs fyndae-app

# Check if port 80 is available
sudo lsof -i :80

# Try a different port
docker run -p 8080:80 fyndae-app
```

### API Requests Fail (502 Bad Gateway)

**Issue**: Nginx can't reach Node.js backend

```bash
# Verify Node.js is running inside container
docker exec -it fyndae-app ps aux | grep node

# Check Node.js logs
docker exec -it fyndae-app cat /app/logs/*.log

# Test backend directly
docker exec -it fyndae-app wget -O- http://localhost:3000/health
```

### Static Files Not Loading

**Issue**: 404 errors for JS/CSS files

- Check if build completed: `docker exec -it fyndae-app ls /usr/share/nginx/html`
- Verify Nginx config: `docker exec -it fyndae-app cat /etc/nginx/conf.d/default.conf`

## Coolify-Specific Tips

### Auto-Deploy on Push

Coolify can automatically deploy when you push to GitHub:

1. Go to your service settings in Coolify
2. Enable "Automatic Deployment Webhook"
3. Copy the webhook URL
4. Add it to your GitHub repository webhooks

### Viewing Logs

In Coolify:
- Click on your service
- Go to "Logs" tab
- View real-time logs from both Nginx and Node.js

### Rolling Back

If a deployment fails:
1. Go to "Deployments" in Coolify
2. Find the last successful deployment
3. Click "Redeploy"

### Custom Domain

1. Add your domain in Coolify settings
2. Point your DNS to Coolify's IP
3. Coolify handles SSL certificates automatically (Let's Encrypt)

## Performance Optimization

The Dockerfile is optimized with:

- **Multi-stage builds**: Smaller final image size
- **Layer caching**: Faster rebuilds
- **Alpine Linux**: Minimal base image
- **Production deps only**: No dev dependencies in final image
- **Gzip compression**: Enabled in Nginx for faster loading

## Security

Built-in security features:

- Security headers configured in Nginx
- No exposed internal ports (only 80)
- Production Node.js environment
- Static file caching to reduce load

## Support

For issues:
1. Check Coolify logs
2. Test the Docker image locally
3. Verify environment variables
4. Check health endpoint: `/health`
