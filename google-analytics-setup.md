# Google Analytics 4 Setup Guide

## Tracking ID
- Measurement ID: G-C03JH4JXFL
- Stream ID: 11187083073

## Current Implementation

The Google Analytics 4 tracking code has been added to the default layout template with the following configuration:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-C03JH4JXFL"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-C03JH4JXFL', {
        'stream_id': '11187083073',
        'cookie_domain': 'iklobato.com',
        'anonymize_ip': true
    });
</script>
<!-- End Google Analytics -->
```

## Verify Implementation

1. Visit your site: iklobato.com
2. Open Chrome DevTools (F12 or Right-click > Inspect)
3. Go to Network tab
4. Filter for "collect" or "google-analytics"
5. Refresh the page and check if analytics requests appear

## Google Analytics Dashboard Access

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Navigate to your property (G-C03JH4JXFL)
4. In the left sidebar, go to Reports > Realtime to see current users

## Custom Events (Optional)

To track specific user interactions, add this code where needed:

```javascript
// Example: Track when someone clicks on a specific link
document.querySelector('#some-link').addEventListener('click', function() {
  gtag('event', 'click', {
    'event_category': 'engagement',
    'event_label': 'resume_download',
    'value': 1
  });
});
```

## Enhanced Features

### Cross-domain Tracking
If you want to track users across different domains you own:

```javascript
gtag('config', 'G-C03JH4JXFL', {
  'linker': {
    'domains': ['iklobato.com', 'iklobato.me']
  }
});
```

### User Properties
To set custom user properties:

```javascript
gtag('set', 'user_properties', {
  'user_type': 'recruiter'
});
```

### Campaign Tracking
For marketing campaigns, use UTM parameters:
```
https://iklobato.com/?utm_source=linkedin&utm_medium=profile&utm_campaign=job_search
```

## Compliance Considerations

- **GDPR**: Ensure you have a privacy policy explaining data collection
- **CCPA**: Provide opt-out options for California residents
- **Cookie Consent**: Consider adding a cookie consent banner

## Advanced Configuration (Future)

- Set up conversion goals in GA4 (e.g., time on page > 2 minutes)
- Create segments for different visitor types
- Set up custom reports for specific metrics
- Configure enhanced e-commerce if adding any downloadable products

## Troubleshooting

- Use the [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna) Chrome extension
- Check for ad blockers that might be preventing tracking
- Verify that JavaScript is enabled in visitors' browsers
- Test in different browsers and devices

## Additional Resources

- [Google Analytics 4 Documentation](https://developers.google.com/analytics/devguides/collection/ga4)
- [GA4 Event Parameters Reference](https://developers.google.com/analytics/devguides/collection/ga4/reference/events)