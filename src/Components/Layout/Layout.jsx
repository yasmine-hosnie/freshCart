import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./../Navbar/Navbar";
import Footer from "./../Footer/Footer";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
