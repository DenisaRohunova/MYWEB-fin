# Deployment Guide

This guide covers how to deploy your Next.js application to a custom domain.

## Option 1: Vercel (Recommended - Easiest)

### Steps:
1. **Push your code to GitHub/GitLab/Bitbucket**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel auto-detects Next.js settings
   - Click "Deploy"

3. **Add Custom Domain:**
   - Go to Project Settings → Domains
   - Add your domain (e.g., `yourdomain.com`)
   - Follow DNS configuration instructions
   - Vercel provides free SSL certificates automatically

### Environment Variables (if needed):
If you have any environment variables, add them in:
Project Settings → Environment Variables

---

## Option 2: Docker Deployment (VPS/Cloud Server)

### Prerequisites:
- A VPS (DigitalOcean, AWS EC2, Linode, etc.)
- Domain name with DNS access
- Docker installed on your server

### Steps:

1. **Build and push Docker image:**
   ```bash
   # Build the image
   docker build -t your-app-name .
   
   # Tag for registry (if using Docker Hub)
   docker tag your-app-name yourusername/your-app-name
   docker push yourusername/your-app-name
   ```

2. **On your server, run:**
   ```bash
   # Pull and run the container
   docker pull yourusername/your-app-name
   docker run -d -p 3000:3000 --name your-app yourusername/your-app-name
   ```

3. **Set up Nginx reverse proxy:**
   ```bash
   sudo apt update
   sudo apt install nginx
   ```

4. **Create Nginx configuration** (`/etc/nginx/sites-available/yourdomain.com`):
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com www.yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
       }
   }
   ```

5. **Enable site and get SSL:**
   ```bash
   sudo ln -s /etc/nginx/sites-available/yourdomain.com /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl reload nginx
   
   # Install Certbot for free SSL
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
   ```

6. **Configure DNS:**
   - Add A record pointing to your server's IP address
   - Add CNAME for www subdomain

---

## Option 3: Netlify

1. Push code to Git repository
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Connect repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Add custom domain in Site settings → Domain management

---

## Option 4: AWS/Google Cloud/Azure

For enterprise deployments, you can use:
- **AWS:** Amplify, EC2 with Docker, or ECS
- **Google Cloud:** Cloud Run (containerized) or App Engine
- **Azure:** App Service or Container Instances

---

## Quick Comparison

| Platform | Difficulty | Cost | Best For |
|----------|-----------|------|----------|
| Vercel | ⭐ Easy | Free tier available | Quick deployment |
| Docker + VPS | ⭐⭐⭐ Medium | $5-20/month | Full control |
| Netlify | ⭐ Easy | Free tier available | Static/SSG sites |
| AWS/GCP/Azure | ⭐⭐⭐⭐ Hard | Pay-as-you-go | Enterprise |

---

## Recommended: Start with Vercel

For a Next.js portfolio site, **Vercel is the fastest and easiest option**:
- ✅ Zero configuration needed
- ✅ Free SSL certificates
- ✅ Automatic deployments from Git
- ✅ Global CDN included
- ✅ Perfect Next.js optimization

Just connect your GitHub repo and deploy!
