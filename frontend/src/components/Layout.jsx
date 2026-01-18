import React from "react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main className="px-6 py-6">{children}</main>
    </div>
  );
}
