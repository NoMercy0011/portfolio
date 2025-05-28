"use client"

import Link from "next/link";
import { useState } from "react";
import Logo from "./logo";

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  return (
    <div>
      <nav className="bg-cyan-800">
              <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-18 items-center justify-between">
                  {/* Logo à gauche */}
                  
                  <div>
                    <Link href="/" className="text-white font-bold text-xl">
                      <Logo />
                    </Link>
                  </div>
                  {/* Desktop navigation à droite */}
                  <div className="hidden sm:block">
                    <div className="flex space-x-4">
                      <Link
                        href="fonctionnement"
                        className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                      >
                        Fonctionnement
                      </Link>
                      <Link
                        href="services"
                        className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                      >
                        Services
                      </Link>
                      <Link
                        href="/contact"
                        className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                      >
                        Contact
                      </Link>
                      <Link
                      href="/recrutement"
                      className="border block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                      onClick={() => setMobileOpen(false)}
                    >
                      Recrutement
                    </Link>
                    </div>
                  </div>
                  {/* Mobile menu button */}
                  <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                    <button
                      type="button"
                      className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-none focus:ring-inset"
                      aria-controls="mobile-menu"
                      aria-expanded={mobileOpen}
                      onClick={() => setMobileOpen((open) => !open)}
                    >
                      <span className="sr-only">Open main menu</span>
                      {/* Hamburger icon */}
                      <svg
                        className={`${
                          mobileOpen ? "hidden" : "block"
                        } size-6`}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                      </svg>
                      {/* Close icon */}
                      <svg
                        className={`${
                          mobileOpen ? "block" : "hidden"
                        } size-6`}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18 18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              {/* Mobile menu */}
              {mobileOpen && (
                <div className="sm:hidden" id="mobile-menu">
                  <div className="space-y-1 px-2 pt-2 pb-3">
                    <Link
                      href="#fonctionnement"
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                      onClick={() => setMobileOpen(false)}
                    >
                      Fonctionnement
                    </Link>
                    <Link
                      href="#services"
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                      onClick={() => setMobileOpen(false)}
                    >
                      Services
                    </Link>
                    <Link
                      href="/contact"
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                      onClick={() => setMobileOpen(false)}
                    >
                      Contact
                    </Link>
                    <Link
                      href="/recrutement"
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                      onClick={() => setMobileOpen(false)}
                    >
                      Recrutement
                    </Link>
                  </div>
                </div>
              )}
            </nav>
    </div>
  )
}
