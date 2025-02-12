import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "../ThemeToggle";

const Header = () => {
  return (
    <header className="p-4 md:p-8">
      <nav
        className="flex justify-between items-center"
        aria-label="primary navigation"
      >
        <Link href="/" aria-label="Shortly logo" className="mx-left flex items-center">
          <Image
            src="/icon-192x192.png"
            alt="character counter"
            width={40}
            height={24}
            className="mx-auto"
          />
          <p className="text-lg md:text-xl text-white ml-2">Character Counter</p>
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  );
};
export default Header;