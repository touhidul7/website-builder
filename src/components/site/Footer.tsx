import { Link } from "@tanstack/react-router";

const companyLinks = [
  { to: "/investment-approach", label: "Investment Approach" },
  { to: "/investment-criteria", label: "Investment Criteria" },
  { to: "/business-owners", label: "For Business Owners" },
  { to: "/about", label: "About" },
] as const;

export function Footer() {
  return <footer className="bg-primary text-primary-foreground">
    <div className="container-page grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
      <div><p className="font-serif text-2xl font-semibold tracking-wide text-white">Northline Capital Partners</p><p className="mt-5 max-w-md text-sm leading-7 text-white/60">[CONFIRM: approved one-sentence description of Northline, its audience, and investment geography.]</p></div>
      <div><h2 className="text-xs font-bold tracking-[0.16em] text-accent uppercase">Explore</h2><ul className="mt-5 space-y-3">{companyLinks.map((link) => <li key={link.to}><Link to={link.to} className="text-sm text-white/65 hover:text-white">{link.label}</Link></li>)}</ul></div>
      <div><h2 className="text-xs font-bold tracking-[0.16em] text-accent uppercase">Connect</h2><Link to="/contact" className="mt-5 inline-block text-sm text-white/75 hover:text-white">Start a Confidential Conversation</Link><p className="mt-4 text-sm leading-6 text-white/50">[CONFIRM: approved email, phone, and office or service geography.]</p></div>
    </div>
    <div className="border-t border-white/10"><div className="container-page flex flex-col gap-4 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} Northline Capital Partners. All rights reserved.</p><div className="flex gap-6"><Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link><Link to="/terms" className="hover:text-white">Terms of Use</Link></div></div></div>
  </footer>;
}
