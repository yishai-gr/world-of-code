import React from "react";
import { Nav } from "./";

function Footer() {
  return (
    <footer>
      <div className="brand">
        <img src="/logo.png" alt="logo" width={100} />
        <p>World of CODE</p>
      </div>
      <Nav />
      <div></div>
    </footer>
  );
}

export default Footer;
