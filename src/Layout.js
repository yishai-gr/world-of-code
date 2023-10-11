import { Outlet } from "react-router";
import { Nav, Footer } from "./components";

function Layout() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
