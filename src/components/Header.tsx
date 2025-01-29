import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-gray-900/90 border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-8 h-8">
              <Image
                src="/logo.svg"
                alt="FAQ Generator Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-300 to-secondary-300">
              FAQ Generator
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-white/90 hover:text-white transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white/90 hover:text-white transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href="/terms"
              className="text-white/90 hover:text-white transition-colors duration-200"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-white/90 hover:text-white transition-colors duration-200"
            >
              Privacy
            </Link>
          </nav>

          <button className="md:hidden text-white">
            <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
