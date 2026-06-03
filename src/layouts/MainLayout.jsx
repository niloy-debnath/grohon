import { Outlet } from "react-router";
import Navbar from "../components/shared/navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      Footer
    </div>
  );
};

export default MainLayout;
