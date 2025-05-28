"use client";

import { useAuth } from "@/context/authContext";

export function Logout() {
  const { logout } = useAuth();

  /*const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    setUser(null);
    router.push("/");
  };*/

  return (
    <h5 onClick={logout} className="cursor-pointer">
      Odjavi se
    </h5>
  );
}
