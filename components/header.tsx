"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <h1 className="text-2xl font-bold text-primary cursor-pointer hover:text-primary/80 transition-colors">
                  {"Strategic Utilities Solution"}
                </h1>
              </Link>
            </div>
          </div>

          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/about"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Our Services
              </Link>
              <Link
                href="/contact-us"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Contact Us
              </Link>
              <Button variant="default" className="ml-4" asChild>
                <Link href="/contact-us">Contact Us</Link>
              </Button>
            </div>
          </nav>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card rounded-lg mt-2">
              <Link
                href="/about"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
              >
                Our Services
              </Link>
              <Link
                href="/contact-us"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
              >
                Contact Us
              </Link>
              <div className="px-3 py-2">
                <Button variant="default" className="w-full" asChild>
                  <Link href="/contact-us">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
