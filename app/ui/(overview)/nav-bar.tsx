import NavLinks from "../nav-links";

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-10 w-full border-b border-indigo-400 bg-indigo-300 bg-opacity-30 backdrop-blur-lg backdrop-filter">
      <div className="mx-auto flex h-16 max-w-5xl flex-wrap items-center justify-center p-2">
        <NavLinks />
      </div>
    </nav>
  );
};

export default NavBar;
