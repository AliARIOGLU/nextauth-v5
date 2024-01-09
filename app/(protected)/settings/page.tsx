"use client";

// import { signOut } from "next-auth/react";

import { logout } from "@/actions/logout";
import { useCurrentUser } from "@/hooks/use-current-user";

//? For logout use signOut(client-side) or logout(server-side)

const SettingsPage = () => {
  const user = useCurrentUser();

  const onClick = () => {
    logout();
  };

  return (
    <div>
      <button
        onClick={onClick}
        type="submit"
        className="p-10 bg-white rounded-md"
      >
        Sign out
      </button>
    </div>
  );
};

export default SettingsPage;
