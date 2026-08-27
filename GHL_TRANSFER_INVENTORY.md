# Nevio GHL Transfer Inventory

## Global sections

- Sticky navy header with accessible Services disclosure, primary navigation, mobile menu, and `Discuss Your Raise` CTA.
- Four-column footer with service, company, resource, and legal links plus compact disclaimer.
- Inner-page breadcrumb, page hero, section heading, global CTA, 404, and legal-page shell.

## Reusable blocks

- Service card/grid and data-driven six-service detail template.
- Five-stage process timeline.
- Audience cards and two audience-detail layouts.
- FAQ accordion, insight card/article layout, readiness panel, checklist, and printable resource.
- Form field, inquiry form, checklist lead form, status messaging, consent, and confidentiality notice.

## Forms

- `capital-inquiry`: first/last name, work email, phone, company, role, raising as, capital sought, primary use, current stage, timing, summary, URL, referral, consent, attribution fields, honeypot.
- `readiness-checklist`: first/last name, work email, company, raising as, consent, and attribution fields.
- Preserve labels, order, required state, 1,500-character summary limit, success routes, and no-upload rule when rebuilding as native GHL forms.

## Styling

- Source: `src/styles.css`.
- Shared content width: `min(1240px, 100% - 44px)`; 20px mobile gutters.
- Tokens: navy `#071720/#0b2230/#123344`, gold `#a97835/#c59a58/#d8b67f`, cream `#f4f0e8`, paper `#fbfaf7`, ink `#10212b`, muted `#5f6b72`, line `#d8d4ca`.
- Typography: Georgia headings and Inter/Arial/Helvetica body.

## Identity assets

- Light header/footer wordmark: `public/brand/nevio-wordmark-light.svg`.
- Dark wordmark for cream/white backgrounds: `public/brand/nevio-wordmark-dark.svg`.
- Compact and one-color marks: `public/brand/nevio-mark.svg` and `nevio-mark-one-color.svg`.
- Browser/app assets: `public/favicon.svg`, `public/apple-touch-icon.png`, and `public/site.webmanifest`.
- Social preview: `public/brand/nevio-social-card.webp`.

## Route and metadata source

- File routes: `src/routes` and generated `src/routeTree.gen.ts`.
- Typed services/FAQ/process/readiness content: `src/content/site.ts`.
- Insight content: `src/content/insights.ts`.
- Metadata helper: `src/components/seo.ts`; global business facts: `src/config/business.ts`.

## Integration replacement points

- Replace `src/integrations/ghl.ts` with the approved public endpoint or serverless proxy, or use native GHL forms/workflows.
- Preserve analytics names in `src/lib/tracking.ts` and `src/components/site/AnalyticsBridge.tsx`.
- Keep UTM session persistence and do not send names, contact details, or opportunity summaries to analytics.
