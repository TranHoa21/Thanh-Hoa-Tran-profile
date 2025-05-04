"use client";

import React from "react";
import { FaFacebookF, FaYoutube, FaTwitter, FaLinkedinIn, FaTwitch, FaHeadphonesAlt, FaEnvelope } from "react-icons/fa";

import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#14190f] text-white px-6 md:px-12 py-12">
            {/* Top Section */}
            <div className="max-w-7xl mx-auto border-b border-[#2c2f1e] pb-10 mb-10 flex flex-col md:flex-row justify-between gap-6">
                {/* Social */}
                <div className="flex flex-col gap-4">
                    <p className="font-medium">Find and follow us</p>
                    <div className="flex gap-4 text-lg text-white/80">
                        <FaFacebookF className="hover:text-white cursor-pointer" />
                        <FaYoutube className="hover:text-white cursor-pointer" />
                        <FaTwitter className="hover:text-white cursor-pointer" />
                        <FaLinkedinIn className="hover:text-white cursor-pointer" />
                        <FaTwitch className="hover:text-white cursor-pointer" />
                    </div>
                </div>

                {/* Contact */}
                <div className="flex flex-col gap-4 text-sm">
                    <div className="flex items-center gap-3">
                        <FaHeadphonesAlt />
                        <span>Contact us at<br /><strong>+260977534937</strong></span>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaEnvelope />
                        <span>Mail us at<br /><strong>stimulussafaris@gmail.com</strong></span>
                    </div>
                </div>
            </div>

            {/* Middle Section */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 mb-10">
                {/* Company */}
                <div>
                    <h4 className="font-semibold mb-4">Company</h4>
                    <ul className="space-y-2 text-sm text-white/80">
                        <li>About</li>
                        <li className="flex items-center gap-2">
                            Career
                            <span className="bg-white text-black text-xs px-2 py-0.5 rounded">New</span>
                        </li>
                        <li>Review</li>
                        <li>Team</li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 className="font-semibold mb-4">Services</h4>
                    <ul className="space-y-2 text-sm text-white/80">
                        <li>Packages</li>
                        <li>Our Guides</li>
                        <li>VIP Programs</li>
                        <li>Cottage</li>
                    </ul>
                </div>

                {/* Quick Access */}
                <div>
                    <h4 className="font-semibold mb-4">Quick access</h4>
                    <ul className="space-y-2 text-sm text-white/80">
                        <li>Home</li>
                        <li>Blog</li>
                        <li>Gallery</li>
                        <li>Destinations</li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h4 className="font-semibold mb-4">Support</h4>
                    <ul className="space-y-2 text-sm text-white/80">
                        <li>Contact us</li>
                        <li>FAQ </li>
                        <li>Help</li>
                        <li>Booking</li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h4 className="font-semibold mb-4">Subscribe our newsletter</h4>
                    <div className="flex flex-col gap-3">
                        <input
                            type="email"
                            placeholder="e.g. hello@deverust.com"
                            className="px-4 py-2 bg-[#1d2116] border border-[#2c2f1e] text-white text-sm placeholder-white/60"
                        />
                        <button className="bg-[#a17046] text-white text-sm font-medium py-2">
                            Subscribe
                        </button>
                        <p className="text-xs text-white/60">Get the latest news about our updates and discounts</p>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center border-t border-[#2c2f1e] pt-6 text-sm text-white/60">
                <div className="flex items-center gap-2 mb-4 md:mb-0">
                    <Link href="/">
                        <div className="relative h-12 w-32"> {/* Điều chỉnh width phù hợp với logo của bạn */}
                            <Image
                                src="/images/logo.png"
                                alt="Logo"
                                layout="fill"
                                objectFit="contain"
                                priority
                            />
                        </div>
                    </Link>
                    <span className="font-bold text-white">MUFILIKA</span>
                </div>
                <p>Copyright © 2025 Mufilika Template Kit | Designed by <strong className="text-white">Thanh Hoa Tran</strong></p>
            </div>

            {/* Scroll to top button */}
            <button
                className="fixed bottom-6 right-6 bg-[#404828] hover:bg-[#586037] text-white p-3 rounded-md shadow-md transition"
                aria-label="Back to top"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                ↑
            </button>
        </footer>
    );
};

export default Footer;
