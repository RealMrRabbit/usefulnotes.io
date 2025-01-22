"use client";

import { useState } from "react";
import Button from "./button";
import Logo from "./logo";
import Search from "./search";
import SocialLinks from "./social-links";
import { RxHamburgerMenu } from "react-icons/rx";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const NavLinks = () => (
    <div className="flex sm:flex-col lg:flex-row gap-4">
      <Button text="getting-started" />
      <Button text="concepts" />
      <Button text="tools" />
      <Button text="frameworks" />
      <Button text="languages" />
    </div>
  );

  const HamburgerMenu = () => (
    <div className="absolute top-12 left-10 w-[50%]">
      <div className="flex flex-col gap-y-2 p-4">
        <Search />
        <NavLinks />
      </div>
    </div>
  );

  return (
    <div className=" content left-0 top-0 w-full h-12 flex items-center justify-between pt-10 px-5 z-50 bg-gradient-to-b from-background to-transparent">
      <div>
        <div>
          <RxHamburgerMenu
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden hover:cursor-pointer text-button text-2xl"
          />
          {menuOpen && <HamburgerMenu />}
        </div>
        <div className="lg:block sm:hidden">
          <NavLinks />
        </div>
      </div>

      <Logo />

      {/* Visible NavLinks on large screens */}

      <div className="flex flex-row gap-x-4">
        <Search />
        <SocialLinks />
      </div>
    </div>
  );
}
