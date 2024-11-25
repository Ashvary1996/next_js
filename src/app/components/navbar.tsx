
import NavLinks from "./navLinks";
import NavSearch from "./navSearch";

function Navbar() {
  console.log("Navbar Rendered");

  return (
    <div>
      <NavLinks />
      <NavSearch />
    </div>
  );
}

export default Navbar;
