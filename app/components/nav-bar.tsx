'use client';

import { useState } from "react";
import Button from "./button";
import Logo from "./logo";
import Search from "./search";
import SocialLinks from "./social-links";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed left-0 w-full h-12 flex items-center justify-between p-10 z-50 bg-gradient-to-b from-background to-transparent">
      {/* Left: Logo */}

      {/* Hamburger Menu Icon (visible on smaller screens) */}
      <button
        className="lg:hidden flex items-center justify-center w-10 h-10"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="space-y-1">
          <span className="block w-6 h-0.5 bg-button"></span>
          <span className="block w-6 h-0.5 bg-button"></span>
          <span className="block w-6 h-0.5 bg-button"></span>
        </div>
      </button>

      {/* Center: Navigation Buttons */}
      <div className="hidden lg:flex gap-x-4">
        <Button text="Getting Started" />
        <Button text="Concepts" />
        <Button text="Tools" />
        <Button text="Frameworks" />
        <Button text="Languages" />
      </div>


      <Logo />

      {/* Right: Search and Social Links */}
      <div className="flex gap-x-4 items-center">
        <Search />
        <SocialLinks />
      </div>

      {/* Dropdown Menu (shown when menuOpen is true) */}
      {menuOpen && (
        <div className="absolute top-12 left-10 w-[50%] lg:hidden">
          <div className="flex flex-col gap-y-2 p-4">
            <Button text="Getting Started" />
            <Button text="Concepts" />
            <Button text="Tools" />
            <Button text="Frameworks" />
            <Button text="Languages" />
          </div>
        </div>
      )}
    </div>
  );
}
