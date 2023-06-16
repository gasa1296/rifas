import React from "react";

export default function Layout({children}: any) {
  return (
    <main>
      <nav className="bg-white text-md-center  ">
        logo
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </nav>

      {children}

      <footer> footer</footer>
    </main>
  );
}
