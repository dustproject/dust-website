import Navbar from "../../components/Navbar";

export default function WhatLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}