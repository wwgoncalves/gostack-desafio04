import React from "react";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="#">
              <img
                className="logo"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf8ADxe-hCU9TcKXQ3bTSBBkdY11zOB4jRrXUuyN-wHPOd06pd"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <span>Meu perfil</span>&nbsp;&nbsp;&nbsp;
              <i className="material-icons">face</i>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
