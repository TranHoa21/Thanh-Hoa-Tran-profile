'use client';

import Image from 'next/image';
import { Facebook, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#0F1116] text-gray-400 py-10 px-4 text-center">
            {/* Avatar + Logo */}
            <div className="flex flex-col items-center justify-center gap-2 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-600">
                    <Image
                        src="/avatar.jpg" // 👉 đổi sang ảnh bạn cần
                        alt="Logo"
                        width={64}
                        height={64}
                        className="object-cover"
                    />
                </div>
                <h4 className="text-white font-semibold text-lg tracking-wide">INBIO</h4>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-6 mb-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition">
                    <Facebook size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition">
                    <Linkedin size={20} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition">
                    <Instagram size={20} />
                </a>
            </div>

            {/* Copyright */}
            <p className="text-sm">
                © {new Date().getFullYear()}. All rights reserved by <span className="text-white font-medium">Thanh Hoa Tran</span>.
            </p>
        </footer>
    );
}
