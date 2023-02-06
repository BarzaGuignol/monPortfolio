/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */

import { createContext, useState } from "react";

const AdminContext = createContext();

function AdminProvider({ children }) {
  const [admin, setAdmin] = useState(
    JSON.parse(sessionStorage.getItem("admin"))
  );
  const handleAdmin = (data) => {
    sessionStorage.setItem("admin", JSON.stringify(data));
    setAdmin(data);
  };

  return (
    <AdminContext.Provider
      value={{
        admin,
        handleAdmin,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export default {
  AdminContext,
  AdminProvider,
};
