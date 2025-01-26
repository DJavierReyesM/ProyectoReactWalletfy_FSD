
import { Outlet } from "react-router-dom";
import HeaderToggle from "./HeaderToggle";

const Layout = () => {
    return (
    <div className="h-full w-full flex justify-center items-center">
      <HeaderToggle />
      <Outlet />
    </div>
    );
}

export default Layout;