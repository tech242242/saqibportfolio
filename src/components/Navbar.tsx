import { memo, useEffect, useState } from "react";
import { NAV, SITE, type NavItem } from "../data/content";
import { useMagnetic } from "../hooks/useInteractions";

type Props = {
  active: string;
  menuOpen: boolean;
  onToggleMenu: () => void;
  onNavigate: (item: NavItem) => void;
};

const Navbar = ({ active, menuOpen, onToggleMenu, onNavigate }: Props) => {
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useMagnetic<HTMLButtonElement>(0.35);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner container">
        <a
          href="#home"
          className="logo intro intro-slide-down"
          style={{ ["--d" as string]: "0.35s" }}
          onClick={(e) => {
            e.preventDefault();
            onNavigate(NAV[0]);
          }}
          aria-label={`${SITE.logo} — back to top`}
        >
          {SITE.logo}
          <span className="logo__dot">.</span>
        </a>

        <nav className="navbar__nav" aria-label="Primary">
          <ul>
            {NAV.map((item, i) => (
              <li key={item.id} className="intro intro-slide-down" style={{ ["--d" as string]: `${0.45 + i * 0.07}s` }}>
                <a
                  href={item.href}
                  className={`nav-link ${active === item.id ? "is-active" : ""}`}
                  aria-current={active === item.id ? "page" : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(item);
                  }}
                >
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          ref={menuRef}
          type="button"
          className={`menu-btn magnetic intro intro-pop ${menuOpen ? "is-open" : ""}`}
          style={{ ["--d" as string]: "0.85s" }}
          onClick={onToggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className="menu-btn__lines" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
        </button>
      </div>
    </header>
  );
};

export default memo(Navbar);
