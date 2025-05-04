'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const guides = [
    {
        name: 'John Carter',
        role: 'Lead Guide',
        image: '/images/img-E8968KP.webp',
    },
    {
        name: 'Olivia Taylor',
        role: 'Cultural Guide',
        image: '/images/img-YFY5QG5.webp',
    },
    {
        name: 'Liam Davis',
        role: 'Tour Specialist',
        image: '/images/img-FYCJJ6B.webp',
    },
    {
        name: 'Emma Brown',
        role: 'Safari Expert',
        image: '/images/img-WLJQM3B.webp',
    },
]

export default function TourGuides() {
    return (
        <section className="bg-[#4b2e1e] text-white py-16 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <p className="text-sm font-semibold tracking-widest text-white/70 uppercase mb-2">
                    Tour Guides
                </p>
                <h2 className="text-4xl font-bold mb-4">Your trusted guides</h2>
                <p className="text-white/70 max-w-2xl mx-auto mb-12">
                    With years of experience, our guides ensure your journey is safe, engaging,
                    and filled with insights about the desert’s wonders.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {guides.map((guide, index) => (
                        <motion.div
                            key={index}
                            className="text-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="w-full aspect-square relative mb-4 rounded overflow-hidden">
                                <Image
                                    src={guide.image}
                                    alt={guide.name}
                                    layout="fill"
                                    objectFit="cover"
                                    loading="lazy"
                                />
                            </div>
                            <h3 className="text-lg font-semibold">{guide.name}</h3>
                            <p className="text-sm text-white/70">{guide.role}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
