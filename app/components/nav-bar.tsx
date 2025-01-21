import Button from "./button";
import Logo from "./logo";
import Search from "./search";
import SocialLinks from "./social-links";

export default function NavBar() {
  return (
    <div className="fixed left-0 w-full h-12 flex items-center justify-between px-4 z-50 bg-gradient-to-b from-background to-transparent">
      {/* Left: Logo */}

      {/* Center: Navigation Buttons */}
      <div className="flex gap-x-4">
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
    </div>
  );
}
