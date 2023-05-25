import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/add-book">Add Book</NavLink>
    </nav>
  );
};

export default Navbar;
