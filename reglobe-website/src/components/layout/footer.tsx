import React from "react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold tracking-tight text-white">Reglobe</span>
            </Link>
            <p className="text-sm text-gray-300 mb-6 max-w-xs">
              Your trusted IT staffing & technology partner. Bridging global businesses with elite Indian tech talent.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link href="/services" className="hover:text-white transition-colors">Staff Augmentation</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Project-Based Development</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Tech Consulting</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <address className="not-italic text-sm text-gray-300 space-y-3">
              <p>Reglobe Private Limited</p>
              <p>Hyderabad, Telangana, India</p>
              <p>
                <a href="mailto:popurichaitanyadev@gmail.com" className="hover:text-white transition-colors">popurichaitanyadev@gmail.com</a>
              </p>
              <p>
                <a href="mailto:pavankamjula98@gmail.com" className="hover:text-white transition-colors">pavankamjula98@gmail.com</a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Reglobe Private Limited. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-gray-400">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
