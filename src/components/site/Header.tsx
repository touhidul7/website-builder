import { Link, useLocation } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { services } from "@/content/site";
export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useLocation({ select: (location) => location.pathname });
  const close = () => setOpen(false);
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="container-page header-inner">
        <Link to="/" className="brand" onClick={close} aria-label="Nevio Capital Partners — Home">
          <img src="/brand/nevio-wordmark-light.svg" alt="Nevio Capital Partners" />
        </Link>
        <button
          className="menu-button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
          <span className="sr-only">Menu</span>
        </button>
        <nav
          id="primary-navigation"
          aria-label="Primary navigation"
          className={open ? "nav-links is-open" : "nav-links"}
        >
          <details
            className={pathname.startsWith("/services") ? "nav-dropdown active" : "nav-dropdown"}
          >
            <summary>
              Services <ChevronDown aria-hidden="true" />
            </summary>
            <div className="nav-dropdown-panel">
              <Link to="/services" onClick={close}>
                All Services
              </Link>
              {services.map((s) => (
                <Link key={s.slug} to={`/services/${s.slug}`} onClick={close}>
                  {s.title}
                </Link>
              ))}
            </div>
          </details>
          <Link to="/who-we-help" onClick={close} activeProps={{ className: "active" }}>
            Who We Help
          </Link>
          <Link to="/process" onClick={close} activeProps={{ className: "active" }}>
            Process
          </Link>
          <Link to="/about" onClick={close} activeProps={{ className: "active" }}>
            About
          </Link>
          <Link to="/insights" onClick={close} activeProps={{ className: "active" }}>
            Insights
          </Link>
          <Link to="/contact" className="btn btn-gold nav-cta" onClick={close}>
            Discuss Your Raise
          </Link>
        </nav>
      </div>
    </header>
  );
}
