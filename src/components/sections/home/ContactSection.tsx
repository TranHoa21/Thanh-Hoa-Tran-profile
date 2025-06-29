'use client';

import Image from 'next/image';
import { Mail, Phone, Facebook, Linkedin, Instagram } from 'lucide-react';

export default function ContactSection() {
    return (
        <section className="bg-[#0F1116] text-white py-20 px-4 md:px-16">
            <div className="max-w-6xl mx-auto">
                <h4 className="text-sm text-red-600 uppercase mb-2 text-center">Contact</h4>
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Contact With Me</h2>

                <div className="grid md:grid-cols-2 gap-10">
                    {/* Contact Info Card */}
                    <div className="bg-[#1A1C22] p-8 rounded-xl shadow-xl">
                        <Image
                            src="/contact-image.jpg" // thay ảnh thật của mẹ ở đây
                            alt="contact"
                            width={600}
                            height={400}
                            className="rounded-md mb-6 object-cover w-full h-48"
                        />

                        <h3 className="text-xl font-bold mb-1">Nevine Acotanza</h3>
                        <p className="text-sm text-gray-400 mb-4">Chief Operating Officer</p>
                        <p className="text-sm text-gray-400 mb-4">
                            I am available for freelance work. Connect with me via and call in to my account.
                        </p>

                        <p className="text-sm text-gray-300 mb-1">
                            <Phone size={14} className="inline mr-2 text-red-500" />
                            <span className="text-white">+01234567890</span>
                        </p>
                        <p className="text-sm text-gray-300 mb-6">
                            <Mail size={14} className="inline mr-2 text-red-500" />
                            <span className="text-white">admin@example.com</span>
                        </p>

                        <p className="text-sm text-gray-500 mb-2">FIND WITH ME</p>
                        <div className="flex space-x-3 mt-2">
                            <a href="#" className="p-2 bg-[#2A2C33] rounded hover:bg-red-600 transition">
                                <Facebook size={16} />
                            </a>
                            <a href="#" className="p-2 bg-[#2A2C33] rounded hover:bg-red-600 transition">
                                <Linkedin size={16} />
                            </a>
                            <a href="#" className="p-2 bg-[#2A2C33] rounded hover:bg-red-600 transition">
                                <Instagram size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form className="bg-[#1A1C22] p-8 rounded-xl shadow-xl space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm mb-1 text-gray-400">Your Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-[#111318] border border-[#2B2D33] text-sm text-white p-3 rounded-md focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm mb-1 text-gray-400">Phone Number</label>
                                <input
                                    type="text"
                                    className="w-full bg-[#111318] border border-[#2B2D33] text-sm text-white p-3 rounded-md focus:outline-none"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm mb-1 text-gray-400">Email</label>
                            <input
                                type="email"
                                className="w-full bg-[#111318] border border-[#2B2D33] text-sm text-white p-3 rounded-md focus:outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm mb-1 text-gray-400">Subject</label>
                            <input
                                type="text"
                                className="w-full bg-[#111318] border border-[#2B2D33] text-sm text-white p-3 rounded-md focus:outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm mb-1 text-gray-400">Your Message</label>
                            <textarea
                                rows={5}
                                className="w-full bg-[#111318] border border-[#2B2D33] text-sm text-white p-3 rounded-md focus:outline-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-transparent border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition text-sm font-semibold py-3 rounded-md shadow-md"
                        >
                            SEND MESSAGE →
                        </button>

                    </form>
                </div>
            </div>
        </section>
    );
}
