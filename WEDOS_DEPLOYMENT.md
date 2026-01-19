# Deployment to Wedos.com Domain

Since you already have a domain on Wedos.com with a different website, here are your options:

## Option 1: Use a Subdomain (Recommended - Keep Both Sites)

Deploy your Next.js app to a subdomain like `www.yourdomain.com` or `new.yourdomain.com`, keeping your existing site.

### Steps:

1. **Deploy Next.js app to Vercel/Netlify** (easiest):
   - Deploy to Vercel (free) or Netlify
   - You'll get a URL like `your-app.vercel.app`
   - In Vercel: Project Settings → Domains → Add `www.yourdomain.com`
   - Vercel will give you DNS records to add

2. **Configure DNS in Wedos:**
   - Log into Wedos control panel
   - Go to DNS management for your domain
   - Add a CNAME record:
     - **Name:** `www` (or `new`, `app`, etc.)
     - **Value:** `cname.vercel-dns.com` (or the CNAME Vercel provides)
   - Wait for DNS propagation (5-60 minutes)

3. **Result:**
   - `yourdomain.com` → Your existing website (on Wedos)
   - `www.yourdomain.com` → Your new Next.js app (on Vercel)

---

## Option 2: Replace Existing Website

If you want to replace your current website entirely:

### If Wedos supports Node.js/VPS:

1. **Check your Wedos hosting type:**
   - Log into Wedos control panel
   - Check if you have VPS or Cloud hosting with Node.js support
   - If yes, you can deploy directly

2. **Deploy using Docker (if supported):**
   ```bash
   # Build locally
   docker build -t your-app .
   
   # Push to registry or upload to server
   # Then on Wedos server:
   docker run -d -p 3000:3000 --name your-app your-app
   ```

3. **Set up reverse proxy in Wedos:**
   - Configure Nginx/Apache to proxy to port 3000
   - Point your domain to the new app

### If Wedos is traditional shared hosting (PHP-only):

**You cannot run Next.js directly on traditional shared hosting.** You need to:

1. **Deploy elsewhere** (Vercel/Netlify) and point your domain there
2. **Upgrade to VPS** on Wedos
3. **Use a subdomain** approach (Option 1)

---

## Option 3: Deploy to Vercel and Point Domain

This is the easiest option if Wedos doesn't support Node.js:

1. **Deploy to Vercel:**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Login and deploy
   vercel login
   vercel
   ```

2. **Add your domain in Vercel:**
   - Go to Project Settings → Domains
   - Add `yourdomain.com` and `www.yourdomain.com`
   - Vercel will show DNS records needed

3. **Update DNS in Wedos:**
   - Log into Wedos DNS management
   - Update A record for `@` (root domain) to Vercel's IP
   - Update CNAME for `www` to Vercel's CNAME
   - **Note:** This will replace your existing website

---

## Recommended Approach

**Best solution: Use a subdomain**

1. Keep your existing website at `yourdomain.com`
2. Deploy Next.js to Vercel (free, easy)
3. Point `www.yourdomain.com` to Vercel
4. Both sites work independently

### Quick Vercel Deployment:

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Deploy
vercel

# 3. Follow prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? (press enter for default)
# - Directory? ./
# - Override settings? No

# 4. After deployment, add domain in Vercel dashboard
```

---

## DNS Configuration Examples

### For Subdomain (www.yourdomain.com → Vercel):

In Wedos DNS:
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

### For Root Domain (yourdomain.com → Vercel):

In Wedos DNS:
```
Type: A
Name: @
Value: 76.76.21.21 (Vercel's IP - check Vercel dashboard)
TTL: 3600
```

---

## What You Need to Know

1. **Check your Wedos hosting type first:**
   - Shared hosting (PHP) → Cannot run Next.js directly
   - VPS/Cloud → Can run Node.js/Docker

2. **Easiest path:** Deploy to Vercel, use subdomain

3. **If replacing site:** Point DNS to Vercel (will replace existing site)

4. **SSL certificates:** Vercel provides free SSL automatically

---

## Questions to Answer

1. What type of hosting do you have on Wedos? (Shared/VPS/Cloud)
2. Do you want to keep your existing website?
3. What subdomain would you like to use? (www, new, app, etc.)

Let me know and I can provide more specific instructions!
