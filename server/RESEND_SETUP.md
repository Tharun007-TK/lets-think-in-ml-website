# Resend Email Setup Guide

## Current Limitation

The development email `onboarding@resend.dev` can **ONLY send emails to verified email addresses** in your Resend account.

Currently working email: `tharunkumarvmt@gmail.com` (verified)

## How to Enable Auto-Reply for All Users

### Option 1: Add Your Domain (Recommended)

1. **Go to Resend Dashboard**
   - Visit: https://resend.com/domains
   - Log in with your Resend account

2. **Add Your Domain**
   - Click "Add Domain"
   - Enter your domain: `letsthinkinml.me`

3. **Verify Domain**
   - Add the DNS records Resend provides to your domain's DNS settings
   - Wait for verification (usually a few minutes)

4. **Update the Code** (Already Done!)
   - In `server/index.js`, the code already uses:
   ```javascript
   from: "Let's Think in ML <noreply@letsthinkinml.me>";
   ```

### Option 2: Use a Subdomain

If you don't want to use your main domain:

- Use a subdomain like `mail.letsthinkinml.me`
- Follow the same verification process
- Update code to use `noreply@mail.letsthinkinml.me`

### Option 3: Verify Individual Email Addresses (Development Only)

For testing with specific emails:

1. Go to https://resend.com/settings/emails
2. Add email addresses you want to test with
3. Verify them via confirmation email

## After Setup

Once you have a verified domain:

- Auto-reply emails will work for **any email address**
- No more restrictions
- Professional sender email (instead of onboarding@resend.dev)

## Testing

After setting up your domain, test by:

1. Submitting the contact form with any email
2. Check that email's inbox (and spam folder)
3. Verify auto-reply is received

## Current Behavior

The server now gracefully handles unverified emails:

- Still sends notification to you (tharunkumarvmt@gmail.com)
- Attempts auto-reply to user
- If auto-reply fails (unverified email), logs warning but doesn't crash
- Form submission still shows as successful
