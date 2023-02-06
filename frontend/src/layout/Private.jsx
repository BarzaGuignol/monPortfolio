import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Admin from "../contexts/Admin";

function Private() {
  const { admin } = useContext(Admin.AdminContext);

  if (!admin) {
    return <Navigate to="/" replace />;
  }
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Private;
