import links from "../utils/links";
import { NavLink } from "react-router-dom";
const NavLinks = ({ toggleSidebar }) => {
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { id, text, icon, path } = link;
        return (
          <NavLink
            key={id}
            onClick={toggleSidebar}
            to={path}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};
export default NavLinks;
