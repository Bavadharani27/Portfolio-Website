import {
  Link,
  NavLink
} from "react-router-dom";

import {
  useState
} from "react";


const links = [
  ["/", "Home"],
  ["/about", "About"],
  ["/skills", "Skills"],
  ["/projects", "Projects"],
  ["/experience", "Experience"],
  ["/education", "Education"],
  ["/contact", "Contact"]
];


function Navbar({
  dark,
  onToggle
}) {

  const [open, setOpen] =
    useState(false);


  return (

    <header className="navbar-wrap">

      <nav className="navbar container">

        <Link
          to="/"
          className="brand"
          onClick={() =>
            setOpen(false)
          }
        >

          <span className="brand-mark">
            B
          </span>

          <span>
           Bavadharani M
            <span className="dot">
             .
            </span>
          </span>

        </Link>


        <div
          className={
            `nav-links ${
              open ? "open" : ""
            }`
          }
        >

          {links.map(
            ([to, label]) => (

              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                onClick={() =>
                  setOpen(false)
                }
                className={
                  ({ isActive }) =>
                    isActive
                      ? "active"
                      : ""
                }
              >

                {label}

              </NavLink>

            )
          )}

        </div>


        <div className="nav-actions">

          <button
            className="icon-btn"
            onClick={onToggle}
            aria-label="Toggle theme"
          >

            {dark ? "☀" : "☾"}

          </button>


          <button
            className="icon-btn menu-btn"
            onClick={() =>
              setOpen((value) => !value)
            }
            aria-label="Toggle menu"
          >

            {open ? "×" : "☰"}

          </button>

        </div>

      </nav>

    </header>

  );
}


export default Navbar;