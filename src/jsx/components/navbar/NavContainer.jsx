export default function NavContainer({ children, page }) {
  return (
    <div className={`navbar ${page}`}>
      <nav className="navbar__nav">{children}</nav>
    </div>
  );
}
