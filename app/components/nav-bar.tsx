import Button from "./button";
import Logo from "./logo";
import Search from "./search";
import SocialLinks from "./social-links";

export default function NavBar() {
  return (
    <div className="fixed max-h-2 top-10 left-0 w-full h-12 text-white flex items-center justify-between px-4 z-50">
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
