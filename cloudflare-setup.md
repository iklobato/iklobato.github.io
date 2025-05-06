# Cloudflare Setup Instructions for iklobato.com and iklobato.me

## Step 1: Create a Cloudflare Account
If you don't already have one, sign up at [cloudflare.com](https://www.cloudflare.com/)

## Step 2: Add Your Sites to Cloudflare

1. From the Cloudflare dashboard, click **Add a Site**
2. Enter your domain (iklobato.com) and click **Add Site**
3. Select the **Free Plan** (or another plan if you prefer)
4. Cloudflare will scan for existing DNS records

## Step 3: Verify DNS Records

Ensure these records are properly set up:

### For iklobato.com:
- A Records for @ pointing to GitHub Pages IPs:
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153
- CNAME Record for www pointing to iklobato.github.io

### For iklobato.me:
- (Repeat the same process as above)

## Step 4: Update Nameservers at GoDaddy

1. Cloudflare will provide you with nameserver addresses (usually ns1.cloudflare.com and ns2.cloudflare.com)
2. Go to GoDaddy account > Domains > iklobato.com > Manage DNS
3. Find the Nameservers section
4. Select "Change" and then "I'll use my own nameservers"
5. Enter the Cloudflare nameserver addresses
6. Save changes
7. Repeat for iklobato.me

## Step 5: Verify Cloudflare Is Active

Wait 24-48 hours for DNS propagation, then:
1. Go to Cloudflare dashboard
2. Check if your domain shows "Active" status

## Step 6: Configure Cloudflare Settings

### SSL/TLS Settings
1. Go to **SSL/TLS** tab
2. Set SSL mode to **Full (strict)**
3. Enable **Always Use HTTPS**
4. Under Edge Certificates, enable **Automatic HTTPS Rewrites**

### Caching Settings
1. Go to **Caching** tab
2. Set caching level to **Standard**
3. Enable **Auto Minify** for HTML, CSS, and JavaScript
4. Enable **Brotli** compression

### Firewall Settings
1. Go to **Firewall** tab
2. Enable **Bot Fight Mode**
3. Set **Security Level** to Medium
4. Consider enabling **Web Application Firewall (WAF)** if using a paid plan

### Page Rules (Optional)
Create page rules for specific behaviors:
1. Go to **Page Rules** tab
2. Add rule: `iklobato.com/backend/*` with setting **Cache Level: Bypass**
3. Add rule: `iklobato.com/data-engineer/*` with setting **Cache Level: Bypass**
4. Add rule: `iklobato.com/devops/*` with setting **Cache Level: Bypass**

### Analytics
1. Go to **Analytics** tab
2. Enable all analytics options you want to track

## Step 7: Install Cloudflare Web Analytics (Optional)

If you want additional analytics beyond what's included:
1. Go to **Analytics & Logs** > **Web Analytics**
2. Click **Add a Site**
3. Enter your domain name
4. You'll receive a JavaScript snippet to add to your site:

```html
<!-- Cloudflare Web Analytics -->
<script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "YOUR_TOKEN"}'></script>
<!-- End Cloudflare Web Analytics -->
```

## Step 8: Test Your Site

1. Visit your site using HTTPS
2. Check that Cloudflare is working by looking for "CF-Cache-Status" header in browser dev tools
3. Verify analytics are being collected in both Google Analytics and Cloudflare

## Useful Cloudflare Features

- **Argo Smart Routing**: Improves routing by 30% (paid feature)
- **Image Optimization**: Automatically optimizes images (paid feature)
- **Firewall Rules**: Custom firewall rules to block specific threats
- **Rate Limiting**: Protect from brute force attacks
- **Page Shield**: Detects malicious JavaScript

## Support Resources

- [Cloudflare Documentation](https://developers.cloudflare.com/fundamentals/)
- [Cloudflare Community](https://community.cloudflare.com/)
- [Cloudflare Support](https://support.cloudflare.com/)