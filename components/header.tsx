"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false) // Close mobile menu if open
  }

  return (
    <header className="w-full">
      {/* Top contact bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-sm gap-2">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Հակոբ Հակոբյան 2</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span><a href="tel:+37499750505">099750505</a></span>
            </div>
          </div>
          <div className="flex items-center gap-3">{/* Social media icons would go here */}</div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-background border-b border-border py-4 px-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <a href="/">
              <Image src="/images/logo.png" alt="mykey Logo" width={120} height={60} className="h-12 w-auto" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-foreground hover:text-accent transition-colors font-medium">
              Գլխավոր
            </a>
            <a href="/gallery" className="text-foreground hover:text-accent transition-colors font-medium">
              Տեսադարան
            </a>
            <a href="/#services" className="text-foreground hover:text-accent transition-colors font-medium">
              Ծառայություններ
            </a>
          </div>

          {/* Contact Us Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button
              onClick={scrollToContact}
              className="hidden sm:flex bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Կապ
            </Button>

            {/* Mobile menu button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col gap-4 pt-4">
              <a href="/" className="text-foreground hover:text-accent transition-colors font-medium">
                Գլխավոր
              </a>
              <a href="/gallery" className="text-foreground hover:text-accent transition-colors font-medium">
                Տեսադարան
              </a>
              <a href="/#services" className="text-foreground hover:text-accent transition-colors font-medium">
                Ծառայություններ
              </a>
              <Button onClick={scrollToContact} className="bg-accent hover:bg-accent/90 text-accent-foreground w-fit">
                Կապ
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
