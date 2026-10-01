import { memo } from "react";
import { SITE } from "../data/content";

const Footer = ({ onTop }: { onTop: () => void }) => (
  <footer className="footer container">
    <p>
      © {new Date().getFullYear()} {SITE.name.charAt(0) + SITE.name.slice(1).toLowerCase()}. Crafted frame by frame.
    </p>
    <button type="button" className="footer__top" onClick={onTop}>
      Back to top <span aria-hidden="true">↑</span>
    </button>
  </footer>
);

export default memo(Footer);
