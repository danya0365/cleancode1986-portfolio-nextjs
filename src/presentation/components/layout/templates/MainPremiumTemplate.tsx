import React from "react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";

interface Props {
  children: React.ReactNode;
}

export function MainPremiumTemplate({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col transition-colors duration-700">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
