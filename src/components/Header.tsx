"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
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

            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <FontAwesomeIcon
                icon={isMobileMenuOpen ? faTimes : faBars}
                className="h-6 w-6"
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Background Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/95 z-40 md:hidden" />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed inset-x-0 top-16 z-40 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        } md:hidden bg-gradient-to-b from-gray-900 to-black border-t border-white/10 min-h-screen`}
      >
        <nav className="flex flex-col items-center space-y-8 pt-8">
          <Link
            href="/"
            onClick={toggleMobileMenu}
            className="text-xl text-white/90 hover:text-white transition-colors duration-200 hover:scale-105 transform"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={toggleMobileMenu}
            className="text-xl text-white/90 hover:text-white transition-colors duration-200 hover:scale-105 transform"
          >
            About
          </Link>
          <Link
            href="/terms"
            onClick={toggleMobileMenu}
            className="text-xl text-white/90 hover:text-white transition-colors duration-200 hover:scale-105 transform"
          >
            Terms
          </Link>
          <Link
            href="/privacy"
            onClick={toggleMobileMenu}
            className="text-xl text-white/90 hover:text-white transition-colors duration-200 hover:scale-105 transform"
          >
            Privacy
          </Link>
        </nav>
      </div>
    </>
  );
}
