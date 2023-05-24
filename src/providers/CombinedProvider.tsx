import React from "react";
import { ThemesProvider } from "./ThemesProvider";
import { AuthContextProvider } from "../context/AuthContext";

export const CombinedProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <AuthContextProvider>
      <ThemesProvider>{children}</ThemesProvider>
    </AuthContextProvider>
  );
};
