# Production Deployment Checklist

## Pre-Deployment Review

### Code Quality
- [ ] All debug statements removed
- [ ] Console logs removed or guarded by development checks
- [ ] Error messages don't leak sensitive information
- [ ] No hardcoded API keys or secrets
- [ ] All TODOs have context or are tracked in issues
- [ ] Code reviewed by at least one team member

### Security
- [ ] NEXTAUTH_SECRET is strong (minimum 32 characters)
- [ ] NEXTAUTH_URL matches production domain
- [ ] OAuth credentials configured securely
- [ ] Database credentials use environment variables
- [ ] CORS properly configured
- [ ] CSRF protection enabled
- [ ] Rate limiting configured
- [ ] Input validation on all endpoints
- [ ] SQL injection protection verified
- [ ] XSS protection enabled

### Environment Variables
- [ ] `.env.local` created from `.env.example`
- [ ] All required variables set
- [ ] No development values in production env
- [ ] Database connection string tested
- [ ] Redis connection (if used) tested

### Database
- [ ] MongoDB indexes created: `curl https://your-domain.com/api/admin/setup-indexes`
- [ ] Database backups configured
- [ ] Read replicas configured (if applicable)
- [ ] Connection pooling tuned for production
- [ ] Database credentials rotated recently

### Performance
- [ ] Image optimization enabled
- [ ] Caching headers configured
- [ ] Static assets cached (Cache-Control headers)
- [ ] Minification enabled
- [ ] Bundle size analyzed
- [ ] Web Vitals monitoring setup
- [ ] Database query performance reviewed
- [ ] N+1 queries fixed
- [ ] Pagination implemented for large datasets

### Monitoring & Analytics
- [ ] Error tracking (Sentry) configured
- [ ] Google Analytics configured
- [ ] Application metrics collection working
- [ ] Database monitoring setup
- [ ] Server logs retention configured
- [ ] Alerts configured for critical issues

### Infrastructure
- [ ] SSL certificate valid and auto-renewal enabled
- [ ] CDN configured (if applicable)
- [ ] Database backups automated
- [ ] Auto-scaling configured (if applicable)
- [ ] Load balancing setup (if applicable)
- [ ] DDoS protection enabled

### Testing
- [ ] Authentication flows tested (Credentials, Google, GitHub)
- [ ] Critical user paths tested
- [ ] API endpoints tested
- [ ] Error handling tested
- [ ] Rate limiting tested
- [ ] Database transactions tested

### Documentation
- [ ] Deployment runbook created
- [ ] Rollback procedure documented
- [ ] Team notified of deployment schedule
- [ ] Release notes prepared
- [ ] API documentation up to date

## Deployment Steps

### 1. Pre-Deployment
```bash
# Build and test locally
npm run build
npm run lint
npm run test

# Verify environment variables
echo $NEXTAUTH_SECRET
echo $MONGODB_URI
```

### 2. Deploy to Staging
```bash
# Deploy to staging environment first
vercel deploy --prod --env staging

# Test on staging
curl https://staging.openbalti.com/api/health
```

### 3. Production Deployment
```bash
# Deploy to production
vercel deploy --prod

# Verify deployment
curl https://openbalti.com/api/health

# Initialize database indexes
curl -X POST https://openbalti.com/api/admin/setup-indexes
```

### 4. Post-Deployment Verification
- [ ] Homepage loads without errors
- [ ] Authentication works (all providers)
- [ ] Dictionary page displays words
- [ ] Search functionality works
- [ ] User can submit contributions
- [ ] Notifications system working
- [ ] Analytics events firing
- [ ] Error monitoring active

### 5. Monitoring
- [ ] Monitor error tracking dashboard
- [ ] Check application metrics
- [ ] Monitor database performance
- [ ] Verify backup completion
- [ ] Check Web Vitals metrics

## Rollback Procedure

If critical issues occur:

```bash
# Rollback to previous version
vercel rollback

# Verify rollback successful
curl https://openbalti.com/api/health
```

## Emergency Contacts

- **Tech Lead**: [name] - [contact]
- **DevOps Lead**: [name] - [contact]
- **Database Admin**: [name] - [contact]

## Post-Deployment Cleanup

- [ ] Document any issues encountered
- [ ] Update runbooks with new procedures
- [ ] Mark completed issues as deployed
- [ ] Notify stakeholders of successful deployment
- [ ] Schedule post-deployment review meeting

## Security Audit Checklist

- [ ] No console errors in production
- [ ] No client-side secrets exposed
- [ ] Authentication session working properly
- [ ] Rate limiting protecting endpoints
- [ ] Input validation preventing injections
- [ ] Error messages are generic
- [ ] Debug endpoints disabled in production
- [ ] Sensitive logs are not exposed

## Performance Verification

- [ ] Page load time < 3 seconds
- [ ] API response time < 200ms (p95)
- [ ] Database queries < 100ms
- [ ] Error rate < 0.1%
- [ ] 404 rate normal
