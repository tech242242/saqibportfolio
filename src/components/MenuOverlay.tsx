import { useEffect } from "react";
import { NAV, SITE, SOCIALS, type NavItem } from "../data/content";
import { SocialIcon } from "./Icons";
import { Crown, Squiggle, Star, Lightning } from "./Decorations";

type Props = {
  open: boolean;
  active: string;
  onClose: () => void;
  onNavigate: (item: NavItem) => void;
};

const MenuOverlay = ({ open, active, onClose, onNavigate }: Props) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <div className={`menu-overlay ${open ? "is-open" : ""}`} aria-hidden={!open}>
      <div className="menu-overlay__bg" onClick={onClose} />
      <div className="menu-overlay__panel container">
        <Crown className="menu-overlay__crown" />
        <Star className="menu-overlay__star" />
        <Lightning className="menu-overlay__bolt" />
        <ul className="menu-overlay__list">
          {NAV.map((item, i) => (
            <li key={item.id} style={{ ["--i" as string]: i }}>
              <a
                href={item.href}
                tabIndex={open ? 0 : -1}
                className={active === item.id ? "is-active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item);
                }}
              >
                <span className="menu-overlay__num">0{i + 1}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="menu-overlay__foot">
          <a href={`mailto:${SITE.email}`} tabIndex={open ? 0 : -1}>
            {SITE.email}
          </a>
          <Squiggle className="menu-overlay__squiggle" />
          <div className="menu-overlay__socials">
            {SOCIALS.map((s) => (
              <a
                key={s.key}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                tabIndex={open ? 0 : -1}
                className="social-btn"
              >
                <SocialIcon name={s.key} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuOverlay;
