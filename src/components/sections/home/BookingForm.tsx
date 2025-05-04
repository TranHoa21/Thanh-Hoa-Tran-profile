'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function BookingForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        gender: '',
        email: '',
        departureDate: '',
        destination: '',
        tourType: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(formData)
        // Send to API if needed
    }

    return (
        <section className="flex flex-col md:flex-row w-full min-h-screen">
            {/* Left Form */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.2 }}
                className="bg-[#fcf8f5] flex-1 flex items-center justify-center p-8 md:p-16"
            >
                <form onSubmit={handleSubmit} className="max-w-xl w-full">
                    <p className="text-sm uppercase tracking-widest text-[#c08b5c] font-semibold mb-2">Booking Form</p>
                    <h2 className="text-4xl font-bold mb-4">Start your safari journey today</h2>
                    <p className="text-gray-600 mb-8">
                        Don’t miss out on an incredible desert experience! Complete the booking form to secure
                        your spot and prepare for the adventure.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        <input
                            type="text"
                            name="fullName"
                            placeholder="e. g. John Doe"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="border border-gray-300 rounded px-4 py-3 placeholder-gray-400"
                            required
                        />
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            className="border border-gray-300 rounded px-4 py-3 text-gray-600"
                            required
                        >
                            <option value="">Select</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>

                        <input
                            type="email"
                            name="email"
                            placeholder="e. g. hello@deverust.com"
                            value={formData.email}
                            onChange={handleChange}
                            className="border border-gray-300 rounded px-4 py-3 placeholder-gray-400"
                            required
                        />
                        <input
                            type="date"
                            name="departureDate"
                            value={formData.departureDate}
                            onChange={handleChange}
                            className="border border-gray-300 rounded px-4 py-3 text-gray-600"
                            required
                        />

                        <select
                            name="destination"
                            value={formData.destination}
                            onChange={handleChange}
                            className="border border-gray-300 rounded px-4 py-3 text-gray-600"
                            required
                        >
                            <option value="">Select</option>
                            <option>Dubai</option>
                            <option>Morocco</option>
                            <option>Egypt</option>
                        </select>

                        <select
                            name="tourType"
                            value={formData.tourType}
                            onChange={handleChange}
                            className="border border-gray-300 rounded px-4 py-3 text-gray-600"
                            required
                        >
                            <option value="">Select</option>
                            <option>Standard</option>
                            <option>Luxury</option>
                            <option>Private</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="bg-[#a86a3d] text-white px-6 py-3 rounded font-semibold hover:bg-[#8f5531] transition"
                    >
                        Book Now
                    </button>
                </form>
            </motion.div>

            {/* Right Image */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.2 }}
                className="hidden md:block relative flex-1"
            >
                <Image
                    src="/images/Witness the Earth's largest mammal migration at Kasanka National Park, Zambia, with weekend excursions taking place every Friday, Saturday, and Sunday, and returning on Sunday. Kasanka National Par, ZambiaFor Book.webp"
                    alt="Safari Family"
                    fill
                    className="object-cover"
                    loading="lazy"
                />
            </motion.div>
        </section>
    )
}
