import { Link } from "@tanstack/react-router";
import { businessConfig } from "@/config/business";
import { services } from "@/content/site";
export function Footer() {
  const contact = [
    businessConfig.contactEmail,
    businessConfig.phone,
    businessConfig.address,
  ].filter(Boolean);
  return (
    <footer className="site-footer">
      <div className="container-page footer-grid">
        <div>
          <Link to="/" className="brand brand-footer">
            <span>Northline</span>
            <small>Capital Partners</small>
          </Link>
          <p>
            Capital-raising strategy, investor readiness, investor-facing materials, and disciplined
            process support.
          </p>
          {contact.length > 0 && (
            <div className="footer-contact">
              {businessConfig.contactEmail && (
                <a href={`mailto:${businessConfig.contactEmail}`}>{businessConfig.contactEmail}</a>
              )}
              {businessConfig.phone && (
                <a href={`tel:${businessConfig.phone}`}>{businessConfig.phone}</a>
              )}
              {businessConfig.address && <span>{businessConfig.address}</span>}
            </div>
          )}
        </div>
        <div>
          <h2>Services</h2>
          {services.slice(0, 4).map((s) => (
            <Link key={s.slug} to={`/services/${s.slug}`}>
              {s.title}
            </Link>
          ))}
        </div>
        <div>
          <h2>Company</h2>
          <Link to="/who-we-help">Who We Help</Link>
          <Link to="/process">Process</Link>
          <Link to="/about">About</Link>
          <Link to="/insights">Insights</Link>
          <Link to="/faqs">FAQs</Link>
        </div>
        <div>
          <h2>Start here</h2>
          <Link to="/contact">Discuss Your Raise</Link>
          <Link to="/capital-raise-readiness-checklist">Readiness Checklist</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms</Link>
          <Link to="/disclaimer">Disclaimer</Link>
        </div>
      </div>
      <div className="container-page footer-bottom">
        <p>
          © {new Date().getFullYear()} {businessConfig.legalEntityName}. All rights reserved.
        </p>
        <p>
          Business-advisory information only. Not legal, tax, accounting, or investment advice; no
          offer, solicitation, funding guarantee, or promised outcome.
        </p>
      </div>
    </footer>
  );
}
