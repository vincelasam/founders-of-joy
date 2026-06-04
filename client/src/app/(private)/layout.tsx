import React from "react";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Later, you could add a special logged-out Navbar here if needed */}
      {children}
    </>
  );
}